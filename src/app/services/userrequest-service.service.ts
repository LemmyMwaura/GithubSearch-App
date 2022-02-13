import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root',
})
export class UserrequestService {
  URL ='https://api.github.com/users/'
  searchName = 'LemmyMwaura'
  user!: User;

  constructor(private http:HttpClient) {
    this.user = new User("", "","", 0, 0,"","","","","","")
  }

  userRequest() {
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<any>(`${this.URL}${this.searchName}`)
        .toPromise()
        .then(
          (response) => {
            response = response!
            this.user = new User(
              this.user.image = response.avatar_url,
              this.user.name = response.name,
              this.user.bio = response.bio,
              this.user.followers = response.followers,
              this.user.following = response.following,
              this.user.company = response.company,
              this.user.blog = response.blog,
              this.user.twitter = response.twitter_username,
              this.user.email = response.email,
              this.user.accountlink = response.html_url,
              this.user.location = response.location,
            )
            resolve(response);
          },
          (error) => {
            console.log('error')
            reject(error);
          }
        )
    });
    return promise
  }
}