import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private _http: HttpClient
  ) { }

  getUserById(id: number) {
    let url = `${environment.rest.getUserById}${id}`;
    return new Promise((resolve, reject) => {
      this._http.get(url).subscribe((data) => { resolve(data) }, (err) => { reject(err) });
    });
  }


}
