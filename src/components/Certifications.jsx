import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";

import { fadeIn, textVariant } from "../utils/motion";

import { certifications } from "../constants";


const CertificateCard = ({ index, name, verifyLink, image, issuer, date, credId }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", 0.5 * index, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <img
          src={image}
          alt={`issued-by-${name}`}
          className="w-30 h-30 cursor-pointer"
          onClick={() => window.open(verifyLink, "_blank")}
        />


        <div className="mt-1 ">
          <p className="text-white tracking-wider text-[18px]">{name}</p>
          <div className="mt-7 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">@</span>{issuer}
              </p>
              <p className="mt-1 text-secondary text-[12px]">
                Crendential ID: {credId} issued on {date}
              </p>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Certifications = () => {
  return (
    <div
      className="mt-12 bg-black-100 rounded-[20px]"
    >
      <div className={`${styles.padding}
      bg-tertiary rounded-2xl min-h[300px]
      `}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}></p>
          <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>

        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-10 pb-14 flex flex-wrap gap-7`}>
        {certifications.map((certificate, index) => (
          <CertificateCard
            key={certificate.name}
            index={index}
            {...certificate}
          />
        ))}

      </div>
    </div>
  )
}

export default SectionWrapper(Certifications, "");