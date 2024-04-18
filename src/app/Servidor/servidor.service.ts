import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Computadora } from '../Entidad/computadora';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  constructor(private http: HttpClient) { }

	url = 'http://localhost:8001/computadora'

	listarCompu(){
		return this.http.get<(Computadora[])>(this.url + '/listar')
	}

	guardarCompu(compu: Computadora) {
		return this.http.post<string>(this.url + '/guardar', compu);
	}

	buscarCompu(compu: Computadora) {
		return this.http.post<Computadora>(this.url + '/buscar', compu);
	}
	
	eliminarCompu(compu: Computadora) {
		return this.http.post<string>(this.url + '/eliminar', compu);
	}

	editarCompu(compu: Computadora) {
		return this.http.post<string>(this.url + '/editar', compu);
	}

	buscarPorMarca(compu: Computadora) {
		return this.http.post<Computadora[]>(this.url + '/buscarPorMarca', compu);
	}
}
