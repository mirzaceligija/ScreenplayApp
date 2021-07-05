import {
    DocumentDefinition,
    FilterQuery,
    UpdateQuery,
    QueryOptions,
  } from "mongoose";

  import Actor, { ActorDocument } from './../models/actor.model';

  export function createActor(input: DocumentDefinition<ActorDocument>) {
    return Actor.create(input);
  }