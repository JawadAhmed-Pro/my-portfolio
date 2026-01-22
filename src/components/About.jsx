import { motion } from 'framer-motion';
import { Code, Database, Server, Terminal, Cpu, Globe } from 'lucide-react';

export default function About() {


    return (
        <section id="about" className="py-24 bg-white dark:bg-dark">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-secondary dark:text-white">
                            About Me
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            I am a passionate <span className="text-primary font-semibold">Software & AI Automation Developer</span> dedicated to building efficient, scalable solutions. With a strong foundation in both mobile development and artificial intelligence, I bridge the gap between complex algorithms and user-friendly applications.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                            My journey involves creating production-ready Android apps, developing intelligent AI agents using LangChain and OpenAI, and architecting custom software aimed at business automation. I constantly learn new technologies to stay ahead in the rapidly evolving tech landscape.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-gray-700">
                                <h3 className="font-bold text-2xl text-primary mb-1">3+</h3>
                                <p className="text-sm text-gray-500">Years Experience</p>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-gray-700">
                                <h3 className="font-bold text-2xl text-primary mb-1">10+</h3>
                                <p className="text-sm text-gray-500">Projects Completed</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6 text-secondary dark:text-white">
                            Tech Stack & Skills
                        </h3>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white dark:bg-card-dark border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden group"
                        >
                            {/* Decorative background glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500"></div>

                            <div className="space-y-8 relative z-10">
                                {[
                                    {
                                        category: "Programming Languages",
                                        items: ["Python", "C++", "Java", "Kotlin", "JavaScript", "PHP", "HTML & CSS"]
                                    },
                                    {
                                        category: "AI & Machine Learning",
                                        items: ["Machine Learning", "Deep Learning", "TensorFlow", "Generative AI", "LangChain", "OpenAI APIs", "Computer Vision", "Edge AI", "Human-in-the-Loop"]
                                    },
                                    {
                                        category: "Mobile App Development",
                                        items: ["Android Development (Java/Kotlin)", "UI/UX Implementation", "Local Storage & Security"]
                                    },
                                    {
                                        category: "Backend & Web",
                                        items: ["RESTful APIs", "React.js", "Modular Architecture"]
                                    },
                                    {
                                        category: "Databases",
                                        items: ["MySQL", "SQL / NoSQL"]
                                    },
                                    {
                                        category: "Automation & Engineering",
                                        items: ["AI Automation", "Agentic AI Systems", "Custom Software Development"]
                                    }
                                ].map((group, index) => (
                                    <div key={index}>
                                        <h4 className="font-bold text-secondary dark:text-white mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                            {group.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {group.items.map((item, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1.5 bg-gray-50 dark:bg-dark/50 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300 cursor-default"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
