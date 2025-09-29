import { motion } from "framer-motion";
import {ExternalLink} from "lucide-react";
import Techsters from "../assets/techstersScreenshot.png";
import MettiesBeauty from "../assets/MettiesScreenshot.png";
import Fourwell from "../assets/FourwellScreenshot.png";
import KachiHotel from "../assets/KachiHotelScreenshot.png";
import MVQI from "../assets/MVQIScreenshot.png";
import PMA from "../assets/PMAScreenshot.png"

const Portfolio = () => {
  const projects = [
    {
      title: "Techsters Digital Agency",
      image: Techsters,
      description:
        "Built a modern and responsive website for Techsters Digital Agency using WordPress and Elementor, showcasing services, portfolio, and contact options with a clean and user-friendly design",
      tags: ["Wordpress", "SEO", "Elementor"],
      links: {
        demo: "https://techsters.com.ng/",
      },
    },
    {
      title: "Metties Beauty",
      image: MettiesBeauty,
      description:
        "Created Metties Beauty, an e-commerce store built with WordPress, Elementor, and WooCommerce, designed for a seamless and stylish online shopping experience.",
      tags: ["Wordpress", "E-commerce", "woo-commerce", "payment integration"],
      links: {
        demo: "https://mettiesbeauty.com/",
      },
    },
    {
      title: "Fourwall Magazine Store",
      image: Fourwell,
      description:
        "Developed Fourwall Magazine Store, an online platform that makes it easy for readers to explore, discover, and purchase magazines. Designed with WordPress and Elementor, it delivers a clean, responsive, and engaging experience that connects readers with the stories they love",
      tags: ["Woo-commerce", "Elementor", "Wordpress"],
      links: {
        demo: "https://store.fourwallmag.com.ng/",
      },
    },
    {
      title: "Hotel Management UI",
      image: KachiHotel,
      description:
        "A modern web app built with React (Vite) and Tailwind CSS, featuring an admin dashboard and a customer booking portal. Designed for smooth hotel operations and an easy guest experience.",
      tags: ["React", "Tailwind CSS"],
      links: {
        demo: "https://kachimiles99.github.io/Hotel-management/",
      },
    },

    {
      title: "MVQI Pageant",
      image: MVQI,
      description:
        "Developed the MVQI beauty pageant website, allowing fans to view contestants and securely vote for their favorites through a sleek and responsive design.",
      tags: ["PHP", "JavaScript", "Voting system", "Payment Integration"],
      links: {
        demo: "https://mostvibrantqueenintl.com/",
      },
    },
    {
      title: "Premium Model App",
      image: PMA,
      description:
        "Developed the Premium Model App, a platform that connects models with agencies, making it simple for agencies to discover, connect, and collaborate with talent through a modern and user-friendly interface.",
      tags: ["Custom Login", "PHP", "JavaScript"],
      links: {
        demo: "https://www.premiummodelsapp.com/",
      },
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
    const fadeUp = {
      hidden: { opacity: 0, y: 24 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

  return (
    <div>
      <section id="portfolio" className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sectionTitle("Portfolio", "A selection of recent projects")}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl"
              >
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-55 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-300/80">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-slate-200/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <a
                      href={p.links.demo}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold hover:bg-white/20"
                    >
                      Visit site <ExternalLink className="h-4 w-4" />
                    </a>
                   
                  </div>
                </div>
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-cyan-400/20 blur-2xl" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
