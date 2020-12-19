export default {
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "background",
      title: "Background Image",
      type: "image",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};
