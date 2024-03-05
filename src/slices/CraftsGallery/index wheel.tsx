"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PrismicNextImage } from "@prismicio/next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrez le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/**
 * Props for `CraftsGallery`.
 */
export type CraftsGalleryProps = SliceComponentProps<Content.CraftsGallerySlice>;

/**
 * Component for "CraftsGallery" Slices.
 */
const CraftsGallery = ({ slice }: CraftsGalleryProps): JSX.Element => {
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fonction pour configurer la disposition des images dans la roue
    function setup() {
      const wheel = wheelRef.current;
      if (!wheel) return;

      const radius = wheel.offsetWidth / 2;
      const center = wheel.offsetWidth / 2;
      const total = slice.items.length;
      const sliceAngle = (2 * Math.PI) / total;

      // Configuration de chaque image dans la roue
      slice.items.forEach((item, i) => {
        const angle = i * sliceAngle;
        const x = center + radius * Math.sin(angle);
        const y = center + radius * Math.cos(angle);

        gsap.set(wheel.children[i], {
          rotation: angle,
          xPercent: -50,
          yPercent: -50,
          x,
          y,
        });
      });

      // Animation de rotation de la roue avec ScrollTrigger
      gsap.to(wheel, {
        rotate: () => -360,
        ease: "none",
        duration: total,
        scrollTrigger: {
          start: 0,
          end: "max",
          scrub: 1,
          snap: 1 / total,
          invalidateOnRefresh: true,
        },
      });
    }

    // Appelez la fonction de configuration et ajoutez un écouteur de redimensionnement
    setup();
    window.addEventListener("resize", setup);

    // Nettoyez l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("resize", setup);
    };
  }, [slice.items]);

  return (
    <section className="h-[600vh] w-screen bg-[#90836a]">
      <div className="crafts-header">
        <h1>
          human stories, <br />
          Superhuman audiovisuals
        </h1>
      </div>
      <section className="slider-section">
        <div ref={wheelRef} className="wheel border">
          {slice.items.map((item, index) => (
            <div className="wheel-card" key={index}>
              <PrismicNextImage field={item.image} className="object-cover"/>
            </div>
          ))}
        </div>
      </section>
      <div className="scroll-down">Scroll down</div>
    </section>
  );
};

export default CraftsGallery;
