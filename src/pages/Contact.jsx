import contact from '../assets/images/contact.svg';
import ContactForm from '../components/contact/ContactForm';
function Contact() {
  return (
    <div className="px-6 sm:px-12 lg:mx-26 md:px-20 pt-10 grid  md:grid-cols-2 items-start gap-20 min-h-screen">
      <div className="flex justify-center">
        <img
          src={contact}
          className="w-full h-72 md:h-[500px] object-contain sm:object-cover"
        />
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;
