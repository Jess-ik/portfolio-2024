export const icons: { [key: string]: JSX.Element } = {
	Photoshop: <PhotoshopIcon />,
};

export function getIconComponent(iconName: string): JSX.Element | null {
	return icons[iconName] || null;
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

