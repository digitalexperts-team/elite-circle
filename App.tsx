import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import PosterModal from './components/PosterModal';
import CommunityView from './components/CommunityView';
import BottomNav from './components/BottomNav';
import BusinessCTA from './components/BusinessCTA';
import { MOCK_ITEMS } from './constants';
import { Item, Tier } from './types';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['All', 'Dining', 'Beauty', 'Fashion', 'Stays', 'Jewellery', 'Clinics', 'Lifestyle', 'Events'];

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'All': "Today's Curated Experiences",
  'Dining': "Restaurants and Cafés",
  'Beauty': "Premium salons and wellness.",
  'Fashion': "Boutiques and designers.",
  'Stays': "Hotels and boutique stays.",
  'Jewellery': "Gold and diamond stores.",
  'Clinics': "Skin and aesthetic care.",
  'Lifestyle': "Home and living brands.",
  'Events': "Experiences and Workshops"
};

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTab, setActiveTab] = useState<'home' | 'community'>('home');
  
  const { scrollY } = useScroll();
  
  // Parallax for background elements
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const filteredItems = activeCategory === 'All' 
    ? MOCK_ITEMS 
    : MOCK_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-charcoal-950 text-slate-100 selection:bg-gold-500/30 font-sans pb-24">
      <Header />
      
      {/* Background Visuals */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
         {/* Top Spotlight */}
         <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px]" />
         
         {/* Moving Gradient blobs */}
         <motion.div 
            style={{ y: bgY }}
            className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]" 
         />
      </div>

      <main className="relative z-10 pt-16 md:pt-24 px-4 max-w-3xl mx-auto min-h-[80vh]">
        
        {/* Tab Content */}
        <AnimatePresence mode="wait">
          
          {/* HOME TAB */}
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Section */}
              <motion.div 
                style={{ opacity: heroOpacity }}
                className="mb-8 md:mb-12 text-center max-w-3xl mx-auto mt-8"
              >
                <div className="inline-block mb-3 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-900/10 backdrop-blur-md">
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gold-400 uppercase">
                    Private Collection
                  </span>
                </div>
                <h2 className="font-serif text-[40px] md:text-[64px] text-white mb-6 leading-tight">
                  Kochi's <span className="italic text-gold-300">Curated</span> Experiences
                </h2>
              </motion.div>

              {/* Section Tabs */}
              <div className="sticky top-16 md:top-24 z-40 bg-charcoal-950/90 backdrop-blur-lg -mx-4 px-4 py-4 mb-8 border-b border-white/5 md:bg-transparent md:backdrop-blur-none md:border-none md:static md:mb-12">
                <div className="flex items-center space-x-6 overflow-x-auto pb-1 scrollbar-hide md:justify-center md:flex-wrap md:gap-y-4">
                  {CATEGORIES.map((cat) => (
                    <button 
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`font-serif text-lg md:text-xl whitespace-nowrap transition-all duration-300 ${
                        activeCategory === cat 
                          ? 'text-gold-200 border-b border-gold-400 pb-1 md:scale-105' 
                          : 'text-slate-500 hover:text-slate-300 pb-1'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Feed Header */}
              <div className="flex items-center space-x-4 mb-8 md:mb-12">
                 <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent flex-1" />
                 <span className="font-serif text-xl md:text-2xl italic text-slate-200 whitespace-nowrap">
                   {CATEGORY_DESCRIPTIONS[activeCategory] || activeCategory}
                 </span>
                 <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent flex-1" />
              </div>

              {/* Staggered Feed Grid */}
              <div className="columns-1 md:columns-2 gap-6 space-y-6">
                 {/* Unified Render Loop for Mixed Layout */}
                 {filteredItems.map((item, idx) => (
                   <div className="break-inside-avoid mb-6" key={item.id}>
                     <Card item={item} onClick={setSelectedItem} index={idx} />
                   </div>
                 ))}
                 
                 {filteredItems.length === 0 && (
                   <div className="col-span-full py-20 text-center text-slate-500 font-serif w-full">
                      No items found in this category yet.
                   </div>
                 )}
              </div>

              {/* Loading Indicator */}
              <div className="mt-16 mb-8 flex flex-col items-center justify-center space-y-4">
                 <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent" />
                 <span className="text-[10px] tracking-widest text-slate-600 uppercase hover:text-gold-400 cursor-pointer transition-colors">Load More</span>
              </div>
              
              {/* Partner CTA */}
              <BusinessCTA />
              
            </motion.div>
          )}

          {/* COMMUNITY TAB */}
          {activeTab === 'community' && (
             <CommunityView onItemClick={setSelectedItem} />
          )}

        </AnimatePresence>

      </main>

      {/* Floating Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Modal Layer */}
      <PosterModal 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </div>
  );
};

export default App;