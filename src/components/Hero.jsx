import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-light to-white dark:from-dark dark:to-secondary">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
                                Mobile App, Software & AI Automation Engineer
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold text-secondary dark:text-white leading-tight mb-6"
                        >
                            Building production-ready
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Android apps & AI agents</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed"
                        >
                            I create custom software solutions that help businesses automate tasks, save time, and scale efficiently. Specialized in Mobile App Development and AI Automation.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1"
                            >
                                View My Work <ArrowRight size={20} />
                            </a>

                            <a
                                href="/Jawad_Ahmed_Resume.pdf"
                                download="Jawad_Ahmed_Resume.pdf"
                                className="px-8 py-4 bg-white dark:bg-slate-800 text-secondary dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg font-medium hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                            >
                                Download Resume <Download size={20} />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative flex justify-center md:justify-end"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            {/* Decorative glow/blob */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>

                            <img
                                src={profileImg}
                                alt="Jawad Ahmed"
                                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl z-10"
                            />

                            {/* Floating badges (optional polish) */}
                            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 z-20 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-sm font-semibold text-secondary dark:text-white">Open for Work</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
