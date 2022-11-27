import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'remote-application',
    loadChildren: () => import('remote/gg').then(m => m.RemoteAppModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
