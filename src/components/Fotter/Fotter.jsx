import { Link } from 'react-router-dom';
import { LINKS } from '../../assets/Data';
import Logo from '../navbar/Logo';
import { useSelector } from 'react-redux';
const Fotter = () => {
  const language = useSelector((state) => state.language.language);
  return (
    <footer className="px-6 sm:px-12 md:px-20  bg-opacity-80 text-gray-900">
      <div className=" px-2 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between ">
          <Link to="/" className="font-bold  text-md text-neutral-600">
            <Logo />
          </Link>

          <div className={`flex flex-wrap mt-2 items-center  text-md font-medium sm:mb-0 
          ${language !== 'english' && 'flex-row-reverse'}`}>
            {LINKS.map((link) => {
              return (
                <Link
                  key={link.id}
                  to={link.path}
                  className="mr-4 hover:underline md:mr-6 "
                >
                   {language === 'kurdi' ? link.kurdi : language === 'arabic' ? link.arabic : link.english}
             
                </Link>
              );
            })}
          </div>
        </div>
        <hr className="my-4   border-gray-800 py-2 sm:mx-auto lg:my-2" />
        <span className=" text-base text-center flex flex-row justify-center my-4">
          © 2023
          <Link to="/" className="hover:underline  ">
            Green Exchange™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Fotter;
