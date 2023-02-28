const NewsLetter = () => {
    return (
        <div className="py-20 flex items-center border-b border-[#4B5563] md:flex-col">
            <div className="mr-5">
                <p className="text-white font-extrabold text-3xl">Subscribe to my <span className="text-blueColor">Newsletters</span></p>
                <p className="text-white py-2 font-light pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos 
                    excepturi, inventore atque cupiditate.
                </p>
            </div>
            <div>
                <div className="w-96 h-10 bg-[#1E293B] rounded-xl flex justify-end items-center md:mt-10 smm:w-80">
                    <div className="w-20 h-7 bg-blueColor rounded-xl text-white flex items-center justify-center mr-2"><p className="text-sm">Subscribe</p></div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;