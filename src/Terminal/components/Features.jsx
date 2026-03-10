import React from 'react';
import { motion } from 'framer-motion';
import { FeaturesSectionWithHoverEffects } from '../../components/blocks/feature-section-with-hover-effects';

export default function Features() {
    return (
        <section id="features" className="py-16 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4"
                    >
                        Преимущества Автоматизации
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-text-body text-lg max-w-2xl mx-auto"
                    >
                        Фокусируйтесь на стратегии, пока AI берет на себя рутину.
                    </motion.p>
                </div>

                <FeaturesSectionWithHoverEffects />
            </div>
        </section>
    );
}
