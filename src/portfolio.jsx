import React, { useState, useEffect, useRef } from 'react';
import { Github, Mail, ExternalLink, Code2, Shield, Download, Menu, X, ArrowUpRight, CheckCircle2, FileCode, Database, Globe, Server, Terminal, Moon, Sun } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [skillsInView, setSkillsInView] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
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

      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setSkillsInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    frontend: [
      { name: 'JavaScript', level: 85, category: 'Language' },
      { name: 'React', level: 75, category: 'Framework' },
      { name: 'TypeScript', level: 45, category: 'Language' },
      { name: 'Tailwind CSS', level: 90, category: 'Styling' },
      { name: 'Vue.js', level: 50, category: 'Framework' },
      { name: 'HTML5 & CSS3', level: 95, category: 'Core' }
    ],
    backend: [
      { name: 'Node.js', level: 75, category: 'Runtime' },
      { name: 'Express.js', level: 80, category: 'Framework' },
      { name: 'REST APIs', level: 85, category: 'Architecture' },
      { name: 'JWT Auth', level: 75, category: 'Security' },
      { name: 'PHP', level: 40, category: 'Language' }
    ],
    database: [
      { name: 'MySQL', level: 75, category: 'Relational' },
      { name: 'PostgreSQL', level: 55, category: 'Relational' },
      { name: 'MongoDB', level: 50, category: 'NoSQL' }
    ],
    tools: [
      { name: 'Git & GitHub', level: 85, category: 'Version Control' },
      { name: 'Linux', level: 70, category: 'OS' },
      { name: 'VS Code', level: 90, category: 'Editor' },
      { name: 'Postman', level: 80, category: 'Testing' }
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
      impact: 'FDF Aside acts as a digital secretary for savings collectives.'
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
      impact: 'Reduced material request processing time by 60%'
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
      impact: 'Zero fraudulent transactions since implementation'
    }
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-neutral-900 text-neutral-100' : 'bg-white text-neutral-900'} font-sans antialiased transition-colors duration-300`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
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

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }

        .nav-link {
          position: relative;
          transition: all 0.2s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: currentColor;
          transition: width 0.2s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .project-card {
          transition: all 0.2s ease;
        }

        .project-card:hover {
          transform: translateY(-2px);
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? darkMode 
            ? 'bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800' 
            : 'bg-white/95 backdrop-blur-sm border-b border-neutral-200'
          : darkMode
            ? 'bg-neutral-900'
            : 'bg-white'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="text-lg font-semibold tracking-tight">
              IH
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item, idx) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link text-sm font-medium ${
                    activeSection === item.toLowerCase() 
                      ? darkMode ? 'text-white' : 'text-black'
                      : darkMode ? 'text-neutral-400 hover:text-neutral-200' : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  <span className="mono text-xs text-slate-400 mr-1">{String(idx + 1).padStart(2, '0')}</span>
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-md ${
                  darkMode 
                    ? 'hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200' 
                    : 'hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <a
                href="mailto:iradukunda1happy1@gmail.com"
                className={`px-5 py-2 text-sm font-medium rounded-md transition-colors ${
                  darkMode
                    ? 'bg-white text-black hover:bg-neutral-200'
                    : 'bg-black text-white hover:bg-neutral-800'
                }`}
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-md ${
                darkMode ? 'hover:bg-neutral-800' : 'hover:bg-neutral-100'
              }`}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-neutral-900 border-t border-neutral-800' : 'bg-white border-t border-neutral-200'}`}>
            <div className="px-6 py-4 space-y-3">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 text-sm font-medium ${
                    darkMode ? 'text-neutral-300 hover:text-white' : 'text-neutral-700 hover:text-black'
                  }`}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={toggleDarkMode}
                className={`flex items-center gap-2 py-2 text-sm font-medium ${
                  darkMode ? 'text-neutral-300 hover:text-white' : 'text-neutral-700 hover:text-black'
                }`}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6 opacity-0 animate-fade-in-up">
              <div className="space-y-4">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                  darkMode ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-700'
                }`}>
                  <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full"></div>
                  Available for opportunities
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                  Iradukunda Happy
                </h1>
                <p className="text-xl lg:text-2xl font-medium text-neutral-500">
                  Full-Stack Developer
                </p>
              </div>

              <p className={`text-base leading-relaxed max-w-lg ${
                darkMode ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                Building secure, scalable web applications with clean architecture. 
                Based in Rwanda, focused on creating meaningful solutions through code.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href="#projects"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md transition-all ${
                    darkMode
                      ? 'bg-white text-black hover:bg-neutral-200'
                      : 'bg-black text-white hover:bg-neutral-800'
                  }`}
                >
                  View Projects
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md transition-all ${
                    darkMode
                      ? 'border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-800'
                      : 'border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50'
                  }`}
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://github.com/kobe824-create"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-md transition-colors ${
                    darkMode 
                      ? 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:iradukunda1happy1@gmail.com"
                  className={`p-2 rounded-md transition-colors ${
                    darkMode 
                      ? 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right side - Profile image */}
            <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in-up stagger-2">
              <div className="relative">
                <img 
                  src="/My_image.jpeg" 
                  alt="Iradukunda Happy"
                  className={`w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl ${
                    darkMode ? 'border border-neutral-800' : 'border border-neutral-200'
                  }`}
                />
                <div className={`absolute -bottom-4 -right-4 px-4 py-3 rounded-xl ${
                  darkMode ? 'bg-neutral-800 border border-neutral-700' : 'bg-white border border-neutral-200'
                }`}>
                  <p className="text-sm font-semibold">3+ Years</p>
                  <p className={`text-xs ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 px-6 ${darkMode ? 'bg-neutral-950' : 'bg-neutral-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <p className={`text-xs font-semibold tracking-wider uppercase ${
                  darkMode ? 'text-neutral-500' : 'text-neutral-500'
                }`}>
                  About Me
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Building with Purpose
                </h2>
              </div>

              <div className={`space-y-4 leading-relaxed ${
                darkMode ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                <p>
                  My journey into software development began with curiosity about how technology shapes our world. 
                  That curiosity evolved into a disciplined commitment to building applications that are functional, 
                  secure, and maintainable.
                </p>
                <p>
                  As a student developer from Rwanda, I've focused on mastering full-stack development with particular 
                  attention to authentication systems, payment workflows, and clean architecture. I approach each 
                  project with a security-first mindset.
                </p>
                <p>
                  Beyond writing code, I'm committed to ethical technology development, building solutions that 
                  respect user privacy and serve genuine human needs.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className={`p-5 rounded-xl ${
                  darkMode ? 'bg-neutral-900 border border-neutral-800' : 'bg-white border border-neutral-200'
                }`}>
                  <Shield className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-1">Security First</h3>
                  <p className={`text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    JWT, bcrypt, OWASP practices
                  </p>
                </div>

                <div className={`p-5 rounded-xl ${
                  darkMode ? 'bg-neutral-900 border border-neutral-800' : 'bg-white border border-neutral-200'
                }`}>
                  <Code2 className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-1">Clean Code</h3>
                  <p className={`text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    Scalable, maintainable architecture
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className={`p-6 rounded-xl ${
                darkMode ? 'bg-neutral-900 border border-neutral-800' : 'bg-white border border-neutral-200'
              }`}>
                <h3 className="font-semibold mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${
                      darkMode ? 'text-neutral-500' : 'text-neutral-500'
                    }`}>Location</p>
                    <p className="text-sm font-medium">Kigali, Rwanda</p>
                  </div>
                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${
                      darkMode ? 'text-neutral-500' : 'text-neutral-500'
                    }`}>Experience</p>
                    <p className="text-sm font-medium">3+ Years Coding</p>
                  </div>
                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${
                      darkMode ? 'text-neutral-500' : 'text-neutral-500'
                    }`}>Focus</p>
                    <p className="text-sm font-medium">Full-Stack Development</p>
                  </div>
                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${
                      darkMode ? 'text-neutral-500' : 'text-neutral-500'
                    }`}>Availability</p>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full"></div>
                      <p className="text-sm font-medium">Open to opportunities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl ${
                darkMode ? 'bg-neutral-900 border border-neutral-800' : 'bg-black text-white'
              }`}>
                <Globe className="w-6 h-6 mb-3" />
                <h3 className="font-semibold mb-2">Remote Ready</h3>
                <p className={`text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-300'}`}>
                  Open to internships and junior developer roles worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 space-y-3">
            <p className={`text-xs font-semibold tracking-wider uppercase ${
              darkMode ? 'text-neutral-500' : 'text-neutral-500'
            }`}>
              Technical Expertise
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Skills & Technologies
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {Object.entries(skills).map(([category, items], catIdx) => (
              <div 
                key={category} 
                className={`p-6 rounded-xl opacity-0 animate-fade-in-up ${
                  darkMode ? 'bg-neutral-900 border border-neutral-800' : 'bg-neutral-50 border border-neutral-200'
                }`}
                style={{animationDelay: `${catIdx * 0.1}s`}}
              >
                <h3 className="text-lg font-semibold mb-6 capitalize flex items-center gap-2">
                  {category === 'frontend' && <Code2 className="w-5 h-5" />}
                  {category === 'backend' && <Server className="w-5 h-5" />}
                  {category === 'database' && <Database className="w-5 h-5" />}
                  {category === 'tools' && <Terminal className="w-5 h-5" />}
                  {category}
                </h3>
                <div className="space-y-4">
                  {items.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            darkMode 
                              ? 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                              : 'bg-white text-neutral-600 border border-neutral-200'
                          }`}>
                            {skill.category}
                          </span>
                        </div>
                        <span className="mono text-xs font-medium text-neutral-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`w-full h-1.5 rounded-full overflow-hidden ${
                        darkMode ? 'bg-neutral-800' : 'bg-neutral-200'
                      }`}>
                        <div
                          className={`skill-bar-animated h-full rounded-full ${
                            darkMode ? 'bg-white' : 'bg-black'
                          }`}
                          style={{ width: skillsInView ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`p-6 rounded-xl ${
            darkMode ? 'bg-neutral-900 border border-neutral-800' : 'bg-neutral-50 border border-neutral-200'
          }`}>
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-neutral-800' : 'bg-white'}`}>
                <Shield className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Security Specialization</h3>
                <p className={`mb-4 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Deep expertise in web application security, including JWT authentication, bcrypt hashing, 
                  input validation, and OWASP best practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['JWT', 'bcrypt', 'OWASP', 'Input Validation', 'CORS', 'XSS Prevention'].map((item) => (
                    <span key={item} className={`px-3 py-1.5 rounded-md text-xs font-medium ${
                      darkMode 
                        ? 'bg-neutral-800 text-neutral-300 border border-neutral-700'
                        : 'bg-white text-neutral-700 border border-neutral-200'
                    }`}>
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
      <section id="projects" className={`py-24 px-6 ${darkMode ? 'bg-neutral-950' : 'bg-neutral-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 space-y-3">
            <p className={`text-xs font-semibold tracking-wider uppercase ${
              darkMode ? 'text-neutral-500' : 'text-neutral-500'
            }`}>
              Featured Work
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Recent Projects
            </h2>
          </div>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`project-card p-8 rounded-xl opacity-0 animate-fade-in-up ${
                  darkMode ? 'bg-neutral-900 border border-neutral-800' : 'bg-white border border-neutral-200'
                }`}
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="mono text-xs text-neutral-500">{project.year}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          project.status === 'production' 
                            ? darkMode 
                              ? 'bg-neutral-800 text-neutral-300 border border-neutral-700'
                              : 'bg-neutral-100 text-neutral-700 border border-neutral-200'
                            : darkMode
                              ? 'bg-neutral-800 text-neutral-400'
                              : 'bg-neutral-100 text-neutral-600'
                        }`}>
                          {project.status === 'production' ? (
                            <span className="flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Production
                            </span>
                          ) : 'In Development'}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold">
                        {project.title}
                      </h3>
                      <p className={`text-sm font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className={darkMode ? 'text-neutral-400' : 'text-neutral-600'}>
                    {project.description}
                  </p>

                  <div className={`p-4 rounded-lg border-l-2 ${
                    darkMode 
                      ? 'bg-neutral-800 border-neutral-600'
                      : 'bg-neutral-50 border-neutral-400'
                  }`}>
                    <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${
                      darkMode ? 'text-neutral-500' : 'text-neutral-500'
                    }`}>
                      Technical Challenge
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-700'}`}>
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wide mb-3 ${
                      darkMode ? 'text-neutral-500' : 'text-neutral-500'
                    }`}>
                      Key Features
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${
                            darkMode ? 'text-neutral-400' : 'text-neutral-600'
                          }`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wide mb-3 ${
                      darkMode ? 'text-neutral-500' : 'text-neutral-500'
                    }`}>
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className={`px-3 py-1 rounded-md text-xs font-medium ${
                          darkMode 
                            ? 'bg-neutral-800 text-neutral-300 border border-neutral-700'
                            : 'bg-neutral-100 text-neutral-700 border border-neutral-200'
                        }`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.impact && (
                    <div className={`p-4 rounded-lg ${
                      darkMode ? 'bg-neutral-800' : 'bg-neutral-100'
                    }`}>
                      <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${
                        darkMode ? 'text-neutral-500' : 'text-neutral-500'
                      }`}>
                        Impact
                      </p>
                      <p className="text-sm font-medium">{project.impact}</p>
                    </div>
                  )}

                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.github}
                      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                        darkMode
                          ? 'bg-white text-black hover:bg-neutral-200'
                          : 'bg-black text-white hover:bg-neutral-800'
                      }`}
                    >
                      <FileCode className="w-4 h-4" />
                      View Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                          darkMode
                            ? 'border border-neutral-700 hover:bg-neutral-800'
                            : 'border border-neutral-300 hover:bg-neutral-50'
                        }`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/kobe824-create"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md transition-all ${
                darkMode
                  ? 'border border-neutral-700 hover:bg-neutral-800'
                  : 'border border-neutral-300 hover:bg-neutral-50'
              }`}
            >
              <Github className="w-5 h-5" />
              More on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <p className={`text-xs font-semibold tracking-wider uppercase ${
              darkMode ? 'text-neutral-500' : 'text-neutral-500'
            }`}>
              Get In Touch
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Let's Work Together
            </h2>
            <p className={`max-w-2xl mx-auto ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              I'm actively seeking internship and junior developer opportunities. 
              Let's connect and build something great.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Mail, title: 'Email', value: 'iradukunda1happy1@gmail.com', link: 'mailto:iradukunda1happy1@gmail.com' },
              { icon: Github, title: 'GitHub', value: '@kobe824-create', link: 'https://github.com/kobe824-create' },
              { icon: Globe, title: 'Location', value: 'Kigali, Rwanda', link: null }
            ].map((contact, idx) => (
              <a
                key={idx}
                href={contact.link || '#'}
                target={contact.link?.startsWith('http') ? '_blank' : undefined}
                rel={contact.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`p-6 rounded-xl text-center transition-all ${
                  darkMode 
                    ? 'bg-neutral-900 border border-neutral-800 hover:border-neutral-700'
                    : 'bg-neutral-50 border border-neutral-200 hover:border-neutral-300'
                } ${contact.link ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <contact.icon className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-1">{contact.title}</h3>
                <p className={`text-xs break-all ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {contact.value}
                </p>
              </a>
            ))}
          </div>

          <div className={`p-8 rounded-xl text-center ${
            darkMode ? 'bg-neutral-900 border border-neutral-800' : 'bg-black text-white'
          }`}>
            <h3 className="text-2xl font-bold mb-3">Ready to Collaborate?</h3>
            <p className={`mb-6 max-w-xl mx-auto ${
              darkMode ? 'text-neutral-400' : 'text-neutral-300'
            }`}>
              Whether you have a project in mind or want to discuss opportunities, I'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="mailto:iradukunda1happy1@gmail.com"
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md transition-all ${
                  darkMode
                    ? 'bg-white text-black hover:bg-neutral-200'
                    : 'bg-white text-black hover:bg-neutral-200'
                }`}
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
              <a
                href="#"
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md transition-all ${
                  darkMode
                    ? 'border border-neutral-700 text-white hover:bg-neutral-800'
                    : 'border border-neutral-300 text-white hover:border-white'
                }`}
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${
        darkMode ? 'border-neutral-800' : 'border-neutral-200'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-semibold">Iradukunda Happy</p>
              <p className={`text-xs ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Full-Stack Developer • Security Enthusiast
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/kobe824-create"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-md transition-colors ${
                  darkMode 
                    ? 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:iradukunda1happy1@gmail.com"
                className={`p-2 rounded-md transition-colors ${
                  darkMode 
                    ? 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className={`pt-6 mt-6 border-t text-center text-xs ${
            darkMode ? 'border-neutral-800 text-neutral-500' : 'border-neutral-200 text-neutral-500'
          }`}>
            © {new Date().getFullYear()} Iradukunda Happy. Built with React & Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;