'use client'
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `CraftsGallery`.
 */
export type CraftsGalleryProps = SliceComponentProps<Content.CraftsGallerySlice>;

/**
 * Component for "CraftsGallery" Slices.
 */
const CraftsGallery = ({ slice }: CraftsGalleryProps): JSX.Element => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scales = [
    useTransform(scrollYProgress, [0, 1], [1, 4]),
    useTransform(scrollYProgress, [0, 1], [1, 5]),
    useTransform(scrollYProgress, [0, 1], [1, 6]),
    useTransform(scrollYProgress, [0, 1], [1, 5]),
    useTransform(scrollYProgress, [0, 1], [1, 6]),
    useTransform(scrollYProgress, [0, 1], [1, 8]),
    useTransform(scrollYProgress, [0, 1], [1, 9]),
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div ref={container} className="crafts-container">
        <div className="crafts-sticky">
          {slice.items.map((item, index) => (
            <motion.div
              key={index}
              style={{ scale: scales[index] }}
              className="crafts-el"
            >
              <div className="crafts-img-container">
                <PrismicNextImage
                  field={item.image}
                  
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftsGallery;
