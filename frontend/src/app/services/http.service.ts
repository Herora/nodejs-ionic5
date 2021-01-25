import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getTelephones(){
    return this.http.get(`${URL}/api/technologies`);
  }
  getCuentaId(id){
    return this.http.get(`${URL}/api/technology/${id}`);
  }
  getSearchNumber( data ){
    return this.http.get(`${URL}/api/technology/search/${data}`);
  }
  deleteCuentaId(id){
    return this.http.delete(`${URL}/api/technology/${id}`);
  }
}
