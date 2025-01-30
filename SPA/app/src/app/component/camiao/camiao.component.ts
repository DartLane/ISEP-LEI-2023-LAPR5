import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CamiaoService } from 'src/app/service/camiao.service';
import { Camiao } from '../../model/camiao/camiao';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-camiao',
  templateUrl: './camiao.component.html',
  styleUrls: ['./camiao.component.css']
})
export class CamiaoComponent implements OnInit {

  constructor(
    private router: Router,
    private camiaoService: CamiaoService,
    private location: Location, 
    ) {}
  

  camioes: Camiao[] = [];
  camioesInibidos: Camiao[] = [];
  selectedCamiao!: Camiao;
  

  ngOnInit(): void {
    this.listarCamioes();
    this.listarCamioesInibidos();
  }

  onSelect(camiao: Camiao):void{
    this.selectedCamiao = camiao;
  }
  
  
  criarCamiao(matricula: string, tara: string, capacidadeCarga: string, cargaTotalBaterias: string, autonomia: string, tempoRecarregamento: string): void{
    //Verificar matricula
    var reg = /^(([A-Z]{2}-\d{2}-(\d{2}|[A-Z]{2}))|(\d{2}-(\d{2}-[A-Z]{2}|[A-Z]{2}-\d{2})))$/;
    if(!reg.test(matricula) ){
      alert("Matricula com formato Inválido");
      return;
    }   

    //Verificar campos não nulos
    if(!matricula){
      alert('Obrigatório campo Matricula do Camião!!');
      return;
    }
    if(!tara){
      alert('Obrigatório campo Tara!!');
      return;
    }
    if(!capacidadeCarga){
      alert('Obrigatório campo Capacidade de Carga!!');
      return;
    }
    if(!cargaTotalBaterias){
      alert('Obrigatório campo Carga Total das Baterias!!');
      return;
    }
    if(!autonomia){
      alert('Obrigatório campo Autonomia!!');
      return;
    }
    if(!tempoRecarregamento){
      alert('Obrigatório campo Tempo de Recarregamento!!');
      return;
    }

    // Passar String para Number
    var tara1 = Number(tara);
    var capacidadeCarga1 = Number(capacidadeCarga);
    var cargaTotalBaterias1 = Number(cargaTotalBaterias);
    var autonomia1 = Number(autonomia);
    var tempoRecarregamento1 = Number(tempoRecarregamento);
    
    // Garantir campos válidos
    if(tara1 < 0){
      alert('Tara não pode ser negativo nem igual a zero!!');
      return;
    }
    if(capacidadeCarga1 < 0){
      alert('Capacidade de Carga tem de ser SUPERIOR A ZERO!!');
      return;
    }
    if(cargaTotalBaterias1 < 0){
      alert('Carga Total das Baterias tem de ser SUPERIOR A ZERO!!');
      return;
    }
    if(autonomia1 < 0){
      alert('Autonomia tem de ser SUPERIOR A ZERO!!');
      return;
    }
    if(tempoRecarregamento1 < 0 ){
      alert('Tempo de Recarregamento tem de ser SUPERIOR A ZERO!!');
      return;
    }
    
    this.camiaoService.criarCamiao(matricula,tara1,capacidadeCarga1,cargaTotalBaterias1,autonomia1,tempoRecarregamento1).subscribe((data) => {
      alert('Camião com matricula: ' + matricula + ' adicionado!');
        window.location.reload();
      },
      (error) => {
        if (error.status == 500) {
          alert('Camião com matricula inserida já existe no sistema!');
        }
        if (error.status == 400) {
          alert('Erro! Tente novamente.');
        }
      },
    );  
  }

  listarCamioes(): void{
    this.camiaoService.listarCamioes().subscribe(
      (camioes) => (this.camioes = camioes))
  }

  listarCamioesInibidos(): void{
    this.camiaoService.listarCamioesInibidos().subscribe(
      (camioesInibidos) => (this.camioesInibidos = camioesInibidos))
  }

  deleteCamiao(camiao: Camiao): void{
    this.camiaoService.deleteCamiao(camiao.matricula)
    .subscribe();
    alert('Camião com matricula: ' + camiao.matricula + ' foi ELIMINADO!');
    window.location.reload();
  }

  inibirCamiao(camiao: Camiao): void{
    this.camiaoService.inibirCamiao(camiao.matricula)
    .subscribe();
    alert('Camião com matricula: ' + camiao.matricula + ' está INIBIDO!');
    window.location.reload();
  }

  desinibirCamiao(camiao: Camiao): void{
    this.camiaoService.desinibirCamiao(camiao)
    .subscribe((data) => {
      alert('Camião com matricula: ' + camiao.matricula + ' está DESINIBIDO!');
      window.location.reload();
    },
      (error) => {
        alert('Erro! Tente novamente.');
    });
  }

  goBack(): void {
    this.location.back();
  }

}
