export function jsonToXml(json, indent = "") {
  let xml = "";
  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      const value = json[key];

      if (Array.isArray(value)) {
        xml += value.map((item) => jsonToXml({ [key]: item }, indent)).join("");
      } else if (typeof value === "object") {
        xml += `${indent}<${key}>\n`;
        xml += jsonToXml(value, indent + "\t\t");
        xml += `${indent}</${key}>\n`;
      } else {
        xml += `${indent}<${key}>${value}</${key}>\n`;
      }
    }
  }
  return xml;
}
