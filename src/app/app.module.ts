import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionCursosComponent } from './main/section-cursos/section-cursos.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { CursosComponent } from './main/cursos/cursos.component';
import { DescripcionComponent } from './main/cursos/descripcion/descripcion.component';
import { CardCursosComponent } from './main/section-cursos/card-cursos/card-cursos.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoachComponent } from './main/coach/coach.component';
import { FormcursosComponent } from './main/section-cursos/formcursos/formcursos.component';
import { HttpClientModule } from '@angular/common/http';
import { PagosComponent } from './main/pagos/pagos.component';

import { AuthModule } from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CursosComponent,
    DescripcionComponent,
    PageNotFoundComponent,
    LayoutComponent,
    CardCursosComponent,
    MainComponent,
    SectionCursosComponent,
    HeaderComponent,
    FooterComponent,
    CoachComponent,
    FormcursosComponent,
    PagosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-01zd21ssgzmznj46.us.auth0.com',
      clientId: 'osO7y1EbeGpCYesReH9Bc9xuValxRyuJ',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
