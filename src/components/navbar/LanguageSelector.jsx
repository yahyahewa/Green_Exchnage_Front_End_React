import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../app/api/LanguageSlice';

function LanguageSelector() {
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  console.log(language);
  const handleChangeLanguage = (language) => {
    dispatch(changeLanguage(language));
  };
  return (
    <div>
      <select
        className="focus:outline-none active::outline-none text-neutral-500 hover:scale-105 
      transition-all text-md font-bold sm:text-base text-center"
        value={language}
        onChange={(e) => handleChangeLanguage(e.target.value)}
      >
        <option value="english">English</option>
        <option value="kurdi">کوردی</option>
        <option value="arabic">عربي</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
