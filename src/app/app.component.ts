import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'useOfAngularDirectiveNgFor';

  step1 = { order: 1, text: "1 Primero", link: "/Primero" };
  step2 = { order: 2, text: "2 Segundo", link: "/Segundo" };
  step3 = { order: 3, text: "3 Tercero ", link: "/Tercero" };
  step4 = { order: 4, text: "4 Cuarto", link: "/Cuarto" };
  step5 = { order: 5, text: "5 Quinto", link: "/Quiinto" };
  step6 = { order: 6, text: "6 Sexto", link: "/Sexto" };
  
  parentSteps: any[] = [];
  company: string = "IBM ";

  constructor() {
    this.resetSteps();
  }
  
  resetSteps() {
    this.parentSteps = [];
    this.parentSteps.push( this.step1, this.step2, this.step3, this.step4, this.step5, this.step6 );
    console.log('Reset Parent Steps: ', this.parentSteps);
    
    this.company = (this.company === "NASA ") ? "APPLE ": "NASA ";
  }
  
  setSteps(newSteps) {
    this.parentSteps = newSteps;
    console.log('Set Parent Steps: ', this.parentSteps);
  }
}
