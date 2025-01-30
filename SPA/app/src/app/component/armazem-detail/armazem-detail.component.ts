import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SocialAuthService } from '@abacritt/angularx-social-login';

import { ArmazemService } from '../../service/armazem.service';
import { Armazem } from '../../model/armazem/armazem';
import { ArmazemDTO } from '../../dto/IArmazemDTO';

@Component({
  selector: 'app-armazem-detail',
  templateUrl: './armazem-detail.component.html',
  styleUrls: ['./armazem-detail.component.css']
})
export class ArmazemDetailComponent implements OnInit {

  armazem?: Armazem;

  constructor(
    private route: ActivatedRoute,
    private armazemService: ArmazemService,
    private authService: SocialAuthService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getArmazem();
  }

  getArmazem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.armazemService.getArmazemTodos(id)
      .subscribe(armazem => this.armazem = armazem);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.armazem) {
      if (!this.armazem.designacao) {
        alert('Obrigatório campo Designação!');
        return;
      }
      if (!this.armazem.morada) {
        alert('Obrigatório campo Morada!');
        return;
      }
      if (!this.armazem.localidade) {
        alert('Obrigatório campo Localidade!');
        return;
      }
      if (!this.armazem.codigoPostal) {
        alert('Obrigatório campo Código Postal!');
        return;
      }
      if (this.armazem.latitude == null) {
        alert('Obrigatório campo Latitude!');
        return;
      }
      if (this.armazem.longitude == null) {
        alert('Obrigatório campo Longitude!');
        return;
      }
      if (this.armazem.id.length != 3) {
        alert("ID necessita 3 caracteres!");
        return;
      }
      if (this.armazem.designacao.length > 50) {
        alert('Designação limite caracteres 50!')
        return;
      }
      const codigoPostalRegExp = /^\d{4}(-\d{3})$/;
      if (!codigoPostalRegExp.test(this.armazem.codigoPostal)) {
        alert("Código Postal com formato inválido");
        return;
      }
      if (this.armazem.latitude < -90 || this.armazem.latitude > 90) {
        alert('Latitude fora dos limites válidos!')
        return;
      }
      if (this.armazem.longitude < -180 || this.armazem.longitude > 180) {
        alert('Longitude fora dos limites válidos!')
        return;
      }
      if (this.armazem.altitude < -420 || this.armazem.altitude > 8848) {
        alert('Altitude fora dos limites válidos!')
        return;
      }

      this.armazemService.updateArmazem(this.armazem)
        .subscribe(() => /*{
          alert('Perfil anonimizalo. Signing out');
          this.authService.signOut();
        })*/
          this.goBack());
    }
  }

}
