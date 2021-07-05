import mongoose from "mongoose";

import { CategoryDocument } from './category.model';
import { ActorDocument } from './actor.model';

export interface ScreenplayDocument extends mongoose.Document {
    title: string;
    description: string;
    releaseDate: Date;
    category: CategoryDocument["_id"];
    photoUrl: string;
    casting: [{
        actor: ActorDocument["_id"];
        role: string;
    }];
    rate: number;
    votes: number;
    createdAt: Date;
    updatedAt: Date;
}

const ScreenplaySchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        releaseDate: { type: Date, required: true, default: Date.now() },
        category : { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
        photoUrl: { type: String, required: true },
        casting : [{
            actor: {type: mongoose.Schema.Types.ObjectId, ref: 'Actor', required: true },
            role: {type: String, required: false}
        }],
        rate: { type: Number, required: true, defualt: 0},
        votes: { type: Number, required: true, defualt: 0}
    },
    { timestamps: true }
);

const Screenplay = mongoose.model<ScreenplayDocument>("Screenplay", ScreenplaySchema);

export default Screenplay;