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
			<div className="h-screen w-screen bg-beige flex flex-col gap-8 items-center justify-center lg:justify-center ">
				<motion.div className="hidden lg:flex mt-[-48px]" custom={1} variants={item} initial="initial" whileInView="animate" viewport={{ once: true }}>
					<LogoDesktop />
				</motion.div>
				<motion.h1 className=" lg:hidden mt-[10vh]" custom={1} variants={item} initial="initial" whileInView="animate" viewport={{ once: true }}>
					<LogoMobile />
				</motion.h1>
				{/* <motion.p className="px-8 max-w-xl text-center font-light lg:text-xl leading-8" custom={2} variants={item} initial="initial" whileInView="animate" viewport={{ once: true }}>
					{slice.primary.intro}
				</motion.p> */}
				<div className="w-screen lg:absolute bottom-0 px-8 py-12  font-light text-sm tracking-wide">
					<div className="flex flex-col lg:flex-row gap-4  flex-wrap justify-center lg:justify-between ">
						<div className="flex flex-col text-center lg:text-left">
							<h1 className="font-[380]">Jessica Louvel</h1>
							<h2>Front-End Developer</h2>
						</div>
						<div className="flex flex-col lg:items-start justify-center items-center  lg:w-1/4  ">
							<div className="flex flex-row gap-2 lg:justify-start justify-center items-center  w-2/3 lg:w-full ">
								<i className=" lg:w-1/5 border border-yellow-80 flex justify-center">{getIconComponent("Avignon")}</i>
								<h3 className="">Based in Avignon, FR</h3>
							</div>
							<div className="flex flex-row gap-2  lg:justify-start justify-center items-center  w-2/3 lg:w-full ">
								<i className=" lg:w-1/5   flex justify-center ">{getIconComponent("Worldwide")}</i>
								<h3>Available worldwide</h3>
							</div>
						</div>
						<div className="w-full lg:w-1/2">
							<p>{slice.primary.intro}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Landing;
