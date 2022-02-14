import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserrequestService } from 'src/app/services/userrequest-service.service';
import { User } from 'src/app/classes/user';
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faMapMarked, faEnvelope, faUser, faLink } from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() onSubmitForm:EventEmitter<string> = new EventEmitter
  search!:string

  user!:User
  twitterIcon = faTwitter
  githubIcon = faGithub
  locationIcon = faMapMarked
  companyIcon = faBuilding
  emailIcon = faEnvelope
  userIcon = faUser
  linkIcon = faLink
  iconcolor = '#64ffda'

  constructor(private requestService:UserrequestService, private route:ActivatedRoute) {
  }

  openBlogLink(link:string){
    window.open(link)
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any) => {
      this.search = params.data
      this.onSubmitForm.emit(this.search)
      this.requestService.userRequest(this.search)
      this.user = this.requestService.user
    })
  }
}