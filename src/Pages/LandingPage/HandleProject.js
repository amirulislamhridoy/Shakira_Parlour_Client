import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const HandleProject = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7fj6sbs', 'template_bl7s1t6', form.current, 'Tugul1FsyxfeGPbUp')
      .then((result) => {
          e.target.reset();
          toast.success('success')
      }, (error) => {
        console.log(error)
      });
  };
  return (
    <section className="bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-center font-semibold pt-28 pb-20">
          Let us handle your <br /> project, professionally.
        </h1>

        <form className="lg:mx-32 mx-10" ref={form} onSubmit={sendEmail}>
          <div className="md:flex justify-between">
            <div className="form-control md:w-5/12">
              <input
                type="text"
                placeholder="Full Name"
                name="fName"
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:w-5/12 md:mt-0 mt-3">
              <input
                type="text"
                placeholder="Last Name"
                name="lName"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="md:flex justify-between my-3">
            <div className="form-control md:w-5/12">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:w-5/12 md:mt-0 mt-3">
              <input
                type="number"
                placeholder="Phone Number"
                name="phn"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control">
            <textarea
              type="text"
              placeholder="Your Message"
              name="message"
              className="input input-bordered h-24"
            />
          </div>
          <div className="text-center pt-3 pb-12">
            <input
              className="btn btn-primary text-white"
              type="submit"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default HandleProject;
