import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:any={};
 
  constructor( private activatedRoute:ActivatedRoute,
               private heroeService:HeroesService
  ) { 
    this.activatedRoute.params.subscribe( params => {
     this.heroe = this.heroeService.getHeore(params['id']);  
     console.log(this.heroe);
          
    });
  }

  ngOnInit() {
  }

  ACasa(){
    if (this.heroe.casa = "marvel") {
      return "../../../assets/img/marvel"
    }

  }

}
