import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;

    /**
     * ClassName for the full-screen overlay element.
     * The overlay renders in a portal attached to document.body.
     */
    overlayClassName?: string;

    /**
     * ClassName for the modal container that wraps the children.
     * Focus trapping is enforced within this container.
     */
    containerClassName?: string;

    /**
     * Optional ref to focus when the modal opens.
     * If not provided, the first focusable element in the container is focused.
     */
    initialFocusRef?: React.RefObject<HTMLElement | null>;

    /**
     * Optional ref to restore focus to when the modal closes.
     * If not provided, focus is restored to whatever was focused before opening.
     */
    restoreFocusRef?: React.RefObject<HTMLElement | null>;

    /**
     * Portal container attributes.
     */
    portalDataAttribute?: string;

    children: React.ReactNode;
};

const focusableSelector = [
    'a[href]',
    'area[href]',
    'button:not([disabled])',
    'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'iframe',
    'object',
    'embed',
    '[contenteditable="true"]',
    '[tabindex]:not([tabindex="-1"])'
].join(',');

const isElementVisible = (element: HTMLElement) => {
    const rects = element.getClientRects();
    return rects.length > 0;
};

const getFocusableElements = (container: HTMLElement) => {
    return Array.from(container.querySelectorAll<HTMLElement>(focusableSelector)).filter(
        (el) => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true' && isElementVisible(el)
    );
};

const restoreBackgroundInteractivity = (
    updated: Array<{
        element: HTMLElement;
        prevAriaHidden: string | null;
        prevInert: boolean | undefined;
    }>
) => {
    for (const { element, prevAriaHidden, prevInert } of updated) {
        if (prevAriaHidden === null) element.removeAttribute('aria-hidden');
        else element.setAttribute('aria-hidden', prevAriaHidden);

        if (typeof prevInert !== 'undefined') {
            try {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (element as any).inert = prevInert;
            } catch {
                // Ignore.
            }
        }
    }
};

const shouldSkipFromA11yTree = (element: HTMLElement) => {
    const tag = element.tagName;
    return tag === 'SCRIPT' || tag === 'STYLE' || tag === 'LINK' || tag === 'NOSCRIPT';
};

const Modal = ({
    isOpen,
    onRequestClose,
    overlayClassName,
    containerClassName,
    initialFocusRef,
    restoreFocusRef,
    portalDataAttribute = 'data-modal-portal',
    children
}: ModalProps) => {
    const [portalElement, setPortalElement] = useState<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const previouslyFocusedRef = useRef<HTMLElement | null>(null);

    const portalAttr = useMemo(() => portalDataAttribute, [portalDataAttribute]);

    // Create/remove portal container.
    useEffect(() => {
        if (!isOpen) {
            setPortalElement(null);
            return;
        }

        const el = document.createElement('div');
        el.setAttribute(portalAttr, '');
        document.body.appendChild(el);
        setPortalElement(el);

        return () => {
            if (el.parentNode) el.parentNode.removeChild(el);
        };
    }, [isOpen, portalAttr]);

    // Background: prefer inert when supported, fall back to aria-hidden.
    useEffect(() => {
        if (!isOpen || !portalElement) return;

        const updated: Array<{
            element: HTMLElement;
            prevAriaHidden: string | null;
            prevInert: boolean | undefined;
        }> = [];

        const bodyChildren = Array.from(document.body.children).filter(
            (n): n is HTMLElement => n instanceof HTMLElement
        );

        for (const child of bodyChildren) {
            if (child === portalElement) continue;
            if (shouldSkipFromA11yTree(child)) continue;

            const prevAriaHidden = child.getAttribute('aria-hidden');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const prevInert = typeof (child as any).inert !== 'undefined' ? (child as any).inert : undefined;

            // Always set aria-hidden for SR fallback.
            child.setAttribute('aria-hidden', 'true');

            // Prefer inert for interaction blocking.
            try {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (child as any).inert = true;
            } catch {
                // Ignore.
            }

            updated.push({ element: child, prevAriaHidden, prevInert });
        }

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = prevOverflow;
            restoreBackgroundInteractivity(updated);
        };
    }, [isOpen, portalElement]);

    // Focus management: store previous focus, move into modal, trap tab, and restore on close.
    useEffect(() => {
        if (!isOpen || !portalElement) return;

        previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        const restoreFocusSnapshot = restoreFocusRef?.current ?? null;
        const previouslyFocusedSnapshot = previouslyFocusedRef.current;

        const focusIntoModal = () => {
            const container = containerRef.current;
            if (!container) return;

            const initial = initialFocusRef?.current;
            if (initial) {
                initial.focus();
                return;
            }

            const focusables = getFocusableElements(container);
            if (focusables.length > 0) {
                focusables[0].focus();
                return;
            }

            // As a last resort, focus the container.
            container.focus();
        };

        // Wait until after paint so refs/portal content are mounted.
        const raf = window.requestAnimationFrame(focusIntoModal);

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                onRequestClose();
                return;
            }

            if (event.key !== 'Tab') return;

            const container = containerRef.current;
            if (!container) return;

            const focusables = getFocusableElements(container);
            if (focusables.length === 0) {
                event.preventDefault();
                container.focus();
                return;
            }

            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            const active = document.activeElement instanceof HTMLElement ? document.activeElement : null;

            const isShift = event.shiftKey;

            if (!active || !container.contains(active)) {
                event.preventDefault();
                (isShift ? last : first).focus();
                return;
            }

            if (!isShift && active === last) {
                event.preventDefault();
                first.focus();
                return;
            }

            if (isShift && active === first) {
                event.preventDefault();
                last.focus();
            }
        };

        const onFocusIn = (event: FocusEvent) => {
            const container = containerRef.current;
            if (!container) return;
            const target = event.target;

            if (target instanceof HTMLElement && !container.contains(target)) {
                const focusables = getFocusableElements(container);
                (focusables[0] ?? container).focus();
            }
        };

        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('focusin', onFocusIn);

        return () => {
            window.cancelAnimationFrame(raf);
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('focusin', onFocusIn);

            const restoreTo = restoreFocusSnapshot ?? previouslyFocusedSnapshot;
            if (restoreTo) {
                // Defer to allow React to remove the modal nodes.
                queueMicrotask(() => restoreTo.focus());
            }
        };
    }, [isOpen, portalElement, initialFocusRef, restoreFocusRef, onRequestClose]);

    if (!isOpen || !portalElement) return null;

    return createPortal(
        <div
            className={overlayClassName}
            role="presentation"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onRequestClose();
            }}
        >
            <div
                ref={containerRef}
                className={containerClassName}
                tabIndex={-1}
            >
                {children}
            </div>
        </div>,
        portalElement
    );
};

export default Modal;
