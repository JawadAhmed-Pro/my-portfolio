import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-dark border-t border-gray-100 dark:border-gray-800 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Jawad Ahmed
                        </h3>
                        <p className="text-gray-500 mt-2">Building digital experiences that matter.</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/JawadAhmed-Pro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/jawad-ahmed-073610325" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:beyalpha88@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Jawad Ahmed. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
