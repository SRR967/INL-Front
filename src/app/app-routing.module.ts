import { NgModule } from '@angular/core';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { RouterModule, Routes } from '@angular/router';
import { PacienteInicioComponent } from './pagina/paciente/paciente-inicio/paciente-inicio.component';
import { CrearPQRSComponent } from './pagina/paciente/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/paciente/detalle-pqrs/detalle-pqrs.component';
import { LoginGuard } from './guards/permiso.service';
import { RolesGuard } from './guards/roles.service';
import { ListarPQRSComponent } from './pagina/paciente/listar-pqrs/listar-pqrs.component';
import { ListarCitasComponent } from './pagina/paciente/listar-citas/listar-citas.component';
import { DetalleCitaComponent } from './pagina/paciente/detalle-cita/detalle-cita.component';
import { DetalleConsultaComponent } from './pagina/paciente/detalle-consulta/detalle-consulta.component';
import { ListarConsultasComponent } from './pagina/paciente/listar-consultas/listar-consultas.component';
import { ListarCitasMedicoComponent } from './pagina/medico/listar-citas/listar-citas.component';
import { DetalleCitaMedicoComponent } from './pagina/medico/detalle-cita/detalle-cita.component';
import { RadicarConsultaComponent } from './pagina/medico/radicar-consulta/radicar-consulta.component';
import { CitasAtendidasComponent } from './pagina/medico/citas-atendidas/citas-atendidas.component';
import { VerDiasLibresComponent } from './pagina/medico/ver-dias-libres/ver-dias-libres.component';

const routes: Routes = [
  {path: '', redirectTo:'/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "pacienteInicio", loadChildren: () => import( './pagina/paciente/paciente.module' ).then( (m) => m.PacienteModule),
     data:{expectedRole:["paciente"]}},
  {path: "medicoInicio", loadChildren:()=> import('./pagina/medico/medico.module').then( (m) => m.MedicoModule),
     data:{expectedRole:["medico"]}},
  {path: "crearPqrs", component: CrearPQRSComponent},
  {path: "detallePqrs/:codigo", component: DetallePqrsComponent,   data: {
    expectedRole: ["paciente"]
  } },
  {path: "listarPqrs", component: ListarPQRSComponent,   data: {
    expectedRole: ["paciente"]
  } },
  {path: "listarCitas", component: ListarCitasComponent,   data: {
    expectedRole: ["paciente"]
  } },

  {path: "detalleCita/:codigo", component: DetalleCitaComponent,   data: {
    expectedRole: ["paciente"]
  } },

  {path: "listarConsultas", component: ListarConsultasComponent,   data: {
    expectedRole: ["paciente"]
  } },

  {path: "detalleConsulta/:codigo", component: DetalleConsultaComponent,   data: {
    expectedRole: ["paciente"]
  } },

  {path: "listarCitasMedico", component: ListarCitasMedicoComponent,   data: {
    expectedRole: ["medico"]
  } },

  {path: "detalleCitaMedico/:codigo", component: DetalleCitaMedicoComponent,   data: {
    expectedRole: ["medico"]
  } },

  {path: "atender/:codigo", component: RadicarConsultaComponent,   data: {
    expectedRole: ["medico"]
  } },

  {path: "historialConsultas/:codigo", component: CitasAtendidasComponent,   data: {
    expectedRole: ["medico"]
  } },

  {path: "listarDiaMedico/:codigo", component: VerDiasLibresComponent,   data: {
    expectedRole: ["medico"]
  } },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
