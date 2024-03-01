"use client";
import Button from "@/app/components/Button";
import { getIconComponent } from "@/app/components/Icons";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Props for `AboutSection`.
 */
export type AboutSectionProps = SliceComponentProps<Content.AboutSectionSlice>;

/**
 * Component for "AboutSection" Slices.
 */
const AboutSection = ({ slice }: AboutSectionProps): JSX.Element => {
	const container = useRef(null);
	const imageContainer = useRef(null);

	const [selectedService, setSelectedService] = useState<number | null>(null);

	// GSAP ANIMATION
	gsap.registerPlugin(ScrollTrigger);

	// Anim setup
	useEffect(() => {
		//translate Y effect
		ScrollTrigger.batch([".skill", ".aboutAnim"], {
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
		//scalling effect
		ScrollTrigger.batch([".tool"], {
			onEnter: (elements) => {
				gsap.fromTo(
					elements,
					{
						autoAlpha: 0,
						scale: 0.6,
					},
					{
						autoAlpha: 1,
						scale: 1,
						delay: 0.5,
						stagger: {
							amount: 0.15,
							from: "start",
						},
					}
				);
			},
			once: true,
		});
	}, []);

	return (
		<section id="about" ref={container} data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className="relative  max-w-[1800px] mx-auto pt-16 md:pt-[100px] bg-beige  md:px-32">
			{/* PILL IMAGE DESKTOP */}
			<div ref={imageContainer} className="hidden md:flex image-container overflow-x-hidden  h-screen sticky  top-0  justify-center items-center">
				<div className="w-[50vw] "></div>
				<div className="aboutAnim pill-container flex justify-center h-[80%]  ">
					{selectedService !== null ? (
						<Image src={slice.items[selectedService]?.service_image?.url ?? ""} alt={slice.items[selectedService]?.service_image?.alt ?? ""} height={155} width={(1550 * 10) / 31} className="rounded-full object-cover" layout="responsive" />
					) : (
						<PrismicNextImage field={slice.primary.about_image} className="rounded-full  object-cover" sizes="33vw" imgixParams={{ auto: "format" }} /> // Replace with your placeholder component or image
					)}{" "}
				</div>
			</div>
			{/* PILL IMAGE MOBILE */}
			<div className="md:hidden w-[90vw] h-[200px]  mx-auto">
				<PrismicNextImage field={slice.primary.about_image} className=" rounded-full h-full object-cover" width={533} height={300} imgixParams={{ar:"16:9", auto: "format" }} /> 

			</div>
			{/* ABOUT ME */}
			<div
				onMouseOver={() => {
					setSelectedService(null);
				}}
				className="px-8 md:px-0 mt-16 md:mt-0 container md:absolute md:w-fit  md:top-24 md:h-screen  flex  flex-col justify-between gap-4 ">
				<div className="h-full md:w-1/3  flex flex-col justify-center gap-4">
					<h2 className="text-[28px] uppercase aboutAnim">{slice.primary.heading}</h2>
					<p className="text-[20px] leading-10 text-grey pb-4 aboutAnim">{slice.primary.paragraph_01}</p>
					<p className="text-[20px] font-light leading-10 text-grey pb-4 aboutAnim">{slice.primary.paragraph_02}</p>
					<Button field={slice.primary.button_link}>{slice.primary.button_text}</Button>
				</div>
			</div>
			{/* SERVICES */}
			<div id="services">
				{slice.items.map((item, index) => (
					<div
						key={index}
						onMouseOver={() => {
							setSelectedService(index);
						}}
						className="service-container mx-8 md:mx-0 px-8 md:px-0 my-16 md:my-0 py-32 md:py-0 cursor-pointer shadow-md md:shadow-none bg-light/50 md:bg-transparent  rounded-xl  md:h-[80vh] md:pt-[20vh]  flex flex-col justify-start relative">
						<h3 className="text-4xl md:text-[100px] font-semibold uppercase w-fit md:max-w-xl  md:leading-[6rem]">{item.service}</h3>
						{/* SKILLS */}
						<ul className="flex gap-6 uppercase">
							{Array.isArray(item.skills) &&
								item.skills.map((skill, skillIndex) => (
									<li key={skillIndex} className="skill">
										{skill && "text" in skill ? skill.text : null}
									</li>
								))}
						</ul>
						{/* TOOLS */}
						<ul className="flex gap-6 uppercase">
							{Array.isArray(item.tools) &&
								item.tools.map((tool, toolIndex) => (
									<li key={toolIndex} className="tool">
										{tool && "text" in tool ? <i>{getIconComponent(tool.text)}</i> : null}
									</li>
								))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
};

export default AboutSection;
