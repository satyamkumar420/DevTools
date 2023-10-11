export function jsonToXml(json, indent = "") {
  let xml = "";

  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      const value = json[key];

      // Check if the key is a numeric index
      const isNumericIndex = /^[0-9]+$/.test(key);

      if (!isNumericIndex) {
        xml += `${indent}<${key}>`;

        if (typeof value === "object") {
          xml += "\n"; // Add a line break for nested elements
          xml += jsonToXml(value, indent + "  "); // Increase the indentation for nested elements
          xml += `${indent}`;
        } else {
          xml += value; // Convert primitive values to text
        }

        xml += `</${key}>\n`; // Close the element and add a line break
      } else {
        // If it's a numeric index, just process the value recursively
        xml += jsonToXml(value, indent);
      }
    }
  }

  return xml;
}
