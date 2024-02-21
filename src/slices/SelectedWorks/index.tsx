import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { CreateClient } from "@prismicio";
import { createClient } from "@/prismicio";

/**
 * Props for `SelectedWorks`.
 */
export type SelectedWorksProps = SliceComponentProps<Content.SelectedWorksSlice>;

/**
 * Component for "SelectedWorks" Slices.
 */
const SelectedWorks = async ({ slice }: SelectedWorksProps): Promise<JSX.Element> => {
	const client = createClient();

	const selectedworks = await Promise.all(
		slice.items.map((item) => {
			if (isFilled.contentRelationship(item.project_card) && item.project_card.uid) {
				return client.getByUID("project_card", item.project_card.uid);
			}
		})
	);

	return (
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
			<div className="h-screen w-screen bg-dark flex flex-col justify-center">
				<h2 className="text-light font-soria text-[10vh] px-14 pb-14">{slice.primary.section_title}</h2>
				<div className="flex">
					{selectedworks.map((item, index) => {
						if (item && item.data.selected) {
							return (
                <div key={index}  className="ml-14 flex flex-col gap-5">
                  <div>
                    <PrismicNextImage width={582} height={472} field={item.data.hero_image} className="rounded-2xl" imgixParams={{ar: "4:3", fit: "crop"}}/>
                    </div>
									<h2 className="font-light text-xl text-beige">{item.data.project_name}</h2>
								</div>
							);
						}
						return null
					})}
				</div>
			</div>
		</section>
	);
};

export default SelectedWorks;
