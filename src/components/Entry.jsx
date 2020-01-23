import React from "react";

function Entry(fromApp) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {fromApp.emoji}
        </span>
        <span>{fromApp.name}</span>
      </dt>
      <dd>{fromApp.description}</dd>
    </div>
  );
}

export default Entry;
