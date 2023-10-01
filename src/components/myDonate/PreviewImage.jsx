import React, { useState } from 'react';
import { useEffect } from 'react';

function PreviewImage({ files }) {
  //   const [preview, setPreview] = useState({});
  const [previews, setPreviews] = useState([]);
  //   file = file[0];
  //   if (file) {
  //     const render = new FileReader();
  //     render.readAsDataURL(file);
  //     render.onload = () => {
  //       setPreview(render.result);
  //     };
  //   }
  useEffect(() => {
    if (files && files.length > 0) {
      const filePreviews = [];

      for (const file of files) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
          filePreviews.push(reader.result);

          // When all previews are loaded, update the state
          if (filePreviews.length === files.length) {
            setPreviews(filePreviews);
          }
        };
      }
    } else {
      setPreviews([]);
    }
  }, [files]);

  return (
    <div className="flex flex-wrap mt-2">
      {previews.map((preview, index) => (
        <div key={index}>
          <img
            src={preview}
            alt={`Image ${index}`}
            width={16}
            height={16}
            className="w-16 h-16 object-cover rounded m-1"
          />
        </div>
      ))}
    </div>
  );

  //   return (
  //     <div>
  //       <div>
  //         <img src={preview} alt="photo" width={300} />
  //       </div>
  //     </div>
  //   );
}

export default PreviewImage;
