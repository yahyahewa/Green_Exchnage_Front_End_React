// import React from "react";
import contact from "../assets/images/contact.svg"
import ContactForm from "../components/contact/ContactForm";
function Contact() {
  return  <div className="lg:mx-36 pt-10 grid grid-cols-2 items-start gap-20 h-screen">
    <div className="flex justify-center">
      <img src={contact} className="w-full h-[500px] object-cover" />
    </div>
    <ContactForm/>
{/*   
        <LoginForm/>he */}
         
       </div>;
}

export default Contact;
