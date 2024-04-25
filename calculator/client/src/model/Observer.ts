import Event from 'model/events';
import Model from 'model/Model';

type EventHandler = (modelContext: Model) => void;

type Events = Partial<Record<Event, EventHandler[]>>;

class Observer {
  private events: Events;
  constructor() {
    this.events = {};
  }
  subscribe(eventType: Event, callback: EventHandler) {
    if (!this.events[eventType]) {
      this.events[eventType] = [];
    }
    this.events[eventType]!.push(callback);
  }

  unsubscribe(eventType: Event, callback: EventHandler) {
    if (this.events[eventType]) {
      const index = this.events[eventType]!.indexOf(callback);
      if (index !== -1) {
        this.events[eventType]!.splice(index, 1);
      }
    }
  }

  notify(eventType: Event, modelContext: Model) {
    this.events[eventType]!.forEach(callback => {
      callback(modelContext);
    });
  }
}

export default Observer;
