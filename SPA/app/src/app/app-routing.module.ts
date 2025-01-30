import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CamiaoComponent } from './component/camiao/camiao.component';
import { ArmazemComponent } from './component/armazem/armazem.component'
import { ArmazemDetailComponent } from './component/armazem-detail/armazem-detail.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { CaminhoComponent } from './component/caminho/caminho.component';
import { RedeViariaComponent } from './component/rede-viaria/rede-viaria.component';
import { EntregaComponent } from './component/entrega/entrega.component';
import { PlaneamentoComponent } from './component/planeamento/planeamento.component';
import { PlanemanetoFrotaComponent } from './component/planemaneto-frota/planemaneto-frota.component';
import { UsersComponent } from './component/users/users.component';
import { PlanoEntregasComponent } from './component/planoEntregas/planoEntregas.component';
import { PlanoentregasDetailComponent } from './component/planoentregas-detail/planoentregas-detail.component';
import { PerfilComponent } from './component/perfil/perfil.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'camioes', component: CamiaoComponent },
  { path: 'armazens', component: ArmazemComponent },
  { path: 'armazens/detail/:id', component: ArmazemDetailComponent },
  { path: 'caminhos', component: CaminhoComponent },
  { path: 'entregas', component: EntregaComponent },
  { path: 'redeviaria', component: RedeViariaComponent },
  { path: 'planeamento', component: PlaneamentoComponent},
  { path: 'planeamento/planeamentoFrota', component: PlanemanetoFrotaComponent},
  { path: 'users',component: UsersComponent},
  { path: 'planoEntregas',component: PlanoEntregasComponent},
  { path: 'planoEntregas/detail/:id', component: PlanoentregasDetailComponent },
  { path: 'perfil', component: PerfilComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
