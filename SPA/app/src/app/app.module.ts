import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CamiaoComponent } from './component/camiao/camiao.component';
import { CamiaoDetailComponent } from './component/camiao-detail/camiao-detail.component';
import { FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule, GoogleLoginProvider } from '@abacritt/angularx-social-login';


import { AppRoutingModule } from './app-routing.module';
import { ArmazemComponent } from './component/armazem/armazem.component';
import { MessageComponent } from './component/message/message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CaminhoComponent } from './component/caminho/caminho.component';
import { CaminhoDetailComponent } from './component/caminho-detail/caminho-detail.component';
import { ArmazemDetailComponent } from './component/armazem-detail/armazem-detail.component';
import { PlanemanetoFrotaComponent } from './component/planemaneto-frota/planemaneto-frota.component';
import { EntregaComponent } from './component/entrega/entrega.component';
import { EntregaDetailComponent } from './component/entrega-detail/entrega-detail.component';
import { FilterPipe } from './component/filter.pipe';
import { PlaneamentoComponent } from './component/planeamento/planeamento.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersComponent } from './component/users/users.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { PlanoEntregasComponent } from './component/planoEntregas/planoEntregas.component';
import { PlanoentregasDetailComponent } from './component/planoentregas-detail/planoentregas-detail.component';
import { PerfilComponent } from './component/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    CamiaoComponent,
    CamiaoDetailComponent,
    ArmazemComponent,
    MessageComponent,
    NavigationComponent,
    DashboardComponent,
    CaminhoComponent,
    CaminhoDetailComponent,
    ArmazemDetailComponent,
    EntregaComponent,
    EntregaDetailComponent,
    FilterPipe,
    PlaneamentoComponent,
    PlanemanetoFrotaComponent,
    UsersComponent,
    UserDetailComponent,
    PlanoEntregasComponent,
    PlanoentregasDetailComponent,
    PerfilComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    SocialLoginModule,
    NgxPaginationModule // Nosso módulo recém instalado
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('548275080086621')
          },
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('221057400571-t935ckr3fms5h54t2e1veci6adn5vglt.apps.googleusercontent.com')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
