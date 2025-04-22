import { Component, ElementRef, ViewChild } from '@angular/core';
import { ObserverService } from '../../services/ObserverService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
})

export class HeaderComponent {

  @ViewChild('header') header!: ElementRef;
  constructor(private intersection: ObserverService, private router: Router) { }

  ngAfterViewInit() {
    this.intersection.observe(this.header.nativeElement)
    this.header.nativeElement.addEventListener('intersect', () => {
      this.router.navigateByUrl('/');
      document.getElementById('/home')?.classList.add('active');
    })

    this.header.nativeElement.addEventListener('notintersect', () => {
      document.getElementById('/home')?.classList.remove('active');
    })
  }

  ngOnDestroy() {
    this.intersection.unobserve(this.header.nativeElement)
  }

}