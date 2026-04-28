"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Repeat, GraduationCap, Ship, Lightbulb } from 'lucide-react';

const WhoShouldApply = () => {
    const audience = [
        {
            icon: Code,
            title: "Web3 Newcomers",
            desc: "Talented developers ready to dive into the Ethereum stack and decentralized protocols."
        },
        {
            icon: Repeat,
            title: "Web2 Engineers",
            desc: "Experienced senior engineers transitioning their skills from centralized to decentralized systems."
        },
        {
            icon: GraduationCap,
            title: "Curious Students",
            desc: "High-potential students exploring the frontier of Web3 and looking for a serious path."
        },
        {
            icon: Ship,
            title: "Active Builders",
            desc: "Developers currently shipping products who want to accelerate their growth and network."
        },
        {
            icon: Lightbulb,
            title: "Early Founders",
            desc: "Founders at the idea or MVP stage looking for a technical co-founder or initial validation."
        }
    ];

    return (
        <section id="who" className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">Who This <span className="gradient-text">Is For</span></h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-xl leading-relaxed">
                        We are looking for high-intent individuals ready to commit to the Ethereum ecosystem.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {audience.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-10 hover:border-secondary/50 transition-all group bg-white/[0.01]"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:bg-secondary/20 transition-all group-hover:rotate-6">
                                <item.icon className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">{item.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                    
                    {/* Final Card CTA Style */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="glass-card p-10 flex flex-col justify-center border-dashed border-white/20 bg-transparent text-center"
                    >
                        <h3 className="text-2xl font-black mb-4 tracking-tight uppercase text-white/30">You?</h3>
                        <p className="text-white/20 text-sm leading-relaxed italic">
                            If you have the drive to buidl, we want to see your application.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhoShouldApply;
