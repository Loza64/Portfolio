import { Injectable } from "@angular/core";
import { Professional, Service, Technical } from "./Models";


@Injectable({
    providedIn: 'root'
})

export class DataList {

    private technicals: Technical[] = [
        { name: 'React', type: 'frontend', percentage: 80, url: "https://res.cloudinary.com/ufostart-development/image/upload/v1741313918/PORTFOLIO/ap2eh1bjzosnqf6wdobd.png" },
        { name: 'Angular', type: 'frontend', percentage: 75, url: "https://res-console.cloudinary.com/ufostart-development/media_explorer_thumbnails/9f5f265725ba86e708952265c0b6826c/detailed" },
        { name: 'JavaScript', type: 'frontend', percentage: 90, url: "https://res-console.cloudinary.com/ufostart-development/media_explorer_thumbnails/797240a275acb446e0932e34bf47a698/card?v=1741313528" },
        { name: 'TypeScript', type: 'frontend', percentage: 75, url: "https://res-console.cloudinary.com/ufostart-development/media_explorer_thumbnails/0e657ccaa7855dc1017adcfb387224bc/card?v=1741313528" },
        { name: 'Kotlin', type: 'backend', percentage: 40, url: "https://res-console.cloudinary.com/ufostart-development/media_explorer_thumbnails/35602288a7f64378b5ad776563db0dbf/card?v=1741313527" },
        { name: 'PHP', type: 'backend', percentage: 70, url: "https://res-console.cloudinary.com/ufostart-development/media_explorer_thumbnails/2deec7c413566de2cc8d4d0750221c30/card?v=1741313527" },
        { name: 'Spring Boot', type: 'backend', percentage: 70, url: "https://res-console.cloudinary.com/ufostart-development/media_explorer_thumbnails/0bccf3289c5d604d2d8a1d1d19adfc4c/card?v=1741313528" },
        { name: 'C#', type: 'backend', percentage: 80, url: "https://res-console.cloudinary.com/ufostart-development/media_explorer_thumbnails/5f185b37d3b8c13b194068c2efaca69f/card?v=1741313527" },
        { name: '.NET', type: 'backend', percentage: 50, url: "https://res-console.cloudinary.com/ufostart-development/media_explorer_thumbnails/4caa025fd6a31613bda41f8bc255fddd/card?v=1741313528" },
        { name: 'Java', type: 'backend', percentage: 80, url: "https://res-console.cloudinary.com/ufostart-development/media_explorer_thumbnails/bd0ecca33f8dd5bbf50f91d276a7e324/card?v=1741313528" },
        { name: 'Node.js', type: 'backend', percentage: 85, url: "https://res-console.cloudinary.com/ufostart-development/media_explorer_thumbnails/40e46c1d523ee946f5be34101b197d21/card?v=1741313527" },
        { name: 'Express.js', type: 'backend', percentage: 80, url: "https://res-console.cloudinary.com/ufostart-development/media_explorer_thumbnails/12a0e8eed9cabf7eda17710f8c080ec6/card?v=1741313527" },
        { name: 'MongoDB', type: 'database', percentage: 75, url: "https://res-console.cloudinary.com/ufostart-development/media_explorer_thumbnails/9e856f29b633879231861a2c610d7734/card?v=1741313529" },
        { name: 'MySQL', type: 'database', percentage: 75, url: "https://res-console.cloudinary.com/ufostart-development/media_explorer_thumbnails/0d1a8e6a6e5d8259ea6c707866905454/card?v=1741313527" },
        { name: 'SQL Server', type: 'database', percentage: 60, url: "https://res-console.cloudinary.com/ufostart-development/media_explorer_thumbnails/1d7ffc0c8eca9601a380f1963083e48b/card?v=1741313527" },
        { name: 'Oracle', type: 'database', percentage: 40, url: "https://res-console.cloudinary.com/ufostart-development/media_explorer_thumbnails/2e74836963bdb7b4968b00c9b82946b7/card?v=1741313528" },
        { name: 'Git', type: 'others', percentage: 80, url: "https://res-console.cloudinary.com/ufostart-development/media_explorer_thumbnails/740ef47243ba2622a72a91cbfe34c75d/card?v=1741313527" },
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
            "icon": "fas fa-lightbulb",
            "title": "Consultoría de Tecnología",
            "text": "Proporciono asesoría para transformar digitalmente tu negocio, evaluando y mejorando tus necesidades tecnológicas."
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

    getServicesList():Service[]{
        return this.services
    }

    technicalsSkills(): Technical[] {
        return this.technicals;
    }

    professionalSkills(): Professional[] {
        return this.professionals;
    }

}