import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { EntregaService } from 'src/app/service/entrega.service';
import { Entrega } from '../../model/entrega/entrega';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})
export class EntregaComponent implements OnInit {
  constructor(
    private entregaService: EntregaService,
    private location: Location) {}

  entregas: Entrega[] = [];
  selectedEntrega!: Entrega;
    
  ngOnInit(): void {
    this.listarEntregas();
  }

  onSelect(entrega: Entrega):void{
    if(this.selectedEntrega == entrega){
      //fecha o detalhe
      this.selectedEntrega = {} as Entrega;
      //vai buscar id caminho ao html e fecha o detalhe
      document.getElementById("detalheEntrega")!.style.display = "none";
    }else{
      this.selectedEntrega = entrega;
      //vai buscar id caminho ao html e abre o detalhe
      document.getElementById("detalheEntrega")!.style.display = "block";
    }
    //this.selectedEntrega = entrega;
  }

  criarEntrega(tempodescarga: string, tempocarga: string, massa: string, armazemId: string, dia: string, mes: string, ano: string): void{
    
    if(!tempodescarga){
      alert('Obrigatório campo Tempo Descarga!!');
      return;
    }
    if(!tempocarga){
      alert('Obrigatório campo Tempo Carga!!');
      return;
    }
    if(!massa){
      alert('Obrigatório campo Massa!!');
      return;
    }
    if(!armazemId){
      alert('Obrigatório campo Armazem ID!!');
      return;
    }
    if(!dia){
      alert('Obrigatório campo Dia!!');
      return;
    }
    if(!mes){
      alert('Obrigatório campo Mes!!');
      return;
    }
    if(!ano){
      alert('Obrigatório campo Ano!!');
      return;
    }

    // passar string para number
    var tempodescarga1 = Number(tempodescarga);
    var tempocarga1 = Number(tempocarga);
    var massa1 = Number(massa);
    var dia1 = Number(dia);
    var mes1 = Number(mes);
    var ano1 = Number(ano);

    if(tempodescarga1 <=0){
      alert('O Tempo de Descarga não pode ser negativo nem 0');
      return;
    }
    if(tempocarga1 <=0){
      alert('O Tempo de Carga não pode ser negativo nem 0');
      return;
    }
    if(massa1 <=0){
      alert('A Massa da entrega não pode ser negativo nem 0');
      return;
    }

    switch(mes1){
      case 1: case 3: case 5: case 7: 
      case 8: case 10: case 12:
       if(dia1 > 31){
        alert("Inválido (mes com mais de 31 dias)");
        return;
       }
       break ;
      case 4: case 6:
      case 9: case 11:
       if(dia1 > 30){
        alert("Inválido (mes com mais de 30 dias)");
        return;
       }
       break ;
      case 2:
       if( (ano1%400 == 0) || (ano1%4==0 && ano1%100!=0) ){
        if( dia1 > 29){
         alert("Inválido (mes com mais de 29 dias)");
         return;
        }
      }else{
        if( dia1 > 28){
         alert("Inválido (mes com mais de 28 dias)");
         return;
        }
      }
     }
    
    this.entregaService.criarEntrega({tempodescarga:tempodescarga1, tempocarga:tempocarga1, massa:massa1, armazemId, dia:dia1, mes:mes1, ano:ano1} as Entrega).subscribe((data) => {
      if(data){
        alert('Entrega adicionada!');
      }else{
        alert('Erro! Tente novamente.');
      }
      window.location.reload();
      },
      (error) => {
        if (error.status >= 400) {
          alert('Erro! Tente novamente.');
        }
        window.location.reload();
      },
      
      
    );  
  }

  listarEntregas(): void{
    this.entregaService.getEntregas().subscribe(
      (entregas) => (this.entregas = entregas))
  }

  listarEntregasArmAsc():void{
    this.entregaService.listarEntregasArmAsc().subscribe(
      (entregas) => (this.entregas = entregas)
    )
  }

  listarEntregasArmDesc():void{
    this.entregaService.listarEntregasArmDesc().subscribe(
      (entregas) => (this.entregas = entregas)
    )
  }

  listarEntregasDataAsc():void{
    this.entregaService.listarEntregasDataAsc().subscribe(
      (entregas) => (this.entregas = entregas)
    )
  }

  listarEntregasDataDesc():void{
    this.entregaService.listarEntregasDataDesc().subscribe(
      (entregas) => (this.entregas = entregas)
    )
  }

  deleteEntrega(entrega: Entrega): void{
    this.entregaService.deleteEntrega(entrega.id)
    .subscribe();
    alert('Entrega com id: ' + entrega.id + ' foi eliminado!');
    window.location.reload();
  }

  filterEntregas(): void {
    document.getElementById("detalheEntrega")!.style.display = "none";
    var inputFilter1 = document.getElementById("inputFilter1") as HTMLInputElement;
    var filter = inputFilter1.value;

    var selectedFilter = document.getElementById("selectFilter") as HTMLSelectElement;

    var texto = selectedFilter.value;
    if (texto == "Armazem") {
      this.entregaService.filterEntregasByArmazem(filter).subscribe(entregas => {
        this.entregas = entregas;
      });
    }
    if (texto == "Intervalo de Datas") {
      var inputFilter2 = document.getElementById("inputFilter2") as HTMLInputElement;
      var filter2 = inputFilter2.value;
      this.entregaService.filterEntregasBetweenDates(filter,filter2).subscribe(entregas => {
        this.entregas = entregas;
      });
    }
    if (texto == "todos") {
      this.listarEntregas();
    }
  }

  goBack(): void {
    this.location.back() }

}
