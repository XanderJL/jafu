export default {
  name: "discography",
  title: "Discography",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "headerParagraph",
      title: "Header Paragraph",
      type: "text",
    },
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project" }] }],
    },
  ],
};
