import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { API_PATH } from 'src/env/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  //private _url: string = `${process.env['DB_URL']}`;
  private _url: string = `${API_PATH}`;

  constructor(private readonly _http: HttpClient) {}

  public getCharacter(): Observable<Character[]> {
    return this._http.get<Character[]>(this._url)
  }
}
