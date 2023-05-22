import { Component, OnInit } from '@angular/core';
import { Offre } from 'src/app/classes/offre';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-trouverstage',
  templateUrl: './trouverstage.component.html',
  styleUrls: ['./trouverstage.component.css']
})
export class TrouverstageComponent implements OnInit {

  lesoffres: Offre[]=[];
  constructor(private OffreService:OffreService) { }

  ngOnInit(): void {

    this.OffreService.getOffre()
    .subscribe(
      data => this.lesoffres = data
    )
  }

}
