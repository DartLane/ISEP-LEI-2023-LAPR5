import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PlanoEntregaService } from 'src/app/service/planoEntregasService';
import { PlanoEntregas } from 'src/app/model/planoEntregas/planoEntregas';

@Component({
  selector: 'app-planoentregas-detail',
  templateUrl: './planoentregas-detail.component.html',
  styleUrls: ['./planoentregas-detail.component.css']
})
export class PlanoentregasDetailComponent implements OnInit {
  @Input() plano?: PlanoEntregas;

  constructor(private route: ActivatedRoute,
    private planoEntregaService: PlanoEntregaService,
    private location: Location) { }

  ngOnInit(): void {
  }

  
  getEntrega(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.planoEntregaService.getEntrega(id).subscribe(
      entrega => entrega = entrega
    );
  }
  
  goBack(): void {
    this.location.back();
  }

}
