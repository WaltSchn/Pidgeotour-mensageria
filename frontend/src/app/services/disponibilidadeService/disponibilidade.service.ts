import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadeService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.API_DEST_BASE_URL + '/disponibilidade'

  getDisponibilidade(id: number, qtde: number){
    return this.http.get(this.baseUrl + `/${id}/${qtde}`);
  }

}
