import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {
  constructor(private readonly _swService: StarWarsService){}
  public characters: Character[] = [];

  ngOnInit(): void {
    this._swService.getCharacter().subscribe(
      characters => this.characters = characters
      )
  }

}
