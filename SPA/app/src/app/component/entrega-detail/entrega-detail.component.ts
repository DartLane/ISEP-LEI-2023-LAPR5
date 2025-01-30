import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { EntregaService } from 'src/app/service/entrega.service';
import { Entrega } from '../../model/entrega/entrega';
@Component({
  selector: 'app-entrega-detail',
  templateUrl: './entrega-detail.component.html',
  styleUrls: ['./entrega-detail.component.css']
})
export class EntregaDetailComponent implements OnInit {
  @Input() entrega?: Entrega;

  constructor(
    private route: ActivatedRoute,
    private entregaService: EntregaService,
    private location: Location) { }

  ngOnInit(): void {
    //this.getEntrega();
  }

  getEntrega(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.entregaService.getEntrega(id).subscribe(
      entrega => entrega = entrega
    );
  }

  saveEntrega(): void{
    if(this.entrega) {
      if(this.entrega.tempodescarga <= 0 || !this.entrega.tempodescarga){
        alert('Campo TempoDescarga obrigatório ou não negativo nem nulo!!');
        return;
      }
      if(this.entrega.tempocarga <= 0 || !this.entrega.tempocarga){
        alert('Campo TempoCarga obrigatório ou não negativo nem nulo!!');
        return;
      }
      if(this.entrega.massa <= 0 || !this.entrega.massa){
        alert('Campo massa das Baterias obrigatório ou não negativo nem nulo!!');
        return;
      }
      if(this.entrega.dia <= 0 || !this.entrega.dia){
        alert('Campo Dia obrigatório ou não negativo nem nulo!!');
        return;
      }
      if(this.entrega.mes <= 0 || !this.entrega.mes){
        alert('Campo Mes obrigatório ou não negativo nem nulo!!');
        return;
      }
      if(this.entrega.ano <= 0 || !this.entrega.ano){
        alert('Campo Ano obrigatório ou não negativo nem nulo!!');
        return;
      }
      if(!this.entrega.armazemId){
        alert('Campo ArmazemID obrigatório');
        return;
      }

      this.entregaService.updateEntrega(this.entrega).subscribe();
      alert('Entrega editada ' + this.entrega.id);
    }else{
      alert('Não é possivel editar a entrega' + this.entrega);
    }
    window.location.reload();
  }
  
  goBack(): void {
    this.location.back();
  }
  

}
