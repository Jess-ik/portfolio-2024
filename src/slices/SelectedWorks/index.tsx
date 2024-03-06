"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createClient } from "@/prismicio";
import { isFilled, Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ProjectPageDocument } from "../../../prismicio-types";
import Link from "next/link";
import { motion } from "framer-motion";

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

/** Props for `SelectedWorks` */
export type SelectedWorksProps = SliceComponentProps<Content.SelectedWorksSlice>;

/** Component for "SelectedWorks" Slices */
const SelectedWorks = ({ slice }: SelectedWorksProps): JSX.Element => {
	const [selectedWorks, setSelectedWorks] = useState<ProjectPageDocument<string>[]>([]);
	// Fetch data to get selected workks
	useEffect(() => {
		const fetchData = async () => {
			const client = createClient();
			const data = await Promise.all(
				slice.items.map((item) => {
					if (isFilled.contentRelationship(item.project_page) && item.project_page.uid) {
						return client.getByUID("project_page", item.project_page.uid);
					}
				})
			);

			// Filter out undefined values and cast to the expected type
			setSelectedWorks(data.filter((item): item is ProjectPageDocument<string> => !!item && !!item.data.selected));
		};

		fetchData();
	}, [slice.items]);

	// GSAP ANIMATION
	gsap.registerPlugin(ScrollTrigger);
	const galleryRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLDivElement>(null);

	

	// Anim setup for horizontal scroll
	useEffect(() => {
		if (galleryRef.current) {
			const pin = gsap.fromTo(
				galleryRef.current,
				{
					translateX: 0,
				},
				{
					translateX: galleryRef.current.offsetWidth - window.innerWidth + 100,
					ease: "none",
					duration: 1,
					scrollTrigger: {
						trigger: triggerRef.current,
						start: "top top",
						end: "bottom bottom",
						scrub: 0.6,

						markers: false,
					},
				}
			);
			return () => {
				{
					/* A return function for killing the animation on component unmount */
				}
				pin.kill();
			};
		}
	
	}, []);



	return (
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
			<section ref={triggerRef} className="md:h-[300vh] bg-dark">
				<div className="md:sticky md:top-0 flex flex-col justify-center md:h-screen md:overflow-x-hidden">
					<div className="flex flex-col md:flex-row gap-8 justify-between items-center px-8 md:px-14 pt-32 md:pt-0 pb-14">
						<h2 className="font-soria text-light text-5xl md:text-7xl">{slice.primary.section_title}</h2>
						<a className="hover:text-light-grey hidden md:relative font-light text-grey transition-all cur" href="/works">
							See all works
						</a>
					</div>
					{/* GALLERY DESKTOP */}
					<div ref={galleryRef} className="hidden relative pl-8 md:pl-14 md:flex gap-4 w-fit ">
						{selectedWorks.map((item, index) => {
							if (item && item.data.selected) {
								return (
									<PrismicLink key={index} document={item}>
										<div key={index} className="selected-card relative w-[300px] md:w-[560px] overflow-hidden flex flex-col gap-5">
											<div className="cover">
												<PrismicNextImage width={582} height={472} field={item.data.hero_image} className="rounded-2xl" imgixParams={{ ar: "5:4", fit: "crop" }} />
												<div className="hover flex justify-center items-center">
													<button className=" w-fit font-light tracking-wide  bg-blue   py-3 px-4   rounded-full text-mainBlue   transition ease-in-out !duration-500">View project</button>
												</div>
											</div>
											<h2 className="font-light text-xl text-beige">{item.data.project_name}</h2>
										</div>
									</PrismicLink>
								);
							}
							return null;
						})}
					</div>
					{/* GALLERY MOBILE */}
					<div className=" md:hidden px-8 grid grid-cols-1 gap-6 justify-center items-center  pb-16">
						{selectedWorks.slice(0, 3).map((item, index) => {
							if (item && item.data.selected) {
								return (
									<PrismicLink key={index} document={item} className="mobile-card">
										<motion.div key={index} variants={animCard} initial="initial" whileInView="animate" custom={index} viewport={{ once: true }} className="selected-card flex flex-col gap-5">
											<div className="cover">
												<PrismicNextImage width={582} height={472} field={item.data.hero_image} className="rounded-2xl" imgixParams={{ ar: "5:4", fit: "crop" }} />
												<div className="hover flex justify-center items-center">
													<button className=" w-fit font-light tracking-wide  bg-blue   py-3 px-4   rounded-full text-mainBlue   transition ease-in-out !duration-500">View project</button>
												</div>
											</div>
											<h2 className="font-light text-xl text-beige">{item.data.project_name}</h2>
										</motion.div>
									</PrismicLink>
								);
							}
							return null;
						})}
						<motion.div className="pt-16 flex justify-center" variants={animCard} initial="initial" whileInView="animate" custom={1} viewport={{ once: true }}>
							<Link href="/works" className=" w-fit font-light tracking-wide  hover:bg-blue text-light py-3 px-4 border border-light hover:border-blue rounded-full text-mainBlue   transition ease-in-out !duration-500">
								See all works
							</Link>
						</motion.div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default SelectedWorks;
