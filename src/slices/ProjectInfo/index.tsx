import Button from "@/app/components/Button";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProjectInfo`.
 */
export type ProjectInfoProps = SliceComponentProps<Content.ProjectInfoSlice>;

/**
 * Component for "ProjectInfo" Slices.
 */
const ProjectInfo = ({ slice }: ProjectInfoProps): JSX.Element => {
	return (
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className="md:border-t border-grey  mt-16 pt-8">
			<div className="flex flex-col md:flex-row gap-16 md:gap-32">
				{slice.items.map((item, index) => (
					<div key={index} className="flex flex-col gap-5 ">
						<h3 className="text-sm text-blue md:border-none border-b-[1px] border-blue uppercase tracking-wide">{item.label}</h3>
						<div className="flex gap-8 items-center h-full ">
							{item.text && <p className="text-lg font-[300] ">{item.text}</p>}
							{item.link && item.link_text && <PrismicNextLink className="  font-light tracking-wide  hover:bg-blue hover:text-light py-1 px-3 border border-dark hover:border-blue rounded-full  transition ease-in-out !duration-500" field={item.link}>{item.link_text}</PrismicNextLink>}
							{item.code_link && item.code_link_text && <PrismicNextLink className="  font-light tracking-wide  hover:bg-blue hover:text-light py-1 px-3 border border-dark hover:border-blue rounded-full  transition ease-in-out !duration-500" field={item.code_link}>{item.code_link_text}</PrismicNextLink>}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProjectInfo;
