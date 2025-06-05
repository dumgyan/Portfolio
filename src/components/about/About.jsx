import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import { Badge } from "flowbite-react";
import { Typewriter } from "react-simple-typewriter";


const About = () => {
  return (
    <div className=" ">
      <Navbar />
      <section>
        <div className=" my-16 lg:mt-12">
          <h1 className=" text-center mb-1 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            About<span> Me</span>
          </h1>
          {/* <p className="text-center">A couple of projects worked on over the years</p> */}
        </div>
      </section>

      <section className="bg-center bg-no-repeat bg-cover bg-[url('https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1662137520/ComputerScience.org/Organizations_for_black_compsci_students_and_professionals_60616c857/Organizations_for_black_compsci_students_and_professionals_60616c857.jpg?_i=AA')] bg-gray-500 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-medium lg:font-extrabold tracking-tight leading-none text-white opacity-50 lg:opacity-70 md:text-5xl lg:text-6xl">
          <Typewriter
                words={["I can help bring your design to life"]}
                loop={1}
                // cursor
                cursorStyle="_"
                typeColor="red"
                typeSpeed={40}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            {/* I can help bring your design to life. */}
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Scroll down👇 to Learn More About Me.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            {/* <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Download CV
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a> */}
            <Link
              to="/projects"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              See latest works
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:pt-16">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <div className="grid grid-cols-1 place-items-center mb-8">
              <img
                src="images/me.jpeg"
                className="bg-blue-100 w-48 h-56 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400  mb-2"
              />
              <p className="text-2xl">Heya! 👋</p>
            </div>

            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
              I'm a Frontend Developer / UIUX Designer
            </h1>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6 text-justify">
              As a frontend developer, I possess a diverse skill set, excelling
              in both frontend and UI technologies. On the frontend, I bring
              designs to life by converting UI designs into responsive web
              applications using HTML, CSS, and JavaScript, together with modern
              frameworks and libraries like Bootstrap, Tailwind, and Reactjs.
              <br />
              <br />
              With a deep understanding of UI/UX design, I take pride in
              delivering end-to-end solutions that meet user needs and exceed
              expectations. By crafting intuitive user experience designs that
              leave a lasting impression. Meanwhile, my expertise in UI/UX
              design empowers me to utilize industry-standard design tools such
              as Figma and Uizard to design and develop user-centered interfaces
              while collaborating with clients to understand their requirements
              and deliver high-quality results. I’m committed to creating
              cutting-edge UI designs that make a difference. Let’s collaborate
              and bring your ideas to the forefront of technology.
            </p>
            <a
              href="assets/resume.pdf" target="_blank" rel="noopener noreferrer"
              className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Download CV
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8 ">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <video
                src="https://cdnl.iconscout.com/lottie/premium/thumb/images-10374457-8433555.mp4"
                className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                </svg>
                Design
              </video>
              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Designing With Passion While Exploring The World
              </h2>
              <p className="pt-2 text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                As a frontend developer, UI/UX designer, and e-commerce
                developer, I embark on a creative journey, while exploring the
                vast world of digital possibilities.
                <br />
                <br />
                Join me let’s build something remarkable together.
                <br />
                <br />
                Let connect!
              </p>
              <p className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">
                dumgyanr8@gmail.com
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <video
                src="https://cdnl.iconscout.com/lottie/premium/thumb/employee-checking-task-list-8928263-7286081.mp4"
                className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                  />
                </svg>
                Code
              </video>
              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                I Create Products Not Just Arts
              </h2>
              <p className="pt-2 text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                I bring together my technical expertise and creativity to
                develop software that stands out from the crowd. Let’s
                collaborate and turn your vision into a reality.
                <br />
                <br />
                Join me as we venture into the realm of digital design
              </p>
              <Link
                to="/contact"
                className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
              >
                Message me
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* skills (icons) */}
      <section className="my-10 ">
        <h1 className="text-center my-16 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          My<span> Skills</span>
        </h1>
        <div className="flex flex-wrap justify-center justify-evenly gap-4 md:mx-20">
          <Badge color="info" size="sm">
            <div className="flex justify-around items-center w-72 h-44 bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300">
              <img
                className="w-24 h-24"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"
              />
              <p className="text-red-500">HTML</p>
            </div>
          </Badge>
          <Badge color="gray" size="sm">
            <div className="flex justify-around items-center w-72 h-44 bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-300">
              <img
                className="w-24 h-24"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
              />
              <p className="text-blue-500">CSS</p>
            </div>
          </Badge>
          <Badge color="failure" size="sm">
            <div className="flex justify-around items-center w-72 h-44 bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300">
              <img
                className="w-24 h-24"
                src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
              />
              <p className="text-yellow-500">JavaScript</p>
            </div>
          </Badge>
          <Badge color="success" size="sm">
            <div className="flex justify-around items-center w-72 h-44 bg-sky-100 text-sky-800 dark:bg-sky-200 dark:text-sky-900 group-hover:bg-sky-200 dark:group-hover:bg-sky-300">
              <img
                className="w-24 h-24"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              />
              <p className="text-sky-500">React</p>
            </div>
          </Badge>
          <Badge color="indigo" size="sm">
            <div className="flex justify-around items-center w-72 h-44 bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300">
              <img
                className="w-24 h-24"
                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
              />
              <p className="text-yellow-400">Vite</p>
            </div>
          </Badge>
          <Badge color="success" size="sm">
            <div className="flex justify-around items-center w-72 h-44 bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300">
              <img
                className="w-26 h-24"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
              />
              <p className="text-purple-500">Bootstrap</p>
            </div>
          </Badge>
          <Badge color="purple" size="sm">
            <div className="flex justify-around items-center w-72 h-44 bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300">
              <img
                className="w-24 h-24"
                src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png"
              />
              <p className="text-green-500">Tailwind</p>
            </div>
          </Badge>
          <Badge color="indigo" size="sm">
            <div className="flex justify-around items-center w-72 h-44 bg-gray-900 text-gray-100 dark:bg-gray-900 dark:text-gray-200 group-hover:bg-gray-500 dark:group-hover:bg-gray-700">
              <img
                className="w-24 h-24"
                src="https://flowbite.s3.amazonaws.com/brand/logo-dark/mark/flowbite-logo.png"
              />
              <p className="text-white-500">Flowbite</p>
            </div>
          </Badge>
          <Badge color="info" size="sm">
            <div className="flex justify-around items-center w-72 h-44 bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300">
              <img
                className="w-26 h-24"
                src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png"
              />
              <p className="text-red-400">Figma</p>
            </div>
          </Badge>
          <Badge color="warning" size="sm">
            <div className="flex justify-around items-center w-72 h-44 bg-gray-900 text-gray-100 dark:bg-gray-900 dark:text-gray-200 group-hover:bg-gray-500 dark:group-hover:bg-gray-700">
              <img
                className="w-24 h-24 rounded-3xl"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX/xgD/////wgD/xAD/yCL/zDz//PH/8tH/xwD//fb/9t7/2nr///z/+en/233/7cH/6bT/1mn/5qj/3YX/0VL/1GD/78n/5J//z0X/9Nf/5KH/+er/4I//zDP/127/6K//01j/34z/4ZfqGsSOAAADxklEQVR4nO3ciXbiIBiG4QTi3rpv49p6/xc5ibYzmvxoQDwQz/tcAOf/ypJAsEkCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeKFzoWt4Ia1bg9NmNo8npKp4qjm9a6dnH+MsjoyLz3bJ58S9Mj3vpf/tnvtjeZIKnBvTw9uGRhFEzKSELcfG9KLc0jh8RK8JhQFxCD4XfSbU42pTvbdK2JXaGoSO6DFheZm5WL5TQmGQRjBMfSb8I7WVdj1XbMtjQtUXE2aeK7blsw87YkLPBVvzmfAotdV+o3mYTKS23mktTfSH0NY7PQ8Tvao29RE6oOc373alqdl7JUxa5ZaW77a30PPbhjrBe9B3wkRn14/9Vfge9J4wf7OZ/Dz4t9NuBD34goR5PybzwXCSxXLW9oKESXGi6KM2P16TMCYkbD4SNh8Jm4+Ezed3f1h5lYng5cbrHn9QbWoaPqKUcO3WlHhOE37ESwkXbk2JX2bmfsu1p3tCVY6HK2sp4d5zwdZU9fDIdfJI0zD8Z4tESZ9TOk6nD3oqJQx+kKFHQlVuh5zil5nP8AmFU1zX5UFqKfihvuFjw9GhLnkabsInFB/5Lh9uxRmdTvxXbF2YtJi6XBLZS+2EX0oNS03at14g5K/44Rca0w0K+9cacbQ7TWjv5NK2ln98tRSbiWAaGi8YnKz++tUbbWfhvx4W9E4szm5TIG4r0nQURUJ5S2B3xUDJ1zDSr1fVbMcwhSzeTpX4Rpr/kSJYSc++5Ppq339VhnFuOZdfSH0aKqx3/9UYMPhloX/kN8rzQK3RCUq8KFSI4Izml7ET0+3+QZU6MSwyMXVhXqa4wbiY3R2paiE/JgqreLrQtC+46K+NGdXesAwXgl8svVW5CHNtuVZCtVrtxZftX+HvsN/Qm3vFpv1Z9zakVsnBPAELbmc9L6S2d+vNQ04n2e/PhrqL0/14aRQbwxJ5A1uy7eeMC++1yMZoQc/qFF5XBL+VqVLiZt9NP74eLGh5o+igF98k/CEeSjkI/q3CqCt9prG3jnOMnmU+Is4jDpj34vMDNeYePHtyuek92oyE99xDox+6/DrUt3vAcfQdeKbXrpPxEOObjEj+BdMjnTjuddej1rVer6/1mtOBF2po92hcRXD7yZLWO/MRTFkkPzywpdWw1lhtn5JG5itotR4/6sjRonnj84ZWX0fjAUd7dGh4vAutssOxU3pG9v6Mh3vpCK6pin8atJ8Mvk+bzWk3OLTy2G/Re2X6R+g6AAAAAAAAAAAAAAAAAAAAAAAAAAAA0HB/AXXoIcYGNdXlAAAAAElFTkSuQmCC"
              />
              <p className="text-white-500">Uizard</p>
            </div>
          </Badge>
          <Badge color="red" size="sm">
            <div className="flex justify-around items-center w-72 h-44 bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300">
              <img
                className="w-24 h-24"
                src="https://static.vecteezy.com/system/resources/previews/020/975/579/original/wordpress-logo-wordpress-icon-transparent-free-png.png"
              />
              <p className="text-blue-400">WordPress</p>
            </div>
          </Badge>
          <Badge color="teal" size="sm">
            <div className="flex justify-around items-center w-72 h-44 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600">
              <img
                className="w-26 h-24"
                src="https://asset.brandfetch.io/idHZgJfPO0/idn3pUPkLM.png"
              />
              <p className="text-gray-900">Ecwid</p>
            </div>
          </Badge>
        </div>
      </section>

      {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}

      <section class="mt-28 mb-36 mx-16 text-neutral-700 dark:text-neutral-300">
        <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
          <h1 className="text-center my-16 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            <span> Testimonials</span>
          </h1>
          {/* <p class="my-6 pb-2 md:mb-12 md:pb-0">
            This is what people say about me
          </p> */}
        </div>

        {/* <!--First Testimonial--> */}
        <div class="grid gap-6 text-center md:grid-cols-3 font-light">
          <div>
            <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src="images/dolores.jpeg" />
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">Dolores Aimee</h4>
                <hr />
                <p class="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  In the realm of UI/UX, Rabbi is a visionary architect,
                  building bridges between functionality and aesthetics that
                  captivate users and clients alike.
                </p>
              </div>
            </div>
          </div>

          {/* <!--Second Testimonial--> */}
          <div>
            <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div class="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src="images/Hamdiyah.jpg" />
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">Hamdia Ibrahim</h4>
                <hr />
                <p class="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  Working alongside with Rabbi is like having a design compass; he
                  always guides us toward user-centric solutions with his
                  brilliant UI/UX insights.
                </p>
              </div>
            </div>
          </div>

          {/* <!--Third Testimonial--> */}
          <div>
            <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div class="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src="images/shadey.jpeg" />
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">Natanial Shadey</h4>
                <hr />
                <p class="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  Collaborating with Rabbi is a breeze; his intuitive designs
                  and keen eye for user experience elevate every project. He's
                  amazing👌
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* forms subscription */}
      <section>
        <form 
        action="https://getform.io/f/pagkkdna"
        method="POST"
        className="max-w-lg lg:mx-auto mb-16 mx-7 grid grid-col-1  ">
          <div className="mb-5">
            {/* <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label> */}
            <h1 className="text-4xl font-serif text-center mb-2 font-bold">
              Stay In<span> Touch</span>
            </h1>
            <hr className="mb-8" />
            <p className="mb-14 tracking-widest font-light text-center">
              Thank you for visiting my portfolio website! I value your interest and would
              love you to stay connected. Drop your email and let's link up😎 
              <br />
              See ya!👋
            </p>
            
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              className="shadow-sm placeholder-gray-300 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>

          {/* <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label
              for="terms"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Get all the latest updates
            </label>
          </div> */}
          <button
            type="submit"
            className=" w-32 mx-24 lg:ml-48 mb-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-7 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Link-up
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};
// 👋😎
export default About;
