import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";
import { Content } from "@prismicio/client";

export const ProjectCard = ({ project }: { project: Content.ProjectPageDocument }): JSX.Element => {
	const { data } = project;

	return (
		<PrismicLink document={project} className="grid grid-cols-2 gap-10">
			<PrismicNextImage field={data.hero_image} sizes="100vw" className="w-full max-w-sm max-h-60 rounded-xl object-cover" />
			<div className="flex flex-col gap-3">
				<div className="flex flex-col gap-1">
					<div className="hover:opacity-75 duration-300 ease-in-out transition-all">
						<h2 className="font-bold text-xl">{data.project_name}</h2>
					</div>
				</div>
			</div>
			<div className="border-b border-solid border-gray-200 w-full col-span-2" />
		</PrismicLink>
	);
};
