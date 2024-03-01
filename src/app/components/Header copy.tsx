"use client";
import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";
import { SettingsDocument } from "../../../prismicio-types";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Logo from "./Logo";

import { motion } from "framer-motion";
import { getIconComponent } from "./Icons";

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
		<>
			{/* Mobile Header */}
			<header className={open ? "bg-beige md:hidden fixed w-screen" : "md:hidden  fixed w-screen "}>
				<div className="flex gap-4 items-center justify-between px-8 py-4">
					<motion.div variants={item} initial="initial" whileInView="animate" viewport={{ once: true }}>
						<Link href="/" className="logo-effect flex items-center">
							<Logo fillColor="#1E2632"/>

							<span data-hover="Jessica Louvel" className=" tracking-[.01rem]">
								Jessica Louvel
							</span>
						</Link>
					</motion.div>

					<button className="" onClick={handleClick} aria-label="Mobile menu">
						{open ? <i>{getIconComponent("CloseIcon")}</i> : <i>{getIconComponent("MobileMenu")}</i>}
					</button>
				</div>
				<nav className={open ? " flex w-screen h-screen justify-center bg-beige" : "hidden"}>
					<ul className="flex flex-col mt-16 items-center text-center gap-6">
						{settings?.data.navigation.map(({ link, link_name }, index) => (
							<motion.li key={link_name} className="text-xl p-6 text-dark" variants={item} initial="initial" whileInView="animate" custom={index} viewport={{ once: true }}>
								<PrismicNextLink field={link} onClick={handleClick}>
									<span data-hover={link_name}>{link_name}</span>
								</PrismicNextLink>
							</motion.li>
						))}
					</ul>
				</nav>
			</header>

			{/* Desktop Header */}
			<header className="hidden md:block px-14 py-4 w-screen fixed mix-blend-difference z-1000 ">
				<div className="flex gap-4 items-center justify-between">
					<motion.div variants={item} initial="initial" whileInView="animate" viewport={{ once: true }}>
						<Link href="/" className="logo-effect flex items-center">
							<Logo />

							<span data-hover="Jessica Louvel" className=" tracking-[.01rem]">
								Jessica Louvel
							</span>
						</Link>
					</motion.div>

					<nav>
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
			</header>
		</>
	);
}
