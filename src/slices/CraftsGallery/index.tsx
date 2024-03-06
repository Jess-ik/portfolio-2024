"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useEffect, useRef, useState } from "react";

import { PrismicNextImage } from "@prismicio/next";

import Button from "@/app/components/Button";

import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";


const animCard = {
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
	const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
	const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);
	const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  
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
			<div className="relative md:sticky top-0  w-screen h-[70vh] bg-beige flex flex-col gap-16 justify-center items-center ">
				<h1 className=" font-soria text-7xl  ">{slice.primary.title}</h1>
				<p className=" font-[200] text-grey w-[80vw] md:w-[50vw] text-base  md:text-xl text-center">{slice.primary.description}</p>

				<div className="flex flex-col justify-center items-center gap-4">
					<Button field={slice.primary.cta_link}>{slice.primary.cta_text}</Button>
					<p className="font-[350] text-grey opacity-60 text-sm">Or scroll down to explore</p>
				</div>
			</div>
			{/* MOBILE GALLERY */}
			<div  className="columns-3 md:hidden relative z-99 bg-dark p-8  ">
				
				{slice.items &&
					slice.items.map((item, index) => (
						<div className="c-image-container pb-4" >
							<PrismicNextImage field={item.image} />
						</div>
					))}
			</div>
			{/* DESKTOP GALLERY */}
			<div ref={container} className="hidden  md:flex c-gallery gap-8  relative bg-dark">
				<motion.div style={{ y: y }} className="c-column relative gap-8  flex flex-col">
					{slice.items &&
						slice.items.slice(0, 3).map((item, index) => (
							<div className="c-image-container" key={index}>
								<PrismicNextImage field={item.image} />
							</div>
						))}
				</motion.div>

				<motion.div style={{ y: y2 }} className="c-column gap-8 relative flex flex-col">
					{slice.items &&
						slice.items.slice(3, 6).map((item, index) => (
							<div className="c-image-container" key={index}>
								<PrismicNextImage field={item.image} />
							</div>
						))}
				</motion.div>

				<motion.div style={{ y: y3 }} className="c-column  gap-8 relative flex flex-col">
					{slice.items &&
						slice.items.slice(6, 9).map((item, index) => (
							<div className="c-image-container" key={index}>
								<PrismicNextImage field={item.image} />
							</div>
						))}
				</motion.div>

				<motion.div style={{ y: y4 }} className="c-column  gap-8 relative flex flex-col">
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
