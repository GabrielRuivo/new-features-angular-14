import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: "standalone", pathMatch: "full" },
  { path: '**', redirectTo: "standalone", pathMatch: "full" },

  {
    path: 'standalone', 
    loadComponent: () => import('./standalone/standalone.component').then(m => m.StandaloneComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
