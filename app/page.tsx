import React from 'react';
import { 
  ExternalLink, Mail, Code2, User, Briefcase, 
  ChevronRight, Terminal, Cpu, Globe, Sparkles, 
  Palette, Layers, Phone, MessageCircle,
  Database, Layout, HardDrive, GitBranch,
  Smartphone, Rocket, Zap, Flame, Box, Code
} from 'lucide-react';

// สร้าง GitHub Icon ด้วย SVG โดยตรงเพื่อป้องกันปัญหา Import Error ใน IDE
const GithubCustomIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const App = () => {
  const projects = [
    {
      title: "Habit Tracker App",
      description: "A habit-tracking application built to master state management and Supabase integration.",
      tags: ["Next.js", "Supabase", "TypeScript"],
      color: "bg-blue-50 text-blue-600 border-blue-100",
      link: "https://badhabbit.vercel.app/?fbclid=IwY2xjawRUGItleHRuA2FlbQIxMQBicmlkETFGN1RqYjZaVUpJaU5Gdmhyc3J0YwZhcHBfaWQBMAABHof6dyzrd05wvWFBF56AHF4_KNBNn7W7WyfWjHyLdd4kdp0pIhL5fy_clFr4_aem_IC3Hi7VCzxsa5HI8DPKJTQ",
      github: "https://github.com/ChaiyasitKAKA/badhabbit"
    },
    {
      title: "Food Tracker System",
      description: "A food logging system focused on clean UI/UX and fundamental CRUD operations.",
      tags: ["React", "Tailwind CSS", "Node.js"],
      color: "bg-purple-50 text-purple-600 border-purple-100",
      link: "https://next-food-tracker-app-x2a2.vercel.app/",
      github: "https://github.com/Jirawad/rn-run-tracker-app"
    },
    {
      title: "Songkhla Travel Guide",
      description: "A destination guide mobile application for Songkhla province, focusing on tourism and local experience.",
      tags: ["React Native", "Expo", "Mobile App"],
      color: "bg-orange-50 text-orange-600 border-orange-100",
      link: null,
      github: "https://github.com/Jirawad/rn-6652410033-thai-provice-app"
    }
  ];

  const techStack = [
    {
      category: "Languages",
      description: "Core programming languages I use daily",
      accent: "blue",
      items: [
        { name: "TypeScript", icon: <Code size={18} /> },
        { name: "Python", icon: <Terminal size={18} /> },
        { name: "Java", icon: <Box size={18} /> },
        { name: "PHP", icon: <Code2 size={18} /> },
        { name: "Dart", icon: <Zap size={18} /> }
      ]
    },
    {
      category: "Frameworks & Libs",
      description: "Tools for building modern applications",
      accent: "purple",
      items: [
        { name: "Next.js", icon: <Globe size={18} /> },
        { name: "React", icon: <Zap size={18} /> },
        { name: "Tailwind CSS", icon: <Layout size={18} /> },
        { name: "Expo", icon: <Rocket size={18} /> },
        { name: "React Native", icon: <Smartphone size={18} /> }
      ]
    },
    {
      category: "Backend & DB",
      description: "Infrastructure and data management",
      accent: "emerald",
      items: [
        { name: "SQL", icon: <Database size={18} /> },
        { name: "NoSQL", icon: <HardDrive size={18} /> },
        { name: "Supabase", icon: <Zap size={18} /> },
        { name: "Firebase", icon: <Flame size={18} /> }
      ]
    },
    {
      category: "Tools & Design",
      description: "Workflow and UI/UX software",
      accent: "rose",
      items: [
        { name: "Git", icon: <GitBranch size={18} /> },
        { name: "GitHub", icon: <GithubCustomIcon size={18} /> },
        { name: "Figma", icon: <Palette size={18} /> },
        { name: "Canva", icon: <Palette size={18} /> }
      ]
    }
  ];

  /**
   * แก้ไขปัญหาตัวแดงโดยการระบุประเภทข้อมูล (any) ให้กับพารามิเตอร์ accent
   * และระบุประเภทข้อมูลให้กับ object classes เพื่อให้ TypeScript ยอมรับการเข้าถึงด้วย dynamic key
   */
  const getAccentClass = (accent: any) => {
    const classes: any = {
      blue: "text-blue-600 bg-blue-50 border-blue-100",
      purple: "text-purple-600 bg-purple-50 border-purple-100",
      emerald: "text-emerald-600 bg-emerald-50 border-emerald-100",
      rose: "text-rose-600 bg-rose-50 border-rose-100"
    };
    return classes[accent] || classes.blue;
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-800 selection:bg-yellow-200 font-sans">
      {/* --- Background Decorative Blobs --- */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-100/30 blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-pink-100/30 blur-[100px]"></div>
      </div>

      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white shadow-lg font-bold text-xs uppercase tracking-tighter">JS</div>
            <span className="text-lg font-bold tracking-tight text-slate-900 uppercase tracking-widest">Jirawad</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#tech-stack" className="hover:text-blue-600 transition-colors">Tech Stack</a>
            <a href="#contact" className="px-5 py-2 bg-slate-900 hover:bg-blue-600 text-white rounded-full transition-all">Contact</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* --- Hero Section --- */}
        <section className="mb-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-in fade-in slide-in-from-left-8 duration-1000 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-xs font-bold mb-8 italic uppercase tracking-wider">
              <Sparkles size={14} className="text-yellow-500" /> Student Developer & Intern Candidate
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-slate-900 leading-[1.1]">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Digital Solutions</span> <br /> with Passion.
            </h1>
            <p className="text-xl text-slate-500 max-w-xl mb-10 leading-relaxed font-medium mx-auto md:mx-0">
              I'm a third-year Digital Technology and Innovation student at SAU, focused on building impactful applications across web and mobile platforms.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#projects" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center gap-2">
                View My Projects <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="mb-32 scroll-mt-24">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Featured Projects</h2>
            <div className="h-px flex-1 bg-slate-200"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white border border-slate-200 rounded-[32px] p-8 hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className={`mb-6 p-4 w-fit rounded-2xl ${project.color} transition-transform group-hover:scale-110`}>
                  <Layers size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{project.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8 text-[10px] font-bold">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap items-center gap-y-4 gap-x-6 pt-6 border-t border-slate-50">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors group/link"
                  >
                    GitHub Repo 
                    <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                  
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Live Demo <Sparkles size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Tech Stack Section (Updated UI) --- */}
        <section id="tech-stack" className="mb-32 scroll-mt-24">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Tech Stack<span className="text-blue-600">.</span></h2>
            <div className="h-px flex-1 bg-slate-200"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {techStack.map((group, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-8 rounded-[40px] hover:border-slate-200 hover:shadow-xl transition-all duration-500">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">{group.category}</h3>
                  <div className={`text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-widest ${getAccentClass(group.accent)}`}>
                    Expertise
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-8 font-medium italic">{group.description}</p>
                
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className={`flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default bg-white border-slate-100 hover:border-${group.accent}-200 group`}
                    >
                      <div className={`p-1.5 rounded-lg transition-colors bg-slate-50 text-slate-400 group-hover:${getAccentClass(group.accent)}`}>
                        {item.icon}
                      </div>
                      <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="text-center scroll-mt-24">
          <div className="max-w-4xl mx-auto py-20 px-8 rounded-[48px] bg-gradient-to-tr from-blue-600 to-purple-600 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10 uppercase tracking-tight">Interested in working together?</h2>
            <p className="text-blue-100 mb-12 text-lg font-medium relative z-10 opacity-90 max-w-2xl mx-auto">
              I'm currently looking for internship opportunities to grow my skills and contribute to exciting projects.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-6 relative z-10 px-4">
              <a 
                href="mailto:s6652410033@sau.ac.th" 
                className="flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl transition-all hover:scale-105 shadow-xl min-w-[240px] justify-center"
              >
                <Mail size={20} /> s6652410033@sau.ac.th
              </a>
              
              <a 
                href="tel:0957030247" 
                className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold rounded-2xl transition-all hover:bg-white/20 hover:scale-105 shadow-xl min-w-[240px] justify-center"
              >
                <Phone size={20} /> 095-703-0247
              </a>
              
              <a 
                href="https://line.me/ti/p/~m_2017" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-[#06C755] text-white font-bold rounded-2xl transition-all hover:brightness-110 hover:scale-105 shadow-xl min-w-[240px] justify-center"
              >
                <MessageCircle size={20} /> Line ID: m_2017
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 bg-white border-t border-slate-100 text-center relative z-10">
        <p className="text-slate-900 font-bold mb-1 uppercase tracking-tight">Jirawad Sadjayat</p>
        <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest text-[10px]">
          Digital Technology and Innovation Student • SAU
        </p>
        <p className="mt-4 text-slate-300 text-[10px] font-medium uppercase tracking-tighter">
          © {new Date().getFullYear()} ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
};

export default App;