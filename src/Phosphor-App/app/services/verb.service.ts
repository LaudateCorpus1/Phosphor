import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class VerbService {

  //Mock Data
  verbs = ['set', 'stop', 'add', 'extend', 'modify', 'reduce', '...'];
  details = ['Name: ', 'DisplayName: ', 'Status: ', 'DependentServices: ',
             'ServicesDependedOn: ', 'CanPauseAndContinue: '];

  verbDetails: string;

  //Data wrapped in a Promise
  getVerbs() {
    return Promise.resolve(this.verbs);
  }

  getDetails(verb) {
    return Promise.resolve(this.details);
  }

  public verbDetailsSelection$: EventEmitter<string> = new EventEmitter<string>();

  constructor(
  )
  {
    
  }

  setVerbDetails(verb: string) {
      this.verbDetails = verb;
      this.verbDetailsSelection$.emit(verb);
  }


  //General Algorithm for mapping verbs to images and similar verbs together

  //verbs[any verb]
  //if we have a dictionary of similar word relations that would be nice to build from
  //From that dictionary, we can then map images to the verbs.



}