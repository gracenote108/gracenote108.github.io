import JavaScript from "./Javascript.js";
import Ruby from "./Ruby.js";

const libraryUuid = [
  {
    uuid: "59a046bf-c921-4409-a421-d638841ead48",
    library: JavaScript,
  },
  {
    uuid: "4742aadd-1bbf-4b01-b653-d01a23cd25e9",
    library: Ruby,
  },
];

export function getProjectLibrary(uuid) {
  for (let libObj of libraryUuid) {
    if (libObj["uuid"] === uuid) return libObj["library"];
  }
  return [];
}
