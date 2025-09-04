import { motion } from "framer-motion";

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const statBlocks = [
    { label: "Projects Completed", value: "30+" },
    { label: "Happy Clients", value: "100%" },
    { label: "Years Experience", value: "5+" },
  ];
  const sectionTitle = (title, subtitle) => (
    <div className="max-w-2xl mx-auto text-center mb-12">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-3 text-zinc-400"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
  return (
    <div>
      <section id="about" className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sectionTitle("About", "A little about me")}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop"
                alt="About profile"
                className="w-full h-80 object-cover rounded-3xl border border-white/10"
              />
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              <p className="text-zinc-300">
                Hi, I’m Agoh Dikachi, a web designer and developer who loves
                turning ideas into beautiful, functional websites. I design
                clean, responsive, and user-friendly interfaces while building
                fast, secure, and scalable web solutions. As the Co-Founder of 
                 <b> Techsters Digital Agency</b>, I’ve worked with businesses and
                individuals to create websites that combine creativity with
                technology, delivering real results. From branding and UI/UX
                design to custom development, optimization, and online growth
                strategies, I help clients build an impactful online presence.
                I’m always learning, experimenting, and staying updated with the
                latest trends so every project I take on feels fresh,
                innovative, and results-driven.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {statBlocks.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                  >
                    <div className="text-2xl font-extrabold text-emerald-400">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs text-zinc-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
