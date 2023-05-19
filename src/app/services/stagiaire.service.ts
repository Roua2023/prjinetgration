import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stagiaire } from '../classes/stagiaire';

const URL="http://localhost:3000/etudstag";
@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  constructor( private http:HttpClient) { }
  getDepensess():Observable<any>{
    return this.http.get<any>(URL);
  }
  addDepensess(d:Stagiaire):Observable<Stagiaire>{
    return this.http.post<Stagiaire>(URL, d)
  }

  updateDepenses(id:number,d:Stagiaire){
    return this.http.put<Stagiaire>(URL+"/"+id ,d)
  }
  deleteDepenses(id : number){
    return this.http.delete(`${URL}/${id}`);
  }
}
