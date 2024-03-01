
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("project_page", params.uid)
    .catch(() => notFound());
  


  return (
    <section>
      <a href="">Back to all projects</a>
      <h1>{page.data.project_name}</h1>
      <h1>{page.data.project_subtitle}</h1>
      {/* Display Projects slices = ProjectInfo + ProjectGallery */}
      <SliceZone slices={page.data.slices} components={components} />
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("project_page", params.uid)
    .catch(() => notFound());

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
