import { Component, OnInit } from '@angular/core';
import Planeamento from '../../model/planeamento/planeamento';
import PlaneamentoFrota from 'src/app/model/planeamento/planeamentoFrota';

import { PlaneamentoService } from '../../service/planeamento.service';

@Component({
  selector: 'app-planeamento',
  templateUrl: './planeamento.component.html',
  styleUrls: ['./planeamento.component.css']
})

export class PlaneamentoComponent implements OnInit {
 
  planeamento?: Planeamento | null;
  planeamentoFrota?: PlaneamentoFrota | null;

  constructor(private planeamentoService: PlaneamentoService) { }

  ngOnInit(): void {
  }

  getPlaneamento(data: string): void {
    data = data.trim();
    if (!this.validateData(data)) {
      return;
    }

    this.planeamentoService.calculaPlaneamento(data)
      .subscribe(planeamento => {
        if (planeamento.armazens.length > 0){
          this.planeamento = planeamento;
        }else { this.planeamento = null; alert('planeamento null'); }
      });
  }

  getPlaneamentoHeuristicaMenorTempo(data: string): void {
    data = data.trim();
    if (!this.validateData(data)) {
      return;
    }

    this.planeamentoService.calculaPlaneamentoHeuristicaMenorTempo(data)
      .subscribe(planeamento => {
        if (planeamento.armazens.length > 0)
          this.planeamento = planeamento;
        else { this.planeamento = null; alert('planeamento null'); }
      });
  }

  getPlaneamentoHeuristicaMaiorMassa(data: string): void {
    data = data.trim();
    if (!this.validateData(data)) {
      return;
    }

    this.planeamentoService.calculaPlaneamentoHeuristicaMaiorMassa(data)
      .subscribe(planeamento => {
        if (planeamento.armazens.length > 0)
          this.planeamento = planeamento;
        else { this.planeamento = null; alert('planeamento null'); }
      });
  }

  getPlaneamentoHeuristicaCombinada(data: string): void {
    data = data.trim();
    if (!this.validateData(data)) {
      return;
    }

    this.planeamentoService.calculaPlaneamentoHeuristicaCombinada(data)
      .subscribe(planeamento => {
        if (planeamento.armazens.length > 0)
          this.planeamento = planeamento;
        else { this.planeamento = null; alert('planeamento null'); }
      });
  }

  validateData(data: string): boolean {
    if (!data) {
      alert('Obrigatório campo Data!');
      return false;
    }
    return true;
  }
}
