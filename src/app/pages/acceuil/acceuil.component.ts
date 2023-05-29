import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  typeInscription: string = '';
  constructor() { }

  ngOnInit(): void {
    

  }
select(){
  console.log(this.typeInscription);
}
}
