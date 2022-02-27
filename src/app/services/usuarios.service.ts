import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

	listUsuarios: Usuario[] = [
		{ usuario: 'cmunozm', nombre: 'Claudio', apellido: 'Munoz', sexo: 'Masculino' }
	];
	
	constructor(private http: HttpClient ) { }


	getUsuarios() {
		return this.listUsuarios.slice();
	}

	eliminarUsuario( index: number) {
		this.listUsuarios.splice(index, 1);
	}

	agregarUsuario(usuario: Usuario) {
		this.listUsuarios.unshift(usuario);
	}
}
