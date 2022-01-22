import { createAction, props } from "@ngrx/store";

export const setWalletAddress = createAction(
  '[Wallet] Set Address',
  props<{
    address: String;
  }>()
)