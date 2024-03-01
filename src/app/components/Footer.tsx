"use client";
import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";
import { SettingsDocument } from "../../../prismicio-types";
import { PrismicNextLink } from "@prismicio/next";

import LogoBadge from "./LogoBadge";
import LocalInfo from "./LocalInfo";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

	// Anim setup
	useEffect(() => {
		// GSAP ANIMATION
		gsap.registerPlugin(ScrollTrigger);
		ScrollTrigger.batch([".link-effect", ".animItem"], {
			onEnter: (elements) => {
				gsap.fromTo(
					elements,
					{
						autoAlpha: 0,
						y: 60,
					},
					{
						autoAlpha: 1,
						y: 0,
						stagger: {
							amount: 0.15,
							from: "start",
						},
					}
				);
			},
			once: true,
		});
		// Clean up ScrollTrigger on component unmount
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<footer id="contact" className=" px-14 py-8 w-screen bg-dark relative ">
			<div className="pt-28 flex flex-col gap-24 text-light-grey">
				{/* TOP FOOTER */}
				<div className="flex flex-col gap-8">
					<h3 className="font-light text-grey text-2xl  animItem">{settings?.data.question}</h3>

					<div className="flex  gap-4 h-full  animItem">
						<LogoBadge />
						<h4 className="font-soria text-9xl">{settings?.data.cta}</h4>
					</div>

					<p className="link-effect animItem ml-[-20px]">
						<a href={`mailto:${settings?.data.button_text}`}>
							<span data-hover={settings?.data.button_text} className="font-extralight text-blue text-3xl">
								{settings?.data.button_text}
							</span>
						</a>
					</p>
				</div>
				{/* BOTTOM FOOTER */}
				<div className="flex justify-between items-center font-light text-lg tracking-wide">
					{/* SOCIAL */}
					<nav className="animItem">
						<ul className="flex ml-[-20px]">
							{Array.isArray(settings?.data.social) &&
								settings?.data.social.map(({ social_link, social_name }, index) => (
									<li key={social_name} className="link-effect">
										<PrismicNextLink field={social_link}>
											<span data-hover={social_name}>{social_name}</span>
										</PrismicNextLink>
									</li>
								))}
						</ul>
					</nav>
					{/* LOCAL INFO */}
					<LocalInfo />
					{/* CREDITS */}
					<div className="animItem">Crafted with ♥️ by Jessica Louvel</div>
				</div>
			</div>
		</footer>
	);
}
