import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import ErrorPage from "../components/ErrorPage";
import MagicButton from "../components/inputs/MagicButton";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Project from "../components/Project";
import ChildComponent from "../components/inputs/ChildComponent";
import "../assets/css/home.css";
import Contact from "../components/Contact";
// const query = loader('../query/personalinfo.gql');
const GET_USERS = gql`
  query MyQuery {
    personaLInfo {
      first_name
      last_name
      email
      github
      facebook
      linked_in
      instagram
      telegram
      phone
    }
    back: technicalSkill(where: { tech_categroy: { _eq: "back end" } }) {
      tech_name
    }
    front: technicalSkill(where: { tech_categroy: { _eq: "front end" } }) {
      tech_name
    }
    other: technicalSkill(where: { tech_categroy: { _eq: "other" } }) {
      tech_name
    }
    UI: technicalSkill(where: { tech_categroy: { _eq: "UI" } }) {
      tech_name
    }
    personal_skill {
      skill_name
      skill_value
    }
    projects {
      title
      link
      image
      description
      projectTechs {
        technicalSkill {
          tech_name
        }
      }
    }
    avbackend: technicalSkill_aggregate(
      where: { tech_categroy: { _eq: "back end" } }
    ) {
      aggregate {
        avg {
          skill_value
        }
      }
    }
    avother: technicalSkill_aggregate(
      where: { tech_categroy: { _eq: "other" } }
    ) {
      aggregate {
        avg {
          skill_value
        }
      }
    }
    avfrontend: technicalSkill_aggregate(
      where: { tech_categroy: { _eq: "front end" } }
    ) {
      aggregate {
        avg {
          skill_value
        }
      }
    }
    avUI: technicalSkill_aggregate(where: { tech_categroy: { _eq: "UI" } }) {
      aggregate {
        avg {
          skill_value
        }
      }
    }
  }
`;

function downloadResume() {
  console.log("resume");
  fetch(
    "https://res.cloudinary.com/blue-sky/image/upload/v1689512303/finalCV_sk1hsy.pdf"
  ).then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "samuel noah.pdf";
      alink.click();
    });
  });
}
var isInViewport = function (elem) {
  var distance = elem.getBoundingClientRect();
  return (
    distance.bottom >= 0 &&
    distance.right >= 0 &&
    distance.top <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
function App() {
  const [count, setCount] = useState(0);

  // Callback function to update the childData state in the parent
  const handleChildDataChange = (event) => {
    setChildData(event.target.value); // Update the parent's state with the new value
  };
  const { loading, error, data } = useQuery(GET_USERS);
  useEffect(() => {
    var findMe1 = document.querySelectorAll(".cardContainer1");
    var findMe2 = document.querySelectorAll(".cardContainer2");
    var findMe3 = document.querySelectorAll(".cardContainer3");
    var findMe4 = document.querySelectorAll(".cardContainer4");

    window.addEventListener(
      "scroll",
      function (event) {
        // add event on scroll
        findMe1.forEach((element) => {
          //for each .thisisatest
          if (isInViewport(element)) {
            //if in Viewport

            for (var i = 0; i < element.children.length; i++) {
              element.children[i].classList.add("animateu");
            }
          }
        });
        findMe2.forEach((element) => {
          //for each .thisisatest
          if (isInViewport(element)) {
            //if in Viewport

            for (var i = 0; i < element.children.length; i++) {
              element.children[i].classList.add("animater");
            }
          }
        });
        findMe3.forEach((element) => {
          //for each .thisisatest
          if (isInViewport(element)) {
            //if in Viewport

            for (var i = 0; i < element.children.length; i++) {
              element.children[i].classList.add("animateu");
            }
          }
        });
        findMe4.forEach((element) => {
          //for each .thisisatest
          if (isInViewport(element)) {
            //if in Viewport

            for (var i = 0; i < element.children.length; i++) {
              element.children[i].classList.add("animater");
            }
          }
        });
      },
      false
    );
  });
  function doOnScroll(element) {
    var scrollTo = document.getElementById(`${element}`);
    scrollTo.scrollIntoView({ behavior: "smooth", duration: 10 });
  }

  const frontIcon = (
    <svg width="50" height="50" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m10 20l4-16m4 4l4 4l-4 4M6 16l-4-4l4-4"
      />
    </svg>
  );
  const backIcon = (
    <svg width="44" height="52" viewBox="0 0 384 512">
      <path
        fill="currentColor"
        d="M162.1 257.8c-7.812-7.812-20.47-7.812-28.28 0l-48 48c-7.812 7.812-7.812 20.5 0 28.31l48 48C137.8 386.1 142.9 388 148 388s10.23-1.938 14.14-5.844c7.812-7.812 7.812-20.5 0-28.31L128.3 320l33.86-33.84c6.94-7.86 6.94-20.46-.06-28.36zM365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.006 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6c0-16.9-6.7-33.2-18.7-45.22zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160V128c0 17.67 14.33 32 32 32h79.1v288zM221.9 257.8c-7.812 7.812-7.812 20.5 0 28.31L255.7 320l-33.86 33.84c-7.812 7.812-7.812 20.5 0 28.31C225.8 386.1 230.9 388 236 388s10.23-1.938 14.14-5.844l48-48c7.812-7.812 7.812-20.5 0-28.31l-48-48C242.3 250 229.7 250 221.9 257.8z"
      />
    </svg>
  );

  const otherIcon = (
    <svg width="50" height="50" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M7.73 11.93c0 1.72-.02 1.83-.23 2.07c-.19.17-.38.23-.76.23l-.51.01l-.03-2.27l-.02-2.27h.52c.35 0 .6.07.77.21c.24.21.26.25.26 2.02M22 7.5v9c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2v-9c0-1.11.89-2 2-2h16c1.11 0 2 .89 2 2M8.93 11.73c-.03-1.84-.05-1.99-.29-2.39c-.4-.68-.85-.84-2.36-.84H5v7h1.21c1.33 0 1.89-.17 2.29-.71c.41-.53.5-.98.43-3.06m4.19-3.23h-1.48c-1.49 0-1.5 0-1.71.28S9.7 9.21 9.7 12v2.96l.27.27c.25.27.31.27 1.71.27h1.44v-1.19l-1.09-.04l-1.1-.03V12.6l.68-.03l.66-.04v-1.19h-1.39V9.7h2.24V8.5m5.88.06c0-.06-.3-.06-.66-.06l-.68.06l-.59 2.35c-.38 1.48-.62 2.27-.67 2.13c-.08-.27-1.14-4.44-1.14-4.49c0-.05-.31-.05-.68-.05h-.69l.41 1.55c.2.87.59 2.28.81 3.15c.34 1.35.46 1.65.75 1.94c.2.22.45.36.61.36c.33 0 .76-.34.9-.73C17.5 14.5 19 8.69 19 8.56Z"
      />
    </svg>
  );

  const UIIcon = (
    <svg width="40" height="40" viewBox="0 0 24 24">
      <path
        d="M14.58 3H22v16.67L14.58 3M9.42 3H2v16.67L9.42 3M12 9.17l4.67 10.5H13.5l-1.33-3.34H8.75L12 9.17z"
        fill="currentColor"
      />
    </svg>
  );

  //  when loading is true show loading animation
  if (loading)
    return (
      <div v-if="false" className=" bg-primary h-screen w-full">
        <div className="lds-roller absolute top-[50%] left-[50%]">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  //  when error is true show error message
  if (error) return <ErrorPage />;

  const {
    personaLInfo,
    back,
    front,
    other,
    UI,
    personal_skill,
    projects,
    avbackend,
    avother,
  } = data;
  return (
    <>
      <div>
        <NavBar NavScroll={doOnScroll}></NavBar>
      </div>

      <div>
        <div
          className="md:h-screen bg-primary grid grid-cols-1 md:grid-cols-3"
          id="home"
        >
          <div className="mt-24 flex flex-col items-center justify-center  ">
            <p className="flex flex-col md:space-y-2 space-y-0">
              <span className="animateu hello md:p-4 p-1 space-x-2 font-DynaPuff  md:text-5xl text-3xl md:text-white text-primary">
                <span className="mr-2">Hello! I'm</span>
                <span className="text-secondary space-x-2">
                  <span className="mr-2"> {personaLInfo[0].first_name}</span>
                  <span className="mr-2"> {personaLInfo[0].last_name}</span>
                </span>
              </span>
              <br />
              <span className="animateu web p-4 font-Bangers md:text-white text-primary md:text-4xl text-2xl">
                web designer <span>&</span> developer
              </span>
            </p>
            <div className="animateu resume">
              <div className="text-primary space-x-2 font-bold text-lg border-4 border-secondary hover:bg-primary hover:text-white w-56 flex justify-center items-center bg-secondary rounded p-2">
                <MagicButton
                  click={downloadResume}
                  name="Download resume"
                ></MagicButton>

                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M14.31 12.41L13 13.66V8a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a.54.54 0 0 0 .16-.1a.49.49 0 0 0 .15-.1l3-2.86a1 1 0 0 0-1.38-1.45Z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative flex shrink-0 z-0">
            <div className="flex items-end">
              <img
                className="animatel object-contain"
                src="https://res.cloudinary.com/blue-sky/image/upload/v1690302797/lastpic_nioodd.png"
                alt=""
              />
              <div className="f animater lex flex-col h-scree justify-end mb-10 social space-y-10">
                <div className="hidden animater">
                  <a>
                    <svg width="31" height="32" viewBox="0 0 496 512">
                      <path
                        fill="currentColor"
                        d="M248 8C111.033 8 0 119.033 0 256s111.033 248 248 248s248-111.033 248-248S384.967 8 248 8Zm114.952 168.66c-3.732 39.215-19.881 134.378-28.1 178.3c-3.476 18.584-10.322 24.816-16.948 25.425c-14.4 1.326-25.338-9.517-39.287-18.661c-21.827-14.308-34.158-23.215-55.346-37.177c-24.485-16.135-8.612-25 5.342-39.5c3.652-3.793 67.107-61.51 68.335-66.746c.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608 69.142q-14.845 10.194-26.894 9.934c-8.855-.191-25.888-5.006-38.551-9.123c-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7 18.45-13.7q108.446-47.248 144.628-62.3c68.872-28.647 83.183-33.623 92.511-33.789c2.052-.034 6.639.474 9.61 2.885a10.452 10.452 0 0 1 3.53 6.716a43.765 43.765 0 0 1 .417 9.769Z"
                      />
                    </svg>
                  </a>
                </div>

                <div className="hidden animater">
                  <a href={personaLInfo[0].instagram} target="_blank">
                    <svg width="28" height="32" viewBox="0 0 448 512">
                      <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      />
                    </svg>
                  </a>
                </div>

                <div className="hidden animater">
                  <a href={`mailto:${personaLInfo[0].email}`}>
                    <svg width="25" height="32" viewBox="0 0 400 512">
                      <path
                        fill="currentColor"
                        d="M324 319.8h-13.2v34.7c-24.5 23.1-56.3 35.8-89.9 35.8c-73.2 0-132.4-60.2-132.4-134.4c0-74.1 59.2-134.4 132.4-134.4c35.3 0 68.6 14 93.6 39.4l62.3-63.3C335 55.3 279.7 32 220.7 32C98 32 0 132.6 0 256c0 122.5 97 224 220.7 224c63.2 0 124.5-26.2 171-82.5c-2-27.6-13.4-77.7-67.7-77.7zm-12.1-112.5H205.6v89H324c33.5 0 60.5 15.1 76 41.8v-30.6c0-65.2-40.4-100.2-88.1-100.2z"
                      />
                    </svg>
                  </a>
                </div>

                <div className="hidden animater">
                  <a href={personaLInfo[0].facebook} target="_blank">
                    <svg width="32" height="32" viewBox="0 0 512 512">
                      <path
                        fill="currentColor"
                        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="hidden animater">
                  <a href={personaLInfo[0].linked_in} target="_blank">
                    <svg width="28" height="32" viewBox="0 0 448 512">
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="hidden animater">
                  <a href={personaLInfo[0].github} target="_blank">
                    <svg width="31" height="32" viewBox="0 0 496 512">
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="min:h-screen py-10 flex flex-col space-y-6 overflow-hidden justify-evenly items-center relative"
        id="service"
      >
        <div className="absolute top-[30%]  w-full min-h-screen overflow-hidden rotate-12">
          <img className="object-contain" src="/src/assets/waves2.svg" alt="" />
        </div>
        <div className="w-full flex justify-center">
          <span className="md:text-4xl  text-2xl font-Bangers text-primary">
            Skills and Stacks
          </span>
        </div>
        <div className=" md:w-[63%] flex justify-center">
          <div className="grid md:grid-cols-2 w-full gap-10 place-items-center">
            <div className="cardContainer1">
              <Card
                className="card"
                data={front}
                Icon={frontIcon}
                name="Front-end"
              ></Card>
            </div>
            <div className="cardContainer2">
              <Card
                className="card"
                data={back}
                Icon={backIcon}
                name="Back-end"
              ></Card>
            </div>
            <div className="cardContainer3">
              <Card
                className="card"
                data={other}
                Icon={otherIcon}
                name="Other"
              ></Card>
            </div>
            <div className="cardContainer4">
              <Card className="card" data={UI} Icon={UIIcon} name="UI"></Card>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- soft skill --> */}

      <div className="pt-20  min-h-screen bg-primary relative z-10" id="about">
        <div className="w-full flex justify-center mb-10">
          <span className="text-4xl font-Bangers text-white">About Me</span>
        </div> 
        

        <div className=" flex justify-center items-center text-white z-50">
          <div className="md:w-[50%]  text-xl px-3 text-justify  space-y-10">
            <p className="animated">
              I'm a passionate website and mobile app developer with a flair for
              UI/UX design. Over the past 5 years, I have honed my skills and
              gained valuable experience in creating user-friendly and visually
              appealing digital solutions.
            </p>
            <p>
              My journey in the world of development and design has been a
              thrilling one, allowing me to work on a diverse range of projects
              and collaborate with clients from various industries. Whether it's
              crafting intuitive user interfaces or crafting efficient code, I
              take pride in delivering top-notch results that exceed
              expectations.
            </p>
            <p>
              During my professional journey, I've had the opportunity to work
              with some remarkable companies. Notably, I've been part of the
              dynamic teams at Minab IT Solution and Ans Akselet, contributing
              my expertise to their cutting-edge projects. These experiences
              have further enriched my knowledge and provided me with valuable
              insights into the latest industry trends and best practices.
            </p>
            <p>
              If you're looking for a seasoned developer and designer who is
              committed to creating exceptional digital experiences, I'd love to
              hear from you. Let's collaborate on your next project and bring
              your ideas to life! Thank you for visiting my portfolio, and I'm
              excited to connect with you!
            </p>
          </div>
        </div>
      </div>
      <div className="py-20" id="projects">
        <div className="w-full flex justify-center">
          <span className="text-4xl font-Bangers text-primary">
            My Complete Projects
          </span>
        </div>
        <div
          v-if="info.data.projects"
          // :className="[
          //   info.data.projects.length > 4
          //     ? 'justify-center'
          //     : 'justify-center pl-20',
          // ]"
          className="flex md:flex-row flex-col md:space-x-10 space-y-5 space-x-0 md:space-y-0 overflow-scroll p-10"
        >
          <Project data={projects}></Project>
        </div>
      </div>

      <div className="md:px-32">
        <Contact></Contact>
      </div>

      {/* <!-- <footer></footer> --> */}
      <div
        id="contact"
        className="p-36 flex flex-col justify-center items-center bg-primary space-y-10"
      >
        <h1 className="justify-self-center text-3xl font-DynaPuff uppercase text-secondary">
          Samuel noah
        </h1>
        <div className="space-y-5">
          <div className="text-white w-full">
            <span>+251945003939|+251925894468</span>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <a href="https://t.me/samuelnoah45">
              <svg
                className="text-white hover:text-secondary"
                width="31"
                height="32"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M248 8C111.033 8 0 119.033 0 256s111.033 248 248 248s248-111.033 248-248S384.967 8 248 8Zm114.952 168.66c-3.732 39.215-19.881 134.378-28.1 178.3c-3.476 18.584-10.322 24.816-16.948 25.425c-14.4 1.326-25.338-9.517-39.287-18.661c-21.827-14.308-34.158-23.215-55.346-37.177c-24.485-16.135-8.612-25 5.342-39.5c3.652-3.793 67.107-61.51 68.335-66.746c.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608 69.142q-14.845 10.194-26.894 9.934c-8.855-.191-25.888-5.006-38.551-9.123c-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7 18.45-13.7q108.446-47.248 144.628-62.3c68.872-28.647 83.183-33.623 92.511-33.789c2.052-.034 6.639.474 9.61 2.885a10.452 10.452 0 0 1 3.53 6.716a43.765 43.765 0 0 1 .417 9.769Z"
                />
              </svg>
            </a>
            <a href="https://www.instagram.com/sami_n0ah/">
              <svg
                className="text-white hover:text-secondary"
                width="28"
                height="32"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
            <a href="mailto:samuelnoah668@gmail.com">
              <svg
                className="text-white hover:text-secondary"
                width="25"
                height="32"
                viewBox="0 0 400 512"
              >
                <path
                  fill="currentColor"
                  d="M324 319.8h-13.2v34.7c-24.5 23.1-56.3 35.8-89.9 35.8c-73.2 0-132.4-60.2-132.4-134.4c0-74.1 59.2-134.4 132.4-134.4c35.3 0 68.6 14 93.6 39.4l62.3-63.3C335 55.3 279.7 32 220.7 32C98 32 0 132.6 0 256c0 122.5 97 224 220.7 224c63.2 0 124.5-26.2 171-82.5c-2-27.6-13.4-77.7-67.7-77.7zm-12.1-112.5H205.6v89H324c33.5 0 60.5 15.1 76 41.8v-30.6c0-65.2-40.4-100.2-88.1-100.2z"
                />
              </svg>
            </a>
            <a href="https://www.facebook.com/sami.nofolze">
              <svg
                className="text-white hover:text-secondary"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                />
              </svg>
            </a>
            <a href="http://www.linkedin.com/in/samuel-noah-21664a219">
              <svg
                className="text-white hover:text-secondary"
                width="28"
                height="32"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"
                />
              </svg>
            </a>
            <a href="https://github.com/Samuelnoah45/">
              <svg
                className="text-white hover:text-secondary"
                width="31"
                height="32"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </a>
          </div>
          <div>
            <span className="text-white">Copyright 2022 |Hosted on vercel</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
