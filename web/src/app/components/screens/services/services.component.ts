import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SourceList } from '../../../services/SourceList';
import { CommonModule } from '@angular/common';
import { Service } from '../../../services/ModelsInterface';
import { ObserverService } from '../../../services/ObserverService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  standalone: true,
})
export class ServicesComponent {

  private listService: Service[] = [];
  private intersection?: ObserverService = undefined

  @ViewChildren("article") articles!: QueryList<ElementRef>;
  @ViewChild("section") services!: ElementRef

  constructor(private list: SourceList, private intersectionService: ObserverService, private router: Router) { }

  ngOnInit(): void {
    this.listService = this.list.getServicesList();
    this.intersection = this.intersectionService;
  }

  getServiceList(): Service[] {
    return this.listService;
  }

  ngAfterViewInit(): void {
    
    this.articles.forEach(element => { this.intersection!.observe(element.nativeElement) });

    this.articles.forEach(element => {
      element.nativeElement.addEventListener("intersect", () => {
        const article = element.nativeElement as HTMLAreaElement
        article.style.opacity = "1";
        article.style.transform = "translateX(0)"
      })
      element.nativeElement.addEventListener("notintersect", () => {
        const article = element.nativeElement as HTMLAreaElement
        article.style.opacity = "0";
        article.style.transform = "translateX(-20px)"
      })
    })

    this.intersection!.observe(this.services.nativeElement)

    this.services.nativeElement.addEventListener("intersect", () => {
      document.getElementById("/services")?.classList.add("active");
      this.router.navigate(["/services"])
    })

    this.services.nativeElement.addEventListener("notintersect", () => {
      document.getElementById("/services")?.classList.remove("active");
    })
  }

  ngOnDestroy(): void {
    this.intersection?.unobserve(this.services.nativeElement)
    this.articles.forEach(element => { this.intersection!.unobserve(element.nativeElement) });
  }
}
