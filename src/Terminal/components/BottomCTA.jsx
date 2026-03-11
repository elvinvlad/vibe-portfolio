import React from 'react';
import { motion } from 'framer-motion';

export default function BottomCTA() {
    return (
        <section className="py-20 px-6 relative min-h-[50vh] flex items-center justify-center">



            {/* Moving Light Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0, -100, 0],
                    y: [0, -50, -100, -50, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 -translate-y-1/2"
            />
            <motion.div
                animate={{
                    x: [0, -100, 0, 100, 0],
                    y: [0, 50, 100, 50, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] -z-10 -translate-y-1/2"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="max-w-5xl mx-auto w-full p-8 md:p-16 text-center relative z-10"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -z-10 -translate-x-1/2 translate-y-1/2" />

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    <span className="text-sm font-semibold text-accent tracking-wide">Масштабирование</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 md:mb-8 leading-[1.1] md:leading-[1.1]"
                >
                    Готовы оптими&shy;зировать ваш бизнес?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-text-body text-xl mb-12 max-w-2xl mx-auto"
                >
                    Оставьте заявку на бесплатную консультацию. Мы обсудим ваши задачи и подберем лучшее AI-решение для роста показателей.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-accent text-white font-bold py-5 px-12 rounded-full text-xl hover:-translate-y-[2px] shadow-[0_0_30px_rgba(123,97,255,0.3)] hover:shadow-[0_0_50px_rgba(123,97,255,0.6)] transition-all duration-300 transform group"
                    >
                        Начать работу
                        <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
