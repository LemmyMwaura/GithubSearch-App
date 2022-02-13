import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../classes/repo';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  URL = 'https://api.github.com/users/';
  searchName = 'LemmyMwaura';
  repo!: Repo;
  repoArr: any[] = [];

  constructor(private http: HttpClient) {}

  repoRequest() {
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<any>(`${this.URL}${this.searchName}/repos`)
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
              console.log(this.repo)
            });
            resolve(response);
          },
          (error) => {
            this.repo.name = 'Noname';
            reject(error);
          }
        );
    });
    return promise;
  }
}