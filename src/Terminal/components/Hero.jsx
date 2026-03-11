import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '../../Architecture/variants';
import { Typewriter } from '../../components/ui/typewriter';


export default function Hero() {
    return (
        <section className="relative min-h-screen pt-32 pb-20 px-6 flex items-center justify-center overflow-hidden">


            {/* Abstract Glows */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-6 relative z-10"
                >
                    <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-max mb-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs font-semibold text-primary-light tracking-wide uppercase">Vlados Automation</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUpVariant}
                        className="font-heading text-4xl md:text-5xl lg:text-h1 font-black leading-[1.2] text-white"
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                    >
                        Бизнес на автопилоте с
                        <span className="block min-h-[2.4em] mt-1 lg:mt-2">
                            <Typewriter
                                text={[
                                    "помощью AI",
                                    "умными агентами",
                                    "n8n и Make",
                                    "нулевой рутиной"
                                ]}
                                speed={70}
                                className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-accent"
                                waitTime={2500}
                                deleteSpeed={40}
                                cursorChar={"_"}
                                cursorClassName="text-primary-light ml-1"
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUpVariant}
                        className="text-text-body text-lg md:text-xl max-w-lg font-medium leading-relaxed"
                    >
                        Автоматизирую рутину, внедряю нейросети (n8n + Claude) и оптимизирую рабочие процессы для кратного роста вашего бизнеса.
                    </motion.p>

                    <motion.div variants={fadeUpVariant} className="pt-6 flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-light text-white font-bold py-4 px-8 rounded-2xl text-lg hover:-translate-y-[2px] shadow-[0_0_20px_rgba(123,97,255,0.4)] hover:shadow-[0_0_40px_rgba(123,97,255,0.6)] focus:outline-none transition-all duration-300 transform"
                        >
                            Free Consultation
                        </a>
                        <a
                            href="#features"
                            className="inline-flex items-center justify-center bg-white/5 text-white font-bold py-4 px-8 rounded-2xl text-lg hover:-translate-y-[2px] border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                            Узнать больше
                        </a>
                    </motion.div>
                </motion.div>

                {/* IDE Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 50, rotateY: 10, perspective: 1000 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative w-full z-10"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] rounded-full -z-10 animate-pulse"></div>
                    <div className="bg-[#0D0D1A] rounded-2xl md:rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden glass translate-y-[-1px]">
                        {/* Header */}
                        <div className="flex items-center px-4 py-3 bg-[#151525]/80 border-b border-white/5 backdrop-blur-md">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="mx-auto text-xs font-mono text-gray-400">agent.js</div>
                        </div>
                        {/* Body */}
                        <div className="p-6 md:p-8 text-sm md:text-base font-mono text-gray-300 leading-relaxed overflow-x-auto relative">
                            {/* Inner ambient glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>

                            <div className="relative z-10">
                                <div><span className="text-[#c678dd]">class</span> <span className="text-[#e5c07b]">VladosAgent</span> {'{'}</div>
                                <div className="ml-4"><span className="text-[#c678dd]">constructor</span>() {'{'}</div>
                                <div className="ml-8"><span className="text-[#e06c75]">this</span>.<span className="text-[#61afef]">skills</span> = [<span className="text-[#98c379]">'n8n'</span>, <span className="text-[#98c379]">'Claude'</span>, <span className="text-[#98c379]">'Make'</span>];</div>
                                <div className="ml-8"><span className="text-[#e06c75]">this</span>.<span className="text-[#61afef]">status</span> = <span className="text-[#98c379]">'Active'</span>;</div>
                                <div className="ml-4">{'}'}</div>
                                <div className="ml-4 mt-2"><span className="text-[#c678dd]">async</span> <span className="text-[#61afef]">automateTask</span>(<span className="text-[#d19a66]">task</span>) {'{'}</div>
                                <div className="ml-8"><span className="text-[#c678dd]">let</span> result = <span className="text-[#56b6c2]">await</span> ai.process(task);</div>
                                <div className="ml-8"><span className="text-[#c678dd]">return</span> result.<span className="text-[#61afef]">optimize</span>();</div>
                                <div className="ml-4">{'}'}</div>
                                <div>{'}'}</div>
                                <div className="mt-4"><span className="text-[#c678dd]">const</span> bot = <span className="text-[#c678dd]">new</span> <span className="text-[#e5c07b]">VladosAgent</span>();</div>
                                <div>bot.<span className="text-[#61afef]">automateTask</span>(<span className="text-[#98c379]">'business_processes'</span>);</div>
                                <div className="mt-6 flex items-center">
                                    <span className="text-primary mr-2 font-bold">{'>'}</span>
                                    <span className="text-gray-400">System optimized by 300%</span>
                                    <span className="w-2 h-4 bg-primary ml-1 animate-pulse"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
