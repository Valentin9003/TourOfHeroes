import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  onSelect(selectedHero: Hero): void{
    this.selectedHero = selectedHero; 
  }
  constructor() {}

  ngOnInit(): void {
    this.heroes = HEROES;
  }

}
