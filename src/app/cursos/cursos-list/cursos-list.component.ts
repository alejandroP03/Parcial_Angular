import { Component } from '@angular/core';
import { Cursos } from '../cursos';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css'],
})
export class CursosListComponent {
  cursos: Array<Cursos> = [];
  certifiedCourses: string = '';
  selectedCurso!: Cursos;
  constructor(private cursosService: CursosService) {}

  getCursos() {
    this.cursosService.getCursos().subscribe((cursos) => {
      this.cursos = cursos;
      cursos.forEach((curso) => {
        this.certifiedCourses += curso.offers_certificate
          ? String(curso.id) + ', '
          : '';
      });
    });
    
  }

  onSelect(curso: Cursos) {
    this.selectedCurso = curso;
  }

  ngOnInit(): void {
    this.getCursos();
  }
}
