import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, useFormik } from 'formik';
import InputField from '../InputField/InputField';
import { useContactMutation } from '../../app/api/contact';
import { useSelector } from 'react-redux';
function ContactForm() {
  const [waitingSend, setWaitingSend] = useState('Send');
  const [laodingSend, setLoadingSend] = useState(false);
  const language = useSelector((state) => state.language.language);
  const [send, { data, isLoading, isError }] = useContactMutation();
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      message: '',
    },
    onSubmit: (values, { resetForm }) => {
      send(values);
      resetForm({ values: '' });
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required(),
      email: Yup.string().email().required(),
      message: Yup.string().min(50).max(150).required(),
    }),
  });

  useEffect(() => {
    if (data?.status == undefined || data?.status == 'success') {
      setWaitingSend('Send');
      setLoadingSend(false);
    } else {
      setWaitingSend('Please waiting a while');
      setLoadingSend(true);

      const timer = setTimeout(() => {
        setWaitingSend('Send');
        setLoadingSend(false);
      }, 900000);
    }
  }, [data]);
  return (
    <Formik>
      <div className="w-full flex  flex-col items-center justify-center sm:mt-12">
        <p className="font-semibold text-lg text-gray-800 ">
          {language === 'ku' ? 'لە پەییوەندییان ئەبین ' : 'Get In Touch'}{' '}
        </p>
        <Form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 mb-10 w-full lg:w-fit"
        >
          <div
            className={`${
              language === 'ku' ? '' : ''
            } + flex flex-col w-full mt-5`}
          >
            <label
              className={`${
                language === 'ku' ? 'justify-end ' : ''
              } + flex text-gray-800 w-full font-english`}
            >
              {language === 'ku' ? 'ناوی سیانی ' : 'Full name'}
            </label>
            <InputField
              name="fullname"
              placeholder="your name"
              id="fullname"
              value={formik.values.fullname}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.fullname && formik.errors.fullname ? (
              <span className="text-red-400 text-sm">
                {formik.errors.fullname}
              </span>
            ) : null}
          </div>

          <div className="flex flex-col mt-4">
            <label
              className={`${
                language === 'ku' ? 'justify-end' : ''
              } + text-gray-800 flex font-english`}
            >
              {language === 'ku' ? 'ئیمەیل' : 'Email'}
            </label>
            <InputField
              name="email"
              placeholder="Example@gmail.com"
              id="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="text-red-400 text-sm">
                {formik.errors.email}
              </span>
            ) : null}
          </div>

          <div className="mt-4 flex w-full  flex-col">
            <label
              className={`${
                language === 'ku' ? 'justify-end' : ''
              } + text-gray-800 w-full flex font-english`}
            >
              {language === 'ku' ? 'نامە' : 'Message'}
              {/* Message */}
            </label>
            <InputField
              name="message"
              placeholder="Write your message"
              id="message"
              value={formik.values.message}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-400 text-sm ">
                {formik.errors.message}
              </div>
            ) : null}
          </div>

          <div className="mt-5">
            {' '}
            <button
              disabled={isError ? true : isLoading ? true : laodingSend}
              type="submit"
              className={`py-2 w-full bg-green text-white rounded hover:bg-opacity-80 hover:duration-500 duration-500 ${
                isError
                  ? 'opacity-80'
                  : isLoading
                  ? 'opacity-80'
                  : laodingSend
                  ? 'opacity-80'
                  : ''
              } `}
            >
              {language === 'ku' ? 'ناردن' : waitingSend}
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
}

export default ContactForm;
