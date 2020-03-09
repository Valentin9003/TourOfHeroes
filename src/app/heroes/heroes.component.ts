import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {
    
  }

  onSelect(selectedHero: Hero): void{
    this.messageService.add(`HeroService: Selected hero id=${selectedHero.id}`);
    this.selectedHero = selectedHero; 
  }
 
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.heroes = HEROES;
  }

}
