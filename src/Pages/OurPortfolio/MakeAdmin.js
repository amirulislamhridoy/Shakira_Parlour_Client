import React from "react";

const MakeAdmin = () => {
  return (
    <section>
      <form>
        <div class="card m-10 min-h-[250px] bg-base-100 shadow-xl">
          <div class="card-body">
            <label className='font-bold text-xl' htmlFor='email'>Email</label>
            <div className=''>
            <input
                  type="email"
                  placeholder="jon@gmail.com"
                  id="email"
                  className="input input-bordered lg:w-7/12 md:w-10/12 w-full mr-2"
                />
            <input className='btn btn-primary text-white px-7 lg:mt-0 mt-2' type='submit' />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default MakeAdmin;
