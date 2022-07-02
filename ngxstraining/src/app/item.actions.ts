import { Item } from './item';

export namespace ItemAction {
  export class Add {
    static readonly type = '[Item] Add';
    constructor(public item: Item) {}
  }

  export class Delete {
    static readonly type = '[Item] Delete';
    constructor(public item: Item | number) {}
  }

  export class Update {
    static readonly type = '[Item] Update';
    constructor(public item: Item) {}
  }

  export class Get {
    static readonly type = '[Item] Get';
    constructor(public id: number) {}
  }

  export class GetAll {
    static readonly type = '[Item] GetAll';
  }
}
