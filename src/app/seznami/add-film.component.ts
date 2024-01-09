import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-add-film-modal',
    templateUrl: './add-film.component.html'
})
export class AddFilmModalComponent {
    naslov: string;
    dolzina: number;
    leto_izida: number;
    id_zanr: number;

    @Output() closeModal = new EventEmitter<void>();
    @Output() submitFilm = new EventEmitter<Film>();

    onSubmit() {
        const film: Film = { naslov: this.naslov, dolzina: this.dolzina, leto_izida: this.leto_izida, id_zanr: this.id_zanr };
        this.submitFilm.emit(film);
        this.closeModal.emit();
    }
}
