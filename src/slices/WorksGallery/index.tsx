"use client";
import { Content, isFilled } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import { useCallback, useEffect, useState } from "react";
import { ProjectPageDocument, WorksDocument } from "../../../prismicio-types";
import { createClient } from "@/prismicio";
import { motion, AnimatePresence } from "framer-motion";
import { PrismicNextImage } from "@prismicio/next";

const animCard = {
	initial: {
		opacity: 0,
		y: -30,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,

		transition: {
			duration: 0.3,
			ease: "easeOut",
			delay: 0.08 * (index + 1),
		},
	}),
};

/**
 * Props for `WorksGallery`.
 */
export type WorksGalleryProps = SliceComponentProps<Content.WorksGallerySlice>;

/**
 * Component for "WorksGallery" Slices.
 */
const WorksGallery = ({ slice }: WorksGalleryProps): JSX.Element => {
	// Fetch Page data and Projects
	const [page, setPage] = useState<WorksDocument<string> | null>(null);
	const [projects, setProjects] = useState<ProjectPageDocument<string>[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			const client = createClient();
			const page = await client.getSingle("works");
			const data = await Promise.all(
				slice.items.map((item) => {
					if (isFilled.contentRelationship(item.project_page) && item.project_page.uid) {
						return client.getByUID("project_page", item.project_page.uid);
					}
				})
			);
			setPage(page);

			setProjects(data.reverse() as ProjectPageDocument<string>[]);
			setFilteredWorks(data as ProjectPageDocument<string>[]);
		};

		fetchData();
	}, [ slice.items]);

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
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
			<section className="!px-8 md:px-0 pt-16 md:pt-[200px] max-w-[1440px] mx-auto min-h-screen">
				<div className="flex flex-col gap-16">
					<h1 className="font-soria text-7xl  w-1/3">{page ? page.data.page_title : ""}</h1>
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
						{filteredWorks.map((project) => (
							<motion.div key={project.data.project_name} animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout className="work-card relative w-full overflow-hidden flex flex-col gap-5">
								<div className="cover ">
									<PrismicLink document={project}>
										<PrismicNextImage width={582} height={472} field={project.data.hero_image} className="cover rounded-2xl" imgixParams={{ ar: "4:3", fit: "crop" }} />
									</PrismicLink>
								</div>
								<div className="flex flex-col ">
									<h2 className="uppercase text-blue font-medium text-xl ">{project.data.project_name}</h2>
									<h2 className="font-light text-lg text-dark">{project.data.project_service}</h2>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>
			</section>
		</section>
	);
};

export default WorksGallery;
