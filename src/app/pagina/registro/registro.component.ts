import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { ItemListasDto } from 'src/app/modelo/dto/ItemListasDto';
import { CrearPacienteDto } from 'src/app/modelo/dto/paciente/crear-paciente-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import {ClienteDTO} from "../../modelo/dto/paciente/ClienteDTO";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']

})
export class RegistroComponent {

  crearPacienteDto: CrearPacienteDto
  ciudad:string[];
  eps:string[];
  tipoSangre:string[];
  archivos!:FileList;
  alerta!:Alerta

  clienteDTO: ClienteDTO
  cedula:string;
  nombre:string;
  apellido:string;
  telefono:string;
  correo:string;
  contrasena:string;


  constructor(private authService: AuthService,private clinicaService: ClinicaService, private imagenService: ImagenService){
    this.ciudad=[];
    this.cargarCiudades();
    this.eps=[];
    this.cargarEps();
    this.tipoSangre=[];
    this.cargarTipoSangre();
    this.crearPacienteDto = new CrearPacienteDto();

    this.clienteDTO = new ClienteDTO();
    this.cedula = "";
    this.nombre = "";
    this.apellido = "";
    this.telefono = "";
    this.correo = "";
    this.contrasena = "";
  }

  public registrar(){
    if (this.crearPacienteDto.foto.length != 0){
      this.authService.registrarPaciente(this.crearPacienteDto).subscribe({
      next: data => {
      this.alerta = {mensaje: data.respuesta, tipo: "danger"};
    },
      error: error => {
      this.alerta= {mensaje: error.error.respuesta, tipo: "danger"};
    }
    });
    }else{
      this.alerta = { mensaje: "Debe subir una imagen", tipo: "danger" };
    }
  }

  public sonIgualesContrasena():boolean{
    return this.crearPacienteDto.contrasena == this.crearPacienteDto.confirmarContrasena;
  }

  public sonIgualesEmail():boolean{
    return this.crearPacienteDto.email == this.crearPacienteDto.confirmarEmail;
  }

  private cargarCiudades(){
    this.clinicaService.listarCiudades().subscribe({
      next: data => {
        this.ciudad = data.respuesta;
      },
      error: error =>{
        this.alerta = {mensaje: error.error.respuesta, tipo: "danger"};
      }
    });
  }

  private cargarEps(){
    this.clinicaService.listarEPS().subscribe({
      next: data => {
        this.eps = data.respuesta;
      },
      error: error =>{
        console.log(error)
      }
    });
  }

  private cargarTipoSangre(){
    this.clinicaService.listarTipoSangre().subscribe({
      next: data => {
        this.tipoSangre = data.respuesta;
      },
      error: error =>{
        console.log(error)
      }
    });
  }

  public onFileChange(event:any){
    if (event.target.files.length > 0) {
      this.crearPacienteDto.foto = event.target.files[0].name;
      this.archivos = event.target.files;
    }
  }

  

  protected readonly ClienteDTO = ClienteDTO;
  protected readonly CrearPacienteDto = CrearPacienteDto;
}
