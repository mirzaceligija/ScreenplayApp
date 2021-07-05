import mongoose from "mongoose";

export interface ActorDocument extends mongoose.Document  {
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
}

const ActorSchema = new mongoose.Schema(
    {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    { timestamps: true }
);


const Actor = module.exports = mongoose.model("Actor", ActorSchema);

export default Actor;

//60bf49090a6ea644f07a51d9
//60bf49270a6ea644f07a51da