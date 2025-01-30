import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CaminhoService } from 'src/app/service/caminho.service';
import Caminho from '../../model/caminho/caminho';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-caminho',
  templateUrl: './caminho.component.html',
  styleUrls: ['./caminho.component.css']
})
export class CaminhoComponent implements OnInit {
  constructor(
    private caminhoService: CaminhoService,
    private location: Location) { }

  caminhos: Caminho[] = [];
  selectedCaminho!: Caminho;
  filter: any;
  total: number = 0;
  public paginaAtual: number = 1;
  pageSize: number = 3;



  ngOnInit(): void {
    this.filterCaminhos();
  }

  onSelect(caminho: Caminho): void {
    if (this.selectedCaminho == caminho) {
      //fecha o detalhe
      this.selectedCaminho = {} as Caminho;
      //vai buscar id caminho ao html e fecha o detalhe
      document.getElementById("detalheCaminho")!.style.display = "none";
    } else {
      this.selectedCaminho = caminho;
      //vai buscar id caminho ao html e abre o detalhe
      document.getElementById("detalheCaminho")!.style.display = "block";
    }

  }

  criarCaminho(energiaNecessariaKWh1: string, tempoDeslocacaoMin1: string, idArmazemOrigem: string, idArmazemDestino: string, distanciaEntreArmazens1: string): void {
    var energiaNecessariaKWh = Number(energiaNecessariaKWh1);
    var tempoDeslocacaoMin = Number(tempoDeslocacaoMin1);
    var distanciaEntreArmazens = Number(distanciaEntreArmazens1);

    if (!energiaNecessariaKWh) {
      alert('Obrigatório campo Energia Necessária para percorrer Caminho em KWh!!');
      return;
    }
    if (energiaNecessariaKWh < 0) {
      alert('Obrigatório que o campo Energia Necessária para percorrer Caminho em KWh, seja maior que 0!!');
      return;
    }
    if (!tempoDeslocacaoMin) {
      alert('Obrigatório campo Tempo de deslocacao minimo entre armazéns em Minutos!!');
      return;
    }
    if (tempoDeslocacaoMin < 0) {
      alert('Obrigatório que o campo Tempo de deslocacao minimo entre armazéns em Minutos, seja maior que 0!!');
      return;
    }
    if (!idArmazemOrigem) {
      alert('Obrigatório campo Identificador do Armazém de Origem!!');
      return;
    }

    if (idArmazemOrigem.length != 3) {
      alert('Obrigatório que o campo Identificador do Armazém de Origem, tenha 3 caracteres!!');
      return;
    }

    if (!idArmazemDestino) {
      alert('Obrigatório campo Identificador do Armazém de Destino!!');
      return;
    }

    if (idArmazemDestino.length != 3) {
      alert('Obrigatório que o campo Identificador do Armazém de Destino, tenha 3 caracteres!!');
      return;
    }

    if (!distanciaEntreArmazens) {
      alert('Obrigatório campo Distância entre os 2 armazéns!!');
      return;
    }
    if (distanciaEntreArmazens <= 0) {
      alert('Obrigatório que o campo Distância entre os 2 armazéns, seja maior que 0!!');
      return;
    }
    var caminho = this.caminhoService.criarCaminho(energiaNecessariaKWh, tempoDeslocacaoMin, idArmazemOrigem, idArmazemDestino, distanciaEntreArmazens).subscribe((data) => {
      if (data == null) {
        alert('Erro ao criar Caminho!! Tente mais tarde!!');
      } else {
        alert('Erro ao criar Caminho, id do armazém tem que existir!!');
        window.location.reload();
      }
    },
      (error) => {
        if (error.status == 400) {
          alert('Erro ao criar Caminho!! Tente mais tarde!!');
        }

      }
    );
  }

  listarCaminhos(): void {

    this.caminhoService.listarCaminhos(this.paginaAtual).subscribe((data) => {
      this.caminhos = data.data;
      this.total = data.totalItems;
      this.pageSize = data.pageSize;
    },
      (error) => {
        if (error.status == 400) {
          alert('Erro ao listar Caminhos!! Tente mais tarde!!');
        }

      }
    );
  }

  updateCaminho(id: string, energiaNecessariaKWh1: string, tempoDeslocacaoMin1: string, idArmazemOrigem: string, idArmazemDestino: string, distanciaEntreArmazens1: string): void {
    var energiaNecessariaKWh = Number(energiaNecessariaKWh1);
    var tempoDeslocacaoMin = Number(tempoDeslocacaoMin1);
    var distanciaEntreArmazens = Number(distanciaEntreArmazens1);

    if (!id) {
      alert('Obrigatório campo Identificador Caminho!!');
      return;
    }
    if (!energiaNecessariaKWh) {
      alert('Obrigatório campo Energia Necessária para percorrer Caminho em KWh!!');
      return;
    }
    if (energiaNecessariaKWh <= 0) {
      alert('Obrigatório que o campo Energia Necessária para percorrer Caminho em KWh, seja maior que 0!!');
      return;
    }
    if (!tempoDeslocacaoMin) {
      alert('Obrigatório campo Tempo de deslocacao minimo entre armazéns em Minutos!!');
      return;
    }
    if (tempoDeslocacaoMin <= 0) {
      alert('Obrigatório que o campo Tempo de deslocacao minimo entre armazéns em Minutos, seja maior que 0!!');
      return;
    }
    if (!idArmazemOrigem) {
      alert('Obrigatório campo Identificador do Armazém de Origem!!');
      return;
    }

    if (idArmazemOrigem.length != 3) {
      alert('Obrigatório que o campo Identificador do Armazém de Origem, tenha 3 caracteres!!');
      return;
    }
    if (!idArmazemDestino) {
      alert('Obrigatório campo Identificador do Armazém de Destino!!');
      return;
    }

    if (idArmazemDestino.length != 3) {
      alert('Obrigatório que o campo Identificador do Armazém de Destino, tenha 3 caracteres!!');
      return;
    }
    if (!distanciaEntreArmazens) {
      alert('Obrigatório campo Distância entre os 2 armazéns!!');
      return;
    }
    if (distanciaEntreArmazens <= 0) {
      alert('Obrigatório que o campo Distância entre os 2 armazéns, seja maior que 0!!');
      return;
    }

    this.caminhoService.updateCaminho(id, energiaNecessariaKWh, tempoDeslocacaoMin, idArmazemOrigem, idArmazemDestino, distanciaEntreArmazens).subscribe((data) => {
      alert('Caminho atualizado com sucesso!!');
      window.location.reload();
    },
      (error) => {
        if (error.status == 400) {
          alert('Erro ao atualizar Caminho!! Tente mais tarde!!');
        }
        if (error.status == 500) {
          alert('Erro ao atualizar Caminho, pode ser devido ao Identificador!!');
        }
      });
  }

  deleteCaminho(id: string): void {
    if (confirm("Deseja apagar o caminho?") == true) {
      this.caminhoService.deleteCaminho(id).subscribe((data) => {
        alert('Caminho eliminado com sucesso!!');
        window.location.reload();
      },
        (error) => {
          if (error.status == 400) {
            alert('Erro ao eliminar Caminho!! Tente mais tarde!!');
          }

        });
    } else {
      return;
    }

  }

  goBack(): void {
    this.location.back();
  }

  // filter: {id: inputFilter.value, idArmazemOrigem: inputFilter.value, idArmazemDestino: inputFilter.value}
  filterCaminhos(): void {
    document.getElementById("detalheCaminho")!.style.display = "none";
    var inputFilter = document.getElementById("inputFilter") as HTMLInputElement;
    var filter = inputFilter.value;

    var selectedFilter = document.getElementById("selectFilter") as HTMLSelectElement;

    var texto = selectedFilter.value;
    if (texto == "idArmazemOrigem") {
      this.caminhoService.filterCaminhosByIdArmazemOrigem(filter, this.paginaAtual).subscribe(caminhos => {
        this.caminhos = caminhos.data;
        this.total = caminhos.totalItems;
        this.pageSize = caminhos.pageSize;
      });
    }
    if (texto == "idArmazemDestino") {
      this.caminhoService.filterCaminhosByIdArmazemDestino(filter, this.paginaAtual).subscribe(caminhos => {
        this.caminhos = caminhos.data;
        this.total = caminhos.totalItems;
        this.pageSize = caminhos.pageSize;
      });
    }

    if (texto == "todos") {
      this.listarCaminhos();
    }
  }

  pageChangeEvent(event: number) {
    this.paginaAtual = event;
    this.listarCaminhos();
  }
}
