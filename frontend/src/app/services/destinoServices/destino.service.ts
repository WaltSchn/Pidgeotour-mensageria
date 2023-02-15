import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DestinoService {
  constructor(private http: HttpClient) { }

  baseUrl = environment.API_DEST_BASE_URL + '/destinos'
  
  getDestinosList(){
    return this.http.get(this.baseUrl)
  }

  getDestinoById(id: number){
    return this.http.get(this.baseUrl + `/${id}`);
  }
}
