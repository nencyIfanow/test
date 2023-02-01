import { Component, OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productName:any="";
  constructor(private productname:MasterService){}
  ngOnInit(): void {
    this.productname.currentMessage.subscribe(message=>(
      this.productName = message
    ))
    
  }

  


}
