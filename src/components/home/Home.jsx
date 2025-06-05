import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div>
      {/* navbar section */}
      <Navbar />
      {/* home section */}
      <section className="bg-slate-50 mt-4 dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto pl-2 place-self-center lg:col-span-7">
            <h1 className="containa max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              <Typewriter
                words={["Hi, I'm Rabbi Kojo Dumgyan"]}
                loop={1}
                // cursor
                cursorStyle="_"
                typeSpeed={40}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 pb-8">
              I am a UI/UX designer and a frontend developer based in Ghana, and
              I am very passionate and dedicated to my work.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-purple-500  text-white mr-3 border-gray-300 rounded-lg hover:bg-black focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Hire Me
            </Link>
            {/* <a
              href="https://knowrabbi.com/wp-content/uploads/2023/08/New-CV.pdf"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Get CV
            </a> */}
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Get Resume
              </button>
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://www.training.com.au/wp-content/uploads/technologist-400px-transparent-02.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>

      {/* about section */}
      <section className="bg-slate-100 rounded-xl  dark:bg-gray-900 px-10 max-w-[90%] my-16 lg:my-20 md:flex justify-between items-center mx-auto space-y-14">
        <div className=" py-9 lg:pr-10">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/developer-working-on-laptop-4550336-3779144.png" />
        </div>
        <div className="py-10">
          <h1 className="max-w-2xl mb-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Let Talk <span>About Me</span>
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            <bold>
              <strong>Frontend Developer | UX/UI Designer</strong>
            </bold>
            <br />
            As a frontend developer, I possess a diverse skill set, excelling in both frontend and UI technologies. On the frontend, I bring designs to life by converting UI designs into responsive web applications using HTML, CSS, and JavaScript, together with modern frameworks and libraries like Bootstrap, Tailwind, and Reactjs.
          </p>
          {/* <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            <bold>
              <strong>UX/UI Designer</strong>
            </bold>
            <br />I have designed multiple landing pages and have created design
            systems as well
          </p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            <bold>
              <strong>WordPress Developer</strong>
            </bold>
            <br />I have experience developing fast and optimised ecommerce
            website with wordPress and Ecwid
          </p> */}

          <Link
            to="/About"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            ...Learn more
          </Link>
        </div>
      </section>

      {/* experience section */}
      <section className="bg-slate-50 rounded-xl space-x-6  dark:bg-gray-900 px-10 max-w-[100%] md:grid-rows-4 md:flex items-center mx-auto my-16 lg:my-20 md:pr-16  md:my-9 space-y-8">
        <div class=" grid gap-14 grid-cols-3  md:gap-y-36 md:gap-16  md:grid-cols-4  md:pb-16 sm:grid-rows-3 m-auto md:size-96 ">
          <figure className=" ">
            <img
              src="https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png"
              alt="HTML"
            />
            <figcaption className="text-center pt-1 ">HTML</figcaption>
          </figure>
          <figure className="">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8WHiflZyXffrnb_rsoHv9OSZuNrC9kbyLg&usqp=CAU"
              alt="CSS"
            />
            <figcaption className="text-center pt-1 ">CSS</figcaption>
          </figure>
          <figure className="size-16  md:size-12 ">
            <img
              className=" "
              src="data:image/png;base64,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"
              alt="JavaScript"
            />
            <figcaption className="text-center pt-1 ">JS</figcaption>
          </figure>
          <figure className=" ">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              alt="React"
            />
            <figcaption className="text-center pt-1 ">React</figcaption>
          </figure>
          <figure className="pt-2 ">
            <img
              src="data:image/jpeg;base64,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"
              alt="Vite"
            />
            <figcaption className="text-center pt-1 ">Vite</figcaption>
          </figure>
          <figure className="md:size-14 ">
            <img
              src="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png"
              alt="Bootstrap"
            />
            <figcaption className="text-center pb-1">Bootstrap</figcaption>
          </figure>
          <figure className=" ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsymfon7-t1D7kzm9xJTrPp1xuRH8Hk5Bsw&usqp=CAU"
              alt="Tailwind"
            />
            <figcaption className="text-center pt-1 ">Tailwind</figcaption>
          </figure>
          <figure className="pt-1 ">
            <img
              src="data:image/jpeg;base64,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"
              alt="Chakra"
            />
            <figcaption className="text-center pt-1 ">Chakra</figcaption>
          </figure>
          <figure className=" ">
            <img
              src="https://brandlogos.net/wp-content/uploads/2022/05/figma-logo_brandlogos.net_6n1pb.png"
              alt="Figma"
            />
            <figcaption className="text-center pt-1 ">Figma</figcaption>
          </figure>
          <figure className=" ">
            <img
              src="data:image/png;base64,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"
              alt="Ecwid"
            />
            <figcaption className="text-center pt-1 ">Ecwid</figcaption>
          </figure>
          <figure className=" ">
            <img
              src="data:image/png;base64,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"
              alt="WordPress"
            />
            <figcaption className=" pt-1 ">WordPress</figcaption>
          </figure>
          <figure className=" ">
            <img
              src="data:image/png;base64,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"
              alt="Uizard"
            />
            <figcaption className=" pt-1 ml-3 md:ml-1">Uizard</figcaption>
          </figure>
          <figure className=" ">
            <img
              src="https://i.pinimg.com/474x/e3/82/52/e3825274a94bafc3f0282cae29c19972.jpg"
              alt="Next Js"
            />
            <figcaption className="text-center pt-1 ">Nextjs</figcaption>
          </figure>
          <figure className=" ">
            <img
              src="https://i.pinimg.com/474x/36/4f/53/364f53232049c4d4cb597c3179b306df.jpg"
              alt="Wix"
            />
            <figcaption className=" pt-1 pt-2 ml-5 md:ml-2">Wix</figcaption>
          </figure>
          <figure className=" ">
            <img
              src="https://i.pinimg.com/474x/cb/77/14/cb771485ae8aefc463f1144f8f5fb356.jpg"
              alt="Google Site"
            />
            <figcaption className=" pt-1 ml-2 md:ml-1">Google Site</figcaption>
          </figure>
        </div>

        <div className="align-center md:text-pretty py-7 pac">
          <h1 className="max-w-2xl mb-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Work<span> Experience</span>
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            <bold>
              <strong>Frontend Developer</strong>
              <i>Freelance</i>
              <p className="duration">May, 2022 - Present</p>
            </bold>
            I build and maintain frontend webpages using HTML,
            CSS, and JavaScript together with modern frameworks and libraries like Bootstrap, Tailwind, Nextjs, Reactjs.
          </p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            <bold>
              <strong>UI/UX Designer</strong>
              <i>Dreamosoft</i>
              <p className="duration">Mar, 2024 - Present</p>
            </bold>
            I collaborate with cross-functional teams to design and develop user-centered digital products.
          </p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            <bold>
              <strong>E-commerce Developer</strong>
              <i>Freelance</i>
              <p className="duration">Jan, 2022 - Dec, 2023</p>
            </bold>
            With expertise in platforms like WordPress, Ecwid, Wix, and Google Sites, I design, develop, and customize e-commerce websites tailored to meet specific business needs
          </p>
          <Link
            to="projects"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            View designs
          </Link>
        </div>
      </section>

      {/* services section */}
      <section className="px-10">
        <h1 className="text-center my-16 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          My<span> Services</span>
        </h1>
        <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="lg:h-80 rounded-t-lg"
                src="https://www.sitelypro.com/cdn/shop/files/home_banner_1400x_139db386-0229-4fdd-8851-eba716605d47_1600x.jpg?v=1639048218"
                alt="Skyscrapers"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Web design
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                I build and deploy modern static and dynamic responsive websites
                with HTML, CSS, JavaScript, and other front-end technologies
                like React, Tailwind, and Bootstrap.
              </p>
            </div>
            <div className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
              <small>Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="lg:h-80 rounded-t-lg"
                src="https://www.springboard.com/blog/wp-content/uploads/2021/03/4-Reasons-Why-UI-Skills-Are-Critical-to-a-UX-Designer-scaled-scaled.jpg"
                alt="Los Angeles Skyscrapers"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                UX/UI design
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                I create more visually appealing user interface designs for your
                apps and webpages, making them very intuitive and more
                user-friendly for all users. Let me help create high-fidelity
                prototypes and mockups for your frontend developers.
              </p>
            </div>
            <div className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
              <small>Last updated a day ago</small>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="lg:h-80 rounded-t-lg"
                src="https://morebucks.de/wp-content/uploads/2021/01/Wordpress-plugins.jpg"
                alt="Palm Springs Road"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                WordPress developer
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                I design and implement websites for companies using the
                WordPress creation tool.
              </p>
            </div>
            <div className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
              <small>Last updated 3 hours ago</small>
            </div>
          </div>
        </div>
      </section>

      {/* carousel section */}
      <section>
        <div className="my-16 lg:my-20">
          <h1 className=" text-center mb-1 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            My<span> Portfolio</span>
          </h1>
          {/* <p className="text-center">A couple of projects worked on over the years</p> */}
        </div>
        <div className="grid h-96 grid-cols-1 lg:grid-cols-2 gap-4 lg:h-96 ">
          <Carousel indicators={true}>
            <img
              src="/images/screen5.png"
              alt="..."
              className="h-full lg:h-full"
            />
            <img
              src="/images/screen6.png"
              alt="..."
              className="h-full lg:h-full"
            />
            <img
              src="/images/screen7.png"
              alt="..."
              className="h-full lg:h-full"
            />
            <img
              src="/images/frugies-home.png"
              alt="..."
              className="h-full lg:h-full"
            />
          </Carousel>
          <Carousel indicators={true}>
            <img
              src="/newImages/23.jpeg"
              alt="..."
              className="h-full lg:h-full"
            />
            <img
              src="/newImages/02.png"
              alt="..."
              className="h-full lg:h-full"
            />
            <img
              src="/newImages/08.png"
              alt="..."
              className="h-full lg:h-full"
            />
            <img
              src="/newImages/19.jpeg"
              alt="..."
              className="h-full lg:h-full"
            />
          </Carousel>
        </div>
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 text-center font-bold py-4">
          <a
            href="#"
            class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mr-2 mb-2"
          >
            <svg
              class="w-2.5 h-2.5 me-1.5"
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
          </a>
          <a
            href="#"
            class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 ml-2 mb-2"
          >
            <svg
              class="w-2.5 h-2.5 me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
            </svg>
            Design
          </a>

          {/* <figcaption>React</figcaption> */}
          {/* <figcaption>Figma</figcaption> */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

/* <section>
        
        <div
          data-te-lightbox-init
          id="lightbox"
          class="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0"
        >
          <div class="h-full w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
              data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
              data-te-caption="Image caption 1"
              alt="Table Full of Spices"
              class="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
          </div>
          <div class="h-full w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp"
              data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/2.webp"
              data-te-caption="Image caption 2"
              alt="Winter Landscape"
              class="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
          </div>
          <div class="h-full w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp"
              data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/3.webp"
              data-te-caption="Image caption 3"
              alt="View of the City in the Mountains"
              class="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
          </div>
        </div>
        <div class="mt-3 text-center">
          <button
            type="button"
            id="lightboxToggler"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Open second image
          </button>
        </div>
      </section> */
