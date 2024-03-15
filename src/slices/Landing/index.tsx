"use client";
import { getIconComponent } from "@/app/components/Icons";
import LogoDesktop from "@/app/components/LogoDesktop";
import LogoMobile from "@/app/components/LogoMobile";
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
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
			<div className=" h-screen w-screen bg-beige flex flex-col gap-8 items-center justify-center text">
				<motion.h1 className="hidden md:block font-soria text-[10vw] text-center " custom={1} variants={item} initial="initial" whileInView="animate" viewport={{ once: true }}>
					<span className="visually-hidden">{slice.primary.title}</span>
					<LogoDesktop />
				</motion.h1>
				<motion.h1 className="mt-[-81px] md:hidden font-soria text-[10vw] text-center " custom={1} variants={item} initial="initial" whileInView="animate" viewport={{ once: true }}>
					<span className="visually-hidden">{slice.primary.title}</span>
					<LogoMobile />
				</motion.h1>
				<motion.p className="px-8 max-w-xl text-center font-light md:text-xl leading-8" custom={2} variants={item} initial="initial" whileInView="animate" viewport={{ once: true }}>
					Designer and Front-end Developer
				</motion.p>
				{/* Scroll down */}
				<div className="mouse bottom-16 md:bottom-24  "></div>
			</div>
		</section>
	);
};

export default Landing;
