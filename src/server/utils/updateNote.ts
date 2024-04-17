import { Notes } from "../../models/notes";
import { INotes } from "../../types/notes";
import { UpdateNote } from "../../types/updateNote";

interface UpdateNoteValues extends Omit<INotes, 'dateCreated'> {}

export const updateNote = async ({ id, text, dateModified, author }: UpdateNote): Promise<INotes | null> => {
  const updateValues: UpdateNoteValues = {
    text,
    dateModified
  }

  if (author != null) {
    updateValues.author = author
  }

  return await Notes
    .findByIdAndUpdate(id, updateValues)
    .then(res => {
      if (res?._doc != null) {
        return {
          ...res._doc,
          ...updateValues
          }
        }
      return null
    });
}
