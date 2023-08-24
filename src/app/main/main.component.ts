import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomer } from '../shared/model/customer.model';
import { Customer2Service } from '../shared/services/customer-2.service';
import { DataService } from '../shared/services/data.service';
import { DataService1 } from '../shared/services/data.service copy';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  customer2: any;
  customer1: any
  addNewData: any
  customerList: any;
  customer2List: any;
  cus1: any;
  cus2: any;
  constructor(
    private route: Router,
    private customer2Service: Customer2Service,
    private dataService: DataService,
    private dataService1: DataService1) { }
    isProcessing: boolean = false;
  addNew() {
   
    this.dataService1.notifyObservable$.subscribe((res1: any) => {
      this.cus1 = res1.data
      this.dataService.notifyObservable$.subscribe((res2: any) => {
        this.cus2 = res2.data
        if (!this.isProcessing) { 
          this.isProcessing = true; 
        this.checkCounter()
        console.log(this.isProcessing)

        }
      })
    })
 
  }
  checkCounter() {
    console.log('addNew')
    console.log(this.cus1,this.cus2,this.cus1 < this.cus2)
    if (this.cus1 < this.cus2) {
      this.customer2Service.create(this.getFormdata()).subscribe(() => {
        console.log('counter1')
      });
      this.route.navigate(['/customer1', this.addNewData]);

    } else {
      this.customer2Service.create1(this.getFormdata()).subscribe(() => {
        console.log('counter2')
      });
      this.route.navigate(['/customer2', this.addNewData]);
      
    }

  }
  getFormdata(): ICustomer {
    return {
      id: null,
      description: this.addNewData
    }
  };
  ngOnInit(): void {
  }
}
