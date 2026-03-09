import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Mic, Workflow, Search, TrendingUp } from 'lucide-react';
import { features } from '../../Network/data';
import { fadeUpVariant, staggerContainer } from '../../Architecture/variants';

const iconMap = {
    Bot: <Bot size={24} />,
    Sparkles: <Sparkles size={24} />,
    Mic: <Mic size={24} />,
    Workflow: <Workflow size={24} />,
    Search: <Search size={24} />,
    TrendingUp: <TrendingUp size={24} />
};

export default function Features() {
    return (
        <section id="features" className="py-32 px-6 relative">
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

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUpVariant}
                            className="bg-dark-card border border-white/5 rounded-[2rem] p-8 hover:-translate-y-[2px] hover:border-primary/30 transition-all duration-300 group shadow-lg hover:shadow-primary/10"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                                {iconMap[feature.icon]}
                            </div>
                            <h3 className="font-heading text-xl font-bold text-accent mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-text-body leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
