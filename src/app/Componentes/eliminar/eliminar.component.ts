import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Computadora } from '../../Entidad/computadora';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ServidorService } from '../../Servidor/servidor.service';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent implements OnInit{

	constructor(private router: Router, private service: ServidorService) { }

	compu : Computadora = new Computadora();

	ngOnInit(): void {
		this.buscar();
	}

	buscar(){
		const id = localStorage.getItem('id');
		this.compu.idCompu = Number(id);
		this.service.buscarCompu(this.compu).subscribe(data =>{
			this.compu = data;
		})
	}

	eliminar(){
		this.service.eliminarCompu(this.compu).subscribe(() =>{
			Swal.fire({
				text: 'Se elimino correctamente la informacion',
				icon: 'success'
			})
			this.router.navigate(['listar']);
		})
	}

	cancelar(){
		this.router.navigate(['listar']);
	}


}
