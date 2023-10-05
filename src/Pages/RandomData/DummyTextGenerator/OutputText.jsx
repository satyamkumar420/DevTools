import React from "react";

const OutputText = ({ paragraphs, tag, includeHtml }) => {
  return (
    <div className="bg-[#1a1c2e] bg-4 text-md rounded shadow-md p-4">
      <div>
        {includeHtml === "yes"
          ? paragraphs.map((sentence, index) => (
              <p key={index}>{`<${tag}>${sentence}</${tag}>`}</p>
            ))
          : paragraphs.map((sentence, index) => <p key={index}>{sentence}</p>)}
      </div>
    </div>
  );
};

export default OutputText;
