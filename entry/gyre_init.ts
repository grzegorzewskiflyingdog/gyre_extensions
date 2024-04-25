console.log("fds-gradient-editor load now")
//import { gradientEditor } from "./node_modules/@fds-components/fds-gradient-editor/dist/fds-gradient-editor-es.mjs";


   var script = document.createElement("script");
script.async = false;

script.src =window.document.gyre.serverName+"/extensions/gyre-extensions/node_modules/@fds-components/fds-gradient-editor/dist/fds-gradient-editor.ts";
document.head.appendChild(script);
