import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Shield, Menu, X, ArrowUpRight, FileCode, Database, Globe, Server, Terminal, Moon, Sun, Smartphone, Cpu, Layers, ChevronDown, Zap, Trophy, Users, Heart } from 'lucide-react';

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
    <div id={id} ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}>
      {children}
    </div>
  );
};

const ActivityBars = ({ bars, dm }) => {
  const max = Math.max(...bars);
  const color = dm ? '#71717a' : '#a1a1aa';
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '36px' }}>
      {bars.map((h, i) => (
        <div key={i} style={{
          width: '8px', borderRadius: '2px 2px 0 0',
          height: `${Math.round((h / max) * 36)}px`,
          background: color,
          opacity: 0.2 + (i / bars.length) * 0.8,
        }} />
      ))}
    </div>
  );
};

const PhasePipeline = ({ phases, doneTo, dm }) => (
  <div style={{ display: 'flex' }}>
    {phases.map((ph, i) => (
      <span key={ph} className={`proj-phase ${i < doneTo ? 'done' : ''} ${dm ? 'dark' : 'light'}`}>{ph}</span>
    ))}
  </div>
);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
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
    frontend: { icon: Code2, items: ['JavaScript', 'React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'HTML5 & CSS3'] },
    backend: { icon: Server, items: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'JWT Auth', 'PHP'] },
    'ai & data': { icon: Cpu, items: ['Python', 'Machine Learning', 'Data Analysis', 'TensorFlow'] },
    blockchain: { icon: Layers, items: ['Solidity', 'Remix IDE', 'Smart Contracts', 'Web3.js'] },
    mobile: { icon: Smartphone, items: ['React Native', 'Flutter', 'Mobile UI/UX', 'Cross-Platform'] },
    database: { icon: Database, items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
    tools: { icon: Terminal, items: ['Git & GitHub', 'Linux', 'VS Code', 'Postman', 'Docker'] },
  };

  const projects = [
    {
      id: '01', year: '2024', title: 'Academic Operations', subtitle: 'School Management System — MERN Stack',
      description: 'A robust, full-stack school management system designed to modernize and streamline academic administration. Digitalizes the entire lifecycle of student records, centralized archive, and collaborative management.',
      challenge: 'Digitalizing manual record-keeping with professional PDF/Image repositories and Role-Based Access Control (RBAC) to eliminate fragmentation.',
      phases: ['Spec', 'Prototype', 'Alpha', 'Production'], doneTo: 4,
      features: ['Unified School Admin', 'Digital Performance Tracking', 'Integrated Document Management', 'RBAC & Audit Logging', 'Automated Visualization'],
      tech: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js', 'CSV Export'],
      impact: 'Eliminated risk of record loss and improved search efficiency by 100%.',
      github: '#', demo: null, bars: [2, 4, 5, 6, 8, 7, 9, 10, 9, 11, 10, 12],
    },
    {
      id: '02', year: '2025', title: 'FDF Aside', subtitle: 'Tontine (Ikibina) — Fintech savings platform',
      description: 'A comprehensive fintech solution designed to digitize the management of traditional savings groups (Ibimina). Transitions groups from manual, error-prone paper ledgers to a secure, real-time digital environment.',
      challenge: 'Built a secure authentication system with role-based access control while ensuring transaction integrity and scalability for enterprise use.',
      phases: ['Spec', 'Prototype', 'Alpha', 'Production'], doneTo: 4,
      features: ['Dynamic Contribution Tracking', 'Automated Penalty Engine', 'Flexible Member Management', 'Live Meeting & Attendance Analytics'],
      tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Express', 'Tailwind'],
      impact: 'Acts as a digital secretary for savings collectives — replacing error-prone paper ledgers.',
      github: 'https://github.com/kobe824-create/fdf_aside', demo: null, bars: [1, 3, 3, 5, 6, 8, 9, 10, 11, 12, 12, 12],
    },
    {
      id: '03', year: '2024', title: 'School Stock Management', subtitle: 'Educational Resource System — Vue.js',
      description: 'An inventory management solution for educational institutions to track materials, handle teacher requests, and manage approval workflows efficiently.',
      challenge: 'Designed a flexible approval system that accommodates different organizational hierarchies while maintaining data consistency.',
      phases: ['Spec', 'Prototype', 'Alpha', 'Production'], doneTo: 4,
      features: ['Request management', 'Approval workflows', 'Stock tracking', 'Role-based access'],
      tech: ['Vue.js', 'Node.js', 'MySQL', 'Express', 'Bootstrap'],
      impact: 'Reduced material request processing time by 60%.',
      github: 'https://github.com/kobe824-create/stock_managementWithReact', demo: null, bars: [3, 4, 5, 5, 7, 8, 8, 9, 9, 10, 10, 11],
    },
  ];

  const stats = [
    { icon: Trophy, value: '3+', label: 'Years Coding' },
    { icon: Zap, value: '5+', label: 'Projects Built' },
    { icon: Layers, value: '7+', label: 'Tech Domains' },
    { icon: Users, value: '100%', label: 'Passion' },
  ];

  const dm = darkMode;
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const T = {
    bg: dm ? '#0a0f1c' : '#f8fafc',
    bgAlt: dm ? '#0d1224' : '#ffffff',
    text: dm ? '#e4e4e7' : '#18181b',
    muted: dm ? '#52525b' : '#a1a1aa',
    secondary: dm ? '#71717a' : '#71717a',
    border: dm ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)',
    borderMid: dm ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.14)',
    surface: dm ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.9)',
  };

  return (
    <div style={{ background: T.bg, color: T.text, fontFamily: "'DM Sans', sans-serif", minHeight: '100vh', overflowX: 'hidden', transition: 'background 0.4s, color 0.4s' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,300&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; }
        .mono { font-family: 'DM Mono', monospace; }
        .cursor-blink { animation: blink 1s step-end infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        a { text-decoration: none; color: inherit; }

        /* Rule lines */
        .ruled-row { border-bottom: 0.5px solid ${T.border}; }
        .ruled-top { border-top: 0.5px solid ${T.border}; }

        /* Nav link */
        .nav-link { padding: 6px 14px; border-radius: 6px; font-size: 15px; font-weight: 500; transition: background 0.2s, color 0.2s; color: ${T.secondary}; }
        .nav-link:hover, .nav-link.active { color: ${T.text}; background: ${dm ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}; }

        /* Pill button */
        .btn-solid { display: inline-flex; align-items: center; gap: 8px; padding: 10px 22px; font-size: 15px; font-weight: 600; border-radius: 8px; background: ${T.text}; color: ${T.bg}; cursor: pointer; border: none; transition: opacity 0.2s, transform 0.2s; letter-spacing: 0.03em; }
        .btn-solid:hover { opacity: 0.85; transform: translateY(-1px); }
        .btn-ghost { display: inline-flex; align-items: center; gap: 8px; padding: 10px 22px; font-size: 15px; font-weight: 500; border-radius: 8px; border: 0.5px solid ${T.borderMid}; background: transparent; color: ${T.secondary}; cursor: pointer; transition: background 0.2s, color 0.2s, transform 0.2s; }
        .btn-ghost:hover { background: ${dm ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'}; color: ${T.text}; transform: translateY(-1px); }

        /* Icon social button */
        .icon-btn { display: flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 8px; border: 0.5px solid ${T.border}; color: ${T.secondary}; transition: border-color 0.2s, color 0.2s, transform 0.2s; }
        .icon-btn:hover { border-color: ${T.borderMid}; color: ${T.text}; transform: translateY(-2px); }

        /* Stat row item */
        .stat-item { display: flex; align-items: center; gap: 14px; padding: 20px 0; }
        .stat-item + .stat-item { border-left: 0.5px solid ${T.border}; padding-left: 32px; margin-left: 8px; }

        /* Skill index row */
        .skill-row { display: grid; grid-template-columns: 140px 1fr; gap: 0; align-items: start; padding: 16px 0; border-bottom: 0.5px solid ${T.border}; }
        .skill-row:first-child { border-top: 0.5px solid ${T.border}; }
        .skill-tag { display: inline-block; font-family: 'DM Mono', monospace; font-size: 13px; padding: 3px 9px; border-radius: 4px; border: 0.5px solid ${T.border}; color: ${T.secondary}; margin: 3px; white-space: nowrap; transition: border-color 0.2s, color 0.2s; }
        .skill-tag:hover { border-color: ${T.borderMid}; color: ${T.text}; }

        /* About card */
        .about-card { border: 0.5px solid ${T.border}; border-radius: 10px; padding: 24px; background: ${T.surface}; }

        /* Project entry */
        .proj-entry { display: grid; grid-template-columns: 2.5rem 1fr; gap: 0 2rem; padding: 36px 0; border-bottom: 0.5px solid ${T.border}; }
        .proj-phase { font-size: 12px; padding: 4px 10px; border: 0.5px solid; margin-right: -0.5px; font-family: 'DM Mono', monospace; }
        .proj-phase:first-child { border-radius: 4px 0 0 4px; }
        .proj-phase:last-child { border-radius: 0 4px 4px 0; }
        .proj-phase.done.dark { border-color: #52525b; color: #d4d4d8; background: rgba(255,255,255,0.05); }
        .proj-phase.done.light { border-color: #a1a1aa; color: #3f3f46; background: #f4f4f5; }
        .proj-phase:not(.done).dark { border-color: rgba(255,255,255,0.07); color: #3f3f46; }
        .proj-phase:not(.done).light { border-color: rgba(0,0,0,0.08); color: #d4d4d8; }
        .proj-link-btn { display: inline-flex; align-items: center; gap: 6px; font-size: 14px; color: ${T.secondary}; border-bottom: 0.5px solid currentColor; padding-bottom: 1px; transition: color 0.2s; }
        .proj-link-btn:hover { color: ${T.text}; }

        /* Contact row */
        .contact-row { display: flex; align-items: center; gap: 20px; padding: 18px 0; border-bottom: 0.5px solid ${T.border}; transition: background 0.15s; }
        .contact-row:hover { background: ${dm ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)'}; }

        /* Footer */
        .footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; padding: 28px 0; border-top: 0.5px solid ${T.border}; }

        /* Mobile menu */
        .mobile-menu { position: fixed; top: 57px; left: 0; right: 0; z-index: 49; padding: 12px 20px 20px; border-bottom: 0.5px solid ${T.border}; background: ${dm ? 'rgba(10,15,28,0.97)' : 'rgba(248,250,252,0.97)'}; backdrop-filter: blur(16px); }

        @media (max-width: 768px) {
          .proj-entry { grid-template-columns: 1.5rem 1fr; gap: 0 12px; }
          .skill-row { grid-template-columns: 1fr; gap: 8px; }
          .stat-item + .stat-item { border-left: none; padding-left: 0; margin-left: 0; border-top: 0.5px solid ${T.border}; padding-top: 20px; margin-top: 0; }
        }
      `}</style>

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 50,
        borderBottom: isScrolled ? `0.5px solid ${T.border}` : 'none',
        background: isScrolled ? (dm ? 'rgba(10,15,28,0.92)' : 'rgba(248,250,252,0.92)') : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        transition: 'background 0.3s, border-color 0.3s',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 57 }}>
          <a href="#home" style={{ fontFamily: 'DM Mono, monospace', fontSize: 15, fontWeight: 500, color: T.text, letterSpacing: '0.05em' }}>IH.</a>

          <div className="hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {['About', 'Skills', 'Projects', 'Contact'].map((item, idx) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className={`nav-link${activeSection === item.toLowerCase() ? ' active' : ''}`}>
                <span className="mono" style={{ fontSize: 10, color: T.muted, marginRight: 6 }}>{String(idx + 1).padStart(2, '0')}</span>{item}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button onClick={toggleDarkMode} className="icon-btn" aria-label="Toggle theme">
              {dm ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a href="mailto:iradukunda1happy1@gmail.com" className="btn-solid" style={{ display: 'none' }}>
              Let's talk
            </a>
            <a href="mailto:iradukunda1happy1@gmail.com" className="btn-solid md-show">
              Let's talk
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="icon-btn md:hidden" style={{ display: 'none' }}>
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {['About', 'Skills', 'Projects', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '12px 8px', fontSize: 14, color: T.secondary, borderBottom: `0.5px solid ${T.border}` }}>
                {item}
              </a>
            ))}
            <button onClick={toggleDarkMode} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 8px', fontSize: 14, color: T.secondary, background: 'none', border: 'none', cursor: 'pointer', width: '100%' }}>
              {dm ? <Sun size={15} /> : <Moon size={15} />} {dm ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section id="home" ref={heroRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 24px', paddingTop: 80, background: T.bg }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
          {/* Ruled header label */}
          <div style={{ borderTop: `0.5px solid ${T.border}`, paddingTop: 32, marginBottom: 48 }}>
            <span className="mono" style={{ fontSize: 10, color: T.muted, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Portfolio — Kigali, Rwanda</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'start' }}>
            <div>
              <h1 style={{ fontSize: 'clamp(44px, 7vw, 88px)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.03em', color: T.text, marginBottom: 24 }}>
                Iradukunda<br />
                <span style={{ fontWeight: 700 }}>Happy Qasim</span>
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28, minHeight: 32 }}>
                <span className="mono" style={{ fontSize: 13, color: T.muted }}>›</span>
                <span className="mono" style={{ fontSize: 16, color: T.text }}>{typedText}</span>
                <span className="mono cursor-blink" style={{ fontSize: 16, color: T.muted }}>_</span>
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: T.secondary, maxWidth: 480, marginBottom: 36 }}>
                Building secure, scalable applications across web, mobile, blockchain, and AI. Based in Rwanda — crafting meaningful solutions through thoughtful code.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 36 }}>
                <a href="#projects" className="btn-solid">View projects <ArrowUpRight size={15} /></a>
                <a href="mailto:iradukunda1happy1@gmail.com" className="btn-ghost">Get in touch <Mail size={15} /></a>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {[
                  { icon: Github, href: 'https://github.com/kobe824-create', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/iradukunda-happy-7873a1277/', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:iradukunda1happy1@gmail.com', label: 'Email' },
                ].map(s => (
                  <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="icon-btn" aria-label={s.label}>
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Portrait */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
              <img src="/My_image.jpeg" alt="Iradukunda Happy" style={{
                width: 'clamp(180px, 20vw, 280px)', aspectRatio: '1', objectFit: 'cover',
                borderRadius: 12, border: `0.5px solid ${T.border}`,
                filter: dm ? 'none' : 'none',
              }} />
              <div style={{ alignSelf: 'flex-end', textAlign: 'right' }}>
                <p className="mono" style={{ fontSize: 11, color: T.muted }}>3+ yrs experience</p>
                <p className="mono" style={{ fontSize: 11, color: T.muted }}>Kigali · remote-ready</p>
              </div>
            </div>
          </div>

          <div style={{ paddingTop: 64, display: 'flex', justifyContent: 'center' }}>
            <a href="#about" style={{ color: T.muted, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, animation: 'bounce 2s infinite' }}>
              <ChevronDown size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────────────── */}
      <SectionReveal id="stats-bar">
        <div style={{ background: T.bgAlt, borderTop: `0.5px solid ${T.border}`, borderBottom: `0.5px solid ${T.border}`, padding: '0 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 0 }}>
            {stats.map((s, i) => (
              <div key={i} className="stat-item" style={{ flex: '1 1 140px' }}>
                <s.icon size={18} style={{ color: T.muted, flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.2, color: T.text }}>{s.value}</p>
                  <p className="mono" style={{ fontSize: 11, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* ── ABOUT ───────────────────────────────────────────────────── */}
      <section id="about" style={{ padding: '96px 24px', background: T.bg }}>
        <SectionReveal id="about-content">
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            {/* Section label */}
            <div className="ruled-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 20, marginBottom: 52 }}>
              <p className="mono" style={{ fontSize: 10, color: T.muted, letterSpacing: '0.15em', textTransform: 'uppercase' }}>About</p>
              <p className="mono" style={{ fontSize: 10, color: T.muted }}>§ 01</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 64, alignItems: 'start' }}>
              {/* Left: prose */}
              <div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 28, color: T.text }}>
                  Building with<br />purpose and precision.
                </h2>
                <div style={{ fontSize: 16, lineHeight: 1.8, color: T.secondary, display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 520 }}>
                  <p>My journey into software development began with curiosity about how technology shapes our world. That curiosity evolved into a disciplined commitment to building applications that are functional, secure, and maintainable.</p>
                  <p>As a developer from Rwanda, I've expanded beyond full-stack web development into blockchain, machine learning, and mobile development — always with a security-first mindset and clean architecture principles.</p>
                  <p>Beyond writing code, I'm committed to ethical technology development: building solutions that respect user privacy and serve genuine human needs.</p>
                </div>

                {/* Two principles — inline ruled list instead of cards */}
                <div style={{ marginTop: 40 }}>
                  {[
                    { icon: Shield, title: 'Security first', desc: 'JWT, bcrypt, OWASP best practices baked in from day one — not bolted on.' },
                    { icon: Code2, title: 'Clean architecture', desc: 'Scalable, maintainable code that the next developer can read without a map.' },
                  ].map((c, i) => (
                    <div key={i} style={{ display: 'flex', gap: 20, padding: '20px 0', borderBottom: `0.5px solid ${T.border}` }}>
                      <c.icon size={18} style={{ color: T.muted, marginTop: 2, flexShrink: 0 }} />
                      <div>
                        <p style={{ fontSize: 15, fontWeight: 600, color: T.text, marginBottom: 4 }}>{c.title}</p>
                        <p style={{ fontSize: 14, color: T.secondary, lineHeight: 1.6 }}>{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: fact sheet */}
              <div>
                <div className="about-card" style={{ marginBottom: 16 }}>
                  <p className="mono" style={{ fontSize: 10, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 20 }}>Quick facts</p>
                  {[
                    { label: 'Location', value: 'Kigali, Rwanda' },
                    { label: 'Experience', value: '3+ years coding' },
                    { label: 'Focus', value: 'Full-Stack & Blockchain' },
                    { label: 'Availability', value: 'Open to opportunities', dot: true },
                  ].map((f, i) => (
                    <div key={i} style={{ padding: '12px 0', borderBottom: i < 3 ? `0.5px solid ${T.border}` : 'none' }}>
                      <p className="mono" style={{ fontSize: 10, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{f.label}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        {f.dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: T.text, display: 'inline-block' }} />}
                        <p style={{ fontSize: 14, fontWeight: 500, color: T.text }}>{f.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="about-card">
                  <Globe size={16} style={{ color: T.muted, marginBottom: 10 }} />
                  <p style={{ fontSize: 14, fontWeight: 600, color: T.text, marginBottom: 6 }}>Remote ready</p>
                  <p style={{ fontSize: 13, color: T.secondary, lineHeight: 1.6 }}>Open to remote positions and on-site roles based in Kigali.</p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* ── SKILLS ──────────────────────────────────────────────────── */}
      <section id="skills" style={{ padding: '96px 24px', background: T.bgAlt }}>
        <SectionReveal id="skills-content">
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="ruled-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 20, marginBottom: 52 }}>
              <p className="mono" style={{ fontSize: 10, color: T.muted, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Technical Expertise</p>
              <p className="mono" style={{ fontSize: 10, color: T.muted }}>§ 02</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 64px', alignItems: 'start' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, color: T.text, marginBottom: 36 }}>
                  Skills &<br />technologies.
                </h2>
                <p style={{ fontSize: 15, color: T.secondary, lineHeight: 1.75, marginBottom: 48, maxWidth: 380 }}>
                  Technologies I've worked with across the full development spectrum — from browser to blockchain.
                </p>
              </div>
              {/* Security callout on right */}
              <div style={{ borderLeft: `0.5px solid ${T.border}`, paddingLeft: 40 }}>
                <p className="mono" style={{ fontSize: 10, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>Security specialisation</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['JWT', 'bcrypt', 'OWASP', 'Input Validation', 'CORS', 'XSS Prevention'].map(item => (
                    <span key={item} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Skill index table */}
            <div>
              {Object.entries(skills).map(([category, data]) => (
                <div key={category} className="skill-row">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 4 }}>
                    <data.icon size={14} style={{ color: T.muted, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: T.text, textTransform: 'capitalize' }}>{category}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {data.items.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* ── PROJECTS ────────────────────────────────────────────────── */}
      <section id="projects" style={{ padding: '96px 24px', background: T.bg }}>
        <SectionReveal id="projects-content">
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="ruled-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 20, marginBottom: 0 }}>
              <div>
                <p className="mono" style={{ fontSize: 10, color: T.muted, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>Work</p>
                <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, letterSpacing: '-0.02em', color: T.text }}>Selected projects</h2>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p className="mono" style={{ fontSize: 10, color: T.muted }}>§ 03</p>
                <p className="mono" style={{ fontSize: 10, color: T.muted }}>{projects.length} entries</p>
              </div>
            </div>

            {projects.map((project) => (
              <div key={project.id} className="proj-entry">
                {/* Index col */}
                <p className="mono" style={{ fontSize: 11, color: T.muted, paddingTop: 4 }}>{project.id}</p>

                {/* Content col */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
                    <span className="mono" style={{ fontSize: 11, color: T.muted }}>{project.year}</span>
                    <span style={{ fontSize: 11, color: T.muted }}>shipped</span>
                  </div>

                  <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em', color: T.text, marginBottom: 2 }}>{project.title}</h3>
                  <p style={{ fontSize: 14, color: T.secondary, marginBottom: 16 }}>{project.subtitle}</p>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: T.secondary, maxWidth: 560, marginBottom: 20 }}>{project.description}</p>

                  {/* Challenge */}
                  <div style={{ marginBottom: 20 }}>
                    <p className="mono" style={{ fontSize: 10, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Technical challenge</p>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: T.secondary, borderLeft: `2px solid ${T.borderMid}`, paddingLeft: 12, maxWidth: 480 }}>{project.challenge}</p>
                  </div>

                  {/* Activity */}
                  <div style={{ marginBottom: 20 }}>
                    <p className="mono" style={{ fontSize: 10, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Activity</p>
                    <ActivityBars bars={project.bars} dm={dm} />
                  </div>

                  {/* Phases */}
                  <div style={{ marginBottom: 20 }}>
                    <p className="mono" style={{ fontSize: 10, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Phases</p>
                    <PhasePipeline phases={project.phases} doneTo={project.doneTo} dm={dm} />
                  </div>

                  {/* Features */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 20px', marginBottom: 20 }}>
                    {project.features.map(f => (
                      <span key={f} style={{ fontSize: 14, color: T.secondary, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ color: T.muted }}>–</span> {f}
                      </span>
                    ))}
                  </div>

                  {/* Stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                    {project.tech.map(t => (
                      <span key={t} className="skill-tag">{t}</span>
                    ))}
                  </div>

                  {/* Impact */}
                  {project.impact && (
                    <p style={{ fontSize: 14, fontStyle: 'italic', color: T.secondary, marginBottom: 20 }}>{project.impact}</p>
                  )}

                  {/* Links */}
                  <div style={{ display: 'flex', gap: 20 }}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-link-btn">
                      <FileCode size={13} /> Source
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="proj-link-btn">
                        <ExternalLink size={13} /> Live demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Footer link */}
            <div style={{ paddingTop: 32, display: 'flex', justifyContent: 'flex-end' }}>
              <a href="https://github.com/kobe824-create" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: T.muted, opacity: 0.7, transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}>
                <Github size={14} /> More on GitHub
              </a>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────── */}
      <section id="contact" style={{ padding: '96px 24px', background: T.bgAlt }}>
        <SectionReveal id="contact-content">
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="ruled-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 20, marginBottom: 52 }}>
              <p className="mono" style={{ fontSize: 10, color: T.muted, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Contact</p>
              <p className="mono" style={{ fontSize: 10, color: T.muted }}>§ 04</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, color: T.text, marginBottom: 20 }}>
                  Let's work<br />together.
                </h2>
                <p style={{ fontSize: 15, color: T.secondary, lineHeight: 1.8, maxWidth: 380, marginBottom: 36 }}>
                  Actively seeking internship and junior developer opportunities. Whether you have a project in mind or want to discuss possibilities, I'd love to hear from you.
                </p>
                <a href="mailto:iradukunda1happy1@gmail.com" className="btn-solid">
                  <Mail size={15} /> Send an email
                </a>
              </div>

              {/* Contact rows */}
              <div style={{ borderLeft: `0.5px solid ${T.border}`, paddingLeft: 40 }}>
                {[
                  { icon: Mail, title: 'Email', value: 'iradukunda1happy1@gmail.com', link: 'mailto:iradukunda1happy1@gmail.com' },
                  { icon: Github, title: 'GitHub', value: '@kobe824-create', link: 'https://github.com/kobe824-create' },
                  { icon: Linkedin, title: 'LinkedIn', value: 'Iradukunda Happy', link: 'https://www.linkedin.com/in/iradukunda-happy-7873a1277/' },
                  { icon: Globe, title: 'Location', value: 'Kigali, Rwanda · remote-ready', link: null },
                ].map((c, i) => (
                  <a key={i} href={c.link || undefined} target={c.link?.startsWith('http') ? '_blank' : undefined}
                    rel={c.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-row" style={{ textDecoration: 'none', cursor: c.link ? 'pointer' : 'default', paddingLeft: 8, paddingRight: 8, marginLeft: -8, marginRight: -8, borderRadius: 6 }}>
                    <c.icon size={15} style={{ color: T.muted, flexShrink: 0 }} />
                    <div>
                      <p className="mono" style={{ fontSize: 10, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>{c.title}</p>
                      <p style={{ fontSize: 14, color: T.text }}>{c.value}</p>
                    </div>
                    {c.link && <ArrowUpRight size={13} style={{ color: T.muted, marginLeft: 'auto' }} />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer style={{ padding: '0 24px', background: T.bg }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="footer-inner">
            <div>
              <p className="mono" style={{ fontSize: 14, fontWeight: 500, color: T.text }}>Iradukunda Happy</p>
              <p className="mono" style={{ fontSize: 11, color: T.muted, marginTop: 4 }}>Full-Stack · Blockchain · ML</p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { icon: Github, href: 'https://github.com/kobe824-create', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/iradukunda-happy-7873a1277/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:iradukunda1happy1@gmail.com', label: 'Email' },
              ].map(s => (
                <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="icon-btn" aria-label={s.label}>
                  <s.icon size={15} />
                </a>
              ))}
            </div>
            <p className="mono" style={{ fontSize: 11, color: T.muted }}>
              © {new Date().getFullYear()} · crafted with <Heart size={10} style={{ display: 'inline', color: '#f87171', verticalAlign: 'middle' }} /> using React & Tailwind
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;