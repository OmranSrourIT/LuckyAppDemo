import { Component, OnInit , Input ,Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserServicesService} from '../../Services/user-services.service' ;

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  CountDestination :any;
  constructor(private router : Router ,private Userservices :UserServicesService) { }
public ResultDestnation : any;
public SearcValue : any;
  ngOnInit(): void {
    //To get All destinations from run the page
    this.GetAllDestinations();
  }

   //To Search on each  destinations
  SearchEnginparent(value:any)
  {
  
      this.Userservices.GetDestinationService(value).subscribe((Result:any)  =>{
  
        this.ResultDestnation  = Result.destinations; 
     
        });  
  }
 
 
 //To get All destinations
  GetAllDestinations()
  {
    this.Userservices.GetDestinationService('').subscribe((Result:any)  =>{
      this.CountDestination = Result.destinations.length;
    this.ResultDestnation  = Result.destinations; 
 
    }); 
  }
 //To Transfer on  destinations Details
  GetDestinationDetails(id:any)
  {  
      this.router.navigate(['/resultpage',id]); 
  }

}
