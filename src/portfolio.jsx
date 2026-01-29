import React, { useState, useEffect, useRef } from 'react';
import { Github, Mail, ExternalLink, Code2, Shield, Zap, Download, Menu, X, ArrowUpRight, CheckCircle2, FileCode, Database, Globe, Lock, Server, Terminal, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [skillsInView, setSkillsInView] = useState(false);
  const heroRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      // Check if skills section is in view
      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setSkillsInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = {
    frontend: [
      { name: 'JavaScript', level: 85, category: 'Language', color: 'from-black-400 to-gray-600' },
      { name: 'React', level: 75, category: 'Framework', color: 'from-black-400 to-gray-600' },
      { name: 'TypeScript', level: 45, category: 'Language', color: 'from-black-400 to-gray-600' },
      { name: 'Tailwind CSS', level: 90, category: 'Styling', color: 'from-black-400 to-gray-600' },
      { name: 'Vue.js', level: 50, category: 'Framework', color: 'from-black-400 to-gray-600' },
      { name: 'HTML5 & CSS3', level: 95, category: 'Core', color: 'from-black-400 to-gray-600' }
    ],
    backend: [
      { name: 'Node.js', level: 75, category: 'Runtime', color: 'from-black-400 to-gray-600' },
      { name: 'Express.js', level: 80, category: 'Framework', color: 'from-black-400 to-gray-600' },
      { name: 'REST APIs', level: 85, category: 'Architecture', color: 'from-black-400 to-gray-600' },
      { name: 'JWT Auth', level: 75, category: 'Security', color: 'from-black-400 to-gray-600' },
      { name: 'PHP', level: 40, category: 'Language', color: 'from-black-400 to-gray-600' }
    ],
    database: [
      { name: 'MySQL', level: 75, category: 'Relational', color: 'from-black-400 to-gray-600' },
      { name: 'PostgreSQL', level: 55, category: 'Relational', color: 'from-black-400 to-gray-600' },
      { name: 'MongoDB', level: 50, category: 'NoSQL', color: 'from-black-400 to-gray-600' }
    ],
    tools: [
      { name: 'Git & GitHub', level: 85, category: 'Version Control', color: 'from-gray-400 to-black-600' },
      { name: 'Linux', level: 70, category: 'OS', color: 'from-black-400 to-gray-600' },
      { name: 'VS Code', level: 90, category: 'Editor', color: 'from-black-400 to-gray-600' },
      { name: 'Postman', level: 80, category: 'Testing', color: 'from-black-400 to-gray-600' }
    ]
  };

  const projects = [
    {
      id: 1,
      title: 'FDF Aside',
      subtitle: 'Tontine (Ikibina)',
      description: `FDF Aside is a comprehensive fintech solution designed to digitize the management of traditional savings groups (Ibimina). The platform transitions groups from manual, error-prone paper ledgers to a secure, real-time digital environment, ensuring financial transparency and member accountability.`,
      challenge: 'Built a secure authentication system with role-based access control while ensuring transaction integrity and scalability for enterprise use.',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Express', 'Tailwind'],
      features: [
        'Dynamic Contribution Tracking',
        'Automated Penalty Engine',
        'Flexible Member Management',
        'Live Meeting & Attendance Analytics'
      ],
      github: 'https://github.com/kobe824-create/fdf_aside',
      demo: null,
      status: 'production',
      year: '2025',
      impact: 'FDF Aside acts as a digital secretary for savings collectives.',
      gradient: 'from-black-500 to-gray-500'
    },
    {
      id: 2,
      title: 'School Stock Management',
      subtitle: 'Educational Resource System',
      description: 'An inventory management solution designed for educational institutions to track materials, handle teacher requests, and manage approval workflows efficiently.',
      challenge: 'Designed a flexible approval system that accommodates different organizational hierarchies while maintaining data consistency.',
      tech: ['Vue.js', 'Node.js', 'MySQL', 'Express', 'Bootstrap'],
      features: ['Request management', 'Approval workflows', 'Stock tracking', 'Role-based access'],
      github: 'https://github.com/kobe824-create/stock_managementWithReact',
      demo: null,
      status: 'production',
      year: '2024',
      impact: 'Reduced material request processing time by 60%',
      gradient: 'from-black-500 to-gray-500'
    },
    {
      id: 3,
      title: 'Payment Verification System',
      subtitle: 'Secure Transaction Validation',
      description: 'A robust verification system ensuring payment authenticity through multi-step confirmation codes before transaction finalization.',
      challenge: 'Implemented secure code generation and validation logic with proper error handling and timeout mechanisms.',
      tech: ['Node.js', 'Express', 'MySQL', 'Validator.js'],
      features: ['Code generation', 'Validation logic', 'Security checks', 'Transaction safety'],
      github: '#',
      demo: null,
      status: 'production',
      year: '2024',
      impact: 'Zero fraudulent transactions since implementation',
      gradient: 'from-black-500 to-gray-500'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        h1, h2, h3, h4 {
          font-family: 'Space Grotesk', sans-serif;
        }

        code, .mono {
          font-family: 'JetBrains Mono', monospace;
        }

        .skill-bar-animated {
          transition: width 1.5s cubic-bezier(0.65, 0, 0.35, 1);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }

        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #0f172a, #334155);
          transition: width 0.3s ease;
        }

        .nav-link:hover::before,
        .nav-link.active::before {
          width: 100%;
        }

        .profile-image-container {
          position: relative;
        }

        .profile-image {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .profile-image:hover {
          transform: scale(1.02) rotate(-1deg);
        }

        .project-card {
          position: relative;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-4px);
        }

        .project-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 2px;
          background: linear-gradient(135deg, transparent, transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover::before {
          opacity: 1;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        }

        .gradient-border {
          position: relative;
          background: white;
          border-radius: 1rem;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 1px;
          background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .text-gradient {
          background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-slate-200/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#home" className="group flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg blur-sm group-hover:blur-md transition-all"></div>
                <div className="relative px-3 py-1.5 bg-slate-900 text-white text-base font-bold rounded-lg">IH</div>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              {['About', 'Skills', 'Projects', 'Contact'].map((item, idx) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link text-sm font-semibold tracking-wide ${
                    activeSection === item.toLowerCase() 
                      ? 'active text-slate-900' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="mono text-xs text-slate-400 mr-1">{String(idx + 1).padStart(2, '0')}</span>
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="mailto:iradukunda1happy1@gmail.com"
                className="group relative px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-slate-900/30"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2.5 rounded-lg hover:bg-slate-100 transition-all"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
            <div className="px-6 py-6 space-y-4">
              {['About', 'Skills', 'Projects', 'Contact'].map((item, idx) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-900 font-semibold py-3 hover:translate-x-2 transition-transform"
                >
                  <span className="mono text-xs text-slate-400 mr-2">{String(idx + 1).padStart(2, '0')}</span>
                  {item}
                </a>
              ))}
              <a
                href="mailto:iradukunda1happy1@gmail.com"
                className="block w-full px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-lg text-center hover:bg-slate-800 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-1/3 -right-48 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8 opacity-0 animate-fade-in-up">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700">Available for opportunities</span>
                </div>
                
                <div className="space-y-3">
                  <p className="text-slate-600 font-medium text-lg">Hi, I'm</p>
                  <h1 className="text-6xl lg:text-7xl font-bold tracking-tight">
                    <span className="text-gradient">Iradukunda</span><br/>
                    <span className="text-slate-900">Happy</span>
                  </h1>
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <p className="text-2xl lg:text-3xl font-bold text-slate-600">
                      Full-Stack Developer
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                I craft secure, scalable web applications with a focus on clean architecture and ethical technology. 
                <span className="text-slate-900 font-medium"> Based in Rwanda</span>, building meaningful solutions that make a difference.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all hover:gap-3 hover:shadow-xl hover:shadow-slate-900/30"
                >
                  View Projects
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 border-2 border-slate-200 text-slate-900 font-semibold rounded-lg hover:border-slate-900 hover:bg-slate-50 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </div>

              <div className="flex items-center gap-6 pt-6">
                <a
                  href="https://github.com/kobe824-create"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:iradukunda1happy1@gmail.com"
                  className="p-3 rounded-lg bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right side - Profile image */}
            <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in-up stagger-2">
              <div className="profile-image-container">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl transform rotate-6 opacity-20 blur-2xl"></div>
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl transform rotate-3 opacity-10"></div>
                <div className="relative">
                  <img 
                    src="/My_image.jpeg" 
                    alt="Iradukunda Happy"
                    className="profile-image relative w-80 h-80 lg:w-[28rem] lg:h-[28rem] object-cover rounded-3xl shadow-2xl border-4 border-white"
                  />
                  <div className="absolute -bottom-6 -right-6 px-6 py-4 bg-white rounded-2xl shadow-xl border border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">3+ Years</p>
                        <p className="text-xs text-slate-600">Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full">
                  <span className="mono text-xs font-semibold text-blue-600">01</span>
                  <span className="text-sm font-semibold text-blue-900 uppercase tracking-wider">About Me</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Building with<br/>
                  <span className="text-gradient">Purpose & Precision</span>
                </h2>
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  My journey into software development began with curiosity about how technology shapes our world. 
                  That curiosity evolved into a <span className="text-slate-900 font-semibold">disciplined commitment</span> to 
                  building applications that are not only functional but also secure, ethical, and maintainable.
                </p>
                <p>
                  As a student developer from Rwanda, I've focused on mastering full-stack development with particular 
                  attention to <span className="text-slate-900 font-semibold">authentication systems, payment workflows, and clean architecture</span>. 
                  I approach each project with a security-first mindset.
                </p>
                <p>
                  Beyond writing code, I'm committed to ethical technology development. As a Muslim developer, I believe in 
                  building solutions that respect user privacy, protect data, and serve genuine human needs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Security First</h3>
                  <p className="text-sm text-slate-600">JWT, bcrypt, OWASP practices</p>
                </div>

                <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Code2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Clean Architecture</h3>
                  <p className="text-sm text-slate-600">Scalable, maintainable code</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="gradient-border p-8">
                <h3 className="font-bold text-slate-900 mb-6 text-xl flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  Quick Facts
                </h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">Location</p>
                    <p className="text-base font-semibold text-slate-900">Kigali, Rwanda</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">Experience</p>
                    <p className="text-base font-semibold text-slate-900">3+ Years Coding</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">Focus</p>
                    <p className="text-base font-semibold text-slate-900">Full-Stack Development</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">Availability</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <p className="text-base font-semibold text-slate-900">Open to opportunities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
                <div className="relative">
                  <Globe className="w-8 h-8 text-white mb-4" />
                  <h3 className="font-bold text-white text-xl mb-3">Remote Ready</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Open to internships and junior developer roles worldwide. Let's build something amazing together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-50 rounded-full">
              <span className="mono text-xs font-semibold text-purple-600">02</span>
              <span className="text-sm font-semibold text-purple-900 uppercase tracking-wider">Technical Expertise</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proficiency levels based on hands-on project experience and continuous learning
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {Object.entries(skills).map(([category, items], catIdx) => (
              <div 
                key={category} 
                className="group p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all hover:shadow-xl opacity-0 animate-fade-in-up"
                style={{animationDelay: `${catIdx * 0.1}s`}}
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-8 capitalize flex items-center gap-3">
                  {category === 'frontend' && <Code2 className="w-6 h-6 text-blue-600" />}
                  {category === 'backend' && <Server className="w-6 h-6 text-green-600" />}
                  {category === 'database' && <Database className="w-6 h-6 text-purple-600" />}
                  {category === 'tools' && <Terminal className="w-6 h-6 text-orange-600" />}
                  {category}
                </h3>
                <div className="space-y-6">
                  {items.map((skill, idx) => (
                    <div key={idx} className="group/skill">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-900">{skill.name}</span>
                          <span className="text-xs px-2 py-0.5 bg-white rounded text-slate-500 border border-slate-200">
                            {skill.category}
                          </span>
                        </div>
                        <span className="mono text-sm font-bold text-slate-600 group-hover/skill:text-slate-900 transition-colors">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`skill-bar-animated h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          style={{ width: skillsInView ? `${skill.level}%` : '0%' }}
                        >
                          <div className="absolute inset-0 bg-white/20"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="relative p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>
            <div className="relative flex items-start gap-6">
              <div className="p-4 bg-white rounded-2xl shadow-lg">
                <Lock className="w-8 h-8 text-slate-900" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Security Specialization</h3>
                <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                  Deep expertise in web application security, including JWT authentication, password encryption with bcrypt, 
                  comprehensive input validation, and strict adherence to OWASP Top 10 security best practices.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['JWT Authentication', 'bcrypt Hashing', 'OWASP Top 10', 'Input Validation', 'CORS Policy', 'XSS Prevention', 'SQL Injection Prevention'].map((item) => (
                    <span key={item} className="px-4 py-2 bg-white rounded-lg text-sm font-semibold text-slate-700 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-md">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 rounded-full">
              <span className="mono text-xs font-semibold text-green-600">03</span>
              <span className="text-sm font-semibold text-green-900 uppercase tracking-wider">Featured Work</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900">
              Recent <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real-world applications built with modern tech stacks and security-first principles
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="project-card group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-2xl opacity-0 animate-fade-in-up"
                style={{animationDelay: `${idx * 0.15}s`}}
              >
                <div className="p-10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Project Number & Gradient */}
                    <div className="lg:w-24 flex lg:flex-col items-center lg:items-start gap-4">
                      <div className="mono text-6xl font-bold text-slate-200 group-hover:text-slate-300 transition-colors">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <div className={`hidden lg:block w-1 flex-1 min-h-32 bg-gradient-to-b ${project.gradient} rounded-full`}></div>
                    </div>

                    {/* Project Content */}
                    <div className="flex-1 space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="mono text-xs font-semibold text-slate-500">{project.year}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            project.status === 'production' 
                              ? 'bg-green-100 text-green-700 border border-green-200' 
                              : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                          }`}>
                            {project.status === 'production' ? (
                              <span className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-3 h-3" /> Production
                              </span>
                            ) : 'In Development'}
                          </span>
                        </div>
                        
                        <h3 className="text-4xl font-bold text-slate-900 group-hover:text-gradient transition-all">
                          {project.title}
                        </h3>
                        <p className="text-xl font-semibold text-slate-600">{project.subtitle}</p>
                      </div>

                      <p className="text-slate-600 leading-relaxed text-lg">
                        {project.description}
                      </p>

                      <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-slate-900">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Technical Challenge</p>
                        <p className="text-slate-700 leading-relaxed">{project.challenge}</p>
                      </div>

                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Key Features</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {project.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 text-slate-700">
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 className="w-3 h-3 text-green-600" />
                              </div>
                              <span className="font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold border border-slate-200 hover:border-slate-300 transition-all">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {project.impact && (
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Impact</p>
                          <p className="text-slate-900 font-semibold text-lg">{project.impact}</p>
                        </div>
                      )}

                      <div className="flex gap-4 pt-4">
                        <a
                          href={project.github}
                          className="group/link inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all hover:gap-3 hover:shadow-xl"
                        >
                          <FileCode className="w-5 h-5" />
                          View Code
                          <ArrowUpRight className="w-4 h-4 group-hover/link:rotate-45 transition-transform" />
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            className="group/link inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-900 font-semibold rounded-lg hover:border-slate-900 hover:bg-slate-50 transition-all"
                          >
                            <ExternalLink className="w-5 h-5" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://github.com/kobe824-create"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-slate-300 text-slate-900 font-bold rounded-xl hover:border-slate-900 hover:bg-slate-50 transition-all hover:shadow-xl text-lg"
            >
              <Github className="w-6 h-6" />
              Explore More on GitHub
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 rounded-full">
              <span className="mono text-xs font-semibold text-orange-600">04</span>
              <span className="text-sm font-semibold text-orange-900 uppercase tracking-wider">Get In Touch</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900">
              Let's Build<br/>
              <span className="text-gradient">Something Great</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              I'm actively seeking internship and junior developer opportunities where I can contribute 
              to meaningful projects while growing my skills. Let's connect!
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Mail, title: 'Email', value: 'iradukunda1happy1@gmail.com', link: 'mailto:iradukunda1happy1@gmail.com', color: 'from-blue-500 to-gray-500' },
              { icon: Github, title: 'GitHub', value: '@kobe824-create', link: 'https://github.com/kobe824-create', color: 'from-purple-500 to-pink-500' },
              { icon: Globe, title: 'Location', value: 'Kigali, Rwanda', link: null, color: 'from-green-500 to-emerald-500' }
            ].map((contact, idx) => (
              <a
                key={idx}
                href={contact.link || '#'}
                target={contact.link?.startsWith('http') ? '_blank' : undefined}
                rel={contact.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group p-8 gradient-border text-center hover:shadow-xl transition-all ${contact.link ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <contact.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{contact.title}</h3>
                <p className="text-sm text-slate-600 break-all">{contact.value}</p>
              </a>
            ))}
          </div>

          <div className="relative p-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
            
            <div className="relative text-center space-y-6">
              <h3 className="text-3xl font-bold text-white">Ready to Collaborate?</h3>
              <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed text-lg">
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
                I'd love to hear from you.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a
                  href="mailto:iradukunda1happy1@gmail.com"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all hover:shadow-2xl"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-slate-900 transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="text-center md:text-left">
              <p className="text-xl font-bold text-slate-900 mb-1">Iradukunda Happy</p>
              <p className="text-sm text-slate-600">Full-Stack Developer • Security Enthusiast • Problem Solver</p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/kobe824-create"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:iradukunda1happy1@gmail.com"
                className="p-3 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Iradukunda Happy. Designed & Built with passion using React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;