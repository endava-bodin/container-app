import { Subject } from 'rxjs';

class CommunicationService {
  channels = {};

  createChannel(channelName) {
    if (!this.channels[channelName]) {
      this.channels[channelName] = new Subject();
    }
    return this.channels[channelName];
  }

  publish(payloadAction) {
    const channel = this.channels[payloadAction.channel];
    if (channel) {
      channel.next(payloadAction.payload);
    }
  }

  subscribeTo(channelName, callback) {
    const channel = this.channels[channelName];
    if (channel) {
      return channel.subscribe(callback);
    }
    return null;
  }
}

const communicationService = new CommunicationService();
export default communicationService;
