import { motion } from "framer-motion";
import { Code, ShoppingCart, PenTool, Database,MonitorCheck,Globe, GitBranch, TrendingUp} from "lucide-react";

const skills = [
  {
    icon: <MonitorCheck className="w-8 h-8 text-emerald-400" />,
    title: "Frontend Development",
    desc: "Building responsive, dynamic, and interactive user interfaces.",
  },
  {
    icon: <Database className="w-8 h-8 text-emerald-400" />,
    title: "Backend Development",
    desc: "Creating scalable APIs and managing databases efficiently.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-emerald-400" />,
    title: "UI/UX Design",
    desc: "Designing intuitive experiences with a focus on user satisfaction.",
  },
  {
    icon: <Code className="w-8 h-8 text-emerald-400" />,
    title: "Problem Solving",
    desc: "Writing clean, maintainable code and solving real-world problems.",
  },
  {
    icon: <Globe className="w-8 h-8 text-emerald-400" />,
    title: "Wordpress",
    desc: "Developing and customizing websites using the Wordpress CMS platform",
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-emerald-400" />,
    title: "E-commerce Development",
    desc: "Developing online stores with smooth checkout and payment integrations",
  },
  {
    icon: <GitBranch className="w-8 h-8 text-emerald-400" />,
    title: "Git and version control",
    desc: "Managing project versions and collaboration",
  },

  {
    icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
    title: "SEO",
    desc: "Improving organic reach and website visibility",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">My Skills</h2>
          <p className="text-zinc-400 mt-2">
            A blend of design, development, and problem-solving abilities.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition group shadow-md"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition">
                {skill.title}
              </h3>
              <p className="text-zinc-400 text-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
