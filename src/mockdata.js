import { states } from "./components/statehandler";

export const mockdata = [
  {
    id: 1234567890,
    userName: "Henke",
    description: "Kaffe", 
    sum: 99, 
    date: "2022-12-31", 
    state: states.inProgress,
    image: {
      url: "src/assets/react.svg",
      altTag: "React loggan" 
    } 
  },
  {
    id: 4567890123,
    userName: "Oscar",
    description: "Frukost grejer", 
    sum: 278, 
    date: "2023-01-24", 
    state: states.inProgress,
    image: {
      url: "src/assets/react.svg",
      altTag: "React loggan" 
    } 
  },
  {
    id: 2345678901,
    userName: "Oscar",
    description: "Öl", 
    sum: 654, 
    date: "2023-01-14", 
    state: states.inProgress,
    image: {
      url: "src/assets/react.svg",
      altTag: "React loggan" 
    } 
  },
  {
    id: 3456789012,
    userName: "Wilma",
    description: "Diverse snacks för go häng", 
    sum: 338, 
    date: "2022-12-21", 
    state: states.inProgress,
    image: {
      url: "src/assets/react.svg",
      altTag: "React loggan" 
    } 
  }
];
