"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createClient } from "@/prismicio";
import { isFilled, Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ProjectPageDocument } from "../../../prismicio-types";

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

	// Function to get the scroll amount
	const getScrollAmount = () => {
		if (typeof window !== "undefined" && galleryRef.current) {
			const galleryWidth = galleryRef.current.offsetWidth;
			return -(galleryWidth - window.innerWidth + 100);
		}
		return 0;
	};

	// Anim setup
	useEffect(() => {
		const pin = gsap.fromTo(
			galleryRef.current,
			{
				translateX: 0,
			},
			{
				translateX: getScrollAmount,
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
	}, []);

	return (
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
			<section ref={triggerRef} className="h-[300vh] bg-dark">
				<div className="sticky top-0 flex flex-col justify-center h-screen overflow-x-hidden">
					<div className="flex flex-col md:flex-row gap-8 justify-between items-center px-8 md:px-14 pb-14">
						<h2 className="font-soria text-light text-3xl md:text-7xl">{slice.primary.section_title}</h2>
						<a className="hover:text-light-grey  font-light text-grey transition-all cur" href="/works">
							See all works
						</a>
					</div>

					<div ref={galleryRef} className="relative pl-8 md:pl-14 flex gap-4 w-fit ">
						{selectedWorks.map((item, index) => {
							if (item && item.data.selected) {
								return (
									<PrismicLink key={index} document={item}>
										<div key={index} className="selected-card relative w-[300px] md:w-[560px] overflow-hidden flex flex-col gap-5">
											<div className="cover">
												<PrismicNextImage width={582} height={472} field={item.data.hero_image} className="rounded-2xl" imgixParams={{ ar: "5:4", fit: "crop" }} />
												<div className="hover flex justify-center items-center">
													<button className="px-6 py-4 bg-blue hover:bg-grey rounded-lg transition-all duration-300">View project</button>
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
				</div>
			</section>
		</section>
	);
};

export default SelectedWorks;
