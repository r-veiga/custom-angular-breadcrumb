import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-auto-breadcrumb',
  templateUrl: './auto-breadcrumb.component.html',
  styleUrls: ['./auto-breadcrumb.component.css']
})
export class AutoBreadcrumbComponent implements OnInit {

  @Input() prefix: string; 
  @Input() steps: any[];
  @Output() userSelectedCrumb = new EventEmitter<any>();
    
  step1 = { order: 1, text: "Primero", link: "/Primero" };
  step2 = { order: 2, text: "Segundo", link: "/Segundo" };
  step3 = { order: 3, text: "Tercero ", link: "/Tercero" };
  step4 = { order: 4, text: "Cuarto", link: "/Cuarto" };
  step5 = { order: 5, text: "Quinto", link: "/Quiinto" };
  step6 = { order: 6, text: "Sexto", link: "/Sexto" };
  
  // steps: any[] = [];

  constructor() {
    // this.steps.push( this.step1, this.step2, this.step3, this.step4, this.step5, this.step6 );
  }

  ngOnInit() {
    console.log('@Input() steps: ', this.steps);
  }

  onCrumbClick(index: any, order: any) {
    console.log(`clicked element with index ${index} and corresponds to order ${order}`);
    this.steps = this.steps.slice(0, order);
    this.userSelectedCrumb.emit(this.steps);
    console.log(this.steps);
  }
}
