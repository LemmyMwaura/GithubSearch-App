import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserrequestService } from 'src/app/services/userrequest-service.service';
import { RepoService } from 'src/app/services/repo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  search!:any
  @Output() onSubmitForm:EventEmitter<string> = new EventEmitter

  constructor(private requestService:UserrequestService, private repoService:RepoService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.search)
    this.onSubmitForm.emit(this.search)
  }
}