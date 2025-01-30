import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { PlanoEntregaService } from 'src/app/service/planoEntregasService';
import { PlanoEntregas } from '../../model/planoEntregas/planoEntregas';
import { data } from 'cypress/types/jquery';

@Component({
  selector: 'app-planoEntregas',
  templateUrl: './planoEntregas.component.html',
  styleUrls: ['./planoEntregas.component.css']
})
export class PlanoEntregasComponent implements OnInit {
  constructor(
    private PlanoEntregasService: PlanoEntregaService,
    private location: Location) {}

  planos: PlanoEntregas[] = [];
  selectedPlanoEntrega!: PlanoEntregas;
  total:number = 0;
  public paginaAtual: number = 1;
  pageSize:number = 3;
    
  ngOnInit(): void {
    this.listarPlanoEntregas();
  }

  onSelect(entrega: PlanoEntregas):void{
    if(this.selectedPlanoEntrega == entrega){
      //fecha o detalhe
      this.selectedPlanoEntrega = {} as PlanoEntregas;
      //vai buscar id caminho ao html e fecha o detalhe
      document.getElementById("detalheEntrega")!.style.display = "none";
    }else{
      this.selectedPlanoEntrega = entrega;
      //vai buscar id caminho ao html e abre o detalhe
      document.getElementById("detalheEntrega")!.style.display = "block";
    }
    //this.selectedPlanoEntrega = entrega;
  }

  listarPlanoEntregas(): void{
    this.PlanoEntregasService.getEntregas(this.paginaAtual).subscribe((data) =>{
      this.planos = data.plano;
      this.total = data.totalIteams;
      this.pageSize = data.pageSize;
    }
      )
  }

  pageChangeEvent(event: number){
    this.paginaAtual = event;
    this.listarPlanoEntregas();
  }

  



  goBack(): void {
    this.location.back() }

}
