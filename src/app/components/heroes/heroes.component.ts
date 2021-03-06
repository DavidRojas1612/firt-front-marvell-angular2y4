import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  HeroesService, Heroe } from '../../services/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];
  constructor( private _heroesService:HeroesService,
               private _router:Router 
  ) {
    //  console.log("constructor");
     
   }
  
  ngOnInit() {
    
    this.heroes = this._heroesService.getHereoes();
    // console.log(this.heroes);
    
    
  }

  verHeroe( idx:number){
    this._router.navigate( ['/heroe',idx] );

  }
}
