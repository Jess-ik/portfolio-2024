"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function getCurrentDate() {
	const currentDate = new Date();
	const options = { month: "long" };
	const monthName = currentDate.toLocaleString("en-US", options);
	const dayOfMonth = currentDate.getDate();
	const date = `${getDayName(currentDate.getDay())}, ${monthName} ${dayOfMonth}`;
	return date;
}

function getDayName(dayIndex: number) {
	const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return dayNames[dayIndex];
}

export default function Home() {
	const date = getCurrentDate();
	const [weatherData, setWeatherData] = useState(null);
	const [city, setCity] = useState("Paris");

	async function fetchData(cityName: string) {
		try {
			const response = await fetch("http://localhost:3000/api/weather?address=" + cityName);
			const jsonData = (await response.json()).data;
			setWeatherData(jsonData);
		} catch (error) {
			console.log(error);
		}
	}



	let iconcode = weatherData?.weather[0]?.icon;
	let weatherIcon = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";

	return (
		<main className="">
			<article className="">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						fetchData(city);
					}}>
					<input type="text" name="cityName" id="cityName" placeholder="Enter city name" onChange={(e) => setCity(e.target.value)} />
					<button type="submit">Search</button>
				</form>
				{weatherData && weatherData.weather && weatherData.weather[0] ? (
					<>
						<div className="icon and wheater info">
							<div className="weather icon">
								<Image
									src={weatherIcon}
									alt={weatherData.weather[0].description}
									width={50} // Spécifiez la largeur souhaitée
									height={50} // Spécifiez la hauteur souhaitée
								/>
								<i className={weatherIcon}></i>
							</div>

							<div className="weatherInfo">
								<div>
									<span>{Math.round(weatherData?.main?.temp - 273.5)} °C</span>
								</div>
								<div>{weatherData?.weather[0]?.description?.toUpperCase()}</div>
							</div>
						</div>
						<div>{weatherData?.name}</div>
						<div>{date}</div>
					</>
				) : (
					<div className="">Loading...</div>
				)}
			</article>
			<label className="flex cursor-pointer gap-2">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="12" cy="12" r="5" />
					<path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
				</svg>
				<input type="checkbox" value="synthwave" className="toggle theme-controller" />
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
				</svg>
			</label>
		</main>
	);
}
