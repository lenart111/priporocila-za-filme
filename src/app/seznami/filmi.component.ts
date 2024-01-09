import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { FilmiService } from './services/FilmiService';

@Component({
    moduleId: module.id,
    selector: 'vsi-filmi',
    templateUrl: 'filmi.component.html'
})
export class FilmiComponent implements OnInit {
    filmi: Film[];
    film: Film;
    showModal: boolean = false;
    constructor(private filmiService: FilmiService,
                private router: Router) {   
    }

    ngOnInit(): void {
        this.getSeznami();
    }

    getSeznami(): void {
        this.filmiService
        .vrniFilme()
        .subscribe(filmi => this.filmi = filmi);
    }
    naPodrobnosti(film: Film): void {
        debugger;
        this.film = film;
        this.router.navigate(['/filmi/', +  this.film.id_film]);
    }

    delete(film: Film): void {
        this.filmiService
            .odstraniFilm(film.id_film)
            .subscribe(filmId => this.filmi = this.filmi.filter(f => f.id_film !== filmId));
    }
    openModal(): void {
        this.showModal = true;
    }

    closeModal(): void {
        this.showModal = false;
    }

    addFilm(film: Film): void {
        film.id_film = 0;
        this.filmiService.dodajFilm(film)
            .subscribe(newFilm => {
                this.filmi.push(newFilm);
                this.closeModal();
            });
    }
}
