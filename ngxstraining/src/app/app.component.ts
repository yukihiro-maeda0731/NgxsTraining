import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { DualListComponent } from 'angular-dual-listbox';
import { Observable } from 'rxjs';
import { Item } from './item';
import { ItemAction } from './item.actions';
import { ItemState } from './item.state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Select(ItemState.items) items$: Observable<Item[]> | undefined;
  // todo:初期化時に取得
  // section = ['', '朝', '昼', '晩'];

  format = {
    add: 'todo',
    remove: 'done',
    all: '全選択',
    none: '全解除',
    direction: DualListComponent.LTR,
    draggable: true,
    locale: 'jp',
  };
  // todo:動的
  source = ['風呂', '歯磨き', '掃除', '洗濯', '勉強', '就寝'];
  destination = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    // todo:コンボボックス値取得アクション
    this.getItems();
  }

  onSubmit(): void {
    console.log('ボタン押下');
  }

  getItems(): void {
    this.store.dispatch(new ItemAction.GetAll());
  }
}
