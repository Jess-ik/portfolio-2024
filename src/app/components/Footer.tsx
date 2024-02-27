"use client";
import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";
import { SettingsDocument } from "../../../prismicio-types";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Logo from "./Logo";
import LogoBadge from "./LogoBadge";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const item = {
	initial: {
		opacity: 0,
		y: -50,
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

export default function Footer() {
	// State pour stocker les données
	const [settings, setSettings] = useState<SettingsDocument<string> | null>(null);
	const [currentTime, setCurrentTime] = useState<string>("");
	const [currentWeather, setCurrentWeather] = useState<string>("");
	const [currentTemp, setCurrentTemp] = useState<number>(0);
	const [weatherIconCode, setWeatherIconCode] = useState<string>("");
	const [weatherData, setWeatherData] = useState(null);
	// Charger les données au montage du composant
	useEffect(() => {
		const fetchData = async () => {
			const client = createClient();
			const settingsData = await client.getSingle("settings");
			setSettings(settingsData);
		};

		fetchData();

		// Fetch current time
		const updateTime = () => {
			const now = new Date();
			setCurrentTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
		};

		updateTime();
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	}, []);

	// Fetch current weather
	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Avignon&appid=12b8b385d18fcc0a6ffad7798998eeec`);
				const data = await response.json();
				setWeatherData(data.data);
				setCurrentWeather(data.weather[0].main);
				setCurrentTemp(data.main.temp);
				setWeatherIconCode(data.weather[0].icon);
			} catch (error) {
				console.error("Error fetching weather:", error);
			}
		};

		fetchWeather();
	}, []);

	let weatherIcon = "http://openweathermap.org/img/wn/" + weatherIconCode + "@2x.png";

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
		<footer className="px-14 py-8 w-screen bg-dark">
			<div className="pt-28 flex flex-col gap-24 text-light-grey">
				<div className="flex flex-col gap-8">
					<h3 className="font-light text-grey text-2xl  animItem">{settings?.data.question}</h3>

					<div className="flex  gap-4 h-full  animItem">
						<LogoBadge />
						<h4 className="font-soria text-9xl">{settings?.data.cta}</h4>
					</div>

					<p className="link-effect animItem ml-[-20px]">
						<a href={`mailto:${settings?.data.button_text}`} >
							<span data-hover={settings?.data.button_text} className="font-extralight text-3xl">{settings?.data.button_text}</span>
						</a>
					</p>
				</div>
				{/* BOTTOM FOOTER */}
				<div className="flex justify-between items-center font-light text-lg tracking-wide">
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
					<ul className="flex items-center animItem local gap-2.5">
						<li>Avignon, FR </li>
						<li>{currentTime} </li>
						<li>
							<Image width={50} height={50} className="inline" src={weatherIcon} alt="Weather Icon" />
						</li>
						<li>{Math.round(currentTemp - 273.5)}°C</li>
					</ul>
					<div className="animItem">Crafted with ♥️ by Jessica Louvel</div>
				</div>
			</div>
		</footer>
	);
}
