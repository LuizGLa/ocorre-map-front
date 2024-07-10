import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'mapa',
    component: HomeComponent,
    resolve: { auth: AuthGuard }
  },
  {
    path: 'ocorrencias',
    loadChildren: () => import('./pages/ocorrencias/ocorrencia.module').then(m => m.OcorrenciaModule),
    resolve: { auth: AuthGuard }
  },
  {
    path: 'tipo-ocorrencias',
    loadChildren: () => import('./pages/tipo-ocorrencias/tipo-ocorrencia.module').then(m => m.TipoOcorrenciaModule),
    resolve: { auth: AuthGuard }
  },
  {
    path: 'ruas',
    loadChildren: () => import('./pages/ruas/rua.module').then(m => m.RuaModule),
    resolve: { auth: AuthGuard }
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/usuarios/usuario.module').then(m => m.UsuarioModule),
    resolve: { auth: AuthGuard }
  },
  {
    path: '',
    redirectTo: '/mapa',
    pathMatch: 'full'
  }
];
