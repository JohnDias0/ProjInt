import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { NgModule } from '@angular/core';
import { LiturgyComponent } from './shared/features/Liturgy/components/liturgy/liturgy.component';
import { IntentionsComponent } from './shared/features/Intentions/components/intentions/intentions.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'liturgia', component: LiturgyComponent },
    {path: 'intencoes', component: IntentionsComponent},  
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutesModule{}


