import React from 'react';
import { motion } from 'framer-motion';
import { trustedBy } from '../../Network/data';

export default function SocialProof() {
    return (
        <section className="py-16 px-6 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
                <p className="font-heading text-sm font-bold text-text-small tracking-widest uppercase mb-4 md:mb-0">
                    Trusted by
                </p>

                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {trustedBy.map((company, index) => (
                        <motion.div
                            key={company.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex items-center gap-2 font-bold text-xl text-text-body hover:text-white transition-colors"
                        >
                            <span className="text-2xl">{company.logo}</span>
                            <span>{company.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
