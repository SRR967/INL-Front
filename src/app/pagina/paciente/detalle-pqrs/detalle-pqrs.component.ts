import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alerta } from 'src/app/modelo/alerta';
import { DetallePQRSdto } from 'src/app/modelo/dto/paciente/DetallePQRSdto';
import PqrsPacienteDto from 'src/app/modelo/dto/paciente/pqrsPacienteDto';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { PqrsService } from 'src/app/servicios/pqrs.service';


@Component({
  selector: 'app-detalle-pqrs',
  templateUrl: './detalle-pqrs.component.html',
  styleUrls: ['./detalle-pqrs.component.css']
})
export class DetallePqrsComponent {
  codigoPqrs: string = "";
  pqrs: DetallePQRSdto | undefined;
  alertaPaciente!:Alerta

  constructor(private route:ActivatedRoute, private pacienteService: PacienteService){
    this.pqrs = new DetallePQRSdto;
    this.obtenerDetallePqrs();

  }

  obtenerDetallePqrs(){
    this.route.params.subscribe(params => {
      this.codigoPqrs= params['codigo'];

      this.pacienteService.detallePQRS(parseInt(this.codigoPqrs)).subscribe({
        next: data =>{
          this.pqrs = data.respuesta;
        },
        error: error =>{
          this.alertaPaciente= {mensaje: error.error.respuesta, tipo: "danger"};
        }
      })
    });
  }

  onFileChange($event: Event) {

  }
}
