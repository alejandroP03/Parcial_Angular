import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Cursos } from './cursos';
@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCursos(): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(this.apiUrl);
  }
}
