import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProjectGallery`.
 */
export type ProjectGalleryProps =
  SliceComponentProps<Content.ProjectGallerySlice>;

/**
 * Component for "ProjectGallery" Slices.
 */
const ProjectGallery = ({ slice }: ProjectGalleryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_gallery (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectGallery;
