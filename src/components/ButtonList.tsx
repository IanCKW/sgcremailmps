import React from "react";

interface ButtonListProps {
  buttonHeader?: string;
  buttonFuncs: (() => void)[];
  buttonNames: string[];
  externalLink?: string;
}

const ButtonList: React.FC<ButtonListProps> = ({
  buttonHeader = "",
  buttonFuncs = [],
  buttonNames,
  externalLink = "",
}) => {
  return (
    <>
      {buttonHeader && <h2 className="top-margin-25px"> {buttonHeader} </h2>}
      <div id="button_list no-emoji">
        {buttonNames.map((text, index) => (
          <button className="no-emoji" key={text} onClick={buttonFuncs[index]}>
            {text}
          </button>
        ))}
        {externalLink && (
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="external-link-button no-emoji"
          >
            I'm not sure
          </a>
        )}
      </div>
    </>
  );
};

export default ButtonList;
