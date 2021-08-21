import { Component, OnInit ,Input ,Output ,  EventEmitter } from '@angular/core';
import {UserServicesService} from '../../Services/user-services.service' ;
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-headerpage',
  templateUrl: './headerpage.component.html',
  styleUrls: ['./headerpage.component.css']
})
export class HeaderpageComponent implements OnInit {
  public SearcValue : any;
  public ResultDestnation : any;
  @Output() newItemEvent = new EventEmitter<string>();
  @Input() item = '';
  constructor(private Userservices :UserServicesService,private toastr: ToastrService) { }
  ngOnInit(): void {
  }
//Search from Parent To Child
  SearchEngin(value:any)
  {
  value ?  this.newItemEvent.emit(value):  this.toastr.warning(' Please enter a Country or city', 'Warning!');
  
  }

}
