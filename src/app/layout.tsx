import type { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Jost } from "next/font/google";
import Soria from "next/font/local";
import { createClient } from "@/prismicio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

// FONTS
const jost = Jost({
	subsets: ["latin"],
	variable: "--font-jost",
	display: "swap",
});

const soria = Soria({
	src: "./font/soria-font.ttf",
	variable: "--font-soria",
	display: "swap",
});

// METADATA
export async function generateMetadata(): Promise<Metadata> {
	//call Prismic API
	const client = createClient();

	//fetch settings custom type data
	const settings = await client.getSingle("settings");

	return {
		title: settings.data.site_title || "Jessica Louvel • Designer & Developer",
		description: settings.data.meta_description || "Portfolio of Jessica Louvel • Creative Designer and Front End Developer. Based in France and available worldwide.",
		openGraph: {
			images: [settings.data.og_image.url || ""],
		},
	};
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${jost.variable} ${soria.variable}`}>
			<body>
				<Header />
				{children}
				<ScrollTop />
				<Footer />
			</body>
		</html>
	);
}
