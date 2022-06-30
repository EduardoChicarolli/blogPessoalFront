import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// SE NAO IMPORTAR AUTOMANTICO TEM Q SER MANUAL

const routes: Routes = [

  // {path: '', redirectTo: 'entrar', pathMatch: 'full'} //pagina inicial
  
  // {path:'caddastrar', component: CadastrarComponent}, //apaga um pouco e ve se aparece para importar
  // {path:'entrar', component: EntrarComponent};
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
