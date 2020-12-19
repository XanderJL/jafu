import S from "@sanity/desk-tool/structure-builder";
import { IoMdSettings } from "react-icons/io";
import { AiFillFolderOpen, AiFillHome } from "react-icons/ai";
import { FaCompactDisc } from "react-icons/fa";

const hiddenDocTypes = (listItem) =>
  !["settings", "landingPage", "portfolio", "discography"].includes(
    listItem.getId()
  );

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
        .title("Landing Page")
        .icon(AiFillHome)
        .child(
          S.editor()
            .id("landingPage")
            .schemaType("landingPage")
            .documentId("landingPage")
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
      S.listItem()
        .title("Discography")
        .icon(FaCompactDisc)
        .child(
          S.editor()
            .id("discography")
            .schemaType("discography")
            .documentId("discography")
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
