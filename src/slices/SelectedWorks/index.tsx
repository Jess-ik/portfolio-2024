"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createClient } from "@/prismicio";
import { isFilled, Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ProjectCardDocument } from "../../../prismicio-types";

/** Props for `SelectedWorks` */
export type SelectedWorksProps = SliceComponentProps<Content.SelectedWorksSlice>;

/** Component for "SelectedWorks" Slices */
const SelectedWorks = ({ slice }: SelectedWorksProps): JSX.Element => {
	const [selectedWorks, setSelectedWorks] = useState<ProjectCardDocument<string>[]>([]);
	// Fetch data
	useEffect(() => {
		const fetchData = async () => {
			const client = createClient();
			const data = await Promise.all(
				slice.items.map((item) => {
					if (isFilled.contentRelationship(item.project_card) && item.project_card.uid) {
						return client.getByUID("project_card", item.project_card.uid);
					}
				})
			);

			// Filter out undefined values and cast to the expected type
			setSelectedWorks(data.filter((item): item is ProjectCardDocument<string> => !!item && !!item.data.selected));
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
	console.log(getScrollAmount());
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
					<h2 className="text-light font-soria text-[4vw] px-14 pb-14">{slice.primary.section_title}</h2>
					<div ref={galleryRef} className="relative pl-14 flex gap-4 w-fit ">
						{selectedWorks.map((item, index) => {
							if (item && item.data.selected) {
								return (
									<div key={index} className="relative w-[560px] overflow-hidden flex flex-col gap-5">
										<PrismicNextImage width={582} height={472} field={item.data.hero_image} className="rounded-2xl" imgixParams={{ ar: "4:3", fit: "crop" }} />
										<h2 className="font-light text-xl text-beige">{item.data.project_name}</h2>
									</div>
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
