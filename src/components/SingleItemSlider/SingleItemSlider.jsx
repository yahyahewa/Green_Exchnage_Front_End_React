/* eslint-disable react/prop-types */
import { useState } from 'react';

function SingleItemSlider({ images }) {
  const img = `${import.meta.env.VITE_BACK_END}uploads/${images[0]}`;
  const [wordData, setWordData] = useState(img);
  const handleClick = (i) => {
    const wordSlider = `${import.meta.env.VITE_BACK_END}uploads/${images[i]}`;
    setWordData(wordSlider);
  };
  return (
    <div className="h-[500px] flex flex-col items-start">
      <img
        src={
          `${wordData}` ||
          `${import.meta.env.VITE_BACK_END}uploads/${images[0]}`
        }
        alt=""
        className="w-full h-96 sm:h-[400px] object-cover"
      />
      <div className="flex  ">
        {images.map((data, i) => (
          <div className="mt-5 relative overflow-hidden" key={i}>
            <img
              alt=""
              className={
                (wordData[i] === i ? ' ' : '') +
                ' lg:w-20 lg:h-20 xl:w-[110px] xl:h-[90px] object-cover hover:scale-110 duration-500 hover:duration-500 mr-1 '
              }
              src={`${import.meta.env.VITE_BACK_END}uploads/${data}`}
              onClick={() => handleClick(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleItemSlider;
