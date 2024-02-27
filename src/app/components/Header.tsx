"use client";
import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";
import { SettingsDocument } from "../../../prismicio-types";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Logo from "./Logo";

import { motion } from "framer-motion";

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
	return (
		<header className="px-14 py-4 w-screen fixed mix-blend-difference z-1000">
			<div className="flex gap-4 items-center justify-between">
				<motion.div variants={item} initial="initial" whileInView="animate" viewport={{ once: true }}>
					<Link href="/" className="logo-effect flex items-center">
						<Logo />

						<span data-hover="Jessica Louvel">Jessica Louvel</span>
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
	);
}
