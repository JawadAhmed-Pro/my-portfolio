import { motion } from 'framer-motion';
import { Smartphone, Bot, Monitor } from 'lucide-react';

export default function Services() {
    const services = [
        {
            title: 'Mobile App Development',
            description: 'Custom Android/iOS apps with scalable architecture and buttery smooth UI. I bring your ideas to life on the small screen.',
            icon: <Smartphone size={32} />,
            color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
        },
        {
            title: 'AI Automation Agents',
            description: 'Intelligent agents that automate repetitive workflows, handle data processing, and enhance business productivity.',
            icon: <Bot size={32} />,
            color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400'
        },
        {
            title: 'Custom Software Solutions',
            description: 'Tailor-made web dashboards, internal tools, and SaaS platforms designed to solve your specific business challenges.',
            icon: <Monitor size={32} />,
            color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
        }
    ];

    return (
        <section id="services" className="py-24 bg-white dark:bg-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4"
                    >
                        Capabilities
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ transition: { delay: 0.1 }, once: true }}
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        I combine technical expertise with product thinking to deliver high-impact solutions.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color}`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-secondary dark:text-white">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
