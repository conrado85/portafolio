// 1. El diccionario con los textos en Español e Inglés
const translations = {
    es: {
        nav: {
            about: "Sobre Mí",
            projects: "Proyectos",
            contact: "Contacto"
        },
        hero: {
            subtitle: "Hola, mi nombre es",
            title: "Conrado Gonzalez",
            slug: "Desarrollador Trainee / Full Stack",
            description: "Apasionado por crear soluciones web eficientes y limpias. Actualmente enfocado en dominar el desarrollo frontend y backend para construir experiencias digitales increíbles.",
            projects: "Ver Proyectos",
            contact: "Hablemos"
        },
        projects: {
            title: "Mis Proyectos",
            title1: "E-Commerce App",
            description1: "Una tienda online completa con carrito de compras, pasarela de pago simulada y un panel de administración para gestionar stock.",
            title2: "Task Manager API",
            description2: "API RESTful para la gestión de tareas diarias, con autenticación de usuarios mediante JWT y documentación interactiva."
        },
        contact: {
            title: "Hablemos",
            question: "¿Tenés un proyecto en mente?",
            description: "Actualmente estoy disponible para tomar nuevos desafíos, proyectos freelance o puestos Full-Time / Trainee. Si tenés alguna pregunta o simplemente querés saludar, ¡escribime!",
            name: "Nombre",
            email: "Correo Electrónico",
            message: "Mensaje",
           
        },
       form: {
            labelName: "Nombre",
            placeName: "Tu nombre",
            labelEmail: "Correo Electrónico",
            placeEmail: "tu@correo.com",
            labelMessage: "Mensaje",
            placeMessage: "Hola, me gustaría hablar contigo sobre...",
            btnSubmit: "Enviar Mensaje",
            successMsg: "¡Mensaje enviado con éxito! Te responderé pronto. 💚",
            errorMsg: "Ups... Hubo un problema al enviar. Intentá de nuevo."
        }
    },
    en: {
        nav: {
            about: "About Me",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            subtitle: "Hi, my name is",
            title: "Conrado Gonzalez",
            slug: "Trainee / Full Stack Developer",
            description: "Passionate about creating efficient and clean web solutions. Currently focused on mastering frontend and backend development to build amazing digital experiences.",
            projects: "View Projects",
            contact: "Let's Talk",
        },
        projects: {
            title: "My Projects",
            title1: "E-Commerce App",
            description1: "A complete online store with shopping cart, simulated payment gateway, and an admin panel to manage stock.",
            title2: "Task Manager API",
            description2: "RESTful API for managing daily tasks, with user authentication using JWT and interactive documentation."
        },
        contact: {
            title: "Let's Talk",
            question: "Do you have a project in mind?",
            description: "Currently available to take on new challenges, freelance projects, or Full-Time / Trainee positions. If you have any questions or just want to say hello, let's chat!",
            name: "Name",
            email: "Email",
            message: "Message",
            
        },
       form: {
            labelName: "Name",
            placeName: "Your name",
            labelEmail: "Email Address",
            placeEmail: "your@email.com",
            labelMessage: "Message",
            placeMessage: "Hi, I would like to talk to you about...",
            btnSubmit: "Send Message",
            successMsg: "Message sent successfully! I'll reply soon. 💚",
            errorMsg: "Oops... There was a problem sending. Please try again."
        }
        
    }
};

// 2. Capturamos el selector del HTML
const langSelect = document.getElementById("language-select");
// Capturamos todos los elementos que tengan el atributo 'data-section'
const elementsToTranslate = document.querySelectorAll("[data-section]");

// 3. Función que cambia los textos
const changeLanguage = (language) => {
    elementsToTranslate.forEach((element) => {
        const section = element.getAttribute("data-section");
        const value = element.getAttribute("data-value");
        const type = element.getAttribute("data-type"); // Leemos si es placeholder

        // Verificamos que la traducción exista en el diccionario
        if (translations[language] && translations[language][section] && translations[language][section][value]) {
            
            const translatedText = translations[language][section][value];

            // Si es un placeholder, cambiamos el atributo setAttribute
            if (type === "placeholder") {
                element.setAttribute("placeholder", translatedText);
            } else {
                // Si es texto normal (labels, botones, títulos), usamos textContent
                element.textContent = translatedText;
            }
        }
    });
};

// 4. Escuchamos cuando el usuario cambia la opción
langSelect.addEventListener("change", (e) => {
    changeLanguage(e.target.value);
});