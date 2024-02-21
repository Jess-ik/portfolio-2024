"use client";
import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";
import { SettingsDocument } from "../../../prismicio-types";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Logo from "./Logo";

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
		<header className="px-14 py-4 w-screen fixed mix-blend-difference z-10">
			<div className="flex gap-4 items-center justify-between">
				<Link href="/" className="logo-effect flex items-center">
					<Logo />

					<span data-hover="Jessica Louvel">
						Jessica Louvel
					</span>
				</Link>

				<nav>
					<ul className="flex gap-4">
						{settings?.data.navigation.map(({ link, link_name }) => (
							<li key={link_name} className="link-effect">
								<PrismicNextLink field={link} className="px-4">
									<span data-hover={link_name}>{link_name}</span>
								</PrismicNextLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
