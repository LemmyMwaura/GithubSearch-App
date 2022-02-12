import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserrequestService {
  user!: 'LemmyMwaura';

  constructor(private http: HttpClient) {}

  userRequest() {
    interface Apiresponse {
      user: string;
      repose:string;
    }

    let promise = new Promise((resolve, reject) => {
      this.http
        .get(`https://api.github.com/users/${this.user}/repos?${environment.TOKEN}="+apikey`)
        .toPromise()
        .then(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        )
    });

  }
}
