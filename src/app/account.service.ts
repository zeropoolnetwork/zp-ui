import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IAccount {
  // Hex encoded start private key '0x' prefix is optional
  readonly ethereumPrivateKey: string;
  readonly ethereumAddress: string;
  //
  readonly zeropoolMnemonic: string;
  readonly zeropoolAddress: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  account$: Observable<IAccount>;

  constructor() {

    const account: IAccount = {
      ethereumPrivateKey: '0x896bdb64b1ca1458a61323416f5d4ba1a96278c894f83059b02642d094a21c63',
      ethereumAddress: '',
      //
      zeropoolMnemonic: 'salute grocery glass box cloth pull wedding measure bright tilt shield over',
      zeropoolAddress: ''
    };

    this.account$ = of(account);
  }
}
