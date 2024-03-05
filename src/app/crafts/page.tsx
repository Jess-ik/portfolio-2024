import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("crafts");

  return (
    <section className="relative">

      {/* <div className="sticky top-0 w-screen h-screen flex flex-col justify-center items-center z-1000 border border-red-500 bg-transparent">
        <h1 className="text-light text-[220px] font-soria">{page.data.title}</h1>
        <p className="font-[200] text-grey w-[80vw]">{page.data.description}</p>
			</div> */}
    
      {/* Display Projects slices = CraftsGallery */}
			<SliceZone slices={page.data.slices} components={components} />

		</section>
	);
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("crafts");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
