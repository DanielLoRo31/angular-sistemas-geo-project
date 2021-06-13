import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

export interface IMenuModel {
  inSession: boolean;
}

export class SetSessionAction {
  static readonly type: string = '[Menu] set session action';
  constructor(public isIn: boolean) {}
}

@State<IMenuModel>({
  name: 'menuState',
  defaults: {
    inSession: false,
  },
})
@Injectable()
export class MenuState {
  constructor() {}

  @Selector()
  static showMenu(state: IMenuModel) {
    return state.inSession;
  }

  @Action(SetSessionAction)
  setSessionAction(ctx: StateContext<IMenuModel>, action: SetSessionAction) {
    ctx.patchState({ inSession: action.isIn });
  }
}
