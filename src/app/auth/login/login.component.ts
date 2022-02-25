import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

	form: FormGroup;
	loading: boolean = false;

  constructor( 
		private fb: FormBuilder,
		private _snackBar: MatSnackBar,
		private router: Router
		) {
		this.form = this.fb.group ({
			usuario: ['', Validators.required],
			password: ['', Validators.required]
		})

	 }

  ngOnInit(): void {
  }

	ingresar() {
		//console.log(this.form);
		const user = this.form.value.usuario;
		const pass = this.form.value.password;

		console.info('Usuario:', user);
		console.info('Pass:', pass);

		if(user == 'cmunozm' && pass == 'admin123') {
			this.fakeLoading();
		} else {
			this.error();
			this.form.reset();
		}	

	}
	error() {
		this._snackBar.open('Usuario o contraseña ingresado son invalidos', '', {
			duration: 5000,
			horizontalPosition: 'center',
			verticalPosition: 'bottom'
		});
	}

	fakeLoading() {
		this.loading = true;
		setTimeout(() => {
			//this.loading = false;
			this.router.navigate(['dashboard']);
		}, 1500);
	}
}
