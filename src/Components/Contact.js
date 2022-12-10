import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const handleContact = event => {
        event.preventDefault();
       emailjs.sendForm('service_d9faccj', 'template_wp71qp8', form.current, '0HO9JkdAyZAmoCA3y')
              .then((result) => {
                  console.log(result.text);
                  toast.success('send successfully')
              }, (error) => {
                  console.log(error.text);
              });
          
        event.target.reset();
   
    
      }
   
    return (
        <div className='mt-20' id='contact'>
             
          
            <div className="hero-content text-center">
            <div className="max-w-md">
              <div className='h-[600px] flex justify-center items-center'>
                <div className='w-96'>
                <h2 className='font-semibold'>Get In Touch!</h2> 
            <h2 className='text-3xl font-bold'>Contact Me</h2> 
                            <form ref={form} onSubmit={handleContact} className='grid grid-cols-1 gap-3 mt-10'>
                            <input name="name" type="text" placeholder="Your Name" className="input w-full input-bordered" />
                    <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" />
                    <input name="subject" type="text" placeholder="Subject" className="input w-full input-bordered" />
                    <textarea className="textarea textarea-bordered w-full" name="message" placeholder="Your message"></textarea>
                    <input className='btn btn-primary w-full text-white' type="submit" value="Submit" />
                  </form>
                </div>
              </div>
    
            </div>
          </div>
        </div>
    );
};

export default Contact;