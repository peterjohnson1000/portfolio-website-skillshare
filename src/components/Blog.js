import blogimage from "../Assets/blog-placeholder.jpg"

const Blog = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="font-bold text-2xl text-white py-10">Recent <span className="text-blueColor">Projects</span></p>
                <p className="font-bold text-lg text-white py-10">View all Posts →</p>
            </div>
            <div className="flex rounded-sm">
                <div className="bg-[#1E293B] w-80 text-center">
                    <div>
                        <img className="rounded-t-md" src={blogimage}/>
                    </div>
                    <div className="text-white py-5">
                        <p className="font-bold text-xl">Typography example</p>
                        <p className="py-2 font-extralight text-[#9CA3AF]">Feb 6, 2020</p>
                        <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Tenetur vero esse non molestias eos excepturi.
                        </p>
                    </div>
                </div>
                
                <div className="bg-[#1E293B] w-80 text-center ml-5">
                    <div>
                        <img className="rounded-t-md" src={blogimage}/>
                    </div>
                    <div className="text-white py-5">
                        <p className="font-bold text-xl">5th Lorem ipsum dolor sit</p>
                        <p className="py-2 font-extralight text-[#9CA3AF]">Feb 5, 2020</p>
                        <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Tenetur vero esse non molestias eos excepturi.
                        </p>
                    </div>
                </div>
                
                <div className="bg-[#1E293B] w-80 text-center ml-5">
                    <div>
                        <img className="rounded-t-md" src={blogimage}/>
                    </div>
                    <div className="text-white py-5">
                        <p className="font-bold text-xl">4th Lorem ipsum dolor sit</p>
                        <p className="py-2 font-extralight text-[#9CA3AF]">Feb 4, 2020</p>
                        <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Tenetur vero esse non molestias eos excepturi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog