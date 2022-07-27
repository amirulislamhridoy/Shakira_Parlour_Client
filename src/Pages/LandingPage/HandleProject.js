import React from "react";

const HandleProject = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.fName.value)
    }
  return (
    <section className='bg-secondary'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl text-center font-semibold pt-28 pb-20'>Let us handle your <br /> project, professionally.</h1>

        <form className='lg:mx-32 mx-10' onSubmit={handleFormSubmit}>
          <div className='md:flex justify-between'>
          <div class="form-control md:w-5/12">
            <input type="text" placeholder="Full Name" name='fName' class="input input-bordered"/>
          </div>
          <div class="form-control md:w-5/12 md:mt-0 mt-3">
            <input type="text" placeholder="Last Name" name='lName' class="input input-bordered"/>
          </div>
          </div>
          <div className='md:flex justify-between my-3'>
          <div class="form-control md:w-5/12">
            <input type="email" placeholder="Email Address" name='email' class="input input-bordered"/>
          </div>
          <div class="form-control md:w-5/12 md:mt-0 mt-3">
            <input type="number" placeholder="Phone Number" name='phn' class="input input-bordered"/>
          </div>
          </div>
          <div class="form-control">
            <textarea type="text" placeholder="Your Message" name='mess' class="input input-bordered h-24"/>
          </div>
          <div className='text-center pt-3 pb-12'>
            <input className='btn btn-primary' type='submit' value='Send Message' />
          </div>
        </form>
      </div>
    </section>
  );
};

export default HandleProject;
