import { Injectable } from "@angular/core";
import { Professional, Project, Service, Technical } from "./Models";


@Injectable({
    providedIn: 'root'
})

export class DataList {

    private technicals: Technical[] = [
        { name: 'React', type: 'frontend', percentage: 80, url: "https://res.cloudinary.com/ufostart-development/image/upload/v1741313918/PORTFOLIO/ap2eh1bjzosnqf6wdobd.png" },
        { name: 'Angular', type: 'frontend', percentage: 75, url: "https://res.cloudinary.com/ufostart-development/image/upload/v1741313918/PORTFOLIO/o5wpy1dwxuractljthix.webp" },
        { name: 'JavaScript', type: 'frontend', percentage: 90, url: "https://res.cloudinary.com/ufostart-development/image/upload/v1741313528/PORTFOLIO/f47loworn8ppeieregnx.png" },
        { name: 'TypeScript', type: 'frontend', percentage: 75, url: "https://res.cloudinary.com/ufostart-development/image/upload/v1741313528/PORTFOLIO/vw1rsso6zaruw8vcwpz7.png" },
        { name: 'Kotlin', type: 'backend', percentage: 40, url: "https://res.cloudinary.com/ufostart-development/image/upload/v1741313527/PORTFOLIO/wxnehczxeuyx0alwgqvt.png" },
        { name: 'PHP', type: 'backend', percentage: 70, url: "https://res.cloudinary.com/ufostart-development/image/upload/v1741313527/PORTFOLIO/embphuh69awifkmsvslz.png" },
        { name: 'Spring Boot', type: 'backend', percentage: 70, url: "https://res.cloudinary.com/ufostart-development/image/upload/v1741313528/PORTFOLIO/p1f1ulj6wo3hgmeuv9l9.svg" },
        { name: 'C#', type: 'backend', percentage: 80, url: "https://res.cloudinary.com/ufostart-development/image/upload/v1741313527/PORTFOLIO/pwxzypr6qanerbcopo7j.png" },
        { name: '.NET', type: 'backend', percentage: 50, url: "https://res.cloudinary.com/ufostart-development/image/upload/v1741313528/PORTFOLIO/mbck65wkz7ter10ezdny.png" },
        { name: 'Java', type: 'backend', percentage: 80, url: "https://res.cloudinary.com/ufostart-development/image/upload/v1741313528/PORTFOLIO/rhhqeekukjnabll5au0c.svg" },
        { name: 'Node.js', type: 'backend', percentage: 85, url: "https://res.cloudinary.com/ufostart-development/image/upload/v1741313528/PORTFOLIO/rhhqeekukjnabll5au0c.svg" },
        { name: 'Express.js', type: 'backend', percentage: 80, url: "https://res.cloudinary.com/ufostart-development/image/upload/v1741313527/PORTFOLIO/djjgj5605lemcize1cnc.png" },
        { name: 'MongoDB', type: 'database', percentage: 75, url: "https://res.cloudinary.com/ufostart-development/image/upload/v1741313529/PORTFOLIO/sgubunsoa4vsjlkrwcy9.svg" },
        { name: 'MySQL', type: 'database', percentage: 75, url: "https://res.cloudinary.com/ufostart-development/image/upload/v1741313527/PORTFOLIO/ftjmuk1zvubq54dbiej5.png" },
        { name: 'SQL Server', type: 'database', percentage: 60, url: "https://res.cloudinary.com/ufostart-development/image/upload/v1741313527/PORTFOLIO/a3nzrx0badpl9arrk3gn.png" },
        { name: 'Oracle', type: 'database', percentage: 40, url: "https://res.cloudinary.com/ufostart-development/image/upload/v1741313528/PORTFOLIO/fvoxmglcyfvg1if72p6q.png" },
        { name: 'Git', type: 'others', percentage: 80, url: "https://res.cloudinary.com/ufostart-development/image/upload/v1741313527/PORTFOLIO/ctkolwsjiidpobg4lmun.png" },
        { name: 'Docker', type: 'others', percentage: 30, url: "https://res.cloudinary.com/ufostart-development/image/upload/v1741449747/PORTFOLIO/dbciwmdvbws1mxuk2ubh.png" },
    ];

    private professionals: Professional[] = [
        {
            name: "Team work", percentage: 90
        },
        {
            name: "Communication", percentage: 72
        }
        ,
        {
            name: "Creativity", percentage: 80
        }
        ,
        {
            name: "Ladership", percentage: 85
        },
        {
            name: "Solving problems", percentage: 75
        },
        {
            name: "Adaptability", percentage: 70
        }
    ]

    private services: Service[] = [
        {
            "icon": "fas fa-laptop-code",
            "title": "Desarrollo web",
            "text": "Creo aplicaciones web excepcionales y dinámicas. Mi solución es eficiente y optimizada, asegurando una mejor experiencia de usuario para tus clientes."
        },
        {
            "icon": "fas fa-mobile-alt",
            "title": "Desarrollo móvil",
            "text": "Desarrollo aplicaciones móviles atractivas y seguras para Android y multiplataforma, optimizando constantemente la experiencia del usuario."
        },
        {
            "icon": "fas fa-desktop",
            "title": "Desarrollo de escritorio",
            "text": "Creo aplicaciones de escritorio eficientes, aplicando patrones de diseño efectivos para lograr un alto rendimiento, seguridad y buena interacción con el usuario."
        },
        {
            "icon": "fas fa-shopping-cart",
            "title": "Desarrollo de E-commerce",
            "text": "Creo soluciones e-commerce personalizadas que integran pagos seguros y mejoran la experiencia de compra en línea."
        },
        {
            "icon": "fas fa-chart-line",
            "title": "SEO y Marketing Digital",
            "text": "Ofrezco servicios SEO para mejorar la visibilidad online de tu web y fortalecer tu estrategia de marketing digital."
        },
        {
            "icon": "fas fa-tools",
            "title": "Soporte y Mantenimiento",
            "text": "Ofrezco planes de mantenimiento a medida para asegurar el correcto funcionamiento a largo plazo."
        },
        {
            "icon": "fas fa-code",
            "title": "Desarrollo de APIs",
            "text": "Creo APIs que permiten la integración de sistemas y desarrollan la funcionalidad de múltiples aplicaciones."
        },
        {
            "icon": "fas fa-project-diagram",
            "title": "Integración de Sistemas",
            "text": "Ayudo a unir aplicaciones y plataformas para mejorar la eficiencia y operatividad de tu negocio en su conjunto."
        },
        {
            "icon": "fas fa-cogs",
            "title": "Software a Medida",
            "text": "Creo soluciones personalizadas que se adaptan a los requerimientos específicos del cliente en todos los niveles."
        }
    ]

    private projects: Project[] = [
        {
            title: "SISTEMA DE INVENTARIO",
            description: "Sistema web para gestionar inventarios de manera eficiente y segura, adaptable a cualquier negocio. Utiliza Java (JSP), SQL Server y el patrón MVC.",
            image: "https://res.cloudinary.com/ufostart-development/image/upload/v1744593802/PORTFOLIO/htabpm0zt2xu5n3nduws.png",
            url: "ver_detalles_sistema_inventario"
        },
        {
            title: "CARRITO DE COMPRAS",
            description: "Aplicación para empresas que incluye carrito de compras, registro de usuarios y opcionalmente, modificaciones personalizadas. Usa C#, ASP.NET y cuenta con medidas de seguridad.",
            image: "https://res.cloudinary.com/ufostart-development/image/upload/v1744593802/PORTFOLIO/fr63mhtud5ko9rawlnco.png",
            url: "ver_detalles_carrito_compras"
        },
        {
            title: "CLÍNICA MÉDICA DRA ALBA LOZA (RESERVACIÓN DE CITAS)",
            description: "Aplicación web para agilizar la reservación de citas en la clínica, utilizando CSS, JavaScript y C#, con ASP.NET WebForms y seguridad en la gestión de sesiones.",
            image: "https://res.cloudinary.com/ufostart-development/image/upload/v1744593801/PORTFOLIO/bua2lkiqf4iomu6jzpfq.png",
            url: "ver_detalles_clinica_reservacion"
        },
        {
            title: "CLÍNICA MÉDICA DRA ALBA LOZA (GESTIÓN DE PACIENTES)",
            description: "Aplicación de escritorio para gestionar pacientes, citas y más en la clínica. Utiliza C#, ASP.NET y MySQL, y permite personalizar funciones según rol de usuario.",
            image: "https://res.cloudinary.com/ufostart-development/image/upload/v1744593801/PORTFOLIO/hxj9pnzecxfsoufwgjm6.png",
            url: "ver_detalles_gestion_pacientes"
        },
        {
            title: "ECOMMERCE",
            description: "Plataforma de comercio electrónico construida con MERN Stack (React, MongoDB, Node.js, Express), con un diseño intuitivo y adaptable a diferentes dispositivos.",
            image: "https://res.cloudinary.com/ufostart-development/image/upload/v1744593802/PORTFOLIO/rboytsdjqzdruljmxvtj.png",
            url: "ver_detalles_ecommerce"
        }
        ,
        {
            title: "Residencial",
            description: "Aplicacion web hecha con php(mvc), mysql, html, css y javascript, ademas que se se le implemento seguridad en la gestion de sesiones y un sistema de roles para los usuarios: resident, admin, s_admin .",
            image: "https://res.cloudinary.com/ufostart-development/image/upload/v1744594170/PORTFOLIO/ztj8j40uxqpbgtzjq5ue.png",
            url: "ver_detalles_ecommerce"
        }
    ];

    getProjects(): Project[] {
        return this.projects;
    }

    getServicesList(): Service[] {
        return this.services
    }

    technicalsSkills(): Technical[] {
        return this.technicals;
    }

    professionalSkills(): Professional[] {
        return this.professionals;
    }

}