import React from "react";
import Iframe from "react-iframe";

const Preview = ({ value }) => {
  const { url } = value;
  return <Iframe url={url} width="100%" height="auto" />;
};

export default {
  name: "iframe",
  title: "iFrame",
  type: "object",
  fields: [
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: Preview,
  },
};
