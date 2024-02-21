import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Landing`.
 */
export type LandingProps = SliceComponentProps<Content.LandingSlice>;

/**
 * Component for "Landing" Slices.
 */
const Landing = ({ slice }: LandingProps): JSX.Element => {
	return (
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
			<div className="h-screen w-screen bg-beige flex flex-col items-center justify-center text">
				<h1 className="font-soria text-[10vw]">{slice.primary.title}</h1>
				<p className="max-w-xl text-center font-light md:text-xl lg:text-2xl leading-8">{slice.primary.intro}</p>
			</div>
		</section>
	);
};

export default Landing;
