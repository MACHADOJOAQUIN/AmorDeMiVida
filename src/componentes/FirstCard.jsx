function FisrtCard({ image , title , text1 , text2 , text3 , text4 , text5 , none , none1 , edit = 'text-7xl'}){
    const background = `${image}.jpg`
    return(
        <section className=" bg-gradient-to-br from-rosa3 to-rosa1 flex flex-col justify-center items-center  rounded-xl relative shadow-hero hover:shadow-heroHover  transition-all 500ms ">
            <img src={`${background}`} className="h-[900px] w-[500px] rounded-xl object-cover " />
            <div className=" w-full h-full absolute bg-negro bg-opacity-[50%] top-0 bottom-0 left-0 right-0 m-auto flex flex-col justify-center items-center gap-1 rounded-xl p-5">
                <p className="lg:text-7xl text-6xl text-center ">{title}</p>

                <p className="   lg:text-4xl text-3xl text-center ">{text1}</p>
                <p className="   lg:text-4xl text-3xl text-center ">{text2}</p>
                <p className="   lg:text-4xl text-3xl text-center ">{text3}</p>
                <p className= {` lg:text-4xl text-3xl text-center ${none}`}  >{text4}</p>
                <p className= {` lg:text-4xl text-3xl text-center ${none1}`}  >{text5}</p>
                </div>

       </section>
    )
}

export default FisrtCard