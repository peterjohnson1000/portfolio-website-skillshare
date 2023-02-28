import projectimg1 from "../Assets/project-web-design.png.png" 
import projectimg2 from "../Assets/project-fire.png.png" 
import projectimg3 from "../Assets/project-maps.png.png" 

const Projects = () => {
    return (
        <div className="text-white">
            <p className="font-bold text-2xl smm:text-center">Recent <span className="text-blueColor">Projects</span></p>
            <div className="">

                <div className="bg-[#1E293B] flex p-5 rounded-md my-5 lg:flex-col">
                    <div className="mr-5 w-[150px] lg:mr-0 lg:flex lg:justify-center lg:w-full">
                        <img className="h-32" src={projectimg1} />
                    </div>
                    <div className="w-[800px] lg:w-full lg:text-center">
                        <p className="font-bold">Project 1</p>
                        <div className="flex py-5 lg:justify-center lg:flex-wrap">
                            <p className="ml-5 px-2 rounded-md bg-[#E879F9] text-[#701A75]">Astro.js</p>
                            <p className="ml-3 px-2 rounded-md bg-[#A3E635] text-[#365314]">Web Desing</p>
                            <p className="ml-3 px-2 rounded-md bg-[#38BDF8] text-[#0C4A6E]">Tailwindcss</p>
                            <p className="ml-3 px-2 rounded-md bg-[#FB7185] text-[#881337]">TypeScript</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.
                                Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio 
                                id enim.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-[#1E293B] flex p-5 rounded-md my-5 lg:flex-col">
                    <div className="mr-5 w-[150px] lg:mr-0 lg:flex lg:justify-center lg:w-full">
                        <img className="h-32" src={projectimg2} />
                    </div>
                    <div className="w-[800px] lg:w-full lg:text-center">
                        <p className="font-bold">Project 2</p>
                        <div className="flex py-5 lg:justify-center">
                            <p className="ml-5 px-2 rounded-md bg-[#E879F9] text-[#701A75]">Astro.js</p>
                            <p className="ml-3 px-2 rounded-md bg-[#818CF8] text-[#312E81]">Bootstrap</p>
                            <p className="ml-3 px-2 rounded-md bg-[#FB7185] text-[#881337]">TypeScript</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.
                                Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio 
                                id enim.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-[#1E293B] flex p-5 rounded-md my-5 lg:flex-col">
                    <div className="mr-5 w-[150px] lg:mr-0 lg:flex lg:justify-center lg:w-full">
                        <img className="h-32" src={projectimg3} />
                    </div>
                    <div className="w-[800px] lg:w-full lg:text-center">
                        <p className="font-bold">Project 3</p>
                        <div className="flex py-5 lg:justify-center">
                            <p className="ml-5 px-2 rounded-md bg-[#A78BFA] text-[#4C1D95]">Next.js</p>
                            <p className="ml-3 px-2 rounded-md bg-[#34D399] text-[#064E3B]">Blog</p>
                            <p className="ml-3 px-2 rounded-md bg-[#FACC15] text-[#713F12]">JavaScript</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.
                                Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio 
                                id enim.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;