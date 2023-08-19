import MagicButton from "./inputs/MagicButton";

function NavBar(props) {
  return (
    <>
      <nav className="z-50 md:text-xl text-xs w-full bg-primary text-white p-4 fixed flex space-x-6">
        <div className="basis-2/6">
          <div className="flex items-center justify-center cursor-pointer">
            {/* <img className="w-5 md:w-9" src="" alt="/favicon.ico" /> */}
            <span className="font-bold text-white">Sami</span>
          </div>
        </div>
        <div className="flex items-center basis-2/6   space-x-3 justify-between">
          <MagicButton
            click={props.NavScroll}
            className="capitalize hover:text-secondary font-semibold"
            name="home"
          ></MagicButton>

          <MagicButton
            click={props.NavScroll}
            className="capitalize hover:text-secondary font-semibold"
            name="service"
          ></MagicButton>
          <MagicButton
            click={props.NavScroll}
            className="capitalize hover:text-secondary font-semibold"
            name="projects"
          ></MagicButton>
          <MagicButton
            click={props.NavScroll}
            className="capitalize hover:text-secondary font-semibold"
            name="about"
          ></MagicButton>
          <MagicButton
            click={props.NavScroll}
            className="capitalize hover:text-secondary font-semibold"
            name="contact"
          ></MagicButton>
        </div>
        <div className="basis-1/5"></div>
      </nav>
    </>
  );
}

export default NavBar;
