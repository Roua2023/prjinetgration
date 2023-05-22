import { Component, OnInit } from '@angular/core';
import { Societe } from 'src/app/classes/societe';
import { SocieteService } from 'src/app/services/societe.service';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent implements OnInit {

  lessociete:Societe[]=[];
  constructor(private societeService:SocieteService) { }

  ngOnInit(): void {
    this.societeService.getSociete()
    .subscribe(
      data => this.lessociete = data
    )
  }

}
