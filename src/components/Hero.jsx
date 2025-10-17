import { motion } from "framer-motion";
import portfolioProfile from "../assets/profilePic.jpg"
import SplitText from "../utils/SplitText";

const Hero = () => {
  const YOUR_NAME = "Dikachi Agoh";
  const ROLE = "Web Designer & Developer"; 

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div>
      <section id="home" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
              >
                Available for freelance
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              </motion.p>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-4 text-4xl leading-tight font-extrabold sm:text-5xl md:text-6xl flex flex-wrap items-baseline"
              >
                <span>I’m&nbsp;</span>
                <SplitText
                  text={YOUR_NAME}
                  className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                />
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-3 text-xl text-zinc-300"
              >
                {ROLE}
              </motion.p>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <button
                  onClick={() => scrollToId("contact")}
                  className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-zinc-900 shadow-lg shadow-emerald-500/30 transition hover:translate-y-[-2px] hover:brightness-110 cursor-pointer"
                >
                  Hire Me
                </button>
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId("portfolio");
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-zinc-100 transition hover:bg-white/10 hover:translate-y-[-2px]"
                >
                  View Work
                </a>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-transparent blur-2xl rounded-full" />
              <img
                src={portfolioProfile}
                alt="Profile"
                className="w-full h-80 md:h-[28rem] object-cover rounded-3xl border border-white/10 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
