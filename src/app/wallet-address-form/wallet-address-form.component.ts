import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer'
import * as walletActions from '../wallet/store/wallet.actions'

@Component({
  selector: 'app-wallet-address-form',
  templateUrl: './wallet-address-form.component.html',
  styleUrls: ['./wallet-address-form.component.css']
})
export class WalletAddressFormComponent implements OnInit {
  walletForm: FormGroup;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.walletForm = new FormGroup({
      'address': new FormControl(null)
    })
  }

  onSubmit() {
    console.log('form: ', this.walletForm);

    this.store.dispatch(walletActions.setWalletAddress({address: this.walletForm.value.address}))
  }
}
