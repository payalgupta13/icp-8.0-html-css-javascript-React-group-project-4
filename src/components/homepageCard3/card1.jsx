import React from 'react';
function Section1({ data }) {
  return (
    <div className="App-section-1">
      <div className="App-section-1-div1">
        <span className="App-section-1-div1-span">{data.title}</span>
      </div>
      <div className="App-section-1-div2">
        <div className="App-section-1-div2-box">
          <b>
            {data.description}
          </b>
          <br />
          <p>
            {data.additionalText}
          </p>
        </div>
        <div className="App-section-1-images-container">
          {data.images.map((image, index) => (
            <span key={index}>
              <img className="App-section-1-images" src={image.url} alt={image.alt} />
              <p>{image.caption}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section1;