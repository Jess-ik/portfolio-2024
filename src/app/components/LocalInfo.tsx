"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getIconComponent } from "./Icons";

export default function LocalInfo() {
	const [currentTime, setCurrentTime] = useState<string>("");
	const [currentTemp, setCurrentTemp] = useState<number>(0);
	const [currentWeather, setCurrentWeather] = useState<string>("");
	const [weatherIconCode, setWeatherIconCode] = useState<string>("");
	const [weatherIcon, setWeatherIcon] = useState<string>("");
	// Fetch current weather & Time
	useEffect(() => {
		// Fetch current weather
		const fetchWeather = async () => {
			try {
				const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Avignon&appid=12b8b385d18fcc0a6ffad7798998eeec`);
				const data = await response.json();

				setCurrentTemp(data.main.temp);
				setCurrentWeather(data.weather[0].main);
				setWeatherIconCode(data.weather[0].icon);
				//setWeatherIcon("http://openweathermap.org/img/wn/" + weatherIconCode + "@2x.png");
				setWeatherIcon(currentWeather)
	
			} catch (error) {
				console.error("Error fetching weather:", error);
			}
		};

		fetchWeather();

		// Fetch current time
		const updateTime = () => {
			const now = new Date();
			setCurrentTime(now.toLocaleTimeString([], {timeZone: 'Europe/Paris', hour: "2-digit", minute: "2-digit" }));
		};

		updateTime();
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	}, [currentWeather, weatherIconCode]);

	

	return (
		<ul className="hidden md:flex items-center animItem local gap-2.5">
			<li>Avignon, FR </li>
			<li>{currentTime} </li>
			<li>
				{/* 				<Image width={50} height={50} loading="lazy" className="inline" src={weatherIcon ? weatherIcon : "http://openweathermap.org/img/wn/02d@2x.png"} alt="Weather Icon" />			
 */}
				{weatherIcon ? <i>{getIconComponent(weatherIcon)}</i> : <i>{getIconComponent("clearsky")}</i>}
			</li>
			<li>{Math.round(currentTemp - 273.5)}°C</li>
		</ul>
	);
}
