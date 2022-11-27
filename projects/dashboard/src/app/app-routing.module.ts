import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoteAppModule } from 'projects/remote_app/src/app/app.module';
import { AppComponent } from './app.component';


export const routes: Routes = [
  // {
  //   path: 'remote-application',
  //   loadChildren: () => import('remote/gg').then(resp=>resp.RemoteAppModule) 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
