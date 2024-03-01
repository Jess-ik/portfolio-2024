import { Metadata } from "next";
import { createClient } from "@/prismicio";
import WorksPage from "../components/WorksPage";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("works");
  const projects = await client.getAllByType("project_page");


  return (
    <WorksPage />
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
