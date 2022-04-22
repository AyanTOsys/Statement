import { Component, OnInit } from '@angular/core';
import { DummyTransactionService } from '../dummy-transaction.service';
import { Transaction } from './Transaction';

@Component({
  selector: 'app-dummy-statement',
  templateUrl: './dummy-statement.component.html',
  styleUrls: ['./dummy-statement.component.css']
})
export class DummyStatementComponent implements OnInit {

  txnArray:Transaction[]=[];

  constructor(private txnServ:DummyTransactionService ) { }

  ngOnInit(): void {}

  findAllTransaction(){
    this.txnServ.findAllTransactionService().subscribe(
      (data:Transaction[])=>{
        this.txnArray=data;
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
