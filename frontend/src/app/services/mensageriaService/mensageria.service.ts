import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MensageriaService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.API_MENSAGERIA_BASE_URL

  sendMessage(message: string){
    return this.http.get(this.baseUrl + "/producerMsg?message=" + `${message}`);
  }
}
