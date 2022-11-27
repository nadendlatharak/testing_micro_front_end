import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { loadRemoteModule } from '@angular-architects/module-federation';
// import {
//   WebComponentWrapper,
//   WebComponentWrapperOptions,
// } from '@angular-architects/module-federation-tools';

// const URL = 'http://localhost:3000/remoteEntry.js';

export const routes: Routes = [
  // {
  //   path: 'remote-application',
  //   // loadChildren: () => import('remote/Module').then(m => m.RemoteAppModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
