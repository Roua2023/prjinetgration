import { Component, OnInit } from '@angular/core';
import { Stagiaire } from 'src/app/classes/stagiaire';
import { StagiaireService } from 'src/app/services/stagiaire.service';

@Component({
  selector: 'app-trouverstagieres',
  templateUrl: './trouverstagieres.component.html',
  styleUrls: ['./trouverstagieres.component.css']
})
export class TrouverstagieresComponent implements OnInit {

  lesstagiaire:Stagiaire[]=[];
  constructor(private stagiaireService:StagiaireService) { }

  ngOnInit(): void {
    this.stagiaireService.getStagiaire()
    .subscribe(
      data => this.lesstagiaire = data
    )
  }
  }


