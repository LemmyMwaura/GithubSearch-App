import { Component, OnInit } from '@angular/core';
import { UserrequestService } from 'src/app/services/userrequest-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public userservice:UserrequestService) { }

  ngOnInit(): void {
  }

}
