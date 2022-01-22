import { ActionReducerMap } from '@ngrx/store'
import * as fromWallet from '../wallet/store/wallet.reducer'

export interface AppState {
  wallet: fromWallet.State
}

export const appReducer: ActionReducerMap<AppState> = {
  wallet: fromWallet.walletReducer
}