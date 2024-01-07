import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrindService {
  name = []

  texts = []

  frindshipImgs = []

  constructor() { }

  addFriend(names: string, text: string, imgs: string) {
    this.name.push(names)
    this.texts.push(text)
    this.frindshipImgs.push(imgs)
  }
}
