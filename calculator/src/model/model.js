class Model {
  constructor() {
    this.observers = {};
  }

  subscribe(observer, callback) {
    if (!this.observers[observer]) {
      this.observers[observer] = [];
    }
    this.observers[observer].push(callback);
  }

  unsubscribe(observer, callback) {
    if (this.observers[observer]) {
      const index = this.observers[observer].indexOf(callback);
      if (index !== -1) {
        this.observers[observer].splice(index, 1);
      }
    }
  }

  notify(observer, ...args) {
    this.observers[observer].forEach(callback => {
      callback(...args);
    });
  }
}

export default Model;
