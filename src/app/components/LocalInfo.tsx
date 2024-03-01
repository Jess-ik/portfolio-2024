"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LocalInfo() {
	const [currentTime, setCurrentTime] = useState<string>("");
	const [currentTemp, setCurrentTemp] = useState<number>(0);
	const [currentWeather, setCurrentWeather] = useState<number>(0);
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
				setCurrentWeather(data.weather[0].description);
				setWeatherIconCode(data.weather[0].icon);
				setWeatherIcon("http://openweathermap.org/img/wn/" + weatherIconCode + "@2x.png");
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
	}, [weatherIconCode]);

	

	return (
		<ul className="flex items-center animItem local gap-2.5">
			<li>Avignon, FR </li>
			<li>{currentTime} </li>
			<li>
				<Image width={50} height={50} className="inline" src={weatherIcon} alt="Weather Icon" />			
			</li>
			<li>{Math.round(currentTemp - 273.5)}°C</li>
		</ul>
	);
}
