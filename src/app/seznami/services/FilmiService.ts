import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable()
export class FilmiService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'http://localhost:8080/v1/';

    constructor(private http: HttpClient) {
    }

    vrniFilme(): Observable<Film[]> {
        return this.http.get<Film[]>(this.url + 'filmi/vrniFilme')
                        .pipe(catchError(this.handleError));
    }

    pridobiFilm(id: number): Observable<Film> {
        const url = `${this.url}filmi/${id}`;
        return this.http.get<Film>(url)
                        .pipe(catchError(this.handleError));
    }
    
    odstraniFilm(id: number): Observable<number> {
        const url = `${this.url}filmi/deleteFilm?id=${id}`;
        return this.http.delete<number>(url, {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    dodajFilm(film: Film): Observable<Film> {
        return this.http.post<Film>(this.url + 'filmi/dodajFilm', JSON.stringify(film), {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }
    vrniOcene(id: number): Observable<Ocena[]> {
        const url = `${this.url}ocena/vrniOcene/?filter=film.id_film:EQ:${id}`;
        return this.http.get<Ocena[]>(url)
                        .pipe(catchError(this.handleError));
    }
    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}

