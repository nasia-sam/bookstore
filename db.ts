import { Author } from "./src/types/entities/Author";

export default {
  authors: [{ id: 1, name: "Charles Dickens" }],
  books: [
    {
      id: 1,
      title: "Great Expectations",
      releasedAt: new Date(), // You can specify a release date here
      author: { id: 1 } as Author,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      releasedAt: new Date(),
      author: { id: 1 } as Author,
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      releasedAt: new Date(),
      author: { id: 1 } as Author,
    },
    {
      id: 4,
      title: "1984",
      releasedAt: new Date(),
      author: { id: 1 } as Author,
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      releasedAt: new Date(),
      author: { id: 1 } as Author,
    },
    {
      id: 6,
      title: "To the Lighthouse",
      releasedAt: new Date(),
      author: { id: 1 } as Author,
    },
  ],
};
