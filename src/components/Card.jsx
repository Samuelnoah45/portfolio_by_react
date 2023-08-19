function Card({ data, Icon, name }) {
  const Techs = data.map((value) => (
    <h4 key={value.tech_name} className="flex items-center space-x-3">
      <svg width="10" height="10" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round" // Corrected attribute name
          strokeLinejoin="round" // Corrected attribute name
          strokeWidth="2" // Corrected attribute name
          d="m13 5l7 7l-7 7M5 5l7 7l-7 7"
        />
      </svg>
      <span>{value.tech_name}</span>
    </h4>
  ));


  return (
    <>
      <div className="overflow-hidden relative flex flex-col space-y-3 w-72 h-72 rounded-lg border-4 border-primary md:hover:scale-110 ease-out  duration-300 bg-primary text-white p-4 ">
        <div className="flex space-x-4">
          <span className="text-4xl text-secondary">{Icon}</span>
          <span className="flex justify-center items-center text-xl font-bold ">
            <p className="uppercase"> {name}</p>
          </span>
        </div>
        <div className="text-lg max-h-36 h-36  flex flex-col flex-wrap">
          {Techs}
        </div>
        {/* <!-- <span className="z-10 w-1 h-20 absolute right-0 -bottom-12 bg-secondary -rotate-45"></span>
            <span className="z-10 w-1 h-20 absolute right-0 -bottom-[60px] bg-secondary -rotate-45"></span> --> */}
        <span className="z-10 w-1 h-20 absolute right-0 -bottom-9 bg-secondary -rotate-45"></span>
        <span className="z-10 w-1 h-20 absolute right-0 -bottom-6 bg-third -rotate-45"></span>
        <span className="z-10 w-1 h-20 absolute right-0 -bottom-12 bg-third -rotate-45"></span>
      </div>
    </>
  );
}

export default Card;
