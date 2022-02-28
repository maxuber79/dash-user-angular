import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {


	sexo: any[] = ['Maculino', 'Femenino'];
	form: FormGroup;


  constructor( 
		private fb: FormBuilder, 
		private _usuarioService: UsuariosService, 
		private http: HttpClient,
		private router: Router,
		private _snackBar: MatSnackBar
		) {
		this.form = this.fb.group({
			usuario: ['', Validators.required],
			password: ['', Validators.required],
			nombre: ['', Validators.required],
			apellido: ['', Validators.required],
			phone: ['', Validators.required],
			email: ['', Validators.required]
		})
	 }

  ngOnInit(): void {
		
  }

	agregarUsuario() {
		const user: Usuario = {
			usuario: this.form.value.usuario,
			nombre: this.form.value.nombre,
			apellido: this.form.value.apellido,
			phone: this.form.value.phone,
			email: this.form.value.email,
			password: this.form.value.password
		}
		this._usuarioService.agregarUsuario(user);
		this.router.navigate(['/dashboard/usuarios']);

		this._snackBar.open('El usuario fue agregado con exito!', '', {
			duration: 5000,
			horizontalPosition: 'center',
			verticalPosition: 'bottom'
		});
	}

}
