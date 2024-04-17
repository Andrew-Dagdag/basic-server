import { Notes } from "../../models/notes";
import { FilterNotes } from "../../types/filterNotes";
import { ListNotesQuery } from "../../types/listNotesQuery";
import { INotes } from "../../types/notes";
import { SortNotes } from "../../types/sortNotes";

export const listNotes = async (query: ListNotesQuery): Promise<INotes[]> => {
  let filter: FilterNotes = {}
  if (query.author) {
    filter.author = query.author;
  }

  let sort: SortNotes = {}
  if (typeof query.dateModified !== 'undefined') {
    const dateModified = Number(query.dateModified);
    if (dateModified !== 1 && dateModified !== -1) {
      throw new Error('Invalid dateModified value');
    }
    sort.dateModified = dateModified;
  }

  if (typeof query.dateCreated !== 'undefined') {
    const dateCreated = Number(query.dateCreated);
    if (dateCreated !== 1 && dateCreated !== -1) {
      throw new Error('Invalid dateCreated value');
    }
    sort.dateCreated = dateCreated;
  }

  return await Notes
    .find(filter)
    .sort(sort);
}
