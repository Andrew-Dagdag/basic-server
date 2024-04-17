import { Notes } from "../../models/notes";
import { INotes } from "../../types/notes";

export const deleteNote = async (id: string): Promise<INotes | null> => {
  return await Notes.findByIdAndDelete(id);
}
