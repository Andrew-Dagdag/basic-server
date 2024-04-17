import { Notes } from "../../models/notes";
import { INotes } from "../../types/notes";

export const createNote = async (data: INotes) => {
  return await Notes.create(data);
}
