// Toggle Dark/Light Mode
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        // Sauvegarder le thème dans le localStorage
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Charger le thème sauvegardé
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'var(--card-bg)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'var(--background-color)';
        header.style.backdropFilter = 'none';
    }
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.skill-card, .portfolio-card, .about-content, .certification-card');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupérer les valeurs du formulaire
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Ici vous pouvez ajouter l'envoi du formulaire
        console.log('Formulaire soumis:', formData);
        alert('Merci pour votre message ! Je vous répondrai bientôt.');
        
        // Réinitialiser le formulaire
        contactForm.reset();
    });
}

// Animation pour la timeline de l'éducation
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observer les éléments de la timeline
document.addEventListener('DOMContentLoaded', () => {
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        timelineObserver.observe(item);
    });
});

// Fonctions pour les certificats
function openCertificate(imageSrc) {
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('certificateImage');
    
    modalImage.src = imageSrc;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Empêche le scroll
}

function closeCertificate() {
    const modal = document.getElementById('certificateModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Réactive le scroll
}

// Fermer le modal des certificats en cliquant en dehors de l'image
document.getElementById('certificateModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCertificate();
    }
});

// Fonctions pour les modals des projets
function openProjectModal(projectId) {
    const modal = document.getElementById(projectId);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Empêche le scroll
}

function closeProjectModal(projectId) {
    const modal = document.getElementById(projectId);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Réactive le scroll
}

// Fermer les modals des projets en cliquant en dehors
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('project-modal')) {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Fermer tous les modals avec la touche Echap
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Fermer le modal des certificats
        closeCertificate();
        
        // Fermer tous les modals des projets
        const projectModals = document.querySelectorAll('.project-modal');
        projectModals.forEach(modal => {
            modal.style.display = 'none';
        });
        
        document.body.style.overflow = 'auto';
    }
});

// Animation des éléments des skills categories
const skillsCategories = document.querySelectorAll('.skills-category');

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observer les categories de compétences
document.addEventListener('DOMContentLoaded', () => {
    skillsCategories.forEach(category => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        category.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        skillsObserver.observe(category);
    });
});

// Animation des info-items
const infoItems = document.querySelectorAll('.info-item');

const infoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 150);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observer les info-items
document.addEventListener('DOMContentLoaded', () => {
    infoItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        infoObserver.observe(item);
    });
});

// Gestion du chargement des images avec lazy loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Amélioration de la navigation active
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 100)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Mettre à jour la navigation active au scroll
window.addEventListener('scroll', updateActiveNav);

// Initialiser la navigation active au chargement
document.addEventListener('DOMContentLoaded', updateActiveNav);

// Préchargement des images des modals pour une meilleure expérience utilisateur
function preloadModalImages() {
    const modalImages = [
        'assets/img/portfolio/cyberharcelement-1.jpg',
        'assets/img/portfolio/cyberharcelement-2.jpg',
        'assets/img/portfolio/tourisme-1.jpg',
        'assets/img/portfolio/tourisme-2.jpg',
        'assets/img/portfolio/trading-1.jpg',
        'assets/img/portfolio/trading-2.jpg',
        'assets/img/portfolio/immobilier-1.jpg',
        'assets/img/portfolio/immobilier-2.jpg',
        'assets/img/portfolio/kinesitherapie-1.jpg',
        'assets/img/portfolio/kinesitherapie-2.jpg',
        'assets/img/portfolio/iot-1.jpg',
        'assets/img/portfolio/iot-2.jpg'
    ];
    
    modalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Précharger les images après le chargement de la page
window.addEventListener('load', preloadModalImages);

// Gestion des erreurs d'images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'assets/img/placeholder.jpg';
            this.alt = 'Image non disponible';
        });
    });
});

// Console log de bienvenue
console.log('🚀 Portfolio de Salima Errafia chargé avec succès !');
console.log('💻 Développeuse IA & Web passionnée');
console.log('📧 Contact: salima.errafia@email.com');