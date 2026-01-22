import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import ReactMarkdown from 'react-markdown';

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-light dark:bg-dark flex flex-col items-center justify-center text-secondary dark:text-white">
                <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
                <Link to="/" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Home
                </Link>
            </div>
        );
    }

    const nextImage = () => {
        if (project.imageType === 'gallery') {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }
    };

    const prevImage = () => {
        if (project.imageType === 'gallery') {
            setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
        }
    };

    return (
        <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light font-sans pb-24">
            <div className="container mx-auto px-6 pt-24">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700"
                >
                    {/* Gallery / Header Image */}
                    <div className="h-[400px] md:h-[600px] w-full relative bg-gray-100 dark:bg-gray-900 group">
                        {project.imageType === 'gallery' ? (
                            <>
                                <AnimatePresence mode='wait'>
                                    <motion.img
                                        key={currentImageIndex}
                                        src={project.images[currentImageIndex]}
                                        alt={project.title}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="w-full h-full object-contain"
                                    />
                                </AnimatePresence>

                                <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-primary transition-colors z-10 opacity-0 group-hover:opacity-100">
                                    <ArrowLeft size={24} />
                                </button>
                                <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-primary transition-colors z-10 opacity-0 group-hover:opacity-100">
                                    <ArrowRightIcon /> {/* Defined below to avoid conflict */}
                                </button>

                                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                                    {project.images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                                        />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className={`w-full h-full ${project.image}`} />
                        )}
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                            <div>
                                <h1 className="text-3xl md:text-5xl font-bold text-secondary dark:text-white mb-4">
                                    {project.title}
                                </h1>
                                <div className="flex flex-wrap gap-3">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                {project.links.demo !== '#' && (
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/25">
                                        Live Demo <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="md:col-span-2">
                                <h3 className="text-xl font-bold text-secondary dark:text-white mb-4 flex items-center gap-2">
                                    Project Overview
                                </h3>
                                <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    <ReactMarkdown
                                        components={{
                                            ul: ({ node, ...props }) => <ul className="list-disc pl-5 my-4 space-y-2" {...props} />,
                                            li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                                            strong: ({ node, ...props }) => <strong className="font-bold text-secondary dark:text-white" {...props} />
                                        }}
                                    >
                                        {project.fullDescription.replace(/^[ ]+/gm, '')}
                                    </ReactMarkdown>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-slate-900/50 p-6 rounded-xl border border-gray-100 dark:border-gray-800">
                                <h4 className="font-bold text-secondary dark:text-white mb-4">Tech Stack</h4>
                                <ul className="space-y-2">
                                    {project.tags.map(tag => (
                                        <li key={tag} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);
