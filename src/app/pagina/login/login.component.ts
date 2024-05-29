import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { LoginDto } from 'src/app/modelo/dto/loginDto';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginDto: LoginDto;
  alerta!: Alerta

  constructor(private authService: AuthService, private tokenService: TokenService){
    this.loginDto = new LoginDto;
  }

  ingresar(){
    console.log(this.loginDto)
  }

  public login(){
    this.authService.login(this.loginDto).subscribe({
      next: data => {
        this.tokenService.login(data.respuesta.token);
      },
      error: error =>{
        this.alerta = {mensaje: error.error.respuesta, tipo: "danger"};
      }
    });
  }


}
