import { column, defineDb, defineTable } from "astro:db";

const Skills = defineTable({
  columns: {
    id: column.number({
      primaryKey: true,
    }),
    name: column.text(),
  },
});

const Projects = defineTable({
  columns: {
    id: column.number({
      primaryKey: true,
    }),
    name: column.text(),
    url: column.text(),
  },
});

export default defineDb({
  tables: { Skills, Projects },
});
