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
  if (typeof query.sortByDateModified !== 'undefined') {
    sort.sortByDateModified = query.sortByDateModified;
  }

  return await Notes
    .find(filter)
    .sort(sort);
}
