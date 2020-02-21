import { Component } from '@angular/core';
import { CircomeLoaderService } from './circome-loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zp-ui';

  hasError$: Observable<boolean>;
  circomeResourcesLoaded$: Observable<boolean>;

  constructor(private circomeSvc: CircomeLoaderService) {
    this.hasError$ = this.circomeSvc.hasError$;
    this.circomeResourcesLoaded$ = this.circomeSvc.isReady$;
  }

  connectWallet() {
    // TODO: use connect widget
  }
}
