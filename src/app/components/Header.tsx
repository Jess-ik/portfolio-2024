"use client";
import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";
import { SettingsDocument } from "../../../prismicio-types";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";


import { motion } from "framer-motion";
import { getIconComponent } from "./Icons";
import LogoNav from "./LogoNav";

const item = {
	initial: {
		opacity: 0,
		y: -30,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,

		transition: {
			duration: 0.3,
			ease: "easeOut",
			delay: 0.08 * (index + 1),
		},
	}),
};

export default function Header() {
	// State pour stocker les données
	const [settings, setSettings] = useState<SettingsDocument<string> | null>(null);
	// Charger les données au montage du composant
	useEffect(() => {
		const fetchData = async () => {
			const client = createClient();
			const settingsData = await client.getSingle("settings");
			setSettings(settingsData);
		};

		fetchData();
	}, []);

	const [open, setOpen] = useState(false);

	const handleClick = () => setOpen(!open);

	const handleLinkClick = () => {
		if (open) {
			setOpen(false);
		}
	};

	return (
		<header className={`w-screen md:fixed md:mix-blend-difference ${open ? "bg-beige md:hidden fixed" : ""}`}>
			{/* MAIN NAV */}
			<div className="flex gap-4 items-center justify-between px-8 py-4">
				{/* LOGO */}
				<motion.div variants={item} initial="initial" whileInView="animate" viewport={{ once: true }}>
					<Link href="/" className="logo-effect flex items-center" onClick={handleLinkClick}>
						<div className="md:hidden">
							<LogoNav fillColor="#1E2632" />
						</div>
						<div className="hidden md:flex">
							<LogoNav />
						</div>
						<span data-hover="Jessica Louvel" className=" tracking-[.01rem]">
							Jessica Louvel
						</span>
					</Link>
				</motion.div>
				{/* MOBILE TOGGLE */}
				<button className="md:hidden" onClick={handleClick} aria-label="Mobile menu">
					{open ? <i>{getIconComponent("CloseIcon")}</i> : <i>{getIconComponent("MobileMenu")}</i>}
				</button>
				{/* SECOND DESKTOP NAV */}
				<nav className="hidden md:flex">
					<ul className="flex gap-4">
						{settings?.data.navigation.map(({ link, link_name }, index) => (
							<motion.li key={link_name} className="link-effect" variants={item} initial="initial" whileInView="animate" custom={index} viewport={{ once: true }}>
								<PrismicNextLink field={link} className="px-4">
									<span data-hover={link_name}>{link_name}</span>
								</PrismicNextLink>
							</motion.li>
						))}
					</ul>
				</nav>
			</div>
			{/* SECOND MOBILE NAV */}
			<nav className={open ? " flex w-screen h-screen justify-center bg-beige" : "hidden"}>
				<ul className="flex flex-col mt-16 items-center text-center gap-6">
					{settings?.data.navigation.map(({ link, link_name }, index) => (
						<motion.li key={link_name} className="text-xl p-6 text-dark" variants={item} initial="initial" whileInView="animate" custom={index} viewport={{ once: true }}>
							<PrismicNextLink field={link} onClick={handleLinkClick}>
								<span data-hover={link_name}>{link_name}</span>
							</PrismicNextLink>
						</motion.li>
					))}
				</ul>
			</nav>
		</header>
	);
}
