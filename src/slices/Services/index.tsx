import { getIconComponent } from "@/app/components/Icons";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services = ({ slice }: ServicesProps): JSX.Element => {
  return (
	<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{slice.primary && (
		<div className={clsx(
  "w-screen flex flex-col py-32 px-14",
  slice.variation === "right" && "items-end text-right"
)}>
			<h3 className="font-soria text-[120px] uppercase max-w-3xl leading-[6rem]">{slice.primary.service}</h3>
  <ul className="flex gap-6 uppercase">{Array.isArray(slice.primary.skills) && slice.primary.skills.map((skill, index) => <li key={index}>{skill?.text}</li>)}</ul>
  <ul className="flex gap-6 uppercase">{Array.isArray(slice.primary.tools) && slice.primary.tools.map((tool, index) => <li key={index}><i>{getIconComponent(tool?.text)}</i></li>)}</ul>
		</div>
	)}
</section>
  );
};

export default Services;
