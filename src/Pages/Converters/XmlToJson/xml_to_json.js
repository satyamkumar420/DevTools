export function xmlToJson(xml) {
  try {
    const xmlDoc = new DOMParser().parseFromString(xml, "text/xml");
    // Check if the document is empty, which is often the case for non-XML content
    if (!xmlDoc.documentElement) {
      return { error: "Invalid Input" };
    }
    function parseNode(node) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        let result = {};

        if (node.hasAttributes()) {
          result["@attributes"] = {};
          for (let i = 0; i < node.attributes.length; i++) {
            const attribute = node.attributes[i];
            result["@attributes"][attribute.name] = attribute.value;
          }
        }
        if (node.hasChildNodes()) {
          if (
            node.childNodes.length === 1 &&
            node.childNodes[0].nodeType === Node.TEXT_NODE
          ) {
            // If the element has only one child which is a text node, set it as the value
            return node.childNodes[0].textContent.trim();
          } else {
            for (let i = 0; i < node.childNodes.length; i++) {
              const childNode = node.childNodes[i];
              const childResult = parseNode(childNode);
              if (childNode.nodeType === Node.ELEMENT_NODE) {
                if (result[childNode.nodeName]) {
                  if (!Array.isArray(result[childNode.nodeName])) {
                    result[childNode.nodeName] = [result[childNode.nodeName]];
                  }
                  result[childNode.nodeName].push(childResult);
                } else {
                  result[childNode.nodeName] = childResult;
                }
              } else if (childNode.nodeType === Node.CDATA_SECTION_NODE) {
                result["#cdata"] = childNode.textContent;
              }
            }
          }
        }
        return result;
      } else if (
        node.nodeType === Node.TEXT_NODE ||
        node.nodeType === Node.CDATA_SECTION_NODE
      ) {
        return node.nodeValue.trim();
      }
    }
    const jsonResult = parseNode(xmlDoc.documentElement);
    return { [xmlDoc.documentElement.nodeName]: jsonResult };
  } catch (error) {
    return { error: "Invalid Input" };
  }
}

export function processJson(json) {
  function removeTextProperty(obj) {
    if (typeof obj === "object" && obj.hasOwnProperty("#text")) {
      return obj["#text"];
    } else if (typeof obj === "object") {
      for (const key in obj) {
        obj[key] = removeTextProperty(obj[key]);
      }
    }
    return obj;
  }

  if (json && typeof json === "object") {
    json = removeTextProperty(json);
    if (json instanceof Array) {
      for (let i = 0; i < json.length; i++) {
        json[i] = removeTextProperty(json[i]);
      }
    }
  }
  return json;
}

// Function to check if input is in XML format
export function isXMLFormat(input) {
  // Regular expression to match common XML structure patterns
  const xmlPattern = /<([a-zA-Z][a-zA-Z0-9]*)([^>]*)>(.*?)<\/\1>/;
  return xmlPattern.test(input);
}
