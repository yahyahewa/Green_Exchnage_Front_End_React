function PreviewImage({ files }) {
  return (
    <div className="flex flex-wrap mt-2">
      {files.map((preview, index) => (
        <div key={index}>
          <img
            src={`${import.meta.env.VITE_BACK_END}uploads/${preview}`}
            alt={`Image ${index}`}
            width={16}
            height={16}
            className="w-16 h-16 object-cover rounded m-1 border"
          />
        </div>
      ))}
    </div>
  );
}

export default PreviewImage;
