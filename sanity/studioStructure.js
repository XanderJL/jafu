import S from "@sanity/desk-tool/structure-builder";
import { IoMdSettings } from "react-icons/io";
import { AiFillFolderOpen } from "react-icons/ai";

const hiddenDocTypes = (listItem) =>
  !["settings", "portfolio"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(IoMdSettings)
        .child(
          S.editor()
            .id("settings")
            .schemaType("settings")
            .documentId("settings")
        ),
      S.listItem()
        .title("Portfolio")
        .icon(AiFillFolderOpen)
        .child(
          S.editor()
            .id("portfolio")
            .schemaType("portfolio")
            .documentId("portfolio")
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
