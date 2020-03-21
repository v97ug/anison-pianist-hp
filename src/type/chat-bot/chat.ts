import {MessageType} from '@/type/chat-bot/message-type';

export interface Chat {
  messageType: MessageType,
  isBot: boolean,
  message: string,
  time: string,
  radio?: any;
}
