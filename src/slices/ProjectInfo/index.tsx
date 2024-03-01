import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProjectInfo`.
 */
export type ProjectInfoProps = SliceComponentProps<Content.ProjectInfoSlice>;

/**
 * Component for "ProjectInfo" Slices.
 */
const ProjectInfo = ({ slice }: ProjectInfoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_info (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectInfo;
