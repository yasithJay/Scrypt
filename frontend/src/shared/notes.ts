import { INote } from "./note.interface";

let notes:INote[] = [
  {
    id: 1,
    title: "Note 1",
    content: "example content",
    last_updated_date: new Date()
  },
  {
    id: 2,
    title: "Note 2",
    content: "example content 2",
    last_updated_date: new Date()
  },
  {
    id: 3,
    title: "Note 3",
    content: "example content 3",
    last_updated_date: new Date()
  }
]


export default notes;
