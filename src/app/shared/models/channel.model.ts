import { IdentifierModel } from './identifier.model';

export class ChannelModel extends IdentifierModel {
  name: string;

  constructor() {
    super();
    this.name = '';
  }
}
