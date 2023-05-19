import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EtudiantDiplome } from '../classes/etudiant-diplome';

const URL="http://localhost:3000/etuddip";
@Injectable({
  providedIn: 'root'
})
export class EtudiantDiplomeService {

  constructor( private http:HttpClient) { }
  getDepensess():Observable<any>{
    return this.http.get<any>(URL);
  }
  addDepensess(d:EtudiantDiplome):Observable<EtudiantDiplome>{
    return this.http.post<EtudiantDiplome>(URL, d)
  }

  updateDepenses(id:number,d:EtudiantDiplome){
    return this.http.put<EtudiantDiplome>(URL+"/"+id ,d)
  }
  deleteDepenses(id : number){
    return this.http.delete(`${URL}/${id}`);
  }
}
