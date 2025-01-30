import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PlaneamentoService } from 'src/app/service/planeamento.service';
import PlaneamentoFrota from 'src/app/model/planeamento/planeamentoFrota';

@Component({
  selector: 'app-planemaneto-frota',
  templateUrl: './planemaneto-frota.component.html',
  styleUrls: ['./planemaneto-frota.component.css']
})
export class PlanemanetoFrotaComponent implements OnInit {

  planeamentoFrota?: PlaneamentoFrota | null;
  melhorPlaneamentoFrota?: PlaneamentoFrota | null;

  constructor(
    private route: ActivatedRoute,
    private planeamentoService: PlaneamentoService,
    private location: Location
  ) { }

  ngOnInit(): void { 
  }

 
  /**
   * Frota Completa
   */
  getPlaneamentoFrotaCompleta(data: string): void {
    data = data.trim();
    if (!this.validateData(data)) {
      return;
    }
    this.planeamentoService.planemanetoFrotaCompleta(data)
    .subscribe(planeamentoFrota => {       
      if (planeamentoFrota.planeamento.length > 0){
          this.planeamentoFrota = planeamentoFrota;
        }else { 
          alert('Não existe Planeamento');
        }
      });
  }

  getMelhorPlaneamentoFrota(data: string): void {
    data = data.trim();
    if (!this.validateData(data)) {
      return;
    }
    this.planeamentoService.melhorPlanemanetoDeFrota(data)
    .subscribe(melhorPlaneamentoFrota => {       
      if (melhorPlaneamentoFrota.planeamento.length > 0){
          this.melhorPlaneamentoFrota = melhorPlaneamentoFrota;
        }else { 
          alert('Não existe Planeamento');
        }
      });
  }

  validateData(data: string): boolean {
    if (!data) {
      alert('Obrigatório campo Data!');
      return false;
    }
    return true;
  }
  
  goBack(): void {
    this.location.back();
  }
}
