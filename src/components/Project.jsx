import Techs from "./Techs"
import "../assets/css/techs.css";
function Project({data}){


 
console.log(data);
const projects = data.map((value) => (
  <div key={value.title} className="space-y-2 shrink-0 flex flex-col  max-w-md shadow-xl shadow-gray-400  bg-primary text-white rounded-md ">
  <div className="object-cover  flex  flex-col md:flex-row  ">
    <div className="basis-3/5 relative">
     <div className="imageClip  back md:absolute bg-gradient-to-l from-black  to-black h-[120px] w-[270px]  opacity-50 inset-0 z-10">
      <img src={value.image} alt="" />

     </div>
   </div>
    <div className="basis-2/5 px-3 md:flex flex-col justify-center items-center">
      <h1 className="text-md  text-white">About project</h1>
       <p className=" text-white text-sm"> {value.description}</p>
    </div>
  </div>
 <div className="flex p-2 space-x-2 flex-grow flex-col space-y-2 nd:space-y-0 md:flex-row">
  
  <div className="flex justify-between flex-col space-y-2 text-secondary basis-1/2">
    <a href={value.link} className="cursor-pointer"> 
      <h1 className="text-md text-white "><span>Project name </span> 
      <span className=" text-secondary underline underline-offset-4 uppercase text-xs">
       {value.title}
      </span>
    </h1> 
    </a>
     <div className="text-xs text-white flex space-x-1 items-center ">
      <svg className="text-secondary" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M7.7 15.5L7 14.2l4-2.3V7h1.5v5.8l-4.8 2.7Z"/></svg>
       <span>Hosted 12/3/2019</span> 
    </div>
  </div>
  <div className="flex flex-col md:basis-1/2 ">
      <h1 className="text-md justify-self-center  text-white ">Using</h1>
      <div className="grid-cols-2 grid">
      <Techs data={value.projectTechs}/>
    </div>
    </div>
      
  </div>
 </div>

));

    return(
        <>
        {projects}
        </>
        )
}

export default Project;