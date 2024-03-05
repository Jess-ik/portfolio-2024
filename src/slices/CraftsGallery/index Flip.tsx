"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PrismicNextImage } from "@prismicio/next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { Flip } from "gsap/all";
import Button from "@/app/components/Button";

// Enregistrez le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);
gsap.registerPlugin(CustomEase);

/**
 * Props for `CraftsGallery`.
 */
export type CraftsGalleryProps = SliceComponentProps<Content.CraftsGallerySlice>;

/**
 * Component for "CraftsGallery" Slices.
 */
const CraftsGallery = ({ slice }: CraftsGalleryProps): JSX.Element => {
	const galleryRef = useRef<HTMLDivElement>(null);
	const btnRef = useRef<HTMLDivElement>(null);
	const imgRef = useRef<HTMLDivElement>(null);

	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		CustomEase.create("cubic", "0.83, 0, 0.17, 1");
		const gallery = galleryRef.current;

		// Évitez l'utilisation de document.querySelector, utilisez les refs
		const images = gallery ? gsap.utils.toArray(gallery.querySelectorAll(".img")) : [];

		let rotationValues = [10, -5, 2, -2, 3, -5, 4, -2, 3];
		let isFlipped = false;

		function applyRotation() {
			images.forEach((img, index) => {
				const rotation = isFlipped ? 0 : rotationValues[index];
				gsap.fromTo(
					img as HTMLDivElement,
					{ rotate: 0 },
					{
						rotate: rotation,
						duration: 2,
						ease: "cubic-bezier(0.83, 0, 0.17, 1)",
						delay: 0.155,
					}
				);
			});
		}

		let btnRefValue = btnRef.current;

		if (btnRefValue)  {
			btnRefValue.addEventListener("click", () => {
				isFlipped = !isFlipped;

				setTimeout(() => {
					if (btnRefValue) {
						btnRefValue.textContent = isFlipped ? "Hide all ideas" : "Explore ideas";
					}
				}, 100);

				let state = Flip.getState(".img-gallery-container, .img");
				gallery?.classList.toggle("order");
				images.forEach((img) => (img as HTMLImageElement).classList.toggle("reorder", !isFlipped));

				sectionRef.current?.classList.toggle("h-screen", !isFlipped);
				if (isFlipped) {
					sectionRef.current?.classList.add("h-[700vh]");
				} else {
					sectionRef.current?.classList.remove("h-[700vh]");
				}

				Flip.from(state, {
					absolute: true,
					duration: 2,
					rotate: 0,
					stagger: 0.05,
					ease: "cubic-bezier(0.83, 0, 0.17, 1)",
					onStart: () => {
						applyRotation();
					},
					onComplete: () => {
						ScrollTrigger.update();
					},
				});
			});
		}

		return () => {
			// Nettoyez les écouteurs d'événements lors du démontage du composant
			if (btnRefValue) {
				btnRefValue.removeEventListener("click", () => {});
			}
		};
	}, [slice.items]);

	return (
		<section ref={sectionRef} className="h-screen w-screen !px-8 md:px-0  max-w-[1440px] mx-auto overflow-hidden">
			<div className=" flex flex-col  justify-center items-center gap-10 md:gap-32 w-full h-[100vh] ">
				<h1 className="mt-[-5vh] font-soria text-7xl md:text-[150px] md:leading-[14rem] ">{slice.primary.title}</h1>
				<p className=" font-[200] text-grey md:w-[70vw] text-xl">{slice.primary.description}</p>
				<div className=" flex flex-col items-center gap-8">
					<div ref={btnRef} className="btn bg-blue hover:bg-blue/80 z-999 font-light transition ease-in-out !duration-500">
						Explore Ideas
					</div>
					<Button field={slice.primary.cta_link}>{slice.primary.cta_text}</Button>
				</div>
			</div>
			<div className="img-gallery ">
				<div ref={galleryRef} className="img-gallery-container order">
					{slice.items.map((item, index) => (
						<div className="img reorder" key={index} ref={imgRef}>
							<PrismicNextImage field={item.image} className="object-cover" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CraftsGallery;
