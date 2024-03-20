import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


export class Message {
  constructor(public author:string, public content:string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  conversation = new Subject<Message[]>();
  messageMap: any = {
    "hi": "hello",
    "Hi": "Hello",
    "who are you?": "my name is ChatAi",
    "Who are you": "My name is ChaAi",
    "I love fatima": "the love is nice feeling",
    "what is angular" : "angular is a framework you can use it",
    "What is angular": "Angular is a framework you can use it",
    "default": "I can't understand. can you please repeat other wise contact with mehsin housseiny"
  }
  getBotAnswer(msg:any){
    const userMessage =new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(() => {
      this.conversation.next([botMessage]);
    },1500);
  }
  getBotMessage(question:string) {
   let answer = this.messageMap[question];
   return answer || this.messageMap['default']
  }
  }

