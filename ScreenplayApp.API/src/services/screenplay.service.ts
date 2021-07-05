import {
    DocumentDefinition,
    FilterQuery,
    UpdateQuery,
    QueryOptions,
  } from "mongoose";

  import Screenplay, { ScreenplayDocument } from "../models/screenplay.model";
  import Category, { CategoryDocument } from './../models/category.model';
  import Actor, { ActorDocument } from './../models/actor.model';

  export function findScreenplays(
    query: FilterQuery<ScreenplayDocument>,
    options: QueryOptions = { lean: true },
    page: number = 1,
    searchTerm: string = ""
  ) {

    const qry = {
        $or: [ {title : { $regex: searchTerm, $options: 'i' }}, { description: { $regex: searchTerm, $options: 'i' } }]
    }

    return Screenplay.find(qry, {}, options)
    .where(query)
    .sort({"rate": "descending"})
    .skip(10 * (page - 1))
    .limit(10)
    .populate("category")
    .populate("casting.actor");
  }

  export function findScreenplay(
    query: FilterQuery<ScreenplayDocument>,
    options: QueryOptions = { lean: true },
  ) {
    return Screenplay.findOne(query, {}, options)
        .populate("category")
        .populate("casting.actor")
        
  }
  
  export function findAndUpdate(
    query: FilterQuery<ScreenplayDocument>,
    update: UpdateQuery<ScreenplayDocument>,
    options: QueryOptions
  ) {
    return Screenplay.findOneAndUpdate(query, update, options)
    .populate("category")
    .populate("casting.actor");
    
  }

  export function findCategories(
    query: FilterQuery<CategoryDocument>,
    options: QueryOptions = { lean: true },
  ) {
      return Category.find(query, options);
  }

  // POST 
  
  export function createScreenplay(input: DocumentDefinition<ScreenplayDocument>) {
    return Screenplay.create(input);
  }
