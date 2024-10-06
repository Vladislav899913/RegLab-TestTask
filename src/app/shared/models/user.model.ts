import { IdentifierModel } from './identifier.model';

export class UserModel extends IdentifierModel {
  name: string;
  isOnline: boolean;

  constructor() {
    super();
    this.name = '';
    this.isOnline = false;
  }
}
