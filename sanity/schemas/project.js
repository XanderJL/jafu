import { RiFileMusicFill } from "react-icons/ri";

export default {
  name: "project",
  title: "Project",
  icon: RiFileMusicFill,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "artwork",
      title: "Album Art",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "artAlt",
      title: "Art Alt Text",
      description: "Alt text is important for accessibility and SEO.",
      type: "string",
    },
    {
      name: "media",
      title: "Media",
      type: "file",
    },
    {
      name: "notes",
      title: "Notes",
      type: "array",
      of: [{ type: "block" }, { type: "image" }, { type: "iframe" }],
    },
  ],
};
