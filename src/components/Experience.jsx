import { motion } from 'framer-motion';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

export default function Experience() {
    const experiences = [
        {
            year: '2023 - Present',
            title: 'Freelance Software Developer',
            company: 'Self-Employed',
            description: 'Delivered 10+ custom software solutions and Android apps for international clients. Specialized in AI automation tools.',
            type: 'work'
        },
        {
            year: 'Dec 2022 - Sep 2026',
            title: 'BS Information Technology',
            company: 'University of Sargodha',
            description: 'Completed 6 semesters with 3.70 CGPA.',
            type: 'education'
        },
        {
            year: '2025',
            title: 'Generative AI Apps Hackathon Winner 2025',
            company: 'Pak Angels Hackathon',
            description: 'Secured 1st place in national hackathon for creating an innovative generative AI application.',
            type: 'award'
        }
    ];

    const getIcon = (type) => {
        switch (type) {
            case 'work': return <Briefcase size={20} />;
            case 'education': return <GraduationCap size={20} />;
            case 'award': return <Award size={20} />;
            default: return <Briefcase size={20} />;
        }
    };

    return (
        <section id="experience" className="py-24 bg-white dark:bg-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4"
                    >
                        Experience & Education
                    </motion.h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {experiences.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line */}
                            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 -translate-x-1/2"></div>

                            <div className={`md:flex justify-between items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8`}>
                                <div className="flex-1"></div>

                                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-dark border-4 border-primary flex items-center justify-center text-primary z-10 -translate-x-1/2 transform">
                                    <div className="scale-75">{getIcon(item.type)}</div>
                                </div>

                                <div className="flex-1 bg-gray-50 dark:bg-slate-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                                    <span className="text-primary font-bold text-sm mb-2 block">{item.year}</span>
                                    <h3 className="text-lg font-bold text-secondary dark:text-white mb-1">{item.title}</h3>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">{item.company}</p>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
