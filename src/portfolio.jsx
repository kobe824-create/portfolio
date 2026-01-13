import React, { useState, useEffect, useRef } from 'react';
import { Github, Mail, Linkedin, ExternalLink, Code2, Shield, Zap, Download, Menu, X, ArrowUpRight, CheckCircle2, Clock, FileCode, Database, Globe, Lock, Server, Terminal } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

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
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
      title: 'Corporate Payment System',
      subtitle: 'Enterprise Financial Management',
      description: 'A comprehensive platform for managing corporate payments including utilities, salaries, and taxes with full audit trails and multi-level approval workflows.',
      challenge: 'Built a secure authentication system with role-based access control while ensuring transaction integrity and scalability for enterprise use.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'Express', 'Tailwind'],
      features: ['Multi-role authentication', 'Payment workflows', 'Audit logging', 'Transaction history'],
      github: '#',
      demo: null,
      status: 'production',
      year: '2024',
      impact: 'Streamlined payment processes for multiple departments'
    },
    {
      id: 2,
      title: 'School Stock Management',
      subtitle: 'Educational Resource System',
      description: 'An inventory management solution designed for educational institutions to track materials, handle teacher requests, and manage approval workflows efficiently.',
      challenge: 'Designed a flexible approval system that accommodates different organizational hierarchies while maintaining data consistency.',
      tech: ['Vue.js', 'Node.js', 'MySQL', 'Express', 'Bootstrap'],
      features: ['Request management', 'Approval workflows', 'Stock tracking', 'Role-based access'],
      github: '#',
      demo: null,
      status: 'development',
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

  const experience = [
    {
      role: 'Software Development',
      type: 'Academic & Personal Projects',
      period: '2023 - Present',
      description: 'Building full-stack applications with focus on security, scalability, and clean architecture. Specializing in authentication systems and payment workflows.'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        code, pre {
          font-family: 'JetBrains Mono', monospace;
        }

        .gradient-text {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .skill-bar {
          transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-4px);
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

        .animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .nav-link {
          position: relative;
          transition: color 0.2s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #0f172a;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .section-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 500;
        }
      `}</style>

      {/* Cursor follower effect */}
      <div 
        className="fixed w-6 h-6 border-2 border-slate-900 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out hidden lg:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference'
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#home" className="text-xl font-bold tracking-tight">
              IH
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item, idx) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link text-sm font-medium ${activeSection === item.toLowerCase() ? 'active text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  <span className="section-number">{String(idx + 1).padStart(2, '0')}.</span> {item}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="mailto:iradukunda1happy1@gmail.com"
                className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-6 py-6 space-y-4">
              {['About', 'Skills', 'Projects', 'Contact'].map((item, idx) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-900 font-medium py-2"
                >
                  <span className="section-number">{String(idx + 1).padStart(2, '0')}.</span> {item}
                </a>
              ))}
              <a
                href="mailto:iradukunda1happy1@gmail.com"
                className="block w-full px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="space-y-8 animate-in">
            <div className="space-y-4">
              <p className="text-slate-600 font-medium tracking-wide">Hi, my name is</p>
              <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-slate-900">
                Iradukunda Happy
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-600">
                I build secure web applications.
              </h2>
            </div>

            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              I'm a software developer focused on building robust full-stack applications with an emphasis on security, clean architecture, and ethical technology. Currently pursuing opportunities in software development while contributing to meaningful projects.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all hover:gap-3"
              >
                View My Work
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 font-medium rounded-lg hover:bg-slate-900 hover:text-white transition-all"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>

            <div className="flex items-center gap-6 pt-8">
              <a
                href="https://github.com/kobe824-create"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:iradukunda1happy1@gmail.com"
                className="text-slate-600 hover:text-slate-900 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs font-medium tracking-wider">SCROLL</span>
          <div className="w-px h-16 bg-gradient-to-b from-slate-300 to-transparent"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="section-number">01. ABOUT ME</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                  Building with Purpose
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  My journey into software development began with a curiosity about how technology shapes our world. That curiosity evolved into a disciplined commitment to building applications that are not only functional but also secure, ethical, and maintainable.
                </p>
                <p>
                  As a student developer from Rwanda, I've focused on mastering full-stack development with particular attention to authentication systems, payment workflows, and clean architecture. I approach each project with a security-first mindset, ensuring that best practices are embedded from the ground up.
                </p>
                <p>
                  Beyond writing code, I'm committed to ethical technology development. As a Muslim developer, I believe in building solutions that respect user privacy, protect data, and serve genuine human needs. My work reflects values of honesty, responsibility, and continuous growth.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                {experience.map((exp, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      {exp.role}
                    </div>
                    <p className="text-sm text-slate-600">{exp.type}</p>
                    <p className="text-xs text-slate-500">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Core Competencies</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <Shield className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Security-First Development</h4>
                      <p className="text-sm text-slate-600">Implementing JWT authentication, password hashing, input validation, and following OWASP guidelines in every project.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <Code2 className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Clean Architecture</h4>
                      <p className="text-sm text-slate-600">Writing maintainable, well-structured code with proper separation of concerns and scalable design patterns.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <Zap className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Continuous Learning</h4>
                      <p className="text-sm text-slate-600">Honest about current skills while actively expanding knowledge in cybersecurity and modern web technologies.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Based in Rwanda</h3>
                <p className="text-slate-300 mb-6">Open to remote opportunities worldwide. Available for internships, junior developer roles, and collaborative projects.</p>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Globe className="w-4 h-4" />
                  <span>Kigali, Rwanda • Remote Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="section-number">02. TECHNICAL EXPERTISE</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Skills & Technologies
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Proficiency levels based on practical experience and project implementation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white rounded-2xl p-8 border border-slate-200 card-hover">
                <h3 className="text-xl font-bold text-slate-900 mb-6 capitalize flex items-center gap-3">
                  {category === 'frontend' && <Code2 className="w-6 h-6" />}
                  {category === 'backend' && <Server className="w-6 h-6" />}
                  {category === 'database' && <Database className="w-6 h-6" />}
                  {category === 'tools' && <Terminal className="w-6 h-6" />}
                  {category}
                </h3>
                <div className="space-y-5">
                  {items.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="font-semibold text-slate-900">{skill.name}</span>
                          <span className="text-xs text-slate-500 ml-2">• {skill.category}</span>
                        </div>
                        <span className="text-sm font-mono text-slate-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="skill-bar h-full bg-slate-900 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-start gap-4">
              <Lock className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Security Focus</h3>
                <p className="text-slate-600 mb-4">
                  Specialized knowledge in web application security, including JWT authentication, password hashing with bcrypt, input validation, and OWASP Top 10 security practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['JWT', 'bcrypt', 'OWASP', 'Input Validation', 'CORS', 'XSS Prevention'].map((item) => (
                    <span key={item} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700">
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
      <section id="projects" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="section-number">03. RECENT WORK</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Featured Projects
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Real-world applications built with modern technologies and security best practices
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-slate-500">{project.year}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'production' 
                          ? 'bg-green-50 text-green-700 border border-green-200' 
                          : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                      }`}>
                        {project.status === 'production' ? (
                          <span className="flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Production
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> In Development
                          </span>
                        )}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900">{project.title}</h3>
                    <p className="text-lg text-slate-600 font-medium">{project.subtitle}</p>
                  </div>

                  <p className="text-slate-600 leading-relaxed">{project.description}</p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Technical Challenge</h4>
                    <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-slate-900 pl-4">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-slate-900 font-medium hover:gap-3 transition-all"
                    >
                      <FileCode className="w-5 h-5" />
                      View Code
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="inline-flex items-center gap-2 text-slate-900 font-medium hover:gap-3 transition-all"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className={`${idx % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 aspect-video">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center">
                      <div className="text-center space-y-4 p-8">
                        <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center mx-auto">
                          <Code2 className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-slate-600 font-medium">Project Preview</p>
                        <p className="text-sm text-slate-500">Screenshots available upon request</p>
                      </div>
                    </div>
                  </div>
                  
                  {project.impact && (
                    <div className="mt-6 bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <h4 className="text-sm font-semibold text-slate-900 mb-2 uppercase tracking-wide">Impact</h4>
                      <p className="text-slate-600">{project.impact}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a
              href="https://github.com/kobe824-create"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 font-medium rounded-lg hover:bg-slate-900 hover:text-white transition-all"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 mb-12">
            <p className="section-number">04. GET IN TOUCH</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Let's Work Together
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              I'm currently seeking internship and junior developer opportunities. Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 card-hover">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
              <a href="mailto:iradukunda1happy1@gmail.com" className="text-slate-600 hover:text-slate-900 transition-colors text-sm break-all">
                iradukunda1happy1@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 card-hover">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Github className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">GitHub</h3>
              <a href="https://github.com/kobe824-create" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
                @kobe824-create
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 card-hover">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
              <p className="text-slate-600 text-sm">Kigali, Rwanda</p>
              <p className="text-slate-500 text-xs mt-1">Remote Available</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Available for Opportunities</h3>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Seeking internships and junior developer roles where I can contribute to meaningful projects while continuing to grow my skills in full-stack development and security.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:iradukunda1happy1@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-all"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-slate-900 font-semibold mb-1">Iradukunda Happy</p>
              <p className="text-sm text-slate-600">Building with purpose, security, and intention</p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/kobe824-create"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:iradukunda1happy1@gmail.com"
                className="text-slate-600 hover:text-slate-900 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Iradukunda Happy. Designed & built with React, Vite, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;