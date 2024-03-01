"use client";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useState } from "react";
import { ProjectPageDocument, WorksDocument } from "../../../prismicio-types";
import { PrismicLink } from "@prismicio/react";
import { motion, AnimatePresence } from "framer-motion";

export default function WorksPage() {
	const [page, setPage] = useState<WorksDocument<string> | null>(null);
	const [projects, setProjects] = useState<ProjectPageDocument<string>[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			const client = createClient();
			const page = await client.getSingle("works");
			const projects = await client.getAllByType("project_page");
			setPage(page);
			setProjects(projects);
		};

		fetchData();
	}, []);

	const [filteredWorks, setFilteredWorks] = useState<ProjectPageDocument<string>[]>([]);
	const [activeFilter, setActiveFilter] = useState<string>("");

	useEffect(() => {
		if (activeFilter === "*") {
			setFilteredWorks(projects);
			return;
		}
		const filtering = projects?.filter((project) => project.data.category?.includes(activeFilter));
		setFilteredWorks(filtering || []);
	}, [activeFilter, projects, setFilteredWorks]);
	console.log(activeFilter);
	return (
		<section className="pt-[180px] max-w-[1440px] mx-auto ">
			<a href="">Back to all projects</a>
			<h1 className="font-soria text-7xl w-1/3">{page ? page.data.page_title : ""}</h1>
			{/* FILTER */}
			<div className="flex gap-8">
				<span onClick={() => setActiveFilter("*")} data-filter="*" className={activeFilter === "*" || activeFilter === "" ? "text-dark" : "text-grey font-light"}>
					ALL
				</span>
				<span onClick={() => setActiveFilter("Design")} data-filter="Design" className={activeFilter === "Design" ? "text-dark" : "text-grey font-light"}>
					DESIGN
				</span>
				<span onClick={() => setActiveFilter("Development")} data-filter="Development" className={activeFilter === "Development" ? "text-dark" : "text-grey font-light"}>
					DEVELOPMENT
				</span>
			</div>
			<motion.div layout className="grid grid-cols-3">
				<AnimatePresence>
					{/* Display Works slices = WorksGallery */}
					{filteredWorks.map((project, index) => {
						return (
							<PrismicLink key={index} document={project}>
								<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout className="relative w-[560px] overflow-hidden flex flex-col gap-5">
									<PrismicNextImage width={582} height={472} field={project.data.hero_image} className="rounded-2xl" imgixParams={{ ar: "4:3", fit: "crop" }} />
									<h2 className="font-light text-xl text-beige">{project.data.project_name}</h2>
								</motion.div>
							</PrismicLink>
						);
					})}
				</AnimatePresence>
			</motion.div>
		</section>
	);
}
