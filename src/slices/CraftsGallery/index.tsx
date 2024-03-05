"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useEffect, useRef, useState } from "react";

import { PrismicNextImage } from "@prismicio/next";

import Button from "@/app/components/Button";

import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";

/**
 * Props for `CraftsGallery`.
 */
export type CraftsGalleryProps = SliceComponentProps<Content.CraftsGallerySlice>;

/**
 * Component for "CraftsGallery" Slices.
 */
const CraftsGallery = ({ slice }: CraftsGalleryProps): JSX.Element => {
	const container = useRef(null);
	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	const { height } = dimension;
	const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
	const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
	const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
	useEffect(() => {
		const lenis = new Lenis();

		const raf = (time: number) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};
		const resize = () => {
			setDimension({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener("resize", resize);
		requestAnimationFrame(raf);
		resize();

		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		<section className="c-section relative">
			<div className="sticky top-0 w-screen h-[70vh] bg-beige flex flex-col gap-16 justify-center items-center ">
				<h1 className=" font-soria text-7xl md:text-[150px]  ">{slice.primary.title}</h1>
				<p className=" font-[200] text-grey md:w-[50vw] text-xl text-center">{slice.primary.description}</p>

				<div className="flex flex-col justify-center items-center gap-4">
					<Button field={slice.primary.cta_link}>{slice.primary.cta_text}</Button>
					<p className="font-[350] text-sm">Scroll down to explore</p>
				</div>
			</div>

			<div ref={container} className="c-gallery gap-8 z-1000 relative bg-dark  ">
				<motion.div style={{ y: y }} className="c-column relative gap-8  flex flex-col">
					{slice.items &&
						slice.items.slice(0, 3).map((item, index) => (
							<div className="c-image-container" key={index}>
								<PrismicNextImage field={item.image} />
							</div>
						))}
				</motion.div>

				<motion.div style={{ y: y2 }} className="c-column gap-8  flex flex-col">
					{slice.items &&
						slice.items.slice(3, 6).map((item, index) => (
							<div className="c-image-container" key={index}>
								<PrismicNextImage field={item.image} />
							</div>
						))}
				</motion.div>

				<motion.div style={{ y: y3 }} className="c-column  gap-8  flex flex-col">
					{slice.items &&
						slice.items.slice(6, 9).map((item, index) => (
							<div className="c-image-container" key={index}>
								<PrismicNextImage field={item.image} />
							</div>
						))}
				</motion.div>

				<motion.div style={{ y: y4 }} className="c-column">
					{slice.items &&
						slice.items.slice(9, 12).map((item, index) => (
							<div className="c-image-container" key={index}>
								<PrismicNextImage field={item.image} />
							</div>
						))}
				</motion.div>
			</div>
		</section>
	);
};

export default CraftsGallery;
