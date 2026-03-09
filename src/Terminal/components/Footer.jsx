import React from 'react';
import { Send, Youtube, Github } from 'lucide-react';
import { socialLinks } from '../../Network/data';

const iconMap = {
    Send: <Send size={20} />,
    Youtube: <Youtube size={20} />,
    Github: <Github size={20} />
};

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-dark-bg pt-16 pb-8 px-6 mt-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="font-heading font-black text-2xl text-primary-light">
                        VLADOS
                    </div>
                    <p className="text-text-small text-xs">
                        Business Automation & Vibecoding
                    </p>
                </div>

                <div className="flex gap-6">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-body hover:text-white hover:bg-primary/20 hover:-translate-y-1 transition-all duration-300"
                            aria-label={link.name}
                        >
                            {iconMap[link.icon]}
                        </a>
                    ))}
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-text-small text-xs">
                <p>© {new Date().getFullYear()} Vlados Automation. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-primary-light transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-primary-light transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
