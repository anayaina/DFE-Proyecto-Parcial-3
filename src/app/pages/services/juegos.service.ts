import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Videogame } from 'src/app/models/juegos';

const API_PATH = 'https://656663f764fcff8d730ec138.mockapi.io/api/';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {


  constructor(private http: HttpClient) { }


  getJuegosListas(): Observable<Videogame[]> {
    const path = API_PATH + 'juegos';

    return this.http.get<Videogame[]>(path);
  }

}