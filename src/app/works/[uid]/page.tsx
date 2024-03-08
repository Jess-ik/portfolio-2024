import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { BsArrowLeft } from "react-icons/bs";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
	const client = createClient();
	const page = await client.getByUID("project_page", params.uid).catch(() => notFound());

	return (
		<section className="!px-8 md:px-0 pt-16 md:pt-[150px] max-w-[1440px] mx-auto">
			<div className="flex flex-col w-full">
				<div className="flex gap-3"><i className=" mt-[2px]"><BsArrowLeft /> </i>
				<p className="link-effect ">
					<a href="/works" className="!pl-0">
						
						<span data-hover="Back to all projects" className="text-grey font-light ">
						Back to all projects
						</span>
					</a>
				</p>
				</div>
				<h1 className="mt-8 font-soria text-7xl ">{page.data.project_name}</h1>
				<h2 className="font-[200] text-grey text-2xl md:text-3xl">{page.data.project_subtitle}</h2>
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
