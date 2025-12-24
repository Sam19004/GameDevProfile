import React, { useState, useEffect } from 'react';
import { Menu, Gamepad2 } from 'lucide-react';
import { PROJECTS, USER_PROFILE, CAREER_ACHIEVEMENTS } from './constants';
import { Project, ViewState } from './types';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import BurgerMenu from './components/BurgerMenu';
import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';
import ContactSection from './components/ContactSection';

function App() {
  const [viewState, setViewState] = useState<ViewState>('HOME');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [viewState]);

  const featuredProjects = PROJECTS.filter(p => p.featured);
  const otherProjects = PROJECTS.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1F2937] font-sans selection:bg-[#0066FF] selection:text-white">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setViewState('HOME')}
          >
            <div className="bg-[#1F2937] p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-gray-900">
              PLAYER<span className="text-[#0066FF]">ONE</span>
            </span>
          </div>

          {/* Desktop Nav (Minimal) */}
          <div className="hidden md:flex items-center gap-6 mr-4">
             <button 
               onClick={() => setViewState('HOME')}
               className={`text-sm font-bold uppercase tracking-wide hover:text-[#0066FF] transition-colors ${viewState === 'HOME' ? 'text-[#0066FF]' : 'text-gray-500'}`}
             >
               Quests
             </button>
             <button 
               onClick={() => setViewState('PROFILE')}
               className={`text-sm font-bold uppercase tracking-wide hover:text-[#0066FF] transition-colors ${viewState === 'PROFILE' ? 'text-[#0066FF]' : 'text-gray-500'}`}
             >
               Stats
             </button>
          </div>

          {/* Burger Trigger */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </header>

      {/* Burger Menu Drawer */}
      <BurgerMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        user={USER_PROFILE}
        setViewState={setViewState}
      />

      {/* Main Content Area */}
      <main className="pb-20">
        
        {viewState === 'HOME' && (
          <div className="animate-in fade-in duration-500">
            <HeroSection user={USER_PROFILE} setViewState={setViewState} />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              {/* Featured Section */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-8 w-1 bg-[#FCD34D] rounded-full"></div>
                  <h2 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">Featured Quests</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {featuredProjects.map(project => (
                    <ProjectCard 
                      key={project.id} 
                      project={project} 
                      onClick={() => setSelectedProject(project)}
                      isFeatured={true}
                    />
                  ))}
                </div>
              </div>

              {/* Gallery Section */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-8 w-1 bg-[#0066FF] rounded-full"></div>
                  <h2 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">Quest Library</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherProjects.map(project => (
                    <ProjectCard 
                      key={project.id} 
                      project={project} 
                      onClick={() => setSelectedProject(project)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {viewState === 'PROFILE' && (
          <div className="animate-in slide-in-from-right-10 duration-500">
            <ProfileSection user={USER_PROFILE} achievements={CAREER_ACHIEVEMENTS} />
          </div>
        )}

        {viewState === 'CONTACT' && (
          <div className="animate-in zoom-in-95 duration-500">
            <ContactSection />
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 font-medium">© 2024 Player One Studios. All rights reserved.</p>
          <p className="text-gray-300 text-sm mt-2">Built with React + Tailwind + Caffeine</p>
        </div>
      </footer>

      {/* Modals */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

export default App;