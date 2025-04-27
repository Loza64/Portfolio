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
            "text": "Creo aplicaciones web excepcionales y dinámicas. Mi solución es eficiente y optimizada, asegurando una mejor experiencia de usuario."
        },
        {
            "icon": "fas fa-shopping-cart",
            "title": "Desarrollo de E-commerce",
            "text": "Creo soluciones e-commerce personalizadas que integran pagos seguros y mejoran la experiencia de compra en línea."
        },
        {
            "icon": "fas fa-chart-line",
            "title": "SEO y Marketing Digital",
            "text": "Ofrezco servicios SEO para mejorar la visibilidad online de paginas web, fortalecer estrategias y potenciar la visibilidad en línea de sitios web."
        },
        {
            "icon": "fas fa-tools",
            "title": "Soporte y Mantenimiento",
            "text": "Ofrezco planes de mantenimiento a medida para asegurar el funcionamiento a largo plazo, garantizando actualizaciones y una optimización efectiva"
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

    getServicesList(): Service[] {
        return this.services
    }

}