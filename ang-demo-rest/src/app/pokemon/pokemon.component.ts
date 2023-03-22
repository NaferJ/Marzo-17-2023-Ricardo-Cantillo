import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})



export class PokemonComponent implements OnInit {

  public name: any;
  public urlImage: any;
  
  constructor(private PokemonService : PokemonService) {
    
  }

  ngOnInit(): void {
    
  }

  search(){
    this.PokemonService.getPokemon(this.name).subscribe((data: any)=> {
      this.urlImage = data.sprites.front_default
      //console.log(data)
    })
  }

}
