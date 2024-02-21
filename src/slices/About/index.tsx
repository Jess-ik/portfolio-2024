import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage field={slice.primary.image_design} />
      <>{slice.primary.main_text}</>
      <PrismicNextImage field={slice.primary.image_web} />
      <>{slice.primary.second_text}</>
      <PrismicNextImage field={slice.primary.image_craft} />
    </section>
  );
};

export default About;
