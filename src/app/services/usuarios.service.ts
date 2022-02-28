import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

	listUsuarios: Usuario[] = [
		{ 
			usuario: 'cmunozm', 
			nombre: 'Claudio', 
			apellido: 'Munoz', 
			phone: '123456789',
			email: 'cmunozm@gmail.com',
			password: 'admin123'
		 }, 
		{
			usuario: 'mmcFly',
			nombre: 'Marty',
			apellido: 'McFly',
			phone: '123456789',
			email: 'mmcfly@gmail.com',
			password: 'admin123'
		},
		{
			usuario: 'gmcFly',
			nombre: 'George',
			apellido: 'McFly',
			phone: '123456789',
			email: 'gmcfly@gmail.com',
			password: 'admin123'
		},
		{
			usuario: 'brown',
			nombre: 'Dr. Emmett',
			apellido: 'Brown',
			phone: '123456789',
			email: 'ebrown@gmail.com',
			password: 'admin123'
		},
		{
			usuario: 'btannen',
			nombre: 'Biff Howard',
			apellido: 'Tannen',
			phone: '123456789',
			email: 'btannen@gmail.com',
			password: 'admin123'
		},
		{
			usuario: 'lbaines',
			nombre: 'Lorraine',
			apellido: 'Baines',
			phone: '123456789',
			email: 'lbaines@gmail.com',
			password: 'admin123'
		}
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
