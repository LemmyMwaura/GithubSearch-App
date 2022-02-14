import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserrequestService } from 'src/app/services/userrequest-service.service';
import { RepoService } from 'src/app/services/repo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  search!:any
  @Output() onSubmitForm:EventEmitter<string> = new EventEmitter

  constructor(private requestService:UserrequestService, private repoService:RepoService, private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.search)
    this.route.navigate(['user'],{queryParams:{data:this.search}})
  }
}