import { Component, OnInit } from '@angular/core';
import { ZeroPoolNetwork } from 'zeropool-lib';
import { CircomeLoaderService } from '../circome-loader.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  balance = 1;
  history = [
    {type: 'transfer', amount: 10},
    {type: 'deposit', amount: 10},
    {type: 'withdraw', amount: 10},
  ];
  address = '0xSOMETHIONG';

  constructor() {
  }

  ngOnInit(): void {

  }

  deposit() {

  }

  transfer() {

  }

  withdraw() {

  }
}
