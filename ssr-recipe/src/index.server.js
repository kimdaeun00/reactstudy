import React from "react";
import ReactDOMServer from "react-dom/server";

const html = ReactDOMServer.renderToString(
  <div>hello server side rendering!</div>
);

console.log(html);
