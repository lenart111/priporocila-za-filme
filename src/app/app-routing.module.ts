import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FilmiComponent} from './seznami/filmi.component';
import {FilmComponent} from './seznami/film.component';

const routes: Routes = [
    {path: '', redirectTo: '/filmi', pathMatch: 'full'},
    {path: 'filmi', component: FilmiComponent},
    {path: 'filmi/:filmi_id', component: FilmComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
