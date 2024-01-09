interface Ocena {
    id_ocena?: number;
    uporabnik: Uporabnik;
    film: Film;
    ocena: number;
    komentar: string;
}