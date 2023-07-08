function FisrtCard({ image , title , text1 , text2 , text3 , text4 , text5 , none , none1 , edit = 'text-7xl'}){
    const background = `${image}.jpg`
    return(
        <section className=" bg-crema hover:shadow-light hover:text-rosa3 hover:bg-rosa3 flex flex-col justify-center items-center  rounded-xl relative transition-all 500ms p-1">
            <img src={`${background}`} className="h-[900px] w-[500px] rounded-xl object-cover " />
            <div className=" w-full h-full absolute bg-negro bg-opacity-[80%] hover:bg-opacity-[40%] top-0 bottom-0 left-0 right-0 m-auto flex flex-col justify-center items-center gap-1 rounded-xl lg:p-1 p-12 transition-all 500ms ">
                <p className="   lg:text-7xl sm:text-5xl text-6xl text-center ">{title}</p>
                <p className="   lg:text-4xl sm:text-2xl text-3xl text-crema text-center ">{text1}</p>
                <p className="   lg:text-4xl sm:text-2xl text-3xl text-crema text-center ">{text2}</p>
                <p className="   lg:text-4xl sm:text-2xl text-3xl text-crema text-center ">{text3}</p>
                <p className= {` lg:text-4xl sm:text-2xl text-3xl text-crema text-center ${none}`}  >{text4}</p>
                <p className= {` lg:text-4xl sm:text-2xl text-3xl text-crema text-center ${none1}`}  >{text5}</p>
                </div>

       </section>
    )
}

export default FisrtCard