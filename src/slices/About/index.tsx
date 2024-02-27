"use client";
import { Parallax } from "@/app/components/Parralax";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
	return (
    <section id="about" data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className="pb-32 pt-32">
      <h2 className=" font-soria text-[4vw] px-14 pb-14">About</h2>
			<div className="flex flex-col max-w-6xl mx-auto items-center justify-center">
				<Parallax speed={1} className="self-start">
					<PrismicNextImage field={slice.primary.image_design} width={400} height={600} sizes="50vw" className="w-[450px] h-[600px] object-cover" imgixParams={{ ar: "3:4", auto: "format" }} />
				</Parallax>

				<Parallax speed={-6} className="self-end">
          <p className=" text-4xl max-w-lg leading-[3.5rem] font-[360]">{slice.primary.main_text}</p>
				</Parallax>

				
				

				<Parallax speed={-3} className="self-center ">
					<PrismicNextImage field={slice.primary.image_web} className="h-[450px] w-[600px] object-cover" imgixParams={{ ar: "4:3", auto: "format" }} />
				</Parallax>
				<Parallax speed={2} className=" self-start text-right">
					<p className="text-[22px] font-[250] max-w-md ">{slice.primary.second_text}</p>
				</Parallax>
				<Parallax speed={-2} className="self-end">
					<PrismicNextImage field={slice.primary.image_craft} className="w-[450px] h-[600px] object-cover" imgixParams={{ ar: "3:4", auto: "format" }} />
        </Parallax> 
        
      </div>
      {/* <h2 className=" font-soria text-[4vw] px-14 py-32">Skills</h2> */}
		</section>
	);
};

export default About;
