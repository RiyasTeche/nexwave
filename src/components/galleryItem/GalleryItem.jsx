import { useRef } from "react";
import "./galleryItem.scss";
import { motion, useInView } from "motion/react";

const GLOBELFOLDER = "./asset/";
const GalleryItem = ({ image }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false }); // 50% visible, only trigger once
  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <div
      className="galleryItem"
      ref={ref}
      style={{ gridRowEnd: `span ${Math.ceil(parseInt(image.height) / 100)}` }}
    >
      <motion.img
        src={`${GLOBELFOLDER}${image.img}`}
        alt=""
        variants={variants}
        animate={isInView ? "animate" : "initial"}
      />
    </div>
  );
};

export default GalleryItem;
