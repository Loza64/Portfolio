import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { DataList } from '../../../services/DataList';
import { CommonModule } from '@angular/common';
import { Service } from '../../../services/Models';
import { IntersectionObserverService } from '../../../services/IntersectionObserverService';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  private listService: Service[] = [];
  private intersection?: IntersectionObserverService = undefined

  @ViewChildren("article") articles!: QueryList<ElementRef>;

  constructor(private list: DataList, private intersectionService: IntersectionObserverService) { }

  ngOnInit(): void {
    this.listService = this.list.getServicesList();
    this.intersection = this.intersectionService;
  }

  getServiceList(): Service[] {
    return this.listService;
  }

  ngAfterViewInit(): void {
    this.articles.forEach(element => {
      this.intersection!.observe(element.nativeElement)
    });

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
  }

  ngOnDestroy(): void {
    this.articles.forEach(element => {
      this.intersection!.unobserve(element.nativeElement)
    });
  }
}
