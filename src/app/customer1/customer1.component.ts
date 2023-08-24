import { Component, Input, OnInit } from '@angular/core';
import { Customer2Service } from '../shared/services/customer-2.service';
import { HttpResponse } from '@angular/common/http';
import { ICustomer } from '../shared/model/customer.model';
import { DataService } from '../shared/services/data.service';
import { DataService1 } from '../shared/services/data.service copy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer1',
  templateUrl: './customer1.component.html',
  styleUrls: ['./customer1.component.css']
})
export class Customer1Component implements OnInit {
  @Input() customer1: any;
  customerList: any;
  constructor(private customer2Service: Customer2Service,
     private dataService1: DataService1,
     private route: Router,
    ) { }
  getCustomer() {

    this.customer2Service.query().subscribe((res: HttpResponse<ICustomer[]>) => {
      this.customerList = res.body
      console.log(this.customerList)
      this.customer1 = res.body
      console.log(this.customer1.length)
        this.dataService1.notifyOther({  data: this.customer1.length });
     })

  }
  ngOnInit(): void {
    this.getCustomer()
  }
  getFormdata(data:any): ICustomer {
    return {
      id: null,
      description: data
    }
  };
  completeTask(id: number) {
    this.customer2Service.delete(id).subscribe(() => {
      console.log('deleted')
      this.getCustomer()
    });
  }
  
  Update(customer: any) {
    this.customer2Service.update(customer).subscribe(() => {
      alert('updated')
    });
  }
  backButton(){
    this.route.navigate(['']);

  }
}
