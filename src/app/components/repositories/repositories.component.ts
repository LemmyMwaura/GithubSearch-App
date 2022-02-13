import { Component, OnInit } from '@angular/core';
import { RepoService } from 'src/app/services/repo.service';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repos:any
  githubIcon = faGithub
  forkIcon = faCodeBranch
  starIcon = faStar

  constructor(private repoService:RepoService ) { }

  repoLink(link:string){
    window.open(link)
  }

  liveLink(link:string){
    window.open(link)
  }

  ngOnInit(): void {
    this.repoService.repoRequest()
    this.repos = this.repoService.repoArr
  }
}
