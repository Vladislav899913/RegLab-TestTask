import { IdentifierModel } from './identifier.model';
import { UserModel } from './user.model';

export class MessageModel extends IdentifierModel {
  fromUser: UserModel;
  channelId: number;
  content: string;

  constructor() {
    super();
    this.fromUser = new UserModel();
    this.channelId = 0;
    this.content = '';
  }
}
