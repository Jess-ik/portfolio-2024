import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
	const client = createClient();
	const page = await client.getByUID("project_page", params.uid).catch(() => notFound());

	return (
		<section className="!px-8 md:px-0 pt-16 md:pt-[200px] max-w-[1440px] mx-auto">
			<div className="flex flex-col w-full">
				<p className="link-effect ">
					<a href="/works" className="!pl-0">
						<span data-hover="Back to all projects" className="text-grey font-light ">
							Back to all projects
						</span>
					</a>
				</p>

				<h1 className="mt-8 font-soria text-7xl md:text-[150px] md:leading-[14rem] ">{page.data.project_name}</h1>
				<h2 className="font-[200] text-grey text-2xl md:text-4xl">{page.data.project_subtitle}</h2>
			</div>

			{/* Display Projects slices = ProjectInfo + ProjectGallery */}
			<SliceZone slices={page.data.slices} components={components} />
		</section>
	);
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
	const client = createClient();
	const page = await client.getByUID("project_page", params.uid).catch(() => notFound());

	return {
		title: page.data.meta_title,
		description: page.data.meta_description,
	};
}

export async function generateStaticParams() {
	const client = createClient();
	const pages = await client.getAllByType("project_page");

	return pages.map((page) => {
		return { uid: page.uid };
	});
}
