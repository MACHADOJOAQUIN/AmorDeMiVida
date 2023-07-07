function FisrtCard({ image , title , text1 , text2 , text3 , text4 , text5 , none , none1 , edit = 'text-6xl'}){
    const background = `${image}.jpg`
    return(
        <section className=" bg-gradient-to-br from-rosa3 to-rosa1 flex flex-col justify-center items-center  rounded-xl relative shadow-hero hover:shadow-heroHover  transition-all 500ms ">
            <img src={`${background}`} className="h-[90%] rounded-xl " />
            <div className=" w-full h-full absolute bg-negro bg-opacity-[50%] top-0 bottom-0 left-0 right-0 m-auto flex flex-col justify-center sm:gap-14 items-center rounded-xl p-1 sm:p-8">
                <p className={`${edit} sm:text-9xl text-center  `}>{title}</p>
                <p className=" text-1xl sm:text-4xl text-center ">{text1}</p>
                <p className=" text-1xl sm:text-4xl text-center ">{text2}</p>
                <p className=" text-1xl sm:text-4xl text-center ">{text3}</p>
                <p className= {`text-1xl sm:text-4xl text-center ${none}`}  >{text4}</p>
                <p className= {`text-1xl sm:text-4xl text-center ${none1}`}  >{text5}</p>
                </div>

       </section>
    )
}

export default FisrtCard