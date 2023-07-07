function SecondCard(){
    return(
        <section className=" bg-crema w-full h-[100vh]  flex justify-center items-center ">
            <div className="lg:grid lg:grid-cols-3 flex flex-col w-[90%] h-[90%] lg:h-[80%] lg:w-[80%]  bg-gradient-to-br from-rosa3 to-rosa1 shadow-hero hover:shadow-heroHover rounded-xl transition-all 500ms">
                 <div className=" col-span-1 h-full  items-center justify-center lg:flex hidden ">
                    <img src="src\assets\fotos\nosotros3.jpg" alt="" className=" rounded-xl lg:max-h-[650px] "/>
                </div>
               <div className=" col-span-2 flex justify-center items-center flex-col w-full h-full lg:bg-[url(./src/assets/heroV3.png)] rounded-xl bg-[url(./src/assets/fotos/nosotros3.jpg)] bg-cover bg-Second lg:bg-cover bg-no-repeat lg:bg-right text-crema">
                    <h1 className=" text-9xl font-dancing ">Familia</h1>
                    <p className=" text-5xl font-dancing text-center lg:w-2/3 w-10/12 ">Mi amor, amo a tu familia, estoy contento y orgulloso de poder formar parte de ella y que en un futuro empezar a formar una propia, es algo que deseo y estoy orgullos que va a ser con el amor de mi vida, Te amo </p>
                </div>
            </div>
       </section>
    )
}

export default SecondCard