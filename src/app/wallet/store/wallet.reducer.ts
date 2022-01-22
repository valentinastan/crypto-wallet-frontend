import { Action, createReducer, on } from "@ngrx/store";
import * as walletActions from './wallet.actions'

export interface State {
  walletAddress: String;
}

const initialState: State = {
  walletAddress: ''
}

const _walletReducer = createReducer(
  initialState,
  on(walletActions.setWalletAddress, (state, action) => ({
    ...state,
    walletAddress: action.address,
  }))
);

export function walletReducer(state: State, action: Action) {
  console.log('action:', action)
  return _walletReducer(state, action);
}