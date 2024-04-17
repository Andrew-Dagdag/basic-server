import { Schema, model } from "mongoose";
import { INotes } from "../types/notes";

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
    default: 'Unknown'
  }
});

export const Notes = model<INotes>('Note', NotesSchema);
