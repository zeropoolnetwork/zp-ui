import { Injectable } from '@angular/core';
import { CircomeLoaderService } from './circome-loader.service';
import { ZeroPoolNetwork } from 'zeropool-lib';
import { filter } from 'rxjs/operators';
import { AccountService } from './account.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ZeropoolService {

  constructor(private circomeSvc: CircomeLoaderService, private accountService: AccountService) {

    const x = this.circomeSvc.isReady$.pipe(
      filter( (isReady) => isReady)
    );

    // this.accountService.ethereumPrivateKey$, zeropoolMnemonic$

    const zpNetwork = new ZeroPoolNetwork(
      environment.contractAddress,
      "0x896bdb64b1ca1458a61323416f5d4ba1a96278c894f83059b02642d094a21c63",
      "salute grocery glass box cloth pull wedding measure bright tilt shield over",
      this.circomeSvc.circomeTxJson,
      this.circomeSvc.proverKey,
      environment.ethereumRpc
    );
  }
}
