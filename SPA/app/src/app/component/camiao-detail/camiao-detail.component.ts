import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CamiaoService } from 'src/app/service/camiao.service';
import { Camiao } from '../../model/camiao/camiao';
@Component({
  selector: 'app-camiao-detail',
  templateUrl: './camiao-detail.component.html',
  styleUrls: ['./camiao-detail.component.css']
})
export class CamiaoDetailComponent implements OnInit {
  @Input() camiao?: Camiao;

  constructor(
    private route: ActivatedRoute,
    private camiaoService: CamiaoService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCamiao();
  }

  getCamiao(): void {
    const matricula = Number(this.route.snapshot.paramMap.get('matricula'));
    this.camiaoService.listarCamiao(matricula).subscribe(
      camiao => camiao = camiao
    );
  }

  saveCamiao(): void{
    if(this.camiao) {
      if(this.camiao.tara <= 0 || !this.camiao.tara){
        alert('Campo Tara obrigatório ou não negativo nem nulo!!');
        return;
      }
      if(this.camiao.capacidadeCarga <= 0 || !this.camiao.capacidadeCarga){
        alert('Campo Capacidade de Carga obrigatório ou não negativo nem nulo!!');
        return;
      }
      if(this.camiao.cargaTotalBaterias <= 0 || !this.camiao.cargaTotalBaterias){
        alert('Campo Carga Total das Baterias obrigatório ou não negativo nem nulo!!');
        return;
      }
      if(this.camiao.autonomia <= 0 || !this.camiao.autonomia){
        alert('Campo Autonima obrigatório ou não negativo nem nulo!!');
        return;
      }

      this.camiaoService.editarCamiao(this.camiao).subscribe();
      alert('Camiao editado ' + this.camiao.matricula);
    }else{
      alert('Não é possivel editar o camiao' + this.camiao);
    }
    window.location.reload();
  }
  
  goBack(): void {
    this.location.back();
  }

}
