import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import settings from "./settings";
import landingPage from "./landingPage";
import discography from "./discography";
import portfolio from "./portfolio";
import project from "./project";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    settings,
    landingPage,
    project,
    portfolio,
    discography,
  ]),
});
