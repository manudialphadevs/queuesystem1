import { Component, Input, OnInit } from '@angular/core';
import { Customer2Service } from '../shared/services/customer-2.service';
import { DataService } from '../shared/services/data.service';
import { ICustomer } from '../shared/model/customer.model';
import { HttpResponse } from '@angular/common/http';
import { DataService1 } from '../shared/services/data.service copy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer2',
  templateUrl: './customer2.component.html',
  styleUrls: ['./customer2.component.css']
})
export class Customer2Component implements OnInit {
  @Input () customer2:any
  customer2List: any;
  count=1;

constructor(private route: Router,private customer2Service: Customer2Service,private dataService:DataService){}
  ngOnInit(): void {
    this.getCustomer()
  }
  getCustomer () {
    this.customer2Service.query1().subscribe((res: HttpResponse<ICustomer[]>) => {
      this.customer2List = res.body
      console.log(this.customer2List)
      this.customer2 = res.body
      console.log(this.customer2.length)
        this.dataService.notifyOther({  data: this.customer2.length });
    })
  }
  getFormdata(data:any): ICustomer {
    return {
      id: null,
      description: data
    }
  };
  completeTask(id: number) {
    this.customer2Service.delete1(id).subscribe(() => {
      console.log('done')
      this.getCustomer()
    });
  }
  
  Update(customer: any) {
    this.customer2Service.update1(customer).subscribe(() => {
      alert('updated')
    });
  }
  backButton(){
    this.route.navigate(['']);

  }
}
