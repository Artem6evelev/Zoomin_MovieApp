import React, { useState } from "react";
import "./App.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import text from "./images/text.png";

function App() {
  const [offset, setOffset] = useState()

  const handleScroll = () => setOffset(window.pageYOffset)

  window.addEventListener('scroll', handleScroll)


  return (
    <div className="App">
      <div className="zoom">
        <img src={img1} alt="" id="img1"
        style = {{width: (100 + offset * 0.3) + '%'}}
         />
        <img src={img2} alt="" id="img2" 
        style = {{width: (100 + offset * 0.3) + '%'}}
        />
        <img src={text} alt="" id="text" 
        style={{top:`-${10 + offset * 0.3 + '%'}`}}
        />
      </div>

      <div className="content">
        <h2>Simple parallax effect with React</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          mollis ante neque, at placerat velit sagittis in. Praesent molestie
          facilisis nunc ac blandit. Nam mi arcu, tempus finibus ligula id,
          ultrices placerat libero. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Suspendisse et
          justo non enim tempor tincidunt. Fusce aliquet sapien vitae consequat
          finibus. Nulla id orci nisl. Donec at ligula in libero tincidunt
          elementum sed at quam. Mauris sit amet tincidunt nulla. Morbi ultrices
          ante a purus rutrum, eget cursus massa laoreet. Praesent accumsan
          dolor non elit tempor, et varius lacus egestas. Maecenas porta maximus
          lorem, et aliquam magna fringilla at. Sed ac magna vitae lacus posuere
          pharetra eget eget tortor. Aliquam sit amet congue eros, non dapibus
          neque. Morbi venenatis cursus leo non condimentum. Aliquam erat
          volutpat. Donec maximus elit nisl, volutpat consectetur urna feugiat
          et. Nullam bibendum molestie quam eget ultricies. Vivamus eu felis
          quis nisl laoreet rhoncus. Suspendisse in libero sit amet ligula
          lacinia aliquet. Sed eu iaculis lorem. Proin est mauris, ornare sed
          turpis nec, fringilla ullamcorper risus. Pellentesque ullamcorper
          mattis ligula, ut scelerisque justo euismod eget. Cras dapibus, lorem
          porta pulvinar iaculis, quam felis tristique odio, a dapibus sem.
        </p>
      </div>
    </div>
  );
};

export default App;
