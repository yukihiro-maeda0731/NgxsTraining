import { Component, OnInit } from '@angular/core';
import { DualListComponent } from 'angular-dual-listbox';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  section = ['', '朝', '昼', '晩'];

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

  constructor() {}

  ngOnInit(): void {
    // todo:コンボボックス値取得アクション
  }

  onSubmit(): void {
    console.log('ボタン押下');
  }
}
