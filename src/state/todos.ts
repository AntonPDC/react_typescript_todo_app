import { atom } from "recoil";
import { Todo } from "../components/TodoList/TodoList";

export const todoCodingAtom = atom<Todo[]>({
  key: "todoListCoding",
  default: [
    { id: 1, text: "Learn typescript you dummy", completed: false },
    { id: 2, text: "You need to work on Front-End stuff", completed: false },
  ],
});

export const todoBabyAtom = atom<Todo[]>({
  key: "todoListBaby",
  default: [
    { id: 1, text: "Bath Time", completed: false },
    { id: 2, text: "You need to change diaper", completed: false },
  ],
});

export const todoChoresAtom = atom<Todo[]>({
  key: "todoListChores",
  default: [
    { id: 1, text: "Vacuum", completed: false },
    { id: 2, text: "Dust", completed: false },
  ],
});
