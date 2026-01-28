import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteFocusManager = () => {
    const location = useLocation();

    useEffect(() => {
        const active = document.activeElement;
        const activatedFromNav =
            active instanceof HTMLElement &&
            (active.closest('nav.navbar') !== null || active.closest('.nav') !== null);

        if (!activatedFromNav) return;

        // If navigating to a hash target, prefer focusing that target.
        if (location.hash) {
            const id = decodeURIComponent(location.hash.replace(/^#/, ''));
            const target = document.getElementById(id);
            if (target instanceof HTMLElement) {
                // Ensure it can be focused programmatically.
                if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
                target.focus();
                return;
            }
        }

        const viewport = document.getElementById('viewport');
        if (viewport instanceof HTMLElement) {
            viewport.focus();
            if (viewport instanceof HTMLElement && 'scrollTop' in viewport) {
                (viewport as HTMLElement).scrollTop = 0;
            }
            return;
        }

        const main = document.getElementById('main');
        if (main instanceof HTMLElement) main.focus();
    }, [location.pathname, location.search, location.hash]);

    return null;
};

export default RouteFocusManager;
