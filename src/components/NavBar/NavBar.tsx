import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ROUTE_PATHS } from '../../routes';
import Modal from '../Modal/Modal';

type ContactChoice = 'email' | 'github' | 'linkedin';

const NavBar = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [copiedChoice, setCopiedChoice] = useState<ContactChoice | null>(null);
    const contactButtonRef = useRef<HTMLButtonElement | null>(null);
    const firstActionRef = useRef<HTMLButtonElement | null>(null);
    const copiedTimeoutRef = useRef<number | null>(null);

    const contactDialogId = 'contact-dialog';
    const contactDialogTitleId = 'contact-dialog-title';
    const contactDialogHelpId = 'contact-dialog-help';

    const closeContact = () => {
        setIsContactOpen(false);
        setCopiedChoice(null);
        if (copiedTimeoutRef.current !== null) {
            window.clearTimeout(copiedTimeoutRef.current);
            copiedTimeoutRef.current = null;
        }
    };

    const openContact = () => {
        setIsContactOpen(true);
    };

    useEffect(() => {
        return () => {
            if (copiedTimeoutRef.current !== null) {
                window.clearTimeout(copiedTimeoutRef.current);
            }
        };
    }, []);

    const destinations: Array<
        | { name: string; to: string; kind: 'route' }
        | { name: string; kind: 'contact' }
    > = [
        { name: 'resume', to: ROUTE_PATHS.RESUME, kind: 'route' },
        { name: 'portfolio', to: ROUTE_PATHS.PORTFOLIO, kind: 'route' },
        { name: 'bloggish', to: ROUTE_PATHS.BLOGGISH, kind: 'route' },
        { name: 'contact', kind: 'contact' }
    ];

    const contactValues = useMemo<Record<ContactChoice, { label: string; value: string }>>(
        () => ({
            email: { label: 'Email', value: 'zckramer83@gmail.com' },
            github: { label: 'GitHub', value: 'https://github.com/zckramer' },
            linkedin: { label: 'LinkedIn', value: 'https://www.linkedin.com/in/zckramer/' }
        }),
        []
    );

    const copyToClipboard = async (text: string) => {
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(text);
            return;
        }

        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        textarea.style.top = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    };

    const handleContactChoice = async (choice: ContactChoice) => {
        try {
            await copyToClipboard(contactValues[choice].value);
            setCopiedChoice(choice);
            if (copiedTimeoutRef.current !== null) window.clearTimeout(copiedTimeoutRef.current);
            copiedTimeoutRef.current = window.setTimeout(() => setCopiedChoice(null), 1200);
        } catch {
            // If clipboard is denied, we silently do nothing (no auto navigation).
            setCopiedChoice(null);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <ul className='nav'>
                    {destinations.map((destination) =>
                        destination.kind === 'route' ? (
                            <NavLink key={destination.name} to={destination.to}>{destination.name}</NavLink>
                        ) : (
                            <button
                                key={destination.name}
                                ref={contactButtonRef}
                                type="button"
                                className="navButton"
                                onClick={openContact}
                                aria-haspopup="dialog"
                                aria-expanded={isContactOpen}
                                aria-controls={contactDialogId}
                            >
                                {destination.name}
                            </button>
                        )
                    )}
                </ul>
            </nav>

            <Modal
                isOpen={isContactOpen}
                onRequestClose={closeContact}
                overlayClassName="contactModalOverlay"
                containerClassName="contactModalStack"
                initialFocusRef={firstActionRef}
                restoreFocusRef={contactButtonRef}
            >
                <div className="contactModalTopBar">
                    <span id={contactDialogHelpId} className="contactModalHelp">
                        Esc to close
                    </span>

                    <button
                        type="button"
                        className="contactModalX"
                        onClick={closeContact}
                        aria-label="Close contact dialog"
                    >
                        ×
                    </button>
                </div>

                <div
                    id={contactDialogId}
                    className="contactModal"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={contactDialogTitleId}
                    aria-describedby={contactDialogHelpId}
                >
                    <h2 id={contactDialogTitleId} className="contactModalTitle">
                        Contact
                    </h2>

                    <div className="contactModalActions">
                        {(Object.keys(contactValues) as ContactChoice[]).map((choice) => (
                            <div key={choice} className="contactModalActionWrap">
                                <div className="contactModalPrimaryWrap">
                                    <button
                                        ref={choice === 'email' ? firstActionRef : undefined}
                                        type="button"
                                        className="contactModalAction"
                                        onClick={() => void handleContactChoice(choice)}
                                        aria-label={`Copy ${contactValues[choice].label} to clipboard`}
                                    >
                                        {contactValues[choice].label}
                                    </button>
                                    {copiedChoice === choice ? (
                                        <span className="contactModalTooltip" role="status" aria-live="polite">
                                            Copied
                                        </span>
                                    ) : null}
                                </div>

                                <button
                                    type="button"
                                    className="contactModalGoAction"
                                    onClick={() => { /* placeholder */ }}
                                    aria-label={`Go (placeholder) for ${contactValues[choice].label}`}
                                >
                                    go
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default NavBar;