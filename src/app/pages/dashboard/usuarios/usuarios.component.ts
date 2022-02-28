import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})



export class UsuariosComponent implements OnInit {

	listUsuarios: Usuario[] = [];

	displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'phone', 'email', 'acciones'];
	dataSource!: MatTableDataSource<any>;

	@ViewChild( MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	constructor(private _usuarioService: UsuariosService,
		private _snackBar: MatSnackBar) { }

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
  ngOnInit(): void {

		this.cargarUsuario();
  }

	cargarUsuario() {
		this.listUsuarios = this._usuarioService.getUsuarios();
		this.dataSource = new MatTableDataSource(this.listUsuarios);
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	eliminarUsuario( index:number ) {
		console.log(index);
		this._usuarioService.eliminarUsuario(index);
		this.cargarUsuario();

		this._snackBar.open('El usuario fue eliminado con exito!', '', {
			duration: 5000,
			horizontalPosition: 'center',
			verticalPosition: 'bottom'
		});
	}

}
