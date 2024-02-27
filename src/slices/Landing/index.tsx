'use client'
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { motion } from "framer-motion";

const item = {
	initial: {
		opacity: 0,
		y: -30,
		filter: "blur(5px)",
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: 0.3,
			ease: "easeOut",
			delay: 0.08 * (index + 1),
		},
	}),
};

/**
 * Props for `Landing`.
 */
export type LandingProps = SliceComponentProps<Content.LandingSlice>;

/**
 * Component for "Landing" Slices.
 */
const Landing = ({ slice }: LandingProps): JSX.Element => {
	return (
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} >
			<div className="h-screen w-screen bg-beige flex flex-col items-center justify-center text" >
				<motion.h1 className="font-soria text-[10vw]" custom={1} variants={item} initial="initial" whileInView="animate" viewport={{ once: true }}>{slice.primary.title}</motion.h1>
				<motion.p className="max-w-xl text-center font-light md:text-xl lg:text-2xl leading-8" custom={2} variants={item} initial="initial" whileInView="animate" viewport={{ once: true }}>{slice.primary.intro}</motion.p>
			</div>
		</section>
	);
};

export default Landing;
