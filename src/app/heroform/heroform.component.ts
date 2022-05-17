import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../models/hero';
@Component({
  selector: 'app-heroform',
  templateUrl: './heroform.component.html',
  styleUrls: ['./heroform.component.scss']
})
export class HeroformComponent implements OnInit {
  powers=['Laser Eyes']
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  heroForm:FormGroup;
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(){
    this.heroForm=this.fb.group({
      name:['', Validators.required],
      alterEgo:['', [Validators.required, Validators.minLength(3)]]
    })
  }
  onSubmit() { console.log(this.heroForm.value) }

  newHero() {
    this.model = new Hero(42, '', '');
  }
  skyDog(): Hero {
    const myHero =  new Hero(42, 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }


}
