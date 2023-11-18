import React from "react";

const OutputText = ({ paragraphs, tag, includeHtml, defaultText }) => {
  return (
    <div className="bg-[#1a1c2e] bg-4 text-md rounded-md shadow-md p-4">
      <div className="text-left">
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
