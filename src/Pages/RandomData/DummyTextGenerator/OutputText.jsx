import React from "react";

const OutputText = ({ paragraphs, tag, includeHtml }) => {
  // Dummy Text
  const defaultText =
    "Bacon ipsum dolor amet cow spare ribs pig tail pork chop leberkas ball tip filet mignon, shank pork tri-tip corned beef pastrami beef. Pork loin chuck t-bone, burgdoggen strip steak shank meatball shoulder chislic pig rump spare ribs bacon ground round salami. Capicola rump ground round shank drumstick, picanha cow prosciutto kielbasa ham hock pork loin chislic. Salami chuck drumstick strip steak."; // Define your default text

  return (
    <div className="bg-[#1a1c2e] bg-4 text-md rounded shadow-md p-4">
      <div>
        {paragraphs.length > 0 ? (
          includeHtml === "yes" ? (
            paragraphs.map((sentence, index) => (
              <p key={index}>{`<${tag}>${sentence}</${tag}>`}</p>
            ))
          ) : (
            paragraphs.map((sentence, index) => <p key={index}>{sentence}</p>)
          )
        ) : (
          <p>{defaultText}</p>
        )}
      </div>
    </div>
  );
};

export default OutputText;
