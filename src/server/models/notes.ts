import { Schema, model } from "mongoose";
import { Notes as INotes } from "../types/notes";

const NotesSchema = new Schema<INotes>({
  text: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Number,
    required: true
  },
  dateModified: {
    type: Number
  },
  author: {
    type: String,

  }
});

export const Notes = model<INotes>('Note', NotesSchema);
