import { Injectable } from "@angular/core";


@Injectable()
export class MessageService {
  messages: string[] = [];
  constructor() {}

  add(message: string) {
    var date = new Date();
    var time = date.getHours() + ':' + date.getMinutes()+ ':'+ date.getSeconds();
    this.messages.push(`${time} - ${message}`);
  }

  clear(){
    this.messages = [];
  }
}
