import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-gray-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ transition: { delay: 0.1 }, once: true }}
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        A showcase of my recent work in Mobile Development, AI, and Software Engineering.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (project.imageType === 'gallery' && project.images.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
            }, 3000); // Change image every 3 seconds
            return () => clearInterval(interval);
        }
    }, [project.imageType, project.images]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group h-full flex flex-col"
        >
            <Link to={`/project/${project.id}`} className="block h-64 w-full relative overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-pointer">
                {project.imageType === 'gallery' ? (
                    <div className="w-full h-full relative">
                        <AnimatePresence mode='wait'>
                            <motion.img
                                key={currentImageIndex}
                                src={project.images[currentImageIndex]}
                                alt={project.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full object-contain bg-black"
                            />
                        </AnimatePresence>
                        {/* Dots indicator */}
                        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1 z-10">
                            {project.images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className={`w-full h-full ${project.image}`} />
                )}

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-white/90 rounded-full text-secondary font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Details <ArrowRight size={16} />
                    </span>
                </div>
            </Link>

            <div className="p-6 flex flex-col flex-grow">
                <Link to={`/project/${project.id}`}>
                    <h3 className="text-xl font-bold mb-2 text-secondary dark:text-white group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-md">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
