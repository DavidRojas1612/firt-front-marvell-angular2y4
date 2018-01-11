import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  HeroesService, Heroe } from '../../../services/heroes.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
  
})
export class NavbarComponent implements OnInit {

  heroe:Heroe[]=[];
  constructor(private _heroesService:HeroesService,
              private _router:Router) { }

  ngOnInit() {
    
  }

   buscarHeroe( termino:string ){
   
    this._router.navigate( ['/buscar',termino] );
    

   
  }

}

