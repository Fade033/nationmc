import React, {useEffect} from 'react';

export default function PremiumNavFade() {
	useEffect(() => {
		try {
			var nav = document.querySelector('.navbar');
			if (!nav) return;
			nav.style.transition = 'background-color 250ms linear, border-color 250ms linear';
			var alpha = 0.55; // tweak this value (0 = fully transparent, 1 = opaque)
			// expose the navbar height as a CSS variable so the hero can offset itself
			try {
				var navHeight = nav.offsetHeight || 0;
				document.documentElement.style.setProperty('--ifm-navbar-height', navHeight + 'px');
				try { document.body.classList.add('premium-page'); } catch (e) {}
			} catch (e) {}
			nav.style.backgroundColor = 'rgba(3,6,11,' + alpha + ')';
			nav.style.borderBottom = 'none';
			try {
				var footer = document.querySelector('.footer');
				if (footer) footer.style.borderTop = 'none';
			} catch (e) {}
			return function cleanup() {
				try {
					nav.style.backgroundColor = '';
					nav.style.borderBottom = '';
					try {
						var footer = document.querySelector('.footer');
						if (footer) footer.style.borderTop = '';
					} catch (e) {}
					try {
						document.documentElement.style.removeProperty('--ifm-navbar-height');
					} catch (e) {}
					try { document.body.classList.remove('premium-page'); } catch (e) {}
				} catch (e) {}
			};
		} catch (e) {
			console.error(e);
		}
	}, []);
	return null;
}
