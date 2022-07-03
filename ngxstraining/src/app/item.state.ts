import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Item } from './item';
import { ItemAction } from './item.actions';
import { tap, finalize } from 'rxjs/operators';
import { ItemService } from './item.service';

export class ItemStateModel {
  items: Item[] | undefined;
}

@State<ItemStateModel>({
  name: 'items',
  defaults: {
    items: [],
  },
})
@Injectable()
export class ItemState {
  constructor(private itemService: ItemService) {}

  @Action(ItemAction.GetAll)
  getItems(ctx: StateContext<ItemStateModel>) {
    return this.itemService.getItems().pipe(
      tap((data) => {
        ctx.patchState({ items: data });
      })
    );
  }

  @Selector()
  static items(state: ItemStateModel) {
    return state.items;
  }
}
