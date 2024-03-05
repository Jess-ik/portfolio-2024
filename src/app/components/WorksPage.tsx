"use client";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useState } from "react";
import { ProjectPageDocument, WorksDocument } from "../../../prismicio-types";
import { PrismicLink } from "@prismicio/react";
import { motion, AnimatePresence } from "framer-motion";

export default function WorksPage() {
	// Fetch Page data and Projects
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

	// Handle Filtering
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

	return (
		<section className="!px-8 md:px-0 pt-16 md:pt-[200px] max-w-[1440px] mx-auto ">
			<div className="flex flex-col gap-16">
				<h1 className="font-soria text-7xl w-1/3">{page ? page.data.page_title : ""}</h1>
				{/* FILTER */}
				<div className="filters flex gap-8">
					<span onClick={() => setActiveFilter("*")} data-filter="*" className={activeFilter === "*" || activeFilter === "" ? "text-blue" : "text-grey "}>
						ALL
					</span>
					<span onClick={() => setActiveFilter("Design")} data-filter="Design" className={activeFilter === "Design" ? "text-blue" : "text-grey "}>
						DESIGN
					</span>
					<span onClick={() => setActiveFilter("Development")} data-filter="Development" className={activeFilter === "Development" ? "text-blue" : "text-grey "}>
						DEVELOPMENT
					</span>
				</div>
			</div>
			<motion.div layout className="mt-16 md:mt-8 mb-16 grid md:grid-cols-3 gap-8">
				<AnimatePresence>
					{/* Display Works slices = WorksGallery */}
					{filteredWorks.map((project, index) => {
						return (
							<PrismicLink key={index} document={project}>
								<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout className="work-card relative w-full overflow-hidden flex flex-col gap-5">
									<div className="cover ">
										<PrismicNextImage width={582} height={472} field={project.data.hero_image} className="cover rounded-2xl" imgixParams={{ ar: "4:3", fit: "crop" }} />
									</div>
									<div className="flex flex-col ">
										<h2 className="uppercase text-blue font-medium text-xl ">{project.data.project_name}</h2>
										<h2 className="font-light text-lg text-dark">{project.data.project_service}</h2>
									</div>
								</motion.div>
							</PrismicLink>
						);
					})}
				</AnimatePresence>
			</motion.div>
		</section>
	);
}
