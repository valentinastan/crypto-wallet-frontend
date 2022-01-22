import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap } from "rxjs";
import * as formApp from '../../store/app.reducer'
import * as walletActions from './wallet.actions'

@Injectable()
export class WalletEffects {
  getTransactionsByWallet$ = createEffect(() => 
    this.actions$.pipe(
      ofType(walletActions.setWalletAddress),
      switchMap((walletAddress) => {
        console.log('o sa fac request cu adresa: ', walletAddress.address)
        return this.http
        .get(`https://bscscan.com/address/${walletAddress.address}`
        ).pipe(
          map((response) => {
            console.log('response', response)
          })
        )
      })
    ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private store: Store<formApp.AppState>,
    private http: HttpClient
  ) {}
}