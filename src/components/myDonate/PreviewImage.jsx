import { useSelector } from 'react-redux';

function PreviewImage({ files, images, uploadedImage }) {
  const language = useSelector((state) => state.language.language);
  return (
    <div className="flex flex-wrap mt-2">
      {(uploadedImage !== null ? files : images)?.map((preview, index) => (
        <div
          key={index}
          className={`${
            language === 'kurdi' ? 'flex flex-row-reverse' : 'flex'
          } + w-full`}
        >
          <img
            src={`${import.meta.env.VITE_BACK_END}uploads/${preview}`}
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
