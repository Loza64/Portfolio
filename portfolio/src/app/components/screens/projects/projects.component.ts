import { Component, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';
import { ObserverService } from '../../../services/ObserverService';
import { Project, ResponseRest } from '../../../services/ModelsInterface';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  standalone: true,
})
export class ProjectsComponent {

  projects: Project[] = [];

  @ViewChildren("article") articles!: QueryList<ElementRef>;
  @ViewChild("section") section!: ElementRef;

  constructor(private api: ApiService, private intersect: ObserverService) { }

  ngOnInit() {
    this.api.getProjects().subscribe((data: ResponseRest<Project[]>) => {
      this.projects = Array.isArray(data.result)
        ? [...data.result].sort((a, b) => String(b._id).localeCompare(String(a._id)))
        : [];
    });
  }
  ngAfterViewInit() {

    this.intersect.observe(this.section.nativeElement);
    this.articles.forEach(element => { this.intersect.observe(element.nativeElement) });

    this.articles.forEach(element => {
      element.nativeElement.addEventListener("intersect", () => {
        const article = element.nativeElement as HTMLAreaElement
        article.style.opacity = "1";
        article.style.transform = "translateY(0)"
      })
      element.nativeElement.addEventListener("notintersect", () => {
        const article = element.nativeElement as HTMLAreaElement
        article.style.opacity = "0";
        article.style.transform = "translateY(-30px)"
      })
    })

    this.section.nativeElement.addEventListener("intersect", () => {
      document.getElementById("/projects")?.classList.add("active");
    })

    this.section.nativeElement.addEventListener("notintersect", () => {
      document.getElementById("/projects")?.classList.remove("active");
    })

  }
  ngOnDestroy() {
    this.intersect.unobserve(this.section.nativeElement);
    this.articles.forEach(element => { this.intersect.unobserve(element.nativeElement) });
  }

}
