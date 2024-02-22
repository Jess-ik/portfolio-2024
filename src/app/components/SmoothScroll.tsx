"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import React, { ReactNode } from "react";
const SmoothScroll: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<ReactLenis
			root
			options={{
				lerp: 0.08,
				duration: 1.5,
			}}>
			{children}
		</ReactLenis>
	);
};

export default SmoothScroll;
