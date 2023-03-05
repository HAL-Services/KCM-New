import { useEffect, useState } from "react";
import ExpertiseImagedata from "../OfflineAPI/ExpertiseImagesData";
import "../styles/ExpertisePage.styles.scss";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { listMotion } from "../animation";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

function ProductImage({ value, onExpand, setValue }) {
  return (
    <motion.img
      src={value.url}
      alt=""
      onClick={() => onExpand(value)}
      className="related-product-image"
      layoutId={`product-${value.id}`}
    />
  );
}

export default function ExpertisePage() {
  const [serviceImage, setServiceImage] = useState(ExpertiseImagedata[2]);
  const [serviceImageId, setServiceImageId] = useState([
    ExpertiseImagedata[1],
    ExpertiseImagedata[0],
    ExpertiseImagedata[3],
    ExpertiseImagedata[4],
    ExpertiseImagedata[5],
    ExpertiseImagedata[6],
    ExpertiseImagedata[7],
  ]);
  const [currValue, setValue] = useState(0);
  // const [getWidth, setGetWidth] = useState(0);
  // const setDimension = () => {
  //   setGetWidth(window.innerWidth);
  //   if (getWidth <= 765) setRemoveClick(false);
  //   else setRemoveClick(true);
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", setDimension);

  //   return () => {
  //     window.removeEventListener("resize", setDimension);
  //   };
  // }, [getWidth]);

  function setAsPrimary(id) {
    const currentProductId = serviceImage;
    const newServiceImageId = [
      ...serviceImageId.filter((element) => element.id !== id.id),
      currentProductId,
    ];

    setServiceImage(id);
    setServiceImageId(newServiceImageId);
  }

  return (
    <div className="expertise-container">
      <div className="skills">
        <AnimateSharedLayout>
          <div className="primary-box-arrows">
            <span className="primary-box-icons">
              <BsFillArrowLeftCircleFill
                className="primary-box-icons-hover"
                onClick={() => setAsPrimary(currValue)}
              />
            </span>
            <div className="primary-container">
              <AnimatePresence>
                <div className="primary-container-image">
                  <motion.img
                    variants={listMotion}
                    initial="hidden"
                    animate="show"
                    key={serviceImage.id}
                    className="primary-product-image"
                    src={serviceImage.url}
                    alt="projects-img"
                  />
                </div>
                <motion.div
                  variants={listMotion}
                  initial="hidden"
                  animate="show"
                  className="skill_header"
                  key={serviceImage.id}
                >
                  {serviceImage.title}
                </motion.div>
              </AnimatePresence>
            </div>
            <span className="primary-box-icons">
              <BsFillArrowRightCircleFill className="primary-box-icons-hover" />
            </span>
          </div>
          <aside className="product-gallery">
            <AnimatePresence>
              {serviceImageId.map((element) => {
                return (
                  <ProductImage
                    value={element}
                    key={element.id}
                    onExpand={setAsPrimary}
                    title={element.title}
                    setValue={setValue}
                  />
                );
              })}
            </AnimatePresence>
          </aside>
        </AnimateSharedLayout>
      </div>
    </div>
  );
}
