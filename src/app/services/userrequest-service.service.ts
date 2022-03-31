import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserrequestService {
  URL = `https://api.github.com/users/`;
  user!: User;

  constructor(private http: HttpClient, private router: Router) {
    this.user = new User('', '', '', 0, 0, '', '', '', '', '', '');
  }

  userRequest(searchName: string) {
    if (searchName == null || undefined) return;
    let promise = new Promise((resolve, reject) => {
      firstValueFrom(
        this.http.get<any>(
          `${this.URL}${searchName}?access_token'=${environment.TOKEN}`
        )
      ).then(
        (response) => {
          response = response!;
          this.user = new User(
            (this.user.image = response.avatar_url),
            (this.user.name = response.name),
            (this.user.bio = response.bio),
            (this.user.followers = response.followers),
            (this.user.following = response.following),
            (this.user.company = response.company),
            (this.user.blog = response.blog),
            (this.user.twitter = response.twitter_username),
            (this.user.email = response.email),
            (this.user.accountlink = response.html_url),
            (this.user.location = response.location)
          );
          resolve(response);
        },
        (error) => {
          error.status = 404 ? this.router.navigate(['/**']) : console.error(error);
          reject(error);
        }
      );
    });
    return promise;
  }
}