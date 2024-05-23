import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import { FiArrowUpRight } from "react-icons/fi";


const About = () => {
  return (
    <div className="bg-rose-950">
      <TextParallaxContent
        imgUrl="https://victoria.mediaplanet.com/app/uploads/sites/44/2024/02/annie-spratt-0cgpyigyIkM-unsplash-888x500.png"
        subheading="All About"
        heading="Tuinue Wasichana."
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://www.unicef.org/senegal/sites/unicef.org.senegal/files/styles/hero_extended/public/UN0581280.jpg.webp?itok=wzNC6VXp"
        subheading="At Tuinue Wasichana"
        heading="Our Mission is..."
      >
        <ExampleContent2 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://www.afdb.org/sites/default/files/styles/1700x900/public/csm_a1-ss-malawi-water_190a45edc1.jpg?itok=EdgFoKio"
        subheading="Lending Out"
        heading="A Helping Hand By..."
      >
        <ExampleContent3 />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl text-yellow-800 font-bold md:col-span-4">
      A dedicated platform committed to supporting girls' education & well-being.
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-yellow-100 md:text-2xl">
      Girls from poor families in sub-Saharan countries often miss school due to a lack of sanitary towels, leading to significant learning losses. Our partner organization aims to provide not only sanitary towels but also clean water and sanitation facilities to ensure proper menstrual hygiene.


      </p>
      <p className="mb-8 text-xl text-yellow-100 md:text-2xl">
      We're building a platform to automate the donation process, allowing donors to set up regular donations to support our cause. Our platform will enable donors to choose a charity, set up automated repeat or one-time donations, and donate anonymously.

      </p>
    </div>
  </div>
);

const ExampleContent2 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl text-yellow-800 font-bold md:col-span-4">
      Creating a future that the Wasichana deserves.
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-yellow-100 md:text-2xl">
      At our donation platform, we are dedicated to empowering girls in sub-Saharan Africa 
      to continue their education with dignity and confidence.
      </p>
      <p className="mb-8 text-xl text-yellow-100 md:text-2xl">
       By allowing the girl child access to quality education and learning supplies
       to enable them have the ability to seize their potential and 
       unlock their future goals and make them powerful and prominent members of the society.
      </p>
    </div>
  </div>
);

const ExampleContent3 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl text-yellow-800 font-bold md:col-span-4">
      Providing sanitary essentials.
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-yellow-100 md:text-2xl">
      Access to clean water and sanitary essentials is a fundamental right, yet millions of women in 
      sub-Saharan Africa face daily challenges in managing their menstrual hygiene due to a lack of 
      these basic necessities.
      </p>
      <p className="mb-8 text-xl text-yellow-100 md:text-2xl">
      Join Us!
      Your support is vital in making these initiatives possible. Together, we can provide the tools and resources needed to ensure every woman can manage her menstrual health safely and with dignity.
      Join us in our mission to create a healthier, more equitable future for women in sub-Saharan Africa. Your contribution can make a significant difference in their lives, allowing them to thrive and reach their full potential.
      </p>
    </div>
  </div>
);

export default About;
