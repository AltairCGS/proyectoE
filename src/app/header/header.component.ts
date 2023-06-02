import { Component, ViewChild} from '@angular/core';
// import { SectionCursosComponent, cursosInfo } from '../main/section-cursos/section-cursos.component';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // @ViewChild(SectionCursosComponent)
  // private sectionCursosComponent!: SectionCursosComponent;

  //   agregarCurso(nuevoCurso: cursosInfo) {
  //   this.sectionCursosComponent.agregarCurso(nuevoCurso);
  // }
  constructor(public auth: AuthService) {}


  logOut() {
    this.auth.logout()
  }
}
