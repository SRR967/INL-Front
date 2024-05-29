import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrearPacienteDto } from '../modelo/dto/paciente/crear-paciente-dto';
import { MensajeDTO } from '../modelo/dto/MensajeDTO';
import { Observable } from 'rxjs';
import { LoginDto } from '../modelo/dto/loginDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL= "http://localhost:8080/api/auth"

  constructor(private http:HttpClient) { }

  public registrarPaciente(paciente:CrearPacienteDto):Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(`${this.authURL}/registrarse`, paciente);
  }

  public login(loginDTO:LoginDto):Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(`${this.authURL}/login`, loginDTO);
  }
}
