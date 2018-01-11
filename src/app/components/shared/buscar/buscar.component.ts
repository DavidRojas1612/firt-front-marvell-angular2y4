import { Component, OnInit } from '@angular/core';
import {  HeroesService, Heroe } from '../../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {
  bus:any =null;
  heroe:Heroe[]=[];
  constructor(private _heroesService:HeroesService,
              private activatedRoute:ActivatedRoute,
              private _router:Router) { 
                
              }

  ngOnInit() {
   //funcion para obtener parametros desde el url
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.buscarHeroes( params['nombre']);  
      console.log(this.heroe);
      this.bus = params['nombre'];     
     });
    
    
  }

  verHeroe( idx:number){
    this._router.navigate( ['/heroe',idx] );

  }
}
