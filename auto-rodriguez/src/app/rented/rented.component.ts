import { Component, OnInit,Input } from '@angular/core';
import { Drive } from '../drive.model';

@Component({
  selector: 'app-rented',
  templateUrl: './rented.component.html',
  styleUrls: ['./rented.component.css']
})
export class RentedComponent implements OnInit {
  @Input() drive : Drive;
  constructor() { }

  ngOnInit(): void {
  }

}
