const OutputText = ({ paragraphs, tag, includeHtml, defaultText }) => {
  return (
    <div className="bg-[#1a1c2e] bg-4 text-md rounded-md shadow-md py-4 pl-4 pr-1">
      <div className="text-left width-full max-h-screen overflow-y-auto">
        {paragraphs.length > 0 ? (
          includeHtml === "yes" ? (
            paragraphs.map((sentence, index) => (
              <p key={index}>{`<${tag}>${sentence}</${tag}>`}</p>
            ))
          ) : includeHtml === "all" ? (
            <div>
              <p>{`<${tag}>${paragraphs.join(" ")}</${tag}>`}</p>
            </div>
          ) : (
            <p>{paragraphs.join("")}</p>
          )
        ) : includeHtml === "yes" || includeHtml === "all" ? (
          <p>{`<${tag}>${defaultText}</${tag}>`}</p>
        ) : (
          <p>{defaultText}</p>
        )}
      </div>
    </div>
  );
};

export default OutputText;
