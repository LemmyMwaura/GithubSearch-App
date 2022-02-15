import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../classes/repo';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class RepoService {
  URL = 'https://api.github.com/users/';
  repo!: Repo;
  repoArr: any[] = [];

  constructor(private http: HttpClient, private router:Router) {}

  repoRequest(searchName:string) {
    if (searchName == null || undefined) return
    this.repoArr = []
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<any>(`${this.URL}${searchName}/repos?access_token'=${environment.TOKEN}`)
        .toPromise()
        .then(
          (response) => {
            response!.forEach((res: any) => {
              this.repo = new Repo(
                res.name,
                res.description,
                res.html_url,
                res.open_issues_count,
                res.forks_count,
                res.watchers_count,
                res.stargazers_count,
                res.visibility,
                res.created_at,
                res.language,
                res.homepage,
              );
              this.repoArr.push(this.repo);
            });
            resolve(response);
          },
          (error) => {
            error.status = 404 ? this.router.navigate(["/**"]) : console.error(error);
            reject(error);
          }
        );
    });
    return promise;
  }
}