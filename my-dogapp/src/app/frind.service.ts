import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrindService {
  name = ['Dario']

  texts = ['3 Jahre']

  frindshipImgs = [
    'assets/img/dog/dog6.jpg']

  constructor() { }

  addFriend(names:string, text:string, imgs:string) {
    this.name.push(names)
    this.texts.push(text)
    this.frindshipImgs.push(imgs)

  }
}
