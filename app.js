/**
 * Manohar Reddy Maddikara - AI & ML Engineer Portfolio
 * ChatGPT-Style Conversational Web Experience
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // =========================================================================
    // 1. DATA REPOSITORY
    // =========================================================================
    const portfolioData = {
        name: "Manohar Reddy Maddikara",
        phone: "+91 9505508111",
        email: "manoharreddy.maddikara85@gmail.com",
        location: "Hyderabad, Telangana, India",
        linkedin: "https://www.linkedin.com/in/manoharreddy-maddikara-73ab60351/",
        github: "https://github.com/manohar-maddikara",
        title: "AI & ML Engineer",
        degree: "B.Tech in Computer Science Engineering (AI & ML)",
        college: "Malla Reddy Engineering College",
        cgpa: "7.9",
        graduationYear: "2023 - 2027",
        summary: "AI & ML undergraduate with practical experience in software development, machine learning, and full-stack web applications. Proficient in Python, SQL, Machine Learning with strong problem-solving skills and hands-on experience in developing end-to-end projects.",
        
        journey: [
            {
                period: "2025 – Present",
                active: true,
                nodeColor: "blue",
                role: "Production AI/ML Engineering & Open for Roles",
                institution: "AI / ML Specialization & System Design",
                desc: "Advancing scalable machine learning pipelines, deep learning model evaluation, and generative AI integrations. Deploying end-to-end Flask REST endpoints for predictive systems. Actively seeking AI/ML engineering roles and internships.",
                tags: ["Machine Learning", "Model Serving", "Flask REST APIs", "Deep Learning", "Generative AI", "Hyderabad"]
            },
            {
                period: "2024 – 2026",
                active: false,
                nodeColor: "purple",
                role: "End-to-End Machine Learning Systems",
                institution: "Uber Trip Analysis & Car Sence Systems",
                desc: "Engineered high-accuracy predictive systems: Uber Trip Analysis & Fare Prediction utilizing Random Forest (85%+ accuracy) and Car Sence Used Car Valuation powered by Lasso Regression (0.84 R²), cutting evaluation latency by 30%.",
                tags: ["Random Forest", "Lasso Regression", "Scikit-learn", "Feature Engineering", "Pandas", "NumPy"]
            },
            {
                period: "2024",
                active: false,
                nodeColor: "emerald",
                role: "Global Certifications & Cloud Foundations",
                institution: "Microsoft, AWS & IIT Madras (NPTEL)",
                desc: "Earned Microsoft Azure AI Fundamentals (AI-900), Problem Solving through Programming in C (IIT Madras NPTEL), and AWS Cloud Fundamentals. Developed deep expertise in cloud architectures and core computer science fundamentals.",
                tags: ["Azure AI-900", "NPTEL IIT Madras", "AWS Cloud", "Data Structures", "DBMS", "C & Java"]
            },
            {
                period: "2023 – 2027",
                active: false,
                nodeColor: "blue",
                role: "B.Tech in CSE (Artificial Intelligence & Machine Learning)",
                institution: "Malla Reddy Engineering College",
                desc: "Pursuing undergraduate degree with a 7.9 CGPA. Rigorous coursework in Algorithms, Object-Oriented Programming, Database Management Systems, and Machine Learning Mathematics.",
                tags: ["7.9 CGPA", "AI & ML Specialization", "Python", "SQL", "OOP", "DBMS"]
            },
            {
                period: "2021 – 2023",
                active: false,
                nodeColor: "amber",
                role: "Senior Secondary (Intermediate - MPC)",
                institution: "TSBIE Board",
                desc: "Graduated with 93.2% in Mathematics, Physics, and Chemistry. Established rigorous analytical, algebraic, and probabilistic foundation essential for machine learning algorithms.",
                tags: ["93.2% Distinction", "Mathematics", "Analytical Rigor", "Physics"]
            },
            {
                period: "2021",
                active: false,
                nodeColor: "emerald",
                role: "Secondary School Certificate (SSC)",
                institution: "SSC Board",
                desc: "Achieved a perfect 10.0 GPA (10/10), demonstrating consistent academic discipline, problem-solving, and dedication from the beginning.",
                tags: ["10.0 GPA", "Perfect Score", "Academic Honors"]
            }
        ],

        skills: {
            ml: ["Scikit-learn", "Pandas", "NumPy", "Random Forest Regressor", "Random Forest Classifier", "Lasso Regression", "Data Preprocessing", "Feature Engineering", "Model Evaluation", "Label Encoding", "StandardScaler"],
            languages: ["Python", "SQL", "Java", "C"],
            backend: ["Flask", "REST APIs", "Model Serving", "Input Validation Pipelines"],
            databases: ["MySQL", "Relational Database Management (RDBMS)"],
            tools: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
            core: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "Database Management Systems (DBMS)"]
        },

        education: [
            {
                degree: "B.Tech in Computer Science Engineering (AI & ML)",
                institution: "Malla Reddy Engineering College",
                score: "7.9 CGPA",
                year: "2023 - 2027"
            },
            {
                degree: "Senior Secondary (Intermediate)",
                institution: "TSBIE Board",
                score: "93.2%",
                year: "2021 - 2023"
            },
            {
                degree: "Secondary School Certificate",
                institution: "SSC Board",
                score: "10.0 GPA",
                year: "2021"
            }
        ],

        certifications: [
            {
                title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
                issuer: "Microsoft",
                year: "2024",
                icon: "sparkles"
            },
            {
                title: "Problem Solving Through Programming",
                issuer: "NPTEL (IIT Madras)",
                year: "2024",
                icon: "code"
            },
            {
                title: "AWS Cloud Fundamentals",
                issuer: "Amazon Web Services (AWS)",
                year: "2024",
                icon: "cloud"
            },
            {
                title: "Data Visualization using Python",
                issuer: "AimR Edu LLP",
                year: "2024",
                icon: "bar-chart-2"
            },
            {
                title: "Python Training",
                issuer: "TechAugusta",
                year: "2023",
                icon: "terminal"
            },
            {
                title: "IDE Bootcamp",
                issuer: "AICTE",
                year: "2023",
                icon: "cpu"
            },
            {
                title: "Business English Certification",
                issuer: "GetGrad Global Pvt. Ltd.",
                year: "2023",
                icon: "award"
            }
        ],

        projects: [
            {
                id: "uber-trip",
                title: "Uber Trip Analysis & Prediction System",
                subtitle: "Machine Learning-Based Fare and Demand Prediction",
                timeline: "Apr. 2026 – Jun. 2026",
                category: "Machine Learning & Flask",
                image: "assets/uber_preview.jpg",
                overview: "Developed a Flask-based machine learning web application to predict Uber trip fare and demand using historical Hyderabad trip data. The system features real-time pickup/drop locations, distance calculations, trip hour analysis, surge multiplier dynamics, and weather condition impacts.",
                highlights: [
                    "Built and evaluated Random Forest Regressor for precision fare calculation and Random Forest Classifier for demand level categorizations.",
                    "Implemented rigorous data preprocessing pipelines utilizing Label Encoding for categorical variables and StandardScaler for feature normalization.",
                    "Integrated live input pipelines allowing instant fare estimation and route demand forecasting for urban Hyderabad transit.",
                    "Engineered clean REST endpoints in Flask to decouple frontend dashboards with machine learning inference engines."
                ],
                techStack: ["Python", "Flask", "Scikit-learn", "Random Forest", "Pandas", "NumPy", "StandardScaler", "REST APIs", "HTML5/CSS3"],
                github: "https://github.com/manohar-maddikara"
            },
            {
                id: "car-sence",
                title: "Car Sence – Used Car Price Prediction System",
                subtitle: "Machine Learning-Based Used Car Price Estimation",
                timeline: "2026",
                category: "Predictive Analytics",
                image: "assets/carsence_preview.jpg",
                overview: "A machine learning web platform that estimates real-time market valuations for second-hand vehicles across India. The engine processes comprehensive attributes including brand, model, manufacture year, accumulated mileage, fuel type, and transmission type.",
                highlights: [
                    "Trained and tuned a Lasso Regression model to penalize redundant coefficients and prevent overfitting across high-cardinality vehicle features.",
                    "Built robust input validation pipelines to sanitize incoming user parameters and handle missing or out-of-distribution values.",
                    "Delivered real-time price prediction and multiple vehicle comparison functionality via optimized Flask REST APIs.",
                    "Designed an interactive glassmorphic dashboard showcasing price confidence gauges, historical trends, and similar market listings."
                ],
                techStack: ["Python", "Flask", "Lasso Regression", "Scikit-learn", "Data Preprocessing", "Feature Engineering", "REST APIs"],
                github: "https://github.com/manohar-maddikara"
            }
        ]
    };

    // =========================================================================
    // 2. DOM ELEMENTS
    // =========================================================================
    const landingView = document.getElementById('landingView');
    const chatView = document.getElementById('chatView');
    const chatMessages = document.getElementById('chatMessages');
    const heroForm = document.getElementById('heroForm');
    const heroInput = document.getElementById('heroInput');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const newChatBtn = document.getElementById('newChatBtn');
    const statusPill = document.getElementById('statusPill');
    const navModelTitle = document.getElementById('navModelTitle');
    const resumeNavBtn = document.getElementById('resumeNavBtn');
    const voiceToggleBtn = document.getElementById('voiceToggleBtn');
    const voiceIcon = document.getElementById('voiceIcon');
    const memojiContainer = document.getElementById('memojiContainer');
    const memojiHeroImg = document.getElementById('memojiHeroImg');

    // Project Deep Dive Modal
    const projectModal = document.getElementById('projectModal');
    const closeProjectModal = document.getElementById('closeProjectModal');
    const projectModalImg = document.getElementById('projectModalImg');
    const projectModalBody = document.getElementById('projectModalBody');

    let voiceModeActive = false;

    // =========================================================================
    // 3. 3D MEMOJI EYE & TILT TRACKING
    // =========================================================================
    if (memojiContainer && memojiHeroImg) {
        window.addEventListener('mousemove', (e) => {
            const rect = memojiContainer.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
            const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

            const tiltX = deltaY * -12;
            const tiltY = deltaX * 14;
            const lookX = deltaX * 8;
            const lookY = deltaY * 8;

            memojiContainer.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
            memojiHeroImg.style.transform = `scale(1.18) translate(${lookX}px, ${lookY + 8}px)`;
        });

        memojiContainer.addEventListener('mouseleave', () => {
            memojiContainer.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
            memojiHeroImg.style.transform = 'scale(1.15) translateY(4%)';
        });
    }

    // =========================================================================
    // 4. SPEECH SYNTHESIS ENGINE
    // =========================================================================
    function speakText(text) {
        if (!voiceModeActive || !('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();

        const cleanText = text.replace(/<[^>]*>?/gm, '').replace(/[*_#`[\]()]/g, '');
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.rate = 1.05;

        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => v.lang.includes('en')) || voices[0];
        if (preferredVoice) utterance.voice = preferredVoice;

        window.speechSynthesis.speak(utterance);
    }

    function toggleVoiceMode() {
        voiceModeActive = !voiceModeActive;
        if (voiceToggleBtn) {
            voiceToggleBtn.style.color = voiceModeActive ? 'var(--accent-blue)' : 'var(--text-primary)';
            voiceToggleBtn.innerHTML = `<i data-lucide="${voiceModeActive ? 'volume-2' : 'volume-x'}"></i>`;
            if (window.lucide) window.lucide.createIcons();
        }
        if (!voiceModeActive && window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
    }

    if (voiceToggleBtn) voiceToggleBtn.addEventListener('click', toggleVoiceMode);

    // =========================================================================
    // 5. CHATGPT VIEW CONTROLLER
    // =========================================================================
    function switchToChatView() {
        document.body.classList.add('chat-active');
        landingView.classList.add('hidden');
        chatView.classList.remove('hidden');

        // Nav changes
        if (statusPill) statusPill.classList.add('hidden');
        if (newChatBtn) newChatBtn.classList.remove('hidden');
        if (navModelTitle) navModelTitle.classList.remove('hidden');

        setTimeout(() => {
            if (chatInput) chatInput.focus();
        }, 100);
    }

    function switchToLandingView() {
        document.body.classList.remove('chat-active');
        chatView.classList.add('hidden');
        landingView.classList.remove('hidden');

        // Nav changes
        if (statusPill) statusPill.classList.remove('hidden');
        if (newChatBtn) newChatBtn.classList.add('hidden');
        if (navModelTitle) navModelTitle.classList.add('hidden');

        chatMessages.innerHTML = '';
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (newChatBtn) newChatBtn.addEventListener('click', switchToLandingView);

    // =========================================================================
    // 6. WIDGET GENERATORS (CHATGPT COMPONENTS)
    // =========================================================================

    // Projects Carousel Component
    function buildProjectsWidget() {
        const wrap = document.createElement('div');
        wrap.className = 'widget-projects';
        wrap.innerHTML = `
            <div class="widget-title">
                <span>Featured Machine Learning Projects</span>
                <div class="carousel-controls">
                    <button class="carousel-nav-btn prev-btn" aria-label="Previous"><i data-lucide="chevron-left"></i></button>
                    <button class="carousel-nav-btn next-btn" aria-label="Next"><i data-lucide="chevron-right"></i></button>
                </div>
            </div>
            <div class="carousel-container">
                <div class="carousel-track">
                    ${portfolioData.projects.map(p => `
                        <div class="project-card" data-project-id="${p.id}">
                            <img src="${p.image}" alt="${p.title}" class="project-card-img">
                            <div class="project-card-overlay">
                                <span class="project-category-badge">${p.category}</span>
                                <div class="project-bottom-info">
                                    <h3>${p.title}</h3>
                                    <p>${p.subtitle}</p>
                                    <div class="project-view-btn">
                                        <span>View Architecture</span>
                                        <i data-lucide="arrow-up-right" style="width: 13px; height: 13px;"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        const track = wrap.querySelector('.carousel-track');
        const prev = wrap.querySelector('.prev-btn');
        const next = wrap.querySelector('.next-btn');
        if (prev && track) prev.addEventListener('click', () => track.scrollBy({ left: -280, behavior: 'smooth' }));
        if (next && track) next.addEventListener('click', () => track.scrollBy({ left: 280, behavior: 'smooth' }));

        wrap.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => {
                const pid = card.getAttribute('data-project-id');
                const proj = portfolioData.projects.find(p => p.id === pid);
                if (proj) openProjectModal(proj);
            });
        });

        return wrap;
    }

    // Skills Component
    function buildSkillsWidget() {
        const wrap = document.createElement('div');
        wrap.className = 'widget-skills';
        wrap.innerHTML = `
            <div class="skills-category">
                <div class="skills-cat-title">
                    <i data-lucide="brain" style="width: 18px; height: 18px; color: #856ED9;"></i>
                    <span>Machine Learning & Data Science</span>
                </div>
                <div class="skills-badges-wrap">
                    ${portfolioData.skills.ml.map(s => `<span class="skill-badge badge-purple">${s}</span>`).join('')}
                </div>
            </div>

            <div class="skills-category">
                <div class="skills-cat-title">
                    <i data-lucide="server" style="width: 18px; height: 18px; color: #3E9858;"></i>
                    <span>Backend Development & Databases</span>
                </div>
                <div class="skills-badges-wrap">
                    ${portfolioData.skills.backend.map(s => `<span class="skill-badge badge-emerald">${s}</span>`).join('')}
                    ${portfolioData.skills.databases.map(s => `<span class="skill-badge badge-emerald">${s}</span>`).join('')}
                </div>
            </div>

            <div class="skills-category">
                <div class="skills-cat-title">
                    <i data-lucide="code" style="width: 18px; height: 18px; color: #0284c7;"></i>
                    <span>Programming Languages</span>
                </div>
                <div class="skills-badges-wrap">
                    ${portfolioData.skills.languages.map(s => `<span class="skill-badge badge-blue">${s}</span>`).join('')}
                </div>
            </div>

            <div class="skills-category">
                <div class="skills-cat-title">
                    <i data-lucide="terminal" style="width: 18px; height: 18px; color: #d97706;"></i>
                    <span>Developer Tools & CS Fundamentals</span>
                </div>
                <div class="skills-badges-wrap">
                    ${portfolioData.skills.tools.map(s => `<span class="skill-badge badge-amber">${s}</span>`).join('')}
                    ${portfolioData.skills.core.map(s => `<span class="skill-badge badge-amber">${s}</span>`).join('')}
                </div>
            </div>
        `;
        return wrap;
    }

    const GITHUB_SVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`;
    const LINKEDIN_SVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.72a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63s1.63-.73 1.63-1.63c0-.9-.73-1.63-1.63-1.63Z"/></svg>`;

    // Me Component
    function buildMeWidget() {
        const wrap = document.createElement('div');
        wrap.className = 'widget-me';
        wrap.innerHTML = `
            <div class="widget-me-photo">
                <img src="assets/memoji.jpg" alt="Manohar Reddy Maddikara">
            </div>
            <div class="widget-me-info">
                <h2>${portfolioData.name}</h2>
                <div class="widget-me-meta">
                    <span>${portfolioData.degree}</span>
                    <span>•</span>
                    <span>${portfolioData.college}</span>
                </div>
                <p class="widget-me-bio">${portfolioData.summary}</p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.45rem; margin-top: 0.85rem;">
                    <span class="skill-badge badge-blue">AI & ML Engineer</span>
                    <span class="skill-badge badge-purple">7.9 CGPA</span>
                    <span class="skill-badge badge-emerald">Python & Flask</span>
                    <span class="skill-badge badge-amber">Hyderabad, India</span>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.55rem; margin-top: 1rem;">
                    <a href="${portfolioData.linkedin}" target="_blank" rel="noopener noreferrer" class="journey-profile-btn linkedin">
                        ${LINKEDIN_SVG}
                        <span>LinkedIn Profile</span>
                    </a>
                    <a href="${portfolioData.github}" target="_blank" rel="noopener noreferrer" class="journey-profile-btn github">
                        ${GITHUB_SVG}
                        <span>GitHub Profile</span>
                    </a>
                </div>
            </div>
        `;
        return wrap;
    }

    // Journey Timeline Component
    function buildJourneyWidget() {
        const wrap = document.createElement('div');
        wrap.className = 'widget-journey';

        wrap.innerHTML = `
            <div class="journey-intro-card">
                <div class="journey-intro-text">
                    <h3>Academic & Professional Journey</h3>
                    <p>Track record of academic excellence, certifications, and production ML deployments</p>
                </div>
                <div class="journey-profiles-links">
                    <a href="${portfolioData.linkedin}" target="_blank" rel="noopener noreferrer" class="journey-profile-btn linkedin" title="View LinkedIn">
                        ${LINKEDIN_SVG}
                        <span>LinkedIn</span>
                    </a>
                    <a href="${portfolioData.github}" target="_blank" rel="noopener noreferrer" class="journey-profile-btn github" title="View GitHub">
                        ${GITHUB_SVG}
                        <span>GitHub</span>
                    </a>
                </div>
            </div>

            <div class="journey-timeline">
                ${portfolioData.journey.map(j => `
                    <div class="journey-item">
                        <div class="journey-node ${j.nodeColor}"></div>
                        <div class="journey-card">
                            <div class="journey-header">
                                <div class="journey-title-wrap">
                                    <h4>${j.role}</h4>
                                    <div class="journey-institution">${j.institution}</div>
                                </div>
                                <span class="journey-period-pill ${j.active ? 'active' : ''}">${j.period}</span>
                            </div>
                            <p class="journey-desc">${j.desc}</p>
                            <div class="journey-tags">
                                ${j.tags.map(t => `<span class="skill-badge badge-${j.nodeColor}">${t}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        return wrap;
    }

    // Education & Certifications Component
    function buildEducationWidget() {
        const wrap = document.createElement('div');
        wrap.className = 'widget-edu';

        let html = `<div><h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.65rem;">Academic Qualifications</h4></div>`;
        portfolioData.education.forEach(edu => {
            html += `
                <div class="edu-card">
                    <div class="edu-card-left">
                        <h4>${edu.degree}</h4>
                        <p>${edu.institution}</p>
                    </div>
                    <div class="edu-card-right">
                        <div class="edu-score">${edu.score}</div>
                        <div class="edu-year">${edu.year}</div>
                    </div>
                </div>
            `;
        });

        html += `<div style="margin-top: 0.75rem;"><h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.65rem;">Official Certifications</h4></div><div class="certs-grid">`;
        portfolioData.certifications.forEach(cert => {
            html += `
                <div class="cert-item">
                    <div class="cert-icon">
                        <i data-lucide="${cert.icon}"></i>
                    </div>
                    <div class="cert-details">
                        <h5>${cert.title}</h5>
                        <span>${cert.issuer} • ${cert.year}</span>
                    </div>
                </div>
            `;
        });
        html += `</div>`;

        wrap.innerHTML = html;
        return wrap;
    }

    // Resume Download Card Component
    function buildResumeWidget() {
        const wrap = document.createElement('div');
        wrap.className = 'resume-card';
        wrap.innerHTML = `
            <div class="resume-card-left">
                <h3>Manohar Reddy Maddikara – Resume</h3>
                <p>AI & ML Engineer • Full-Stack Python & Flask Developer</p>
                <div style="font-size: 0.78rem; color: #64748b; margin-top: 0.2rem;">
                    <span>PDF / Text</span> • <span>Hyderabad</span> • <span>Updated 2026</span>
                </div>
            </div>
            <button class="resume-download-btn" title="Download Resume">
                <i data-lucide="download"></i>
            </button>
        `;
        wrap.addEventListener('click', downloadResumeFile);
        return wrap;
    }

    // Contact Component
    function buildContactWidget() {
        const wrap = document.createElement('div');
        wrap.className = 'widget-contact';
        wrap.innerHTML = `
            <h3 style="font-size: 1.35rem; font-weight: 800; color: #111827;">Contact Manohar</h3>
            <p style="font-size: 0.92rem; color: #64748b; margin-top: 0.2rem;">Available for AI / ML engineer roles, full-time positions, and internships.</p>

            <div class="contact-email-row">
                <i data-lucide="mail" style="color: var(--accent-blue); width: 22px; height: 22px;"></i>
                <a href="mailto:${portfolioData.email}" class="contact-email-link">${portfolioData.email}</a>
            </div>

            <div class="contact-links-grid">
                <a href="tel:${portfolioData.phone.replace(/\s+/g, '')}" class="contact-pill-btn">
                    <i data-lucide="phone" style="width: 16px; height: 16px; color: #10b981;"></i>
                    <span>${portfolioData.phone}</span>
                </a>
                <a href="${portfolioData.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-pill-btn" style="color: #0284c7;">
                    ${LINKEDIN_SVG}
                    <span>LinkedIn</span>
                </a>
                <a href="${portfolioData.github}" target="_blank" rel="noopener noreferrer" class="contact-pill-btn" style="color: #0f172a;">
                    ${GITHUB_SVG}
                    <span>GitHub</span>
                </a>
                <div class="contact-pill-btn" style="cursor: default;">
                    <i data-lucide="map-pin" style="width: 16px; height: 16px; color: #f43f5e;"></i>
                    <span>${portfolioData.location}</span>
                </div>
            </div>
        `;
        return wrap;
    }

    // =========================================================================
    // 7. CHATGPT INTELLIGENCE & QUERY ROUTER
    // =========================================================================
    function processUserQuery(query) {
        const q = query.toLowerCase().trim();

        // 1. Journey / Career Path / Milestones
        if (q.includes('journey') || q.includes('timeline') || q.includes('story') || q.includes('career') || q.includes('milestone') || q.includes('path') || q.includes('growth')) {
            return {
                text: "Here is my **Academic & Professional Journey**! Starting with a **10.0 GPA** in high school, progressing through **93.2%** in Intermediate, pursuing B.Tech in CSE (AI & ML) with **7.9 CGPA**, earning **Microsoft Azure AI-900** & **IIT Madras** certifications, and engineering production machine learning systems:",
                widget: buildJourneyWidget(),
                followups: [
                    "What projects have you built?",
                    "What are your technical skills in AI?",
                    "How can I contact or hire Manohar?"
                ]
            };
        }

        // 2. Projects
        if (q.includes('project') || q.includes('uber') || q.includes('car') || q.includes('fare') || q.includes('built')) {
            return {
                text: "Here are my featured **Machine Learning Projects**! I specialize in developing end-to-end predictive systems, coupling Flask REST inference endpoints with Random Forest and Lasso Regression models. Click on any project card below to view the full architecture and metrics:",
                widget: buildProjectsWidget(),
                followups: [
                    "How does your Uber Fare Prediction work?",
                    "Explain your Car Sence Lasso Regression model",
                    "What are your technical skills?"
                ]
            };
        }

        // 3. Skills
        if (q.includes('skill') || q.includes('python') || q.includes('flask') || q.includes('ml') || q.includes('tech') || q.includes('sql') || q.includes('stack')) {
            return {
                text: "Here is an overview of my **Technical Skills & Tools**! My core foundation is in Python, Scikit-learn, Flask, and SQL, supplemented by strong computer science principles in Data Structures & Object-Oriented Programming:",
                widget: buildSkillsWidget(),
                followups: [
                    "Show me your machine learning projects",
                    "Tell me about your journey",
                    "Can I download your resume?"
                ]
            };
        }

        // 4. Me / Who are you / About
        if (q.includes('who are you') || q.includes('about') || q.includes('yourself') || q.includes('bio') || q.includes('intro') || q === 'me') {
            return {
                text: "Hey! I'm **Manohar Reddy Maddikara**, an AI & ML undergraduate engineer at Malla Reddy Engineering College in Hyderabad. I have hands-on experience building full-stack web applications powered by machine learning algorithms:",
                widget: buildMeWidget(),
                followups: [
                    "Tell me about your career journey",
                    "What projects have you built?",
                    "How can I contact or hire you?"
                ]
            };
        }

        // 5. Education & Certifications
        if (q.includes('education') || q.includes('certif') || q.includes('degree') || q.includes('cgpa') || q.includes('college') || q.includes('board') || q.includes('azure') || q.includes('aws') || q.includes('nptel')) {
            return {
                text: "I am pursuing my B.Tech in Computer Science Engineering (AI & ML) with a **7.9 CGPA** at Malla Reddy Engineering College (2023 - 2027), following **93.2%** in Senior Secondary and a **10.0 GPA** in Secondary School. I also hold official certifications from Microsoft, AWS, and IIT Madras:",
                widget: buildEducationWidget(),
                followups: [
                    "View Manohar's Academic Journey",
                    "Can I download your resume?",
                    "What are your machine learning skills?"
                ]
            };
        }

        // 6. Resume
        if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
            return {
                text: "Here is my official resume! You can download it directly as a document with all project details, technical skills, academic history, and certifications:",
                widget: buildResumeWidget(),
                followups: [
                    "What are your top projects?",
                    "Tell me about your journey",
                    "How can I contact you?"
                ]
            };
        }

        // 7. Contact & Hiring
        if (q.includes('contact') || q.includes('hire') || q.includes('reach') || q.includes('email') || q.includes('phone') || q.includes('interview')) {
            return {
                text: "I am actively open to AI / ML engineer positions, software development roles, and internships! You can reach out directly via email, phone, or LinkedIn:",
                widget: buildContactWidget(),
                followups: [
                    "Download Manohar's Resume",
                    "Explore Manohar's Journey",
                    "View Featured Projects"
                ]
            };
        }

        // 8. Why hire you?
        if (q.includes('why should we hire') || q.includes('hire you') || q.includes('why hire')) {
            return {
                text: `**Why should your team hire Manohar Reddy Maddikara?**\n\n1. **End-to-End ML Deployment:** Hands-on experience developing complete machine learning applications with Flask REST APIs, input sanitization, and model serving (e.g. Uber Trip Analysis & Car Sence).\n2. **Strong CS & Problem Solving:** Solid foundation in Data Structures, Algorithms, and OOP in Java & Python, certified by NPTEL IIT Madras.\n3. **Certified Cloud Ready:** Certified in Microsoft Azure AI Fundamentals (AI-900) and AWS Cloud Fundamentals.\n4. **Consistent Academic Record:** 7.9 CGPA in B.Tech AI & ML, 93.2% in Intermediate, and 10.0 GPA in SSC.`,
                widget: buildMeWidget(),
                followups: [
                    "Explore Manohar's Journey",
                    "View Machine Learning Projects",
                    "Download Resume"
                ]
            };
        }

        // 9. General AI Fallback
        return {
            text: `Thanks for asking! I'm **Manohar Reddy Maddikara**, an AI & ML Engineer from Hyderabad. You can explore my portfolio by asking about:\n\n• **Career Journey & Timeline** (SSC 10.0 GPA to B.Tech AI & ML & Production Systems)\n• **Machine Learning Projects** (Uber Trip System, Car Sence)\n• **Technical Skills** (Python, Flask, Scikit-learn, SQL)\n• **Education & Certifications** (7.9 CGPA, Azure AI-900, AWS, IIT Madras)\n• **Official Resume Download**\n• **Direct Contact Information**`,
            widget: buildSkillsWidget(),
            followups: [
                "Tell me about your journey",
                "Show me your projects",
                "How can I contact you?"
            ]
        };
    }

    // =========================================================================
    // 8. CHATGPT MESSAGE FLOW & STREAMING
    // =========================================================================
    function handleUserSubmission(queryText) {
        if (!queryText || !queryText.trim()) return;
        const query = queryText.trim();

        switchToChatView();

        // 1. Post User Message Bubble
        const userRow = document.createElement('div');
        userRow.className = 'chat-row user';
        userRow.innerHTML = `<div class="user-bubble">${escapeHtml(query)}</div>`;
        chatMessages.appendChild(userRow);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // 2. Post Typing Indicator
        const typingRow = document.createElement('div');
        typingRow.className = 'chat-row assistant typing-row';
        typingRow.innerHTML = `
            <div class="assistant-avatar">
                <img src="assets/memoji.jpg" alt="Manohar Avatar">
            </div>
            <div class="typing-dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        `;
        chatMessages.appendChild(typingRow);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // 3. Generate and Render Assistant Response (ChatGPT style)
        setTimeout(() => {
            if (typingRow && typingRow.parentNode) {
                typingRow.parentNode.removeChild(typingRow);
            }

            const response = processUserQuery(query);

            const assistRow = document.createElement('div');
            assistRow.className = 'chat-row assistant';

            const avatar = document.createElement('div');
            avatar.className = 'assistant-avatar';
            avatar.innerHTML = `<img src="assets/memoji.jpg" alt="Manohar Avatar">`;
            assistRow.appendChild(avatar);

            const contentWrap = document.createElement('div');
            contentWrap.className = 'assistant-content-wrap';

            const bubble = document.createElement('div');
            bubble.className = 'assistant-bubble';
            bubble.innerHTML = formatMarkdown(response.text);
            contentWrap.appendChild(bubble);

            if (response.widget) {
                contentWrap.appendChild(response.widget);
            }

            // Follow-up chips
            if (response.followups && response.followups.length > 0) {
                const chipsDiv = document.createElement('div');
                chipsDiv.className = 'followups-strip';
                response.followups.forEach(f => {
                    const chip = document.createElement('button');
                    chip.className = 'followup-chip';
                    chip.innerHTML = `<i data-lucide="sparkles" style="width: 13px; height: 13px; color: var(--accent-blue);"></i><span>${f}</span>`;
                    chip.addEventListener('click', () => handleUserSubmission(f));
                    chipsDiv.appendChild(chip);
                });
                contentWrap.appendChild(chipsDiv);
            }

            assistRow.appendChild(contentWrap);
            chatMessages.appendChild(assistRow);

            if (window.lucide) window.lucide.createIcons();
            chatMessages.scrollTop = chatMessages.scrollHeight;

            speakText(response.text);
        }, 400);
    }

    // =========================================================================
    // 9. EVENT LISTENERS
    // =========================================================================

    // Hero Form Submit
    if (heroForm && heroInput) {
        heroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const val = heroInput.value.trim();
            if (val) {
                heroInput.value = '';
                handleUserSubmission(val);
            }
        });
    }

    // Chat Form Submit
    if (chatForm && chatInput) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const val = chatInput.value.trim();
            if (val) {
                chatInput.value = '';
                handleUserSubmission(val);
            }
        });
    }

    // 5 Action Cards on Hero
    document.querySelectorAll('.action-card').forEach(card => {
        card.addEventListener('click', () => {
            const query = card.getAttribute('data-query');
            if (query) handleUserSubmission(query);
        });
    });

    // Persistent Quick Action Pills in Chat
    document.querySelectorAll('.chat-quick-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            const query = pill.getAttribute('data-query');
            if (query) handleUserSubmission(query);
        });
    });

    // Top-nav actions
    if (statusPill) statusPill.addEventListener('click', () => handleUserSubmission("How can I contact or hire you?"));
    if (resumeNavBtn) resumeNavBtn.addEventListener('click', downloadResumeFile);

    // Deep Dive Project Modal
    function openProjectModal(proj) {
        if (!projectModal) return;
        projectModalImg.src = proj.image;
        projectModalImg.alt = proj.title;

        projectModalBody.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 0.5rem;">
                <span class="project-category-badge" style="background: rgba(1, 113, 227, 0.12); color: var(--accent-blue);">${proj.category}</span>
                <span style="font-size: 0.85rem; color: var(--text-secondary); font-weight: 500;">${proj.timeline}</span>
            </div>

            <h2 style="font-size: 1.85rem; font-weight: 800; color: #111827; letter-spacing: -0.02em; margin-bottom: 0.5rem;">${proj.title}</h2>
            <p style="font-size: 1.05rem; color: #4b5563; line-height: 1.5; margin-bottom: 1.5rem;">${proj.subtitle}</p>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-lg); padding: 1.4rem; margin-bottom: 1.5rem;">
                <h4 style="font-size: 0.95rem; font-weight: 700; color: #1e293b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.6rem;">Architecture & Overview</h4>
                <p style="font-size: 0.94rem; line-height: 1.6; color: #334155; margin-bottom: 1rem;">${proj.overview}</p>

                <h4 style="font-size: 0.95rem; font-weight: 700; color: #1e293b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.6rem;">Key Technical Achievements</h4>
                <ul style="margin-left: 1.2rem; font-size: 0.92rem; line-height: 1.6; color: #334155; display: flex; flex-direction: column; gap: 0.5rem;">
                    ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <h4 style="font-size: 0.85rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.6rem;">Technologies & Frameworks</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${proj.techStack.map(t => `<span class="skill-badge badge-blue">${t}</span>`).join('')}
                </div>
            </div>

            <div style="display: flex; gap: 0.85rem;">
                <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="status-pill" style="background: #000; color: #fff; padding: 0.65rem 1.4rem; border: none; font-size: 0.92rem;">
                    <i data-lucide="github" style="width: 16px; height: 16px;"></i>
                    View on GitHub
                </a>
            </div>
        `;

        projectModal.classList.add('active');
        if (window.lucide) window.lucide.createIcons();
    }

    if (closeProjectModal) {
        closeProjectModal.addEventListener('click', () => {
            projectModal.classList.remove('active');
        });
    }

    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) projectModal.classList.remove('active');
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal) {
            projectModal.classList.remove('active');
        }
    });

    // Resume Download Function
    function downloadResumeFile() {
        const resumeText = `
MANOHAR REDDY MADDIKARA
Phone: +91 9505508111
Email: manoharreddy.maddikara85@gmail.com
Location: Hyderabad, Telangana, India
LinkedIn: https://www.linkedin.com/in/manoharreddy-maddikara-73ab60351/
GitHub: https://github.com/manohar-maddikara
Degree: B.Tech in Computer Science Engineering (AI & ML), Malla Reddy Engineering College (CGPA: 7.9)

PROFESSIONAL SUMMARY:
AI & ML undergraduate with practical experience in software development, machine learning, and full-stack web applications. Proficient in Python, SQL, Machine Learning with strong problem-solving skills and hands-on experience in developing end-to-end projects.

ACADEMIC & PROFESSIONAL JOURNEY:
- 2025 - Present: Production AI/ML Engineering & Open for Full-Time / Internship Roles
- 2024 - 2026: Built End-to-End ML Systems (Uber Trip Prediction & Car Sence Used Car Valuation)
- 2024: Microsoft Azure AI-900 & NPTEL IIT Madras Problem Solving in C Certifications
- 2023 - 2027: B.Tech in CSE (AI & ML) at Malla Reddy Engineering College (CGPA: 7.9)
- 2021 - 2023: Senior Secondary (Intermediate - MPC), TSBIE Board (93.2%)
- 2021: Secondary School Certificate (SSC Board) - Perfect 10.0 GPA (10/10)

TECHNICAL SKILLS:
- Programming Languages: Python, SQL, Java, C
- Web Technologies: HTML, CSS
- Backend Development: Flask, REST APIs
- Databases: MySQL, DBMS
- Machine Learning: Scikit-learn, Pandas, NumPy, Random Forest, Classification, Regression, Data Preprocessing, Feature Engineering, Model Evaluation, Lasso Regression
- Developer Tools: Git, GitHub, VS Code, Jupyter Notebook
- Core Computer Science: Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Database Management Systems (DBMS)

PROJECTS:
1. Uber Trip Analysis & Prediction System (Apr. 2026 - Jun. 2026)
- Developed a Flask-based machine learning web application to predict Uber trip fare and demand using historical Hyderabad trip data.
- Built and evaluated Random Forest Regressor and Random Forest Classifier models with data preprocessing using Label Encoding and StandardScaler.
- GitHub: https://github.com/manohar-maddikara

2. Car Sence - Used Car Price Prediction System (2026)
- Developed a Flask-based machine learning web application that estimates used-car market prices using vehicle attributes.
- Integrated a trained Lasso Regression model with preprocessing and input-validation pipelines, providing real-time price predictions and vehicle comparison functionality through REST APIs.
- GitHub: https://github.com/manohar-maddikara

EDUCATION:
- B.Tech CSE (AI & ML) - Malla Reddy Engineering College | CGPA: 7.9 | 2023 - 2027
- Senior Secondary (TSBIE Board) | 93.2% | 2021 - 2023
- Secondary (SSC Board) | 10.0 GPA | 2021

CERTIFICATIONS:
- Microsoft Certified: Azure AI Fundamentals (AI-900)
- Problem Solving Through Programming: NPTEL (IIT Madras)
- AWS Cloud Fundamentals: Amazon Web Services (AWS)
- Data Visualization using Python: AimR Edu LLP
- Python Training: TechAugusta
- IDE Bootcamp: AICTE
- Business English Certification: GetGrad Global Pvt. Ltd.

DECLARATION:
I hereby declare that the information provided above is true and correct to the best of my knowledge and belief.
Place: Hyderabad
Signature: (MANOHAR REDDY MADDIKARA)
        `.trim();

        const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Manohar_Reddy_Maddikara_Resume.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Utilities
    function escapeHtml(str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    function formatMarkdown(text) {
        if (!text) return '';
        const lines = text.trim().split('\n');
        let html = '';
        let inUl = false;
        let inOl = false;

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();

            if (line.startsWith('• ') || line.startsWith('- ')) {
                if (inOl) { html += '</ol>'; inOl = false; }
                if (!inUl) { html += '<ul>'; inUl = true; }
                const content = line.substring(2).trim();
                html += `<li>${parseInlineMarkdown(content)}</li>`;
                continue;
            }

            const numMatch = line.match(/^(\d+)\.\s+(.*)$/);
            if (numMatch) {
                if (inUl) { html += '</ul>'; inUl = false; }
                if (!inOl) { html += '<ol>'; inOl = true; }
                html += `<li>${parseInlineMarkdown(numMatch[2])}</li>`;
                continue;
            }

            if (inUl) { html += '</ul>'; inUl = false; }
            if (inOl) { html += '</ol>'; inOl = false; }

            if (!line) continue;

            html += `<p>${parseInlineMarkdown(line)}</p>`;
        }

        if (inUl) html += '</ul>';
        if (inOl) html += '</ol>';

        return html;
    }

    function parseInlineMarkdown(str) {
        return str
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`([^`]+)`/g, '<code>$1</code>');
    }
});
