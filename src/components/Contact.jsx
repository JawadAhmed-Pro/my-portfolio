import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Calendar, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus(null);

        emailjs.sendForm(
            'service_7g9dftr', // Service ID
            'template_m8irav4', // Template ID
            formRef.current,
            '3RlgURXHIszhQcvV5' // Public Key
        )
            .then((result) => {
                console.log(result.text);
                setIsLoading(false);
                setStatus('success');
                e.target.reset(); // Clear form
                setTimeout(() => setStatus(null), 5000); // Clear success message after 5s
            }, (error) => {
                console.log(error.text);
                setIsLoading(false);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="py-24 bg-gray-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-6">
                            Let's build something <span className="text-primary">amazing</span> together.
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                            Have a project in mind? Looking for a partner who can handle the technical heavy lifting?
                            I'm currently available for freelance work and open to discussing new opportunities.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:ja358288@gmail.com" className="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors group">
                                <div className="p-3 bg-blue-100 text-blue-600 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Email Me</p>
                                    <p className="text-base font-semibold text-secondary dark:text-white">ja358288@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://wa.me/923134792188" className="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors group">
                                <div className="p-3 bg-green-100 text-green-600 dark:bg-green-900/30 rounded-lg group-hover:scale-110 transition-transform">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">WhatsApp</p>
                                    <p className="text-base font-semibold text-secondary dark:text-white">+92 313 4792188</p>
                                </div>
                            </a>

                            <a href="https://calendly.com/jawadahmed" className="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors group">
                                <div className="p-3 bg-purple-100 text-purple-600 dark:bg-purple-900/30 rounded-lg group-hover:scale-110 transition-transform">
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Schedule a Call</p>
                                    <p className="text-base font-semibold text-secondary dark:text-white">calendly.com/jawadahmed</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-secondary dark:text-white">Send me a message</h3>

                        <form ref={formRef} onSubmit={sendEmail} className="space-y-4 relative z-10">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                                    <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                    <input type="email" name="user_email" required className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-sm font-medium text-gray-700 dark:text-gray-300">Interested Service</label>
                                <select name="service" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-600 dark:text-gray-300">
                                    <option>Mobile App Development</option>
                                    <option>AI Automation Agent</option>
                                    <option>Custom Software</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none dark:text-white" placeholder="Tell me about your project..."></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>Sending... <Loader2 className="animate-spin" size={18} /></>
                                ) : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>

                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-3 bg-green-100 text-green-700 rounded-lg flex items-center gap-2 text-sm font-medium"
                                >
                                    <CheckCircle size={18} /> Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}

                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-3 bg-red-100 text-red-700 rounded-lg flex items-center gap-2 text-sm font-medium"
                                >
                                    <XCircle size={18} /> Failed to send message. Please try again or email directly.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
