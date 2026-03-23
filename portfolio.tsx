import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, ArrowRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import profilePhoto from "@/assets/profile-photo.jpg";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/muralidharan-k-041aa52b9", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Murali304-cmd", label: "GitHub" },
  { icon: ExternalLink, href: "https://leetcode.com/u/Murali_09/", label: "LeetCode" },
];

const Index = () => (
  <PageWrapper>
    <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[70vh] justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
          <img src={profilePhoto} alt="K. Muralidharan" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary animate-pulse" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center lg:text-left max-w-xl"
      >
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Hello, I'm</p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-3">
          Muralidharan K
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-6">
          Aspiring Data Analyst
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          An Information Technology student with strong interest in programming, data analysis, and software development. Skilled in C, Python, and Java, with knowledge of database management and data structures. Passion for building practical software solutions and solving real-world problems.
        </p>

        <div className="flex items-center gap-4 justify-center lg:justify-start mb-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-card hover:border-primary hover:text-primary transition-all"
              aria-label={s.label}
            >
              <s.icon size={20} />
            </a>
          ))}
        </div>

        <Link
          to="/story"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          Discover My Story <ArrowRight size={18} />
        </Link>
      </motion.div>
    </div>
  </PageWrapper>
);

export default Index;
