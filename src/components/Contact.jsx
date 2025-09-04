import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          e.target.reset();
           setTimeout(() => setStatus(""), 4000);
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send message. Please try again.");
           setTimeout(() => setStatus(""), 4000);
        }
      );
  };

  return (
    <div>
      <section id="contact" className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sectionTitle("Contact", "Let’s build something great together")}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Form */}
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-zinc-300">Name</label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Full name"
                    required
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div>
                  <label className="text-sm text-zinc-300">Email</label>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="you@example.com"
                    required
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-zinc-300">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project inquiry"
                  required
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
              <div>
                <label className="text-sm text-zinc-300">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-2.5 font-semibold text-zinc-900 shadow-lg shadow-emerald-500/30 transition hover:translate-y-[-2px] hover:brightness-110 cursor-pointer"
              >
                Send Message <Mail className="h-4 w-4" />
              </button>
              {status && (
                <p className="mt-3 text-sm text-emerald-400">{status}</p>
              )}
            </motion.form>

            {/* Socials */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-lg font-semibold">Email</h4>
                <a
                  href="mailto:agohdennis99@gmail.com"
                  className="mt-1 inline-block text-zinc-300 hover:text-emerald-400 transition"
                >
                  agohdennis99@gmail.com
                </a>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-lg font-semibold">Find me online</h4>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="https://github.com/Kachimiles99"
                    target="blank"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
                  >
                    <Github className="h-4 w-4" /> Github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dikachi-agoh-5492531ba/"
                    target="blank"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
                  >
                    <Linkedin className="h-4 w-4" /> Linkedin
                  </a>
                  <a
                    href="https://www.instagram.com/kachi_miless/"
                    target="blank"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
                  >
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
