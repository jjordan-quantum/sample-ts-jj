import { IGreeter } from '../interfaces';
import { GreetingResponse } from '../types';

export class Greeter implements IGreeter {
  greet(name: string): GreetingResponse {
    return {
      success: true,
      greeting: `Hello ${name}`
    };
  }
}
