import { GreetingResponse } from '../types';

export interface IGreeter {
  greet(name: string): GreetingResponse;
}
