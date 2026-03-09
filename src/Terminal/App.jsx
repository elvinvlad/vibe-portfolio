import React from 'react';
import { Header as Navigation } from '../components/ui/header-2';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import BottomCTA from './components/BottomCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col relative">
            {/* Global Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none -z-20 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm39 39V1H1v38h38z' fill='%237B61FF' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px',
                }}
            />

            <Navigation />

            <main className="flex-grow z-0">
                <Hero />
                <SocialProof />
                <Features />
                <BottomCTA />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}
