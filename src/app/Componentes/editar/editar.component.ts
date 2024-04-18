import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../../Servidor/servidor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Computadora } from '../../Entidad/computadora';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{

	constructor(private router: Router, private service: ServidorService){}

	compu : Computadora = new Computadora();

	ngOnInit(): void {
		this.buscar();
	}
	
	buscar(){
		let id = localStorage.getItem('id');
		console.log(id);
		this.compu.idCompu = Number(id);
		this.service.buscarCompu(this.compu).subscribe(data =>{
			this.compu = data;
		})
	}

	editar(){
		this.service.editarCompu(this.compu).subscribe(() =>{
			Swal.fire({
				text: 'Se edito correctamente la informacion',
				icon: 'success'
			})
			this.router.navigate(['listar']);
		})
	}

	cancelar(){
		this.router.navigate(['listar']);
	}
}
