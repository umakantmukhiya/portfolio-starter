import React from "react";
//countUp
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20
        lg:gap-y-0 h-screen"
        >
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about 
              bg-contain bg-no-repeat
              h-[540px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Computer Science MTech. Student at NIT Durgapur.
            </h3>
            <p className="mb-6">
              <ul>
                <li>
                  Highly analytical and driven problem solver with a passion for
                  optimization and finding the most efficient solutions.{" "}
                </li>
                <li>
                  Always seeking new challenges to expand my knowledge and
                  skills.
                </li>
                <li>
                  Passionate about tackling complex issues and finding
                  innovative solutions that drive positive results.
                </li>
              </ul>
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-ternary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={2} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experiance
                </div>
              </div>

              <div>
                <div className="text-[40px] font-ternary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={2} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Project <br />
                  Completed<span>&#128514;</span>
                </div>
              </div>

              <div>
                <div className="text-[40px] font-ternary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={2} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Client
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">
                <a href="https://wa.link/gjyo89">Contact Me</a>
              </button>
              <a
                href="https://github.com/umakantmukhiya?tab=repositories"
                className="text-gradient btn-link"
              >
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
