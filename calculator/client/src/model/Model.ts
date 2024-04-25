import { Config } from 'api/trpc/infered.types';
import Event from './events';
import Observer from './Observer';

class Model extends Observer {
  private input: string;
  private result: string;
  private error: string;

  private settingsChanges: Record<string, string>;

  constructor(private config: Config) {
    super();
    this.input = '';
    this.result = '';
    this.error = '';
    this.settingsChanges = {};
  }

  calculateInput(inputExpression: string): void {
    this.input = inputExpression;
    this.notify(Event.CALCULATE, this);
  }

  setInput(inputExpression: string): void {
    this.input = inputExpression;
    this.notify(Event.UPDATE_INPUT, this);
  }

  setResult(updatedResult: string): void {
    this.result = updatedResult;
    this.notify(Event.DISPLAY_RESULT, this);
  }

  setError(errorMessage: string): void {
    this.error = errorMessage;
    this.notify(Event.DISPLAY_ERROR, this);
  }

  addSettingsChange(key: string, value: string): void {
    this.settingsChanges[key] = value;
  }

  deleteSettingsChange(key: string): void {
    delete this.settingsChanges[key];
  }

  getInput(): string {
    return this.input;
  }

  getResult(): string {
    return this.result;
  }

  getError(): string {
    return this.error;
  }

  getConfig(): Config {
    return this.config;
  }

  getSettingsChanges(): Record<string, string> {
    return this.settingsChanges;
  }
}

export default Model;
