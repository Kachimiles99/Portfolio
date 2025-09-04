import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Rocket,
  Lock,
} from "lucide-react";

const Services = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const services = [
    {
      title: "Web Design & Branding",
      desc: "I create clean, modern, and responsive designs that capture your brand’s personality while providing an intuitive user experience. From wireframes and prototypes to full UI/UX layouts, I ensure your website not only looks great but also engages your audience effectively.",
      Icon: Palette,
    },
    {
      title: "Web development",
      desc: "Whether you need a business website, e-commerce store, or a custom web application, I build functional and scalable solutions tailored to your goals. Using the latest technologies and CMS platforms, I deliver websites that are fast, secure, and easy to manage.",
      Icon: Code2,
    },
    {
      title: "Website Management & Optimization",
      desc: "A great website doesn’t end at launch, I provide ongoing support, updates, and performance improvements to keep your site running smoothly. From speed optimization and redesigns to system integrations, I make sure your website grows with your business.",
      Icon: Rocket,
    },
    {
      title: "Marketing, Security & Hosting",
      desc: "Your online presence needs more than just a website, I help you get found, stay secure, and scale with confidence. With SEO strategies, analytics, hosting setup, SSL security, and reliable backup systems, I ensure your website is safe, optimized, and ready to convert visitors into customers.",
      Icon: Lock,
    },
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
      <section id="services" className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sectionTitle("Services", "What I can do for you")}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ title, desc, Icon }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/15 grid place-items-center mb-4">
                  <Icon className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
