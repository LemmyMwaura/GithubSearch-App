import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  search!:any
  gitIcon = faGithubAlt
  searchIcon = faSearch

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.route.navigate(['user'],{queryParams:{data:this.search}})
  }
}