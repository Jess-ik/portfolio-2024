import Button from "@/app/components/Button";
import { Content } from "@prismicio/client";
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
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className=" mt-24">
			<div className="flex gap-32">
				{slice.items.map((item, index) => (
					<div key={index} className="flex flex-col gap-5 ">
						<h3 className="text-sm uppercase tracking-wide">{item.label}</h3>
						<div className="flex gap-8 items-center h-full ">
							{item.text && <p className="text-xl font-[350] ">{item.text} & development</p>}
							{item.link && item.link_text && <Button field={item.link}>{item.link_text}</Button>}
							{item.code_link && item.code_link_text && <Button field={item.code_link}>{item.code_link_text}</Button>}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProjectInfo;
