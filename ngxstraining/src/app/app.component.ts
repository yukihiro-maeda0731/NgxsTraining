import { Component } from '@angular/core';
import { DualListComponent } from 'angular-dual-listbox';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  format = {
    add: 'todo',
    remove: 'done',
    all: '全選択',
    none: '全解除',
    direction: DualListComponent.LTR,
    draggable: true,
    locale: 'jp',
  };
  source = ['掃除', '洗濯', '勉強'];
  destination = [];
}
