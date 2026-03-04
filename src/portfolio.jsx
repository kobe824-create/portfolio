import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Shield, Download, Menu, X, ArrowUpRight, CheckCircle2, FileCode, Database, Globe, Server, Terminal, Moon, Sun, Smartphone, Cpu, Layers, ChevronDown, Sparkles, Zap, Trophy, Users, Heart } from 'lucide-react';

const roles = ['Full-Stack Developer', 'Blockchain Engineer', 'ML Enthusiast', 'Mobile Developer'];

const SectionReveal = ({ id, children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useCallback(node => {
    if (!node) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); obs.disconnect(); }
    }, { threshold: 0.05 });
    obs.observe(node);
  }, []);
  return (
    <div id={id} ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [typedText, setTypedText] = useState('');
  const heroRef = useRef(null);

  const roleRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    const type = () => {
      const currentRole = roles[roleRef.current];
      if (!deletingRef.current) {
        if (charRef.current < currentRole.length) {
          charRef.current++;
          setTypedText(currentRole.substring(0, charRef.current));
        } else {
          setTimeout(() => { deletingRef.current = true; }, 2000);
        }
      } else {
        if (charRef.current > 0) {
          charRef.current--;
          setTypedText(currentRole.substring(0, charRef.current));
        } else {
          deletingRef.current = false;
          roleRef.current = (roleRef.current + 1) % roles.length;
        }
      }
    };
    const interval = setInterval(type, deletingRef.current ? 40 : 80);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(s => {
        const el = document.getElementById(s);
        if (el) { const r = el.getBoundingClientRect(); return r.top <= 100 && r.bottom >= 100; }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const skills = {
    frontend: { icon: Code2, color: 'from-zinc-500 to-zinc-400', items: ['JavaScript', 'React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'HTML5 & CSS3'] },
    backend: { icon: Server, color: 'from-zinc-600 to-zinc-500', items: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'JWT Auth', 'PHP'] },
    'ai & data': { icon: Cpu, color: 'from-zinc-700 to-zinc-600', items: ['Python', 'Machine Learning', 'Data Analysis', 'TensorFlow'] },
    blockchain: { icon: Layers, color: 'from-zinc-800 to-zinc-700', items: ['Solidity', 'Remix IDE', 'Smart Contracts', 'Web3.js'] },
    mobile: { icon: Smartphone, color: 'from-zinc-500 to-zinc-600', items: ['React Native', 'Flutter', 'Mobile UI/UX', 'Cross-Platform'] },
    database: { icon: Database, color: 'from-zinc-600 to-zinc-700', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
    tools: { icon: Terminal, color: 'from-zinc-500 to-zinc-400', items: ['Git & GitHub', 'Linux', 'VS Code', 'Postman', 'Docker'] }
  };

  const projects = [
    {
      id: 0, title: 'Academic Operations', subtitle: 'School Management System',
      description: 'A robust, full-stack school management system designed to modernize and streamline academic administration using the MERN stack. Digitalizes the entire lifecycle of student records, centralized archive, and collaborative management.',
      challenge: 'Digitalizing manual record-keeping with professional PDF/Image repositories and Role-Based Access Control (RBAC) to eliminate fragmentation.',
      tech: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js', 'CSV Export'],
      features: ['Unified School Admin', 'Digital Performance Tracking', 'Integrated Document Management', 'RBAC & Audit Logging', 'Automated Visualization'],
      github: '#', demo: null, status: 'production', year: '2024',
      impact: 'Eliminated risk of record loss and improved search efficiency by 100%'
    },
    {
      id: 1, title: 'FDF Aside', subtitle: 'Tontine (Ikibina)',
      description: 'A comprehensive fintech solution designed to digitize the management of traditional savings groups (Ibimina). The platform transitions groups from manual, error-prone paper ledgers to a secure, real-time digital environment.',
      challenge: 'Built a secure authentication system with role-based access control while ensuring transaction integrity and scalability for enterprise use.',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Express', 'Tailwind'],
      features: ['Dynamic Contribution Tracking', 'Automated Penalty Engine', 'Flexible Member Management', 'Live Meeting & Attendance Analytics'],
      github: 'https://github.com/kobe824-create/fdf_aside', demo: null, status: 'production', year: '2025',
      impact: 'FDF Aside acts as a digital secretary for savings collectives.'
    },
    {
      id: 2, title: 'School Stock Management', subtitle: 'Educational Resource System',
      description: 'An inventory management solution designed for educational institutions to track materials, handle teacher requests, and manage approval workflows efficiently.',
      challenge: 'Designed a flexible approval system that accommodates different organizational hierarchies while maintaining data consistency.',
      tech: ['Vue.js', 'Node.js', 'MySQL', 'Express', 'Bootstrap'],
      features: ['Request management', 'Approval workflows', 'Stock tracking', 'Role-based access'],
      github: 'https://github.com/kobe824-create/stock_managementWithReact', demo: null, status: 'production', year: '2024',
      impact: 'Reduced material request processing time by 60%'
    }
  ];


  const stats = [
    { icon: Trophy, value: '3+', label: 'Years Coding', color: 'text-amber-400' },
    { icon: Zap, value: '5+', label: 'Projects Built', color: 'text-blue-400' },
    { icon: Layers, value: '7+', label: 'Technologies', color: 'text-purple-400' },
    { icon: Users, value: '100%', label: 'Passion', color: 'text-emerald-400' }
  ];

  const dm = darkMode;
  const toggleDarkMode = () => setDarkMode(!darkMode);



  return (
    <div className={`${dm ? 'bg-[#0a0f1c] text-white' : 'bg-[#f8fafc] text-slate-900'} font-sans antialiased transition-colors duration-500 min-h-screen overflow-x-hidden`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');
        * { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; scroll-behavior: smooth; }
        code, .mono { font-family: 'JetBrains Mono', monospace; }
        .gradient-text { background: linear-gradient(135deg, #ffffff, #a1a1aa, #52525b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .glass { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.05); }
        .glass-light { background: rgba(255,255,255,0.9); backdrop-filter: blur(20px); border: 1px solid rgba(0,0,0,0.05); }
        .glow-border { position: relative; }
        .glow-border::before { content: ''; position: absolute; inset: -1px; border-radius: inherit; padding: 1px; background: linear-gradient(135deg, #ffffff, #71717a, #3f3f46); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; opacity: 0; transition: opacity 0.4s; }
        .glow-border:hover::before { opacity: 1; }
        .hero-gradient { background: radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 50%); }
        .hero-gradient-light { background: radial-gradient(ellipse at 20% 50%, rgba(0,0,0,0.02) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(0,0,0,0.01) 0%, transparent 50%); }
        .cursor-blink { animation: blink 1s step-end infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .float-anim { animation: float 6s ease-in-out infinite; }
        @keyframes pulse-glow { 0%,100%{box-shadow:0 0 20px rgba(255,255,255,0.1)} 50%{box-shadow:0 0 30px rgba(255,255,255,0.2)} }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .skill-chip { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .skill-chip:hover { transform: translateY(-2px) scale(1.05); }
        .project-card-premium { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .project-card-premium:hover { transform: translateY(-4px); }
        @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? dm ? 'bg-[#0a0f1c]/90 backdrop-blur-xl border-b border-white/5' : 'bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-sm'
        : 'bg-transparent'
        }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="relative group">
              <span className="text-xl font-bold gradient-text">IH</span>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full`}></span>
            </a>
            <div className="hidden md:flex items-center gap-1">
              {['About', 'Skills', 'Projects', 'Contact'].map((item, idx) => (
                <a key={item} href={`#${item.toLowerCase()}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === item.toLowerCase()
                    ? dm ? 'text-white bg-white/10' : 'text-black bg-black/5'
                    : dm ? 'text-zinc-400 hover:text-white hover:bg-white/5' : 'text-zinc-600 hover:text-black hover:bg-black/5'
                    }`}>
                  <span className="mono text-[10px] text-zinc-500 mr-1.5">{String(idx + 1).padStart(2, '0')}</span>{item}
                </a>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button onClick={toggleDarkMode} className={`p-2.5 rounded-xl transition-all ${dm ? 'hover:bg-white/10 text-zinc-400 hover:text-white' : 'hover:bg-zinc-100 text-zinc-600 hover:text-black'}`} aria-label="Toggle theme">
                {dm ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
              </button>
              <a href="mailto:iradukunda1happy1@gmail.com" className="px-5 py-2 text-sm font-extrabold rounded-xl bg-white text-black hover:bg-zinc-200 transition-all duration-300 hover:-translate-y-0.5">
                LET'S TALK
              </a>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden p-2.5 rounded-xl ${dm ? 'hover:bg-white/10' : 'hover:bg-slate-100'}`}>
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className={`md:hidden ${dm ? 'bg-[#0a0f1c]/95 backdrop-blur-xl border-t border-white/5' : 'bg-white/95 backdrop-blur-xl border-t border-slate-200'}`}>
            <div className="px-6 py-4 space-y-1">
              {['About', 'Skills', 'Projects', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                  className={`block py-3 px-4 rounded-xl text-sm font-medium transition-all ${dm ? 'text-slate-300 hover:text-white hover:bg-white/5' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'}`}>{item}</a>
              ))}
              <button onClick={toggleDarkMode} className={`flex items-center gap-2 py-3 px-4 rounded-xl text-sm font-medium w-full ${dm ? 'text-slate-300 hover:text-white hover:bg-white/5' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'}`}>
                {dm ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}{dm ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className={`relative min-h-screen flex items-center px-6 pt-20 ${dm ? 'hero-gradient' : 'hero-gradient-light'}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="absolute rounded-full blur-3xl opacity-20 float-anim"
              style={{
                width: `${200 + i * 100}px`, height: `${200 + i * 100}px`, left: `${20 + i * 25}%`, top: `${10 + i * 20}%`,
                background: ['rgba(59,130,246,0.3)', 'rgba(139,92,246,0.2)', 'rgba(6,182,212,0.25)'][i], animationDelay: `${i * 2}s`
              }} />
          ))}
        </div>
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-zinc-300">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Available for opportunities
                </div>
                <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1]">
                  <span className={dm ? 'text-white' : 'text-black'}>Iradukunda</span><br />
                  <span className="gradient-text">Happy</span>
                </h1>
                <div className="flex items-center gap-2 text-xl lg:text-2xl font-medium">
                  <span className={dm ? 'text-zinc-500' : 'text-zinc-400'}>&gt;</span>
                  <span className="mono text-white">{typedText}</span>
                  <span className={`cursor-blink text-white font-light`}>|</span>
                </div>
              </div>
              <p className={`text-base lg:text-lg leading-relaxed max-w-lg ${dm ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Building secure, scalable applications across web, mobile, blockchain and AI.
                Based in Rwanda, crafting meaningful solutions through code.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-extrabold rounded-xl bg-white text-black hover:bg-zinc-200 transition-all duration-300 hover:-translate-y-0.5">
                  VIEW PROJECTS <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="#" className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${dm ? 'glass hover:bg-white/10' : 'glass-light hover:bg-zinc-100'}`}>
                  <Download className="w-4 h-4" /> RESUME
                </a>
              </div>
              <div className="flex items-center gap-3 pt-2">
                {[
                  { icon: Github, href: 'https://github.com/kobe824-create', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:iradukunda1happy1@gmail.com', label: 'Email' }
                ].map(s => (
                  <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 ${dm ? 'glass hover:bg-white/10 text-zinc-400 hover:text-white' : 'glass-light hover:bg-zinc-100 text-zinc-500 hover:text-black'}`} aria-label={s.label}>
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-white/5 blur-2xl opacity-40 float-anim"></div>
                <img src="/My_image.jpeg" alt="Iradukunda Happy"
                  className={`relative w-72 h-72 lg:w-[380px] lg:h-[380px] object-cover rounded-3xl ${dm ? 'ring-1 ring-white/10' : 'ring-1 ring-black/10 shadow-2xl'}`} />
                <div className={`absolute -bottom-5 -right-5 px-5 py-3 rounded-2xl ${dm ? 'glass' : 'glass-light shadow-lg'}`}>
                  <p className="text-sm font-bold gradient-text">3+ YEARS</p>
                  <p className={`text-xs ${dm ? 'text-zinc-400' : 'text-zinc-500'}`}>EXPERIENCE</p>
                </div>
                <div className={`absolute -top-3 -left-3 p-3 rounded-2xl float-anim ${dm ? 'glass' : 'glass-light shadow-lg'}`} style={{ animationDelay: '1s' }}>
                  <Sparkles className="w-5 h-5 text-zinc-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-16 lg:pt-20">
            <a href="#about" className={`p-2 rounded-full animate-bounce ${dm ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`}>
              <ChevronDown className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <SectionReveal id="stats-bar" className={`py-8 px-6 ${dm ? 'bg-[#0d1224] border-y border-white/5' : 'bg-white border-y border-slate-100'}`}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-4 justify-center">
              <div className={`p-3 rounded-xl ${dm ? 'bg-white/5' : 'bg-slate-50'}`}><s.icon className={`w-6 h-6 ${s.color}`} /></div>
              <div><p className="text-2xl font-black">{s.value}</p><p className={`text-xs font-medium ${dm ? 'text-slate-500' : 'text-slate-500'}`}>{s.label}</p></div>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* About Section */}
      <section id="about" className={`py-24 px-6 ${dm ? 'bg-[#0a0f1c]' : 'bg-[#f8fafc]'}`}>
        <SectionReveal id="about-content">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">About Me</p>
                  <h2 className="text-4xl lg:text-5xl font-black">Building with <span className="gradient-text">Purpose</span></h2>
                </div>
                <div className={`space-y-4 text-base leading-relaxed ${dm ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <p>My journey into software development began with curiosity about how technology shapes our world. That curiosity evolved into a disciplined commitment to building applications that are functional, secure, and maintainable.</p>
                  <p>As a developer from Rwanda, I've expanded beyond full-stack web development into blockchain, machine learning, and mobile development — always with a security-first mindset and clean architecture principles.</p>
                  <p>Beyond writing code, I'm committed to ethical technology development, building solutions that respect user privacy and serve genuine human needs.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: Shield, title: 'Security First', desc: 'JWT, bcrypt, OWASP practices', color: 'from-zinc-500 to-zinc-400' },
                    { icon: Code2, title: 'Clean Code', desc: 'Scalable, maintainable architecture', color: 'from-zinc-700 to-zinc-600' }
                  ].map((c, i) => (
                    <div key={i} className={`p-5 rounded-2xl glow-border transition-all duration-300 hover:-translate-y-1 ${dm ? 'glass' : 'glass-light shadow-sm hover:shadow-md'}`}>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-3`}>
                        <c.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold mb-1">{c.title}</h3>
                      <p className={`text-sm ${dm ? 'text-zinc-400' : 'text-zinc-600'}`}>{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 space-y-4">
                <div className={`p-6 rounded-2xl ${dm ? 'glass' : 'glass-light shadow-sm'}`}>
                  <h3 className="font-bold mb-5 flex items-center gap-2"><Sparkles className="w-4 h-4 text-zinc-400" /> Quick Facts</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Location', value: 'Kigali, Rwanda' },
                      { label: 'Experience', value: '3+ Years Coding' },
                      { label: 'Focus', value: 'Full-Stack & Blockchain' },
                      { label: 'Availability', value: 'Open to opportunities', dot: true }
                    ].map((f, i) => (
                      <div key={i}>
                        <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${dm ? 'text-zinc-600' : 'text-zinc-400'}`}>{f.label}</p>
                        <div className="flex items-center gap-2">
                          {f.dot && <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>}
                          <p className="text-sm font-semibold">{f.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-white text-black">
                  <Globe className="w-6 h-6 mb-3 opacity-80" />
                  <h3 className="font-bold mb-2">Remote Ready</h3>
                  <p className="text-sm text-zinc-700">Open to internships and junior developer roles worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-24 px-6 ${dm ? 'bg-[#0d1224]' : 'bg-white'}`}>
        <SectionReveal id="skills-content">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 space-y-3 text-center">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">Technical Expertise</p>
              <h2 className="text-4xl lg:text-5xl font-black">Skills & <span className="gradient-text">Technologies</span></h2>
              <p className={`max-w-2xl mx-auto ${dm ? 'text-zinc-400' : 'text-zinc-600'}`}>Technologies I've been working with across the full development spectrum</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {Object.entries(skills).map(([category, data]) => (
                <div key={category} className={`p-5 rounded-2xl glow-border transition-all duration-300 hover:-translate-y-1 ${dm ? 'glass' : 'glass-light shadow-sm hover:shadow-md'}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${data.color} flex items-center justify-center`}>
                      <data.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold capitalize text-sm">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data.items.map(skill => (
                      <span key={skill} className={`skill-chip px-3 py-1.5 rounded-lg text-xs font-semibold cursor-default ${dm ? 'bg-white/5 text-zinc-300 hover:bg-white/10 border border-white/5 hover:border-white/20' : 'bg-zinc-50 text-zinc-700 hover:bg-zinc-100 border border-zinc-200 hover:border-zinc-300'}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className={`mt-10 p-6 rounded-2xl ${dm ? 'glass' : 'glass-light shadow-sm'}`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-zinc-500 to-zinc-400`}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">Security Specialization</h3>
                  <p className={`mb-4 text-sm ${dm ? 'text-zinc-400' : 'text-zinc-600'}`}>Deep expertise in web application security, including JWT auth, bcrypt hashing, input validation, and OWASP best practices.</p>
                  <div className="flex flex-wrap gap-2">
                    {['JWT', 'bcrypt', 'OWASP', 'Input Validation', 'CORS', 'XSS Prevention'].map(item => (
                      <span key={item} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${dm ? 'bg-zinc-800 text-zinc-300 border border-zinc-700' : 'bg-zinc-100 text-zinc-700 border border-zinc-200'}`}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-24 px-6 ${dm ? 'bg-[#0a0f1c]' : 'bg-[#f8fafc]'}`}>
        <SectionReveal id="projects-content">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 space-y-3 text-center">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">Featured Work</p>
              <h2 className="text-4xl lg:text-5xl font-black">Recent <span className="gradient-text">Projects</span></h2>
            </div>
            <div className="space-y-8">
              {projects.map((project, idx) => (
                <div key={project.id} className={`project-card-premium p-8 lg:p-10 rounded-3xl glow-border ${dm ? 'glass' : 'glass-light shadow-sm hover:shadow-xl'}`}>
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="mono text-xs text-zinc-400 font-bold">{project.year}</span>
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${dm ? 'bg-zinc-800 text-zinc-300 border border-zinc-700' : 'bg-zinc-50 text-zinc-700 border border-zinc-200'}`}>
                            <CheckCircle2 className="w-3 h-3" /> Production
                          </span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-black">{project.title}</h3>
                        <p className={`text-sm font-medium ${dm ? 'text-zinc-400' : 'text-zinc-500'}`}>{project.subtitle}</p>
                      </div>
                    </div>
                    <p className={`leading-relaxed ${dm ? 'text-zinc-400' : 'text-zinc-600'}`}>{project.description}</p>
                    <div className={`p-4 rounded-xl border-l-2 border-white ${dm ? 'bg-white/5' : 'bg-zinc-50'}`}>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-1 text-zinc-400">Technical Challenge</p>
                      <p className={`text-sm ${dm ? 'text-zinc-300' : 'text-zinc-700'}`}>{project.challenge}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-3 text-zinc-400">Key Features</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {project.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${dm ? 'text-zinc-400' : 'text-zinc-300'}`} />
                            <span className={dm ? 'text-zinc-300' : 'text-zinc-700'}>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-3 text-zinc-400">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${dm ? 'bg-white/5 text-zinc-300 border border-white/10 hover:border-white/30' : 'bg-zinc-100 text-zinc-700 border border-zinc-200 hover:border-zinc-400'}`}>{t}</span>
                        ))}
                      </div>
                    </div>
                    {project.impact && (
                      <div className={`p-4 rounded-xl ${dm ? 'bg-gradient-to-r from-white/5 to-zinc-500/5 border border-white/5' : 'bg-gradient-to-r from-zinc-50 to-zinc-100 border border-zinc-200'}`}>
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1 text-zinc-400">Impact</p>
                        <p className="text-sm font-bold">{project.impact}</p>
                      </div>
                    )}
                    <div className="flex gap-3 pt-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl bg-white text-black hover:bg-zinc-200 transition-all duration-300 hover:-translate-y-0.5">
                        <FileCode className="w-4 h-4" /> VIEW CODE
                      </a>
                      {project.demo && (
                        <a href={project.demo} className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${dm ? 'glass hover:bg-white/10' : 'glass-light hover:bg-zinc-100'}`}>
                          <ExternalLink className="w-4 h-4" /> LIVE DEMO
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a href="https://github.com/kobe824-create" target="_blank" rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${dm ? 'glass hover:bg-white/10' : 'glass-light hover:bg-zinc-100 hover:shadow-md'}`}>
                <Github className="w-5 h-5" /> MORE ON GITHUB
              </a>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 px-6 ${dm ? 'bg-[#0d1224]' : 'bg-white'}`}>
        <SectionReveal id="contact-content">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-14">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">Get In Touch</p>
              <h2 className="text-4xl lg:text-5xl font-black">Let's Work <span className="gradient-text">Together</span></h2>
              <p className={`max-w-2xl mx-auto ${dm ? 'text-zinc-400' : 'text-zinc-600'}`}>I'm actively seeking internship and junior developer opportunities. Let's connect and build something great.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Mail, title: 'Email', value: 'iradukunda1happy1@gmail.com', link: 'mailto:iradukunda1happy1@gmail.com' },
                { icon: Github, title: 'GitHub', value: '@kobe824-create', link: 'https://github.com/kobe824-create' },
                { icon: Linkedin, title: 'LinkedIn', value: 'Connect with me', link: '#' }
              ].map((c, i) => (
                <a key={i} href={c.link || '#'} target={c.link?.startsWith('http') ? '_blank' : undefined} rel={c.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 glow-border ${dm ? 'glass hover:bg-white/5' : 'glass-light shadow-sm hover:shadow-md'}`}>
                  <div className={`w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <c.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold mb-1">{c.title}</h3>
                  <p className={`text-xs break-all ${dm ? 'text-zinc-400' : 'text-zinc-600'}`}>{c.value}</p>
                </a>
              ))}
            </div>
            <div className="p-8 rounded-3xl bg-white text-black text-center relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-black mb-3 text-black">Ready to Collaborate?</h3>
                <p className="mb-6 max-w-xl mx-auto text-zinc-600">Whether you have a project in mind or want to discuss opportunities, I'd love to hear from you.</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a href="mailto:iradukunda1happy1@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl bg-black text-white hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    <Mail className="w-4 h-4" /> SEND EMAIL
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl border-2 border-black/10 text-black hover:bg-zinc-100 transition-all duration-300 hover:-translate-y-0.5">
                    <Download className="w-4 h-4" /> RESUME
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Footer */}
      <footer className={`py-10 px-6 ${dm ? 'bg-[#060a14] border-t border-white/5' : 'bg-slate-50 border-t border-slate-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-black text-lg gradient-text">Iradukunda Happy</p>
              <p className={`text-xs mt-1 ${dm ? 'text-slate-500' : 'text-slate-500'}`}>Full-Stack Developer • Blockchain • ML Enthusiast</p>
            </div>
            <div className="flex items-center gap-2">
              {[
                { icon: Github, href: 'https://github.com/kobe824-create', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:iradukunda1happy1@gmail.com', label: 'Email' }
              ].map(s => (
                <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${dm ? 'text-zinc-500 hover:text-white hover:bg-white/5' : 'text-zinc-400 hover:text-black hover:bg-zinc-100'}`} aria-label={s.label}>
                  <s.icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>
          <div className={`pt-6 mt-6 border-t text-center text-xs ${dm ? 'border-white/5 text-slate-600' : 'border-slate-200 text-slate-400'}`}>
            <p>© {new Date().getFullYear()} Iradukunda Happy. Crafted with <Heart className="w-3 h-3 inline text-red-400" /> using React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;