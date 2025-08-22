// Mock Data
const mockData = {
    services: [
        {
            id: 1,
            title: "Video Editing",
            description: "Professional video editing that captivates audiences and drives engagement across all platforms.",
            features: ["Short-form content", "Long-form videos", "Motion graphics", "Color grading"],
            bgColor: "video-editing",
            icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="23 7 16 12 23 17 23 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
        },
        {
            id: 2,
            title: "Content Creation",
            description: "Strategic content that tells your brand story and connects with your target audience.",
            features: ["Social media posts", "Visual storytelling", "Copywriting", "Content strategy"],
            bgColor: "content-creation",
            icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19L7 14L10 11L12 13L17 8L20 11L12 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
        },
        {
            id: 3,
            title: "Branding",
            description: "Complete brand identity solutions that make your business stand out in the digital space.",
            features: ["Logo design", "Brand guidelines", "Visual identity", "Brand strategy"],
            bgColor: "branding",
            icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                <path d="M12 1V5M12 19V23M4.22 4.22L7.05 7.05M16.95 16.95L19.78 19.78M1 12H5M19 12H23M4.22 19.78L7.05 16.95M16.95 7.05L19.78 4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>`
        }
    ],

    portfolioProjects: [
        {
            id: 1,
            title: "GameStorm Pro",
            description: "Epic gaming content and tournament highlights that dominated Twitch and YouTube.",
            categories: ["Gaming", "Video Editing"],
            bgColor: "light-yellow",
            textColor: "black",
            metrics: {
                engagement: "+285%",
                followers: "+120K",
                conversions: "+67%"
            }
        },
        {
            id: 2,
            title: "FashionForward",
            description: "Viral fashion content strategy that dominated Instagram and TikTok feeds.",
            categories: ["Content Creation", "Ads"],
            bgColor: "mid-pink",
            textColor: "white",
            metrics: {
                views: "2.3M+",
                shares: "45K+",
                reach: "800K+"
            }
        },
        {
            id: 3,
            title: "Champions League FC",
            description: "Dynamic football content and match highlights that built massive fan engagement.",
            categories: ["Football", "Video Editing"],
            bgColor: "mid-green",
            textColor: "black",
            metrics: {
                awareness: "+340%",
                engagement: "+190%",
                sales: "+156%"
            }
        },
        {
            id: 4,
            title: "TechStartup Co.",
            description: "Complete rebrand and social media transformation for a growing tech company.",
            categories: ["Branding", "Ads"],
            bgColor: "mid-orange",
            textColor: "white",
            metrics: {
                subscribers: "+89K",
                retention: "+78%",
                downloads: "+245%"
            }
        },
        {
            id: 5,
            title: "FoodieDelights",
            description: "Mouth-watering food content and recipe videos that went viral across platforms.",
            categories: ["Content Creation", "Video Editing"],
            bgColor: "light-blue",
            textColor: "black",
            metrics: {
                viral_posts: "12",
                followers: "+67K",
                partnerships: "25+"
            }
        },
        {
            id: 6,
            title: "NBA Legends",
            description: "Basketball highlights and player stories that created viral sports content.",
            categories: ["Sports", "Video Editing"],
            bgColor: "grey",
            textColor: "black",
            metrics: {
                locations: "8 new",
                customers: "+156%",
                loyalty: "+89%"
            }
        },
        {
            id: 7,
            title: "EcoLife Brand",
            description: "Sustainable brand identity and content that resonates with conscious consumers.",
            categories: ["Branding", "Content Creation"],
            bgColor: "mid-purple",
            textColor: "white",
            metrics: {
                awareness: "+280%",
                engagement: "+150%",
                sales: "+120%"
            }
        },
        {
            id: 8,
            title: "Super Bowl Ads",
            description: "High-impact advertising campaigns that captured millions of viewers nationwide.",
            categories: ["Ads", "Branding"],
            bgColor: "dark-blue",
            textColor: "white",
            metrics: {
                reach: "15M+",
                ctr: "+12%",
                brand_lift: "+89%"
            }
        },
        {
            id: 9,
            title: "FIFA World Cup",
            description: "World Cup content strategy that connected with football fans globally.",
            categories: ["Football", "Content Creation"],
            bgColor: "light-pink",
            textColor: "black",
            metrics: {
                global_reach: "50M+",
                engagement: "+420%",
                fan_growth: "+200%"
            }
        }
    ],

    testimonials: [
        {
            id: 1,
            name: "Sarah Johnson",
            company: "TechStartup Co.",
            role: "Marketing Director",
            content: "editKaro completely transformed our social media presence. Their video editing skills are unmatched, and our engagement rates have skyrocketed since we started working with them.",
            rating: 5
        },
        {
            id: 2,
            name: "Michael Chen",
            company: "FashionForward",
            role: "Brand Manager",
            content: "The team at editKaro doesn't just create content; they create experiences. Our TikTok videos have gained millions of views, and our brand recognition has never been stronger.",
            rating: 5
        },
        {
            id: 3,
            name: "Emma Rodriguez",
            company: "EcoLife Brand",
            role: "Founder & CEO",
            content: "Working with editKaro was a game-changer for our sustainable brand. They understood our values and created content that truly resonates with our conscious consumer base.",
            rating: 5
        }
    ],

    stats: [
        {
            number: "500+",
            label: "Videos Created"
        },
        {
            number: "50M+",
            label: "Views Generated"
        },
        {
            number: "150+",
            label: "Happy Clients"
        },
        {
            number: "98%",
            label: "Client Satisfaction"
        }
    ]
};

// State
let currentFilter = "All";

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const backToTopBtn = document.getElementById('backToTop');

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    initializeComponents();
    setupEventListeners();
    renderServices();
    renderPortfolio();
    renderStats();
    renderTestimonials();
});

// Initialize components
function initializeComponents() {
    // Fade in animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.classList.add('fade-in');
        section.style.animationDelay = `${index * 0.1}s`;
    });
}

// Event listeners
function setupEventListeners() {
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Mobile navigation links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Contact form
    contactForm.addEventListener('submit', handleFormSubmit);

    // Back to top
    backToTopBtn.addEventListener('click', scrollToTop);

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });

    // Show/hide back to top button
    window.addEventListener('scroll', handleScroll);
}

// Mobile menu functions
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');

    // Animate hamburger
    const hamburgers = mobileMenuBtn.querySelectorAll('.hamburger');
    hamburgers.forEach((line, index) => {
        if (mobileMenu.classList.contains('active')) {
            if (index === 0) line.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) line.style.opacity = '0';
            if (index === 2) line.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            line.style.transform = 'none';
            line.style.opacity = '1';
        }
    });
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    const hamburgers = mobileMenuBtn.querySelectorAll('.hamburger');
    hamburgers.forEach(line => {
        line.style.transform = 'none';
        line.style.opacity = '1';
    });
}

// Smooth scrolling
function handleSmoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
        const headerHeight = 80;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Scroll handler
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Show/hide back to top button
    if (scrollTop > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Render services
function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');

    const servicesHTML = mockData.services.map(service => `
        <div class="service-card ${service.bgColor}">
            <div class="service-header">
                ${service.icon}
                <h3 class="service-title">${service.title}</h3>
            </div>
            
            <p class="service-description">${service.description}</p>
            
            <div class="service-features">
                ${service.features.map(feature => `
                    <div class="service-feature">${feature}</div>
                `).join('')}
            </div>
            
            <a href="#contact" class="service-link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
    `).join('');

    servicesGrid.innerHTML = servicesHTML;
}

// Render portfolio
function renderPortfolio() {
    renderFilterButtons();
    renderPortfolioGrid();
}

function renderFilterButtons() {
    const filterButtons = document.getElementById('filterButtons');
    const categories = ["All", "Gaming", "Football", "Sports", "Ads", "Video Editing", "Content Creation", "Branding"];

    const buttonsHTML = categories.map(category => `
        <button 
            class="filter-button ${currentFilter === category ? 'active' : ''}" 
            data-filter="${category}"
        >
            ${category}
        </button>
    `).join('');

    filterButtons.innerHTML = buttonsHTML;

    // Add event listeners
    const buttons = filterButtons.querySelectorAll('.filter-button');
    buttons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });
}

function handleFilterClick(e) {
    const filter = e.target.getAttribute('data-filter');
    currentFilter = filter;

    // Update button states
    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    // Re-render portfolio
    renderPortfolioGrid();
}

function renderPortfolioGrid() {
    const portfolioGrid = document.getElementById('portfolioGrid');

    const filteredProjects = currentFilter === "All"
        ? mockData.portfolioProjects
        : mockData.portfolioProjects.filter(project =>
            project.categories.includes(currentFilter)
        );

    const portfolioHTML = filteredProjects.map(project => `
        <div class="portfolio-card ${project.bgColor}">
            <div class="portfolio-header">
                <h3 class="portfolio-title">${project.title}</h3>
                <p class="portfolio-description">${project.description}</p>
            </div>
            
            <div class="portfolio-categories">
                ${project.categories.map(category => `
                    <span class="portfolio-category" style="
                        background-color: ${project.textColor === 'white' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'};
                        color: ${project.textColor === 'white' ? 'white' : 'black'};
                        border-color: ${project.textColor === 'white' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'};
                    ">
                        ${category}
                    </span>
                `).join('')}
            </div>
            
            <div class="portfolio-metrics">
                ${Object.entries(project.metrics).slice(0, 4).map(([key, value]) => `
                    <div class="portfolio-metric">
                        ${getMetricIcon(key)}
                        <div>
                            <div class="metric-value">${value}</div>
                            <div class="metric-label">${key.replace('_', ' ')}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <a href="#contact" class="portfolio-link">
                View Case Study
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
    `).join('');

    portfolioGrid.innerHTML = portfolioHTML;
}

function getMetricIcon(key) {
    switch (key) {
        case "engagement":
        case "retention":
        case "awareness":
        case "ctr":
        case "brand_lift":
            return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
        case "followers":
        case "subscribers":
        case "customers":
        case "fan_growth":
            return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21M20.5 21V19C20.5 17.9 19.6 17 18.5 17H16.5M14 11C16.2091 11 18 9.20914 18 7C18 4.79086 16.2091 3 14 3C11.7909 3 10 4.79086 10 7C10 9.20914 11.7909 11 14 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
        case "views":
        case "reach":
        case "shares":
        case "global_reach":
            return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
            </svg>`;
        default:
            return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
    }
}

// Render stats
function renderStats() {
    const statsGrid = document.getElementById('statsGrid');

    const statsHTML = mockData.stats.map(stat => `
        <div class="stat-card">
            <div class="stat-number">${stat.number}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `).join('');

    statsGrid.innerHTML = statsHTML;
}

// Render testimonials
function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');

    const testimonialsHTML = mockData.testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-header">
                <div class="quote-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 21C3 17.4 3 14 6 14S9 17.4 9 21V21H3ZM15 21C15 17.4 15 14 18 14S21 17.4 21 21V21H15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="testimonial-rating">
                    ${Array.from({ length: testimonial.rating }, () => `
                        <svg class="star" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                        </svg>
                    `).join('')}
                </div>
            </div>
            
            <p class="testimonial-content">"${testimonial.content}"</p>
            
            <div class="testimonial-author">
                <div class="author-name">${testimonial.name}</div>
                <div class="author-role">${testimonial.role}</div>
                <div class="author-company">${testimonial.company}</div>
            </div>
        </div>
    `).join('');

    testimonialsGrid.innerHTML = testimonialsHTML;
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Mock form submission
    console.log('Form submitted:', data);

    // Show success state
    submitBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Message Sent!
    `;
    submitBtn.disabled = true;

    // Reset after 3 seconds
    setTimeout(() => {
        submitBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Send Message
        `;
        submitBtn.disabled = false;
        contactForm.reset();
    }, 3000);
}