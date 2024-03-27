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

const Views = defineTable({
  columns: {
    id: column.number({
      primaryKey: true,
    }),
    count: column.number({
      default: 1,
    }),
    lastViewed: column.date({
      default: new Date(),
      optional: true,
    }),
  },
});

export default defineDb({
  tables: { Skills, Views, Projects },
});
