import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <section className=" lg:mt-12 bg-center bg-no-repeat bg-[url('/images/telephone.jpg')] bg-gray-700 bg-blend-multiply">
        <div className=" mx-auto max-w-screen-xl text-center underline underline-offset-8  decoration-indigo-600 py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  text-white  md:text-5xl lg:text-6xl">
            Contact
          </h1>
        </div>

        
      </section>

      {/* card section */}
      <section className=" ">
        <img
          className="h-auto max-w-full absolute "
          src="/images/phone.jpg "
          alt="image description"
        />
        <div className="relative my-20">
          <div className="cards opacity-90 lg:flex lg:justify-evenly text-white ">
            <div className="phone  rounded-md m-7 lg:m-0 bg-indigo-800 py-6 px-14">
              <div className="content text-center">
                <svg
                  className="w-6 h-6 ml-24 lg:ml-20 text-white mb-4 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <p className="text-lg font-bold">0240955003</p>
                <p>Let get in touch right away</p>
              </div>
            </div>
            <div className="address rounded-md m-7 lg:m-0 bg-indigo-800 py-6 px-14">
              <div className="content">
                <svg
                  class="w-6 h-6 ml-24 text-white mb-4 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m4 12 8-8 8 8M6 10.5V19c0 .6.4 1 1 1h3v-3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3h3c.6 0 1-.4 1-1v-8.5"
                  />
                </svg>
                <p className=" text-center text-lg font-bold">Accra, Ghana</p>
                <p>North Kaneshie, GA-130-2234</p>
              </div>
            </div>
            <div className="email rounded-md m-7 lg:m-0 bg-indigo-800 py-6 px-14">
              <div className="content text-center">
                <svg
                  class="w-6 h-6 ml-24 text-white mb-4 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
                  />
                </svg>
                <p className="text-lg font-bold">0240955003</p>
                <p>Please leave me a message </p>
              </div>
            </div>
          </div>

            {/* form section */}
          <div className="forms lg:flex lg:justify-around my-24 ">
            <form 
            action="https://getform.io/f/pagkkdna"
            method="POST"
            encType="multipart/form-data"
            className=" flex flex-col gap-2 lg:w-3/5 p-6 lg:p-12 mx-7 lg:ml-24 bg-indigo-800 opacity-90 rounded-md">
              <h1 className="text-white text-3xl">Get In Touch</h1>
              <hr className=" h-1 mb-10 rounded" />
              <input
                type="text"
                className="text block mb-2 h-14 text-sm font-medium text-white dark:text-white border-white bg-transparent"
                name="name"
                placeholder="Enter your full name"
                required
              />
              <br />
              <input
                type="email"
                className="email block mb-2 h-14 text-sm font-medium text-white dark:text-white border-white bg-transparent"
                name="email"
                placeholder="Enter email address"
                required
              />
              <br />
              <textarea
                name="message"
                className="textarea block mb-2 h-40 text-sm font-medium text-white dark:text-white border-white bg-transparent"
                placeholder="Enter your message"
              ></textarea>
              <input type="file" name="file" className="text-gray-400"/>
              <p className="text-white">0 of 1000 max characters.</p>
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:w-36 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
            <div className="hidden lg:block lg:hidden-block lg:leading-10 lg:bg-white lg:mr-14 lg:p-10 lg:rounded-md">
                <h1 className="lg:text-3xl  ">Message Me</h1>
                <hr className=" lg:h-1 lg:mt-4 lg:mb-8 lg:bg-indigo-700 lg:w-10 rounded" />
                <p className=" lg:w-52  lg:bg-white lg:opacity-100 ">
                Your thoughts matters, Feel free to drop me a line, whether it’s a project collaboration, a friendly hello, or just sharing your favorite meme. Can’t wait to hear from you!
                </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;

{/* <section className="section relative bg-center bg-no-repeat ">
      <img className="h-auto max-w-full absolute" src="/images/telephone.jpg" alt="image description"/>
        <div className="background flex justify-center items-center underline decoration-orange-400 text-7xl text-indigo-600">
          <p className="relative ">Contact</p>
        </div>
      </section> */}
