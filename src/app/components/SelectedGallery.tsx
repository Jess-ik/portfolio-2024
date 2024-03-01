import { PrismicLink, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";

import { PrismicNextImage } from "@prismicio/next";

export default async function SelectedGallery() {
	const client = createClient();
	const page = await client.getSingle("works");
	const projects = await client.getAllByType("project_page");

	return (
		<section className="pt-[180px] max-w-[1440px] mx-auto ">
			
			<div className="grid grid-cols-3">
				{/* Display Works slices = WorksGallery */}
				{projects.map((project, index) => {
					return (
						<PrismicLink key={index} document={project}>
							<div className="relative w-[560px] overflow-hidden flex flex-col gap-5">
								<PrismicNextImage width={582} height={472} field={project.data.hero_image} className="rounded-2xl" imgixParams={{ ar: "4:3", fit: "crop" }} />
								<h2 className="font-light text-xl text-beige">{project.data.project_name}</h2>
							</div>
						</PrismicLink>
					);
				})}
			</div>
		</section>
	);
}
