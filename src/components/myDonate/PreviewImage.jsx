import React, { useState, useEffect } from 'react';

function PreviewImage({ files, images }) {
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    if (files && files.length > 0) {
      const filePreviews = [];

      // Loop through the files and use FileReader on each Blob
      for (const file of files) {
        const reader = new FileReader();

        reader.onload = () => {
          filePreviews.push(reader.result);
          if (filePreviews.length === files.length) {
            setPreviews(filePreviews);
          }
        };

        // Ensure that file is a Blob before reading
        if (file instanceof Blob) {
          reader.readAsDataURL(file);
        }
      }
    } else {
      setPreviews([]);
    }
  }, [files, images]);
  useEffect(() => {}, [files]);
  return (
    <div className="flex flex-wrap mt-2">
      {(previews.length !== 0 ? previews : images).map((preview, index) => (
        <div key={index}>
          <img
            src={
              previews.length !== 0
                ? preview
                : `${import.meta.env.VITE_BACK_END}uploads/${preview}`
            }
            alt={`Image `}
            width={16}
            height={16}
            className="w-16 h-16 object-cover rounded m-1"
          />
        </div>
      ))}
    </div>
  );
}

export default PreviewImage;
// import React, { useState } from 'react';
// import { useEffect } from 'react';

// function PreviewImage({ files, images }) {
//   const [previews, setPreviews] = useState([]);

//   useEffect(() => {
//     if (files && files.length > 0) {
//       const filePreviews = [];

//       for (const file of files) {
//         const reader = new FileReader();

//         reader.readAsDataURL(file);
//         reader.onload = () => {
//           filePreviews.push(reader.result);
//           if (filePreviews.length === files.length) {
//             setPreviews(filePreviews);
//           }
//         };
//       }
//     } else {
//       setPreviews([]);
//     }
//   }, [files]);

//   return (
//     <div className="flex flex-wrap mt-2">
//       {(previews.length !== 0 ? previews : images).map((preview, index) => (
//         <div key={index}>
//           <img
//             src={
//               previews.length !== 0
//                 ? preview
//                 : `${import.meta.env.VITE_BACK_END}uploads/${preview}`
//             }
//             alt={`Image `}
//             width={16}
//             height={16}
//             className="w-16 h-16 object-cover rounded m-1"
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PreviewImage;
