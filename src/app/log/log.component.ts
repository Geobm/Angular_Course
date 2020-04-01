import { Component, OnInit } from '@angular/core';
import { MessageService } from '../Services/message.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  messages : string[];
  constructor(private messageService : MessageService) { }

  ngOnInit() {
    this.messages = this.messageService.messages;
  }

}