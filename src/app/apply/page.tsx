"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    experience: '',
    whyJoin: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application Data:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 pt-32 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-12 text-center max-w-xl w-full border-primary/20"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase">Application Sent!</h2>
            <p className="text-white/60 mb-8 text-lg">
              Thanks for applying for BUIDL @ Devcon. We'll review your profile and get back to you soon.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background pb-24">
      <Navbar />
      <div className="container mx-auto px-6 pt-32">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter uppercase">
              Apply for <span className="gradient-text">BUIDL</span>
            </h1>
            <p className="text-white/50 text-xl font-medium">
              Join the Ethereum-native builder pipeline.
            </p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 md:p-12 space-y-8 border-white/5"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/40 uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Vitalik Buterin"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="vitalik@ethereum.org"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-white/40 uppercase tracking-widest ml-1">GitHub Profile</label>
              <input 
                required
                name="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="https://github.com/vbuterin"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-white/40 uppercase tracking-widest ml-1">Experience Level</label>
              <textarea 
                required
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows={3}
                placeholder="Briefly describe your technical background and what you've built..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary outline-none transition-all resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-white/40 uppercase tracking-widest ml-1">Why do you want to join?</label>
              <textarea 
                required
                name="whyJoin"
                value={formData.whyJoin}
                onChange={handleChange}
                rows={5}
                placeholder="What are your goals for BUIDL @ Devcon?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary outline-none transition-all resize-none"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-black py-6 rounded-2xl font-black text-2xl hover:bg-white/90 transition-all flex items-center justify-center gap-3 group"
            >
              Submit Application
              <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </main>
  );
}
