import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CaminhoService } from 'src/app/service/caminho.service';
import Caminho from '../../model/caminho/caminho';

@Component({
  selector: 'app-caminho-detail',
  templateUrl: './caminho-detail.component.html',
  styleUrls: ['./caminho-detail.component.css']
})
export class CaminhoDetailComponent implements OnInit {
  @Input() caminho!: Caminho;

  constructor(
    private route: ActivatedRoute,
    private caminhoService: CaminhoService,
    private location: Location) { }


  ngOnInit(): void {

  }

  getCaminho(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.caminhoService.listarCaminho(id).subscribe(
      caminho => caminho = caminho
    );
  }

  saveCaminho(): void {
    if (!this.caminho.id) {
      alert('Obrigatório campo Identificador Caminho!!');
      return;
    }
    if (!this.caminho.energiaNecessariaKWh) {
      alert('Obrigatório campo Energia Necessária para percorrer Caminho em KWh!!');
      return;
    }
    if (this.caminho.energiaNecessariaKWh <= 0) {
      alert('Obrigatório que o campo Energia Necessária para percorrer Caminho em KWh, seja maior que 0!!');
      return;
    }
    if (!this.caminho.tempoDeslocacaoMin) {
      alert('Obrigatório campo Tempo de deslocacao minimo entre armazéns em Minutos!!');
      return;
    }
    if (this.caminho.tempoDeslocacaoMin <= 0) {
      alert('Obrigatório que o campo Tempo de deslocacao minimo entre armazéns em Minutos, seja maior que 0!!');
      return;
    }
    if (!this.caminho.idArmazemOrigem) {
      alert('Obrigatório campo Identificador do Armazém de Origem!!');
      return;
    }
    /*
    if (this.caminho.idArmazemOrigem.length == 3) {
      alert('Obrigatório que o campo Identificador do Armazém de Origem, tenha 3 caracteres!!');
      return;
    }
    */
    if (!this.caminho.idArmazemDestino) {
      alert('Obrigatório campo Identificador do Armazém de Destino!!');
      return;
    }
    /*
    if (this.caminho.idArmazemOrigem.length == 3) {
      alert('Obrigatório que o campo Identificador do Armazém de Destino, tenha 3 caracteres!!');
      return;
    }
    */
    if (!this.caminho.distanciaEntreArmazens) {
      alert('Obrigatório campo Distância entre os 2 armazéns!!');
      return;
    }
    if (this.caminho.distanciaEntreArmazens <= 0) {
      alert('Obrigatório que o campo Distância entre os 2 armazéns, seja maior que 0!!');
      return;
    }

    this.caminhoService.updateCaminho(this.caminho.id, this.caminho.energiaNecessariaKWh, this.caminho.tempoDeslocacaoMin, this.caminho.idArmazemOrigem, this.caminho.idArmazemDestino, this.caminho.distanciaEntreArmazens).subscribe();
    alert('Caminho atualizado com sucesso!!');
    window.location.reload();
  }
}
