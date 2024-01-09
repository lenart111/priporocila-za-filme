import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

import { switchMap } from 'rxjs/operators';
import { FilmiService } from './services/FilmiService';

@Component({
    moduleId: module.id,
    selector: 'film',
    templateUrl: 'film.component.html'
})
export class FilmComponent implements OnInit {
    film: Film;
    ocene: Ocena[];

    constructor(private filmService: FilmiService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    ngOnInit(): void {
        debugger;
       this.route.params.pipe(
            switchMap((params: Params) => this.filmService.pridobiFilm(+params['filmi_id'])))
            .subscribe(film => this.film = film);
        this.route.params.pipe(
            switchMap((params: Params) => this.filmService.vrniOcene(+params['filmi_id'])))
            .subscribe(ocene => this.ocene = ocene);
    }

     dodajOceno(ocena: number, komentar: string): void {
        this.router.navigate(['seznami/' + this.film + '/dodaj']);
     }

    nazaj(): void {
        this.router.navigate(['filmi']);
    }
}
