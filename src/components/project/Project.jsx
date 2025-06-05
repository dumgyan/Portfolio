import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Project = () => {
  return (
    <div>
      <Navbar />
      <h1 className="my-12 text-center text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Previous<span> Work</span>
      </h1>
      {/* lightbox section */}
      {/* <section className="mx-3 mt-12 lg:mt-12">
        <div
          data-te-lightbox-init
          className="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0"
        >
          <div className="flex h-full w-full flex-1 flex-col">
            <img
              src="images/screen2.png"
              data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
              alt="Table Full of Spices"
              className="mb-5 w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <img
              src="images/screen3.png"
              data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Square/1.webp"
              alt="Coconut with Strawberries"
              className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
          </div>
          <div className="flex h-full w-full flex-1 flex-col">
            <img
              src="images/jetservice.png"
              data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp"
              alt="Dark Roast Iced Coffee"
              className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <img
              src="images/CreditCard.png"
              data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp"
              alt="Dark Roast Iced Coffee"
              className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
          </div>
        </div>
      </section>
      <br /> */}

      {/* another section */}
      {/* <section className="">
        <div class="mx-3 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <img class="rounded-lg w-full" src="images/screen4.png" alt="" />
        </div>

        <div class="sm:flex sm:justify-center">
          <div class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 sm:rounded-r-none">
            <a href="#!">
              <img
                class="rounded-t-lg sm:rounded-tr-none"
                src="images/profile.png"
                alt="Hollywood Sign on The Hill"
              />
            </a>
          </div>
          <div class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 sm:rounded-none">
            <a href="#!">
              <img
                class="rounded-t-lg sm:rounded-none"
                src="images/discover.png"
                alt="Palm Springs Road"
              />
            </a>
            The div class below here was commented before
          <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        This card has supporting text below as a natural lead-in to
        additional content.
      </p>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        <small>Last updated 3 mins ago</small>
      </p>
    </div>
          </div>
          <div class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 sm:rounded-l-none">
            <a href="#!">
              <img
                class="rounded-t-lg sm:rounded-tl-none"
                src="images/brands.png"
                alt="Los Angeles Skyscrapers"
              />
            </a>
          </div>
        </div>
      </section> */}

      <section>
        <div class="grid-cols-1 sm:grid md:grid-cols-2 ">
          {/* <div class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="images/foodapp.png"
                alt="Hollywood Sign on The Hill"
              />
            </a>
          </div> */}
          <div class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <video
                class="rounded-t-lg"
                src="videos/youtube.mp4"
                controls="controls"
                alt="Palm Springs Road"
              />
            </a>
          </div>
          <div class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <video
                class="rounded-t-lg"
                src="videos/mova-website.mov"
                controls="controls"
                alt="Palm Springs Road"
              />
            </a>
          </div>
          {/* <div class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="images/screen1.png"
                alt="Los Angeles Skyscrapers"
              />
            </a>
          </div> */}
        </div>
      </section>

      <section>
        <div class=" px-3 py-2 lg:pt-12">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/2 flex-wrap">
              <div class="w-1/2 p-1 md:p-2">
                <a href="https://frugies.company.site/" target="_blank">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="images/frugies-home.png"
                  />
                </a>
              </div> 
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="images/frugies-store.png"
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <video
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="videos/recordKeeper.mp4"
                  controls="controls"
                />
              </div>
            </div>
            <div class="flex w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <video
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="videos/contactMgt.mp4"
                  controls="controls"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="images/frugies-about.png"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="images/frugies-contact.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div class="mx-3 lg:mx-2">
          <video
            class="block  rounded-lg "
            src="https://knowrabbi.com/wp-content/uploads/2023/08/Screen-Recording-2023-08-23-at-2.33.04-PM.mp4"
            controls="controls"
          />
        </div>
        <figcaption className="ml-3 md:ml-2 text-indigo-700 underline">
          <a href="https://frugies.company.site/">👉visit site...🔗</a>
        </figcaption>
      </section> */}

      <section>
        <div class="grid-cols-1 sm:grid md:grid-cols-2 ">
          <div class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <video
                class="rounded-t-lg"
                src="videos/todoList.mp4"
                controls="controls"
              />
            </a>
          </div>
          <div class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <video
                class="rounded-t-lg"
                src="videos/triviaApp.mp4"
                controls="controls"
              />
            </a>
          </div>
          <div class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#">
              <video
                class="rounded-t-lg"
                src="videos/libraryApp.mp4"
                controls="controls"
              />
            </a>
          </div>
          <div class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img class="rounded-t-lg" src="images/subway.png" alt="subway" />
            </a>
          </div>
        </div>
      </section>

      <h1 className="text-center mt-16 lg:mt-24 font-extrabold text-xl lg:text-3xl text-indigo-700">
        THANK YOU F😎R YOUR TIME
      </h1>
      <p className="text-center mt-1 lg:mt-2 mb-8 lg:mb-14 font-normal text-lg lg:text-xl">
        I've got a surprise🎁 for you <br />
        👇
      </p>

      <div className="mx-2">
        <iframe
          className=" h-72 lg:h-screen w-full"
          src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
          data-gtm-yt-inspected-2340190_699="true"
          id="240632615"
        ></iframe>
      </div>
      <p className="text-center mt-2 mb-2 font-normal text-xl">
        See Ya Another Time!🙋‍♂️
      </p>
      <hr />

      <Footer />
    </div>
  );
};

export default Project;

// <div className="mx-2">
//           <iframe
//             className="  lg:h-screen w-full"
//             src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
//             data-gtm-yt-inspected-2340190_699="true"
//             id="240632615"
//           ></iframe>
//         </div>
