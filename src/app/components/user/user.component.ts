import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserrequestService } from 'src/app/services/userrequest-service.service';
import { User } from 'src/app/classes/user';
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faMapPin, faEnvelope, faUser, faLink } from "@fortawesome/free-solid-svg-icons";

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
  locationIcon = faMapPin
  companyIcon = faBuilding
  emailIcon = faEnvelope
  userIcon = faUser
  linkIcon = faLink
  iconcolor = '#64ffda'

  constructor(private requestService:UserrequestService) {
  }

  openBlogLink(link:string){
    window.open(link)
  }

  ngOnInit(): void {
    this.requestService.userRequest(this.search)
    this.user = this.requestService.user
  }

  newUsername(search:string){
    this.search = search
    this.onSubmitForm.emit(this.search)
    this.requestService.userRequest(search)
    this.user = this.requestService.user
    console.log(this.user)
  }
}