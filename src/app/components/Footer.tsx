"use client";
import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";
import { SettingsDocument } from "../../../prismicio-types";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
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
		<footer className="px-14 py-16 w-screen bg-dark">
			<div className="pt-28 flex flex-col gap-24 text-light">
				<div className="flex flex-col gap-8">
					<h3 className="font-light text-2xl">{settings?.data.question}</h3>
					<h4 className="font-soria text-9xl">{settings?.data.cta}</h4>
					<a href={`mailto:${settings?.data.button_text}`}><p className="font-light text-3xl">{settings?.data.button_text}</p></a>
				</div>
				<div className="flex justify-between font-light text-lg tracking-wide">
					<nav>
						<ul className="flex">
							{settings?.data.social.map(({ social_link, social_name }) => (
								<li key={social_name} className="link-effect">
									<PrismicNextLink field={social_link}>
										<span data-hover={social_name}>{social_name}</span>
									</PrismicNextLink>
								</li>
							))}
						</ul>
                    </nav>
                    <p>Avignon</p>
                    <p>Crafted with ♥️ by Jessica Louvel</p>
				</div>
			</div>
		</footer>
	);
}
