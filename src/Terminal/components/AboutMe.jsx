import React from 'react';
import { motion } from 'framer-motion';

export default function AboutMe() {
    return (
        <section id="about" className="py-20 px-6 relative max-w-7xl mx-auto">
            {/* Massive Header */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-heading text-5xl md:text-[8vw] font-black text-white text-center tracking-tighter mb-6 leading-none uppercase"
            >
                Обо мне
            </motion.h2>

            {/* Divider with Years */}
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex justify-between items-center text-text-small font-mono text-sm py-6 border-y border-white/10 mb-16 uppercase tracking-widest"
            >
                <span>2021</span>
                <span>2025</span>
            </motion.div>

            {/* Intro Text in Brackets */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-4xl mx-auto text-center mb-16 px-4"
            >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-snug md:leading-tight tracking-tight">
                    [ Я Владос Садыйков. Архитектор систем. Я создаю не просто ботов, а полноценные автономные экосистемы. Моя цель — избавить B2B-компании от рутины с помощью высокоточных алгоритмов и AI-агентов. ]
                </h3>
            </motion.div>

            {/* Central Large Photo */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-full max-w-md mx-auto aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden mb-16 border border-white/10 group cursor-pointer"
            >
                {/* Gradient Overlay for aesthetic consistency */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/20 mix-blend-overlay z-10 opacity-30 group-hover:opacity-0 transition-opacity duration-700"></div>
                {/* Fallback pattern bg if image doesn't load/exist */}
                <div className="absolute inset-0 bg-dark-card -z-10"></div>
                <img
                    src="/avatar.png"
                    alt="Владос Садыйков"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />
            </motion.div>

            {/* Secondary Text and CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="max-w-3xl mx-auto text-center"
            >
                <p className="text-text-body text-xl md:text-2xl leading-relaxed mb-12">
                    Используя n8n как фундамент для сложных бизнес-процессов, я выстраиваю магистрали данных с нулевой задержкой. Ваш бизнес должен работать как первоклассные швейцарские часы.
                </p>
                <a
                    href="#contact"
                    className="inline-flex items-center justify-center bg-transparent border-2 border-primary hover:bg-primary text-white font-bold py-5 px-12 rounded-full text-lg hover:-translate-y-[2px] shadow-[0_0_20px_rgba(123,97,255,0.1)] hover:shadow-[0_0_30px_rgba(123,97,255,0.4)] transition-all duration-300 uppercase tracking-widest text-sm"
                >
                    Связаться со мной
                </a>
            </motion.div>
        </section>
    );
}
