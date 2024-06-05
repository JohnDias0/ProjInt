import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { LiturgiaComponent } from './components/liturgia/liturgia.component';
import { IntencoesComponent } from './components/intencoes/intencoes.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'liturgia', component: LiturgiaComponent },
    {path: 'intencoes', component: IntencoesComponent},  
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutesModule{}


