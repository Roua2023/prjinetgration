import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Societe } from '../classes/societe';

const URL="http://localhost:3000/societe";

@Injectable({
  providedIn: 'root'
})
export class SocieteService {

  constructor( private http:HttpClient) { }
  getDepensess():Observable<any>{
    return this.http.get<any>(URL);
  }
  addDepensess(d:Societe):Observable<Societe>{
    return this.http.post<Societe>(URL, d)
  }

  updateDepenses(id:number,d:Societe){
    return this.http.put<Societe>(URL+"/"+id ,d)
  }
  deleteDepenses(id : number){
    return this.http.delete(`${URL}/${id}`);
  }
}
