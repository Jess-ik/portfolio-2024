export const icons: { [key: string]: JSX.Element } = {
	MobileMenu: <MobileMenuIcon />,
	Avignon: <AvignonIcon />,
	Worldwide: <WorldwideIcon />,
	CloseIcon: <CloseIcon />,
	Photoshop: <PhotoshopIcon />,
};

export function getIconComponent(iconName: string): JSX.Element | null {
	return icons[iconName] || null;
}

function MobileMenuIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
			<path fill="#1E2632" fillRule="evenodd" d="M3.6 6a1.2 1.2 0 011.2-1.2h14.4a1.2 1.2 0 010 2.4H4.8A1.2 1.2 0 013.6 6zm0 6a1.2 1.2 0 011.2-1.2h14.4a1.2 1.2 0 110 2.4H4.8A1.2 1.2 0 013.6 12zm0 6a1.2 1.2 0 011.2-1.2h14.4a1.2 1.2 0 110 2.4H4.8A1.2 1.2 0 013.6 18z" clipRule="evenodd"></path>
		</svg>
	);
}

function CloseIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
			<path fill="#1E2632" fillRule="evenodd" d="M5.152 5.152a1.2 1.2 0 011.696 0L12 10.303l5.152-5.151a1.2 1.2 0 111.696 1.696L13.697 12l5.151 5.152a1.2 1.2 0 01-1.696 1.696L12 13.697l-5.152 5.151a1.2 1.2 0 01-1.696-1.696L10.303 12 5.152 6.848a1.2 1.2 0 010-1.696z" clipRule="evenodd"></path>
		</svg>
	);
}

function AvignonIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="31" height="11" fill="none">
			<g clipPath="url(#a)">
				<path stroke="#000" strokeMiterlimit="10" strokeWidth="1.5" d="M26.6 9.89h-3.74c-.27 0-.48-.16-.48-.36V5.42c0-.99-1.05-1.8-2.34-1.8-1.29 0-2.34.81-2.34 1.8v4.09c0 .21-.2.37-.48.37h-3.74c-.27 0-.48-.16-.48-.37V5.42c0-.99-1.05-1.8-2.34-1.8-1.29 0-2.34.81-2.34 1.8v4.09c0 .21-.2.37-.48.37H4.03c-.27 0-.48-.16-.48-.37V5.42c0-.99-1.05-1.8-2.34-1.8-.27 0-.48-.16-.48-.36V1.12c0-.21.2-.37.48-.37h28.16c.27 0 .48.16.48.37v2.13c0 .21-.2.36-.48.36-1.29 0-2.34.81-2.34 1.8V9.5c.07.21-.14.39-.44.39"></path>
			</g>
			<defs>
				<clipPath id="a">
					<path fill="#fff" d="M0 0h30.61v10.64H0z"></path>
				</clipPath>
			</defs>
		</svg>
	);
}

function WorldwideIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" fill="none">
		<g clipPath="url(#a)">
		  <path
			fill="#000"
			d="M17.9 6.1c-.81-3.55-4-6.1-7.65-6.1C6.6 0 3.4 2.56 2.59 6.1.84 6.51 0 7.08 0 7.85S.8 9.18 2.59 9.6c.81 3.55 4 6.1 7.65 6.1 3.65 0 6.84-2.56 7.65-6.1 1.75-.41 2.59-.98 2.59-1.75s-.85-1.34-2.59-1.75h.01zm.18 1.38c.53.14.84.27.99.35-.16.09-.47.23-.99.37v-.36c0-.12 0-.25-.01-.37l.01.01zM3.74 7.2c1.28-.23 3.4-.48 6.51-.48s5.23.25 6.51.48c.03.24.04.45.04.66 0 .21-.01.41-.04.65-.52.09-1.08.17-1.7.24l.26-.33c.11-.14.15-.31.13-.48a.645.645 0 00-.24-.43.632.632 0 00-.48-.13.62.62 0 00-.43.25l-1.18 1.51a.65.65 0 00.11.91l1.51 1.18c.27.21.7.16.91-.11a.65.65 0 00-.11-.91l-.22-.17c.41-.04.79-.1 1.16-.15a6.545 6.545 0 01-6.22 4.53 6.56 6.56 0 01-6.55-6.55c0-.2.01-.42.04-.65l-.01-.02zm.28-1.37a6.554 6.554 0 016.22-4.54c2.84 0 5.35 1.85 6.22 4.54-2.77-.42-6.08-.42-6.22-.42-.14 0-3.45 0-6.22.42zM2.41 8.2c-.5-.14-.79-.27-.97-.36.17-.09.46-.21.97-.35v.72-.01z"
		  ></path>
		</g>
		<defs>
		  <clipPath id="a">
			<path fill="#fff" d="M0 0h20.5v15.7H0z"></path>
		  </clipPath>
		</defs>
	  </svg>
	);
}

function PhotoshopIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
			<g clipPath="url(#a)">
				<path fill="#010101" d="M19.9 19.2V7.36a5.4 5.4 0 00-10.83 0c-.87 0-1.57.7-1.57 1.56v.99H6.09A4.08 4.08 0 002 13.96v7.57c0 .82.66 1.47 1.48 1.47h7.32a3.27 3.27 0 003.22-3.24c0-.98-.45-1.87-1.16-2.45v-5.93c0-.45-.21-.87-.54-1.15V8.92c0-.87-.7-1.56-1.57-1.56a3.76 3.76 0 017.53 0V19.2a2.86 2.86 0 00-2.02 2.7c0 .57.45 1.03 1.04 1.03h3.68c.57 0 1.03-.45 1.03-1.03a2.97 2.97 0 00-2.1-2.7h-.02zm-9.26-9.3H9.11V9h1.53v.9zm.11 11.5a1.6 1.6 0 01-1.6-1.59c0-.85.74-1.6 1.6-1.6.86 0 1.61.75 1.61 1.6 0 .86-.75 1.6-1.6 1.6zm0-4.82A3.23 3.23 0 007.9 21.4H3.66v-7.42a2.44 2.44 0 012.44-2.42h5.13v5.04c-.17-.03-.34-.03-.45-.03h-.03zm7.28 4.7a1.23 1.23 0 012.07 0h-2.07z"></path>
			</g>
			<defs>
				<clipPath id="a">
					<path fill="#fff" d="M2 2h20v21H2z"></path>
				</clipPath>
			</defs>
		</svg>
	);
}
