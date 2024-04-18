import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../Servidor/servidor.service';
import { Computadora } from '../../Entidad/computadora';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{

	constructor(private router: Router, private service: ServidorService){}

	ngOnInit(): void {
		this.listar();
	}

	computadora !: Computadora[];
	compu : Computadora = new Computadora();

	listar(){
		this.service.listarCompu().subscribe(data => {
			this.computadora = data;
			console.log('LISTADO EXITOSO')
		});
	}

	editar(compu: Computadora){
		//Guardamos el id del celular en el navegador de manera tamporal
		localStorage.setItem('id', compu.idCompu.toString());
		this.router.navigate(['editar']);
	}

	eliminar(compu: Computadora){
		localStorage.setItem('id',  compu.idCompu.toString());
		this.router.navigate(['eliminar']);
	}

	buscarMarca(){
		this.service.buscarPorMarca(this.compu).subscribe(data => {
			this.computadora = data;
		});
	}

}
