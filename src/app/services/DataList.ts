import { Injectable } from "@angular/core";
import e from "express";


@Injectable({
    providedIn: 'root'
})

export class DataList {
    
    private technicals = [
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

    private professionals = [
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

    technicalsSkills(): any {
        return this.technicals;
    }

    professionalSkills() : any{
        return this.professionals;
    }

}