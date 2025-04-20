import { Injectable } from "@angular/core";
import { About, Professional, Project, Service, Technical } from "./ModelsInterface";


@Injectable({
    providedIn: 'root'
})

export class SourceList {

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

    private education: About[] = [  
        {  
            date: '2019 - 2021',  
            description: 'Colegio Salarrue: Completé el Bachillerato Técnico Vocacional en Desarrollo de Software, adquiriendo conocimientos en programación, bases de datos y metodologías ágiles que fundamentaron mi carrera en ingeniería informática.'  
        },  
        {  
            date: 'En curso',  
            description: 'Universidad Centroamericana José Simeón Cañas: Estoy cursando la carrera de Ingeniería Informática, enfocándome en desarrollo de software y administración de sistemas, además de participar en proyectos prácticos.'  
        },  
        {  
            date: '28/04/2023',  
            description: 'Especialización en Front-End: Completé una especialización en Front-End, mejorando mis habilidades intermedias en JavaScript y React Native para desarrollar aplicaciones web y móviles con interfaces efectivas.'  
        },  
        {  
            date: '26/08/2023',  
            description: 'Curso de Introducción a la Usabilidad en Experiencia de Usuario (UX): Aprendí principios de diseño centrado en el usuario y técnicas de investigación y prototipado para mejorar la interacción del usuario con el producto.'  
        } 
    ]

    getServicesList(): Service[] {
        return this.services
    }

    getEducationList(): About[] {
        return this.education;
    }

}