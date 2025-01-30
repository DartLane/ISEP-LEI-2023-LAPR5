import { Component, OnInit, OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';

import { Armazem } from '../../model/armazem/armazem';
import { ArmazemDTO } from '../../dto/IArmazemDTO';
import { ArmazemService } from '../../service/armazem.service';

@Component({
  selector: 'app-armazem',
  templateUrl: './armazem.component.html',
  styleUrls: ['./armazem.component.css']
})
export class ArmazemComponent implements OnInit, OnChanges {
  armazens: Armazem[] = [];
  armazensFuncionais: Armazem[] = [];
  armazensInibidos: Armazem[] = [];

  constructor(private armazemService: ArmazemService) { }

  ngOnInit(): void {
    this.getArmazens();
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  getArmazens(): void {
    this.armazemService.getArmazens()
      .subscribe(armazens => {
        this.armazens = armazens;
        this.armazensFuncionais = armazens.filter(armazem => armazem.active == true);
        this.armazensInibidos = armazens.filter(armazem => armazem.active == false);
      });
  }

  add(id: string, designacao: string, morada: string, localidade: string, codigoPostal: string,
    latitude: number, longitude: number, altitude: number): void {
    id = id.trim();
    designacao = designacao.trim();
    morada = morada.trim();
    localidade = localidade.trim();
    codigoPostal = codigoPostal.trim();

    if (!id) {
      alert('Obrigatório campo Id!');
      return;
    }
    if (!designacao) {
      alert('Obrigatório campo Designação!');
      return;
    }
    if (!morada) {
      alert('Obrigatório campo Morada!');
      return;
    }
    if (!localidade) {
      alert('Obrigatório campo Localidade!');
      return;
    }
    if (!codigoPostal) {
      alert('Obrigatório campo Código Postal!');
      return;
    }
    if (latitude == null) {
      alert('Obrigatório campo Latitude!');
      return;
    }
    if (longitude == null) {
      alert('Obrigatório campo Longitude!');
      return;
    }
    if (altitude == null) {
      alert('Obrigatório campo Altitude!');
      return;
    }
    if (id.length != 3) {
      alert("ID necessita 3 caracteres!");
      return;
    }
    if (designacao.length > 50) {
      alert('Designação limite caracteres 50!')
      return;
    }
    const codigoPostalRegExp = /^\d{4}(-\d{3})$/;
    if (!codigoPostalRegExp.test(codigoPostal)) {
      alert("Código Postal com formato inválido");
      return;
    }
    if (latitude < -90 || latitude > 90) {
      alert('Latitude fora dos limites válidos!')
      return;
    }
    if (longitude < -180 || longitude > 180) {
      alert('Longitude fora dos limites válidos!')
      return;
    }
    if(altitude<-420 || altitude>8848) {
      alert('Altitude fora dos limites válidos!')
      return;
    }


    this.armazemService.addArmazem({ id, designacao, morada, localidade, codigoPostal, latitude, longitude, altitude } as ArmazemDTO)
      .subscribe(armazem => {
        this.armazensFuncionais.push(armazem);
      });
  }

  filterArmazens(): void {
    var inputFilter1 = document.getElementById("inputFilter1") as HTMLInputElement;
    var filter = inputFilter1.value;

    var selectedFilter = document.getElementById("selectFilter") as HTMLSelectElement;

    var texto = selectedFilter.value;
    if (texto == "Id") {
      this.armazensFuncionais = [];
      this.armazemService.getArmazem(filter).subscribe(armazem => {
        if (armazem) {
          this.armazensFuncionais.push(armazem);
        }
      });
    }
    if (texto == "Localidade") {
      this.armazensFuncionais = [];
      this.armazemService.getArmazensByLocalidade(filter).subscribe(armazens => {
        if (armazens.length > 0) {
          this.armazensFuncionais = armazens;
        }
      });
    }
    if (texto == "Designacao") {
      this.armazensFuncionais = [];
      this.armazemService.getArmazemByDesignacao(filter).subscribe(armazem => {
        if (armazem) {
          this.armazensFuncionais.push(armazem);
        }
      });
    }
    if (texto == "Coordenadas") {
      var inputFilter2 = document.getElementById("inputFilter2") as HTMLInputElement;
      var filter2 = inputFilter2.value;
      this.armazensFuncionais = [];
      this.armazemService.getArmazemByCoordenadas(Number(filter), Number(filter2)).subscribe(armazem => {
        if (armazem) {
          this.armazensFuncionais.push(armazem);
        }
      });
    }
    if (texto == "todos") {
      this.getArmazens();
    }
  }

  inibir(armazem: Armazem): void {
    this.armazensFuncionais = this.armazensFuncionais.filter(a => a !== armazem);
    this.armazensInibidos.push(armazem);
    this.armazemService.inibirArmazem(armazem.id).subscribe();
  }

  desinibir(armazem: Armazem): void {
    this.armazensInibidos = this.armazensInibidos.filter(a => a !== armazem);
    this.armazensFuncionais.push(armazem);
    this.armazemService.desinibirArmazem(armazem.id).subscribe();
  }

  delete(armazem: Armazem): void {
    this.armazensInibidos = this.armazensInibidos.filter(a => a !== armazem);
    this.armazemService.deleteArmazem(armazem.id).subscribe();
  }

}
