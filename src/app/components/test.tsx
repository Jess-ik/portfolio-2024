GSAP “HORIZONTAL TEST


“use client";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { ProjectCardDocument } from "../../../prismicio-types";

/**
 * Props for `SelectedWorks`.
 */
export type SelectedWorksProps = SliceComponentProps<Content.SelectedWorksSlice>;

/**
 * Component for "SelectedWorks" Slices.
 */
const SelectedWorks = ({ slice }: SelectedWorksProps): JSX.Element => {
    const [selectedWorks, setSelectedWorks] = useState<ProjectCardDocument<string>[]>([]);

    //Fetch data
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

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-100vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    
                    markers: true,
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
        <section ref={triggerRef}  data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className={`sticky w-screen h-screen overflow-hidden`}>
            <div className={`h-screen w-screen overflow-hidden bg-dark flex flex-col justify-center`}>
                
                    <h2 className="text-light font-soria text-[10vh] px-14 pb-14">{slice.primary.section_title}</h2>
                    {/* Gallery wrapper */}
                    <div ref={sectionRef} className="bg-grey w-fit flex pl-14 gap-8">
                        {selectedWorks.map((item, index) => {
                            if (item && item.data.selected) {
                                return (
                                    <div key={index} className="bg-mustard scroll-section w-[560px] flex flex-col gap-5">
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
    );
};

export default SelectedWorks;

