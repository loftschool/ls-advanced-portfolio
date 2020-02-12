import "./styles/main.pcss";
import "./scripts/paralax";
import "./scripts/menu";
import "./scripts/skills";
import "./scripts/comments";

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}


