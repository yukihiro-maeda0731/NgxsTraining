import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Item } from './item';

@Injectable({ providedIn: 'root' })
export class ItemService {
  private itemsUrl = 'api/items';
  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http
      .get<Item[]>(this.itemsUrl)
      .pipe(catchError(this.handleError<Item[]>('getItems', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: リモート上のロギング基盤にエラーを送信する
      console.error(error); // かわりにconsoleに出力

      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }
}
