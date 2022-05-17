import { Component, ViewChild } from '@angular/core';
import { Formulario1Component } from './formulario1/formulario1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'class6';
  @ViewChild('myTestComponent') myTestComponent:Formulario1Component
  probarTestComponent(){
    console.log(this.myTestComponent)
  }
}
