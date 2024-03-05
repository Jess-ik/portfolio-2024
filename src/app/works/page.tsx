import { Metadata } from "next";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import WorksPage from "../components/WorksPage-old";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("works");
  const projects = await client.getAllByType("project_page");


  return (
    // <WorksPage />
    <SliceZone slices={page.data.slices} components={components} />
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("works");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
