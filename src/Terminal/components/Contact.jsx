import React from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-16 px-6 relative flex flex-col items-center min-h-[60vh]">
            <div className="max-w-2xl mx-auto w-full z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30"
                    >
                        <Send className="text-white w-8 h-8" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-heading text-4xl md:text-5xl font-black text-white mb-4"
                    >
                        Свяжитесь со мной
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-text-body text-xl max-w-lg mx-auto"
                    >
                        Заполните форму ниже, и я свяжусь с вами в течение часа для обсуждения деталей.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative group w-full"
                >
                    {/* Animated Gradient Border Layer */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-[#9E88FF] to-accent rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                    <form
                        className="relative bg-dark-card border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl glass flex flex-col gap-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <label className="block text-white font-semibold mb-3 tracking-wide" htmlFor="name">Имя</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                    <User className="text-gray-400 w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-[#0A0A14]/80 border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 shadow-inner"
                                    placeholder="Как к вам обращаться?"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-white font-semibold mb-3 tracking-wide" htmlFor="email">Telegram или Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                    <Mail className="text-gray-400 w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    id="email"
                                    className="w-full bg-[#0A0A14]/80 border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 shadow-inner"
                                    placeholder="@username или почта"
                                />
                            </div>
                        </div>

                        <div className="mb-2">
                            <label className="block text-white font-semibold mb-3 tracking-wide" htmlFor="message">Сообщение</label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full bg-[#0A0A14]/80 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none shadow-inner"
                                placeholder="Расскажите коротко о вашей задаче или процессах..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-accent text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 text-lg hover:-translate-y-[2px] transition-all duration-300 shadow-[0_10px_30px_rgba(123,97,255,0.3)] hover:shadow-[0_15px_40px_rgba(123,97,255,0.5)] cursor-pointer mt-2"
                        >
                            <span>Отправить заявку</span>
                            <ArrowRight size={20} className="animate-pulse" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
