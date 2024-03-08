import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProjectGallery`.
 */
export type ProjectGalleryProps = SliceComponentProps<Content.ProjectGallerySlice>;

/**
 * Component for "ProjectGallery" Slices.
 */
const ProjectGallery = ({ slice }: ProjectGalleryProps): JSX.Element => {
	return (
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className="my-20">
			<div className="flex flex-col gap-8">
				{slice.items.map((item, index) => (
					<div key={index} className="bg-light-grey rounded-xl ">
						<PrismicNextImage field={item.image} sizes="100vw" className="w-full h-full rounded-xl object-cover" imgixParams={{ ar: "16:9", fit: "crop" }} />
					</div>
				))}
			</div>
		</section>
	);
};

export default ProjectGallery;
