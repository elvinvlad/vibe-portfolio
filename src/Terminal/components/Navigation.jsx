import React from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../../Network/data';

export default function Navigation() {
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-2xl"
        >
            <div className="glass rounded-[2rem] px-8 py-4 flex items-center justify-between">
                <div className="font-heading font-black text-xl text-primary-light">
                    VLADOS
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-text-body hover:text-white hover:-translate-y-[1px] transition-all duration-300 text-sm font-semibold"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <a
                    href="#contact"
                    className="hidden md:inline-block bg-primary hover:bg-primary-light text-white font-bold py-2 px-6 rounded-full text-sm transition-all duration-300 hover:-translate-y-[2px]"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                >
                    Заказать
                </a>
            </div>
        </motion.nav>
    );
}
