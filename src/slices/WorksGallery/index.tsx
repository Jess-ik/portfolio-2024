import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `WorksGallery`.
 */
export type WorksGalleryProps = SliceComponentProps<Content.WorksGallerySlice>;

/**
 * Component for "WorksGallery" Slices.
 */
const WorksGallery = ({ slice }: WorksGalleryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for works_gallery (variation: {slice.variation})
      Slices
    </section>
  );
};

export default WorksGallery;
