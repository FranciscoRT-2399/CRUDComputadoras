import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServidorService } from '../../Servidor/servidor.service';
import { Router } from '@angular/router';
import { Computadora } from '../../Entidad/computadora';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './guardar.component.html',
  styleUrl: './guardar.component.css',
})
export class GuardarComponent {
  constructor(private router: Router, private service: ServidorService) {}

  compu: Computadora = new Computadora();

  guardar() {
    this.service.guardarCompu(this.compu).subscribe(
      (data) => {
        Swal.fire({
          title: 'Guardado',
          text: 'Computadora guardado correctamente',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        this.router.navigate(['listar']);
      },
      (error) => {
        Swal.fire({
          title: 'Error',
          text: 'Error al guardar la Computadora',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    );
  }

	cancelar(){
		this.router.navigate(['listar']);
	}
}
