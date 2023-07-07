function Hero(){
    return(
        <section className=" bg-crema w-full h-[100vh]  flex justify-center items-center ">
        <div className="lg:grid lg:grid-cols-3 flex flex-col w-[90%] h-[90%] lg:h-[80%] lg:w-[80%]  bg-gradient-to-br from-rosa3 to-rosa1 shadow-hero hover:shadow-heroHover rounded-xl transition-all 500ms">
             <div className=" col-span-1 h-full  items-center justify-center lg:flex hidden ">
                <img src="src\assets\fotos\nosotros4.jpg" alt="" className=" rounded-xl lg:max-h-[650px] "/>
            </div>
           <div className=" col-span-2 flex justify-center items-center flex-col w-full h-full lg:bg-[url(./src/assets/heroV3.png)] rounded-xl bg-[url(./src/assets/fotos/nosotros4.jpg)] bg-cover bg-Hero lg:bg-cover bg-no-repeat lg:bg-right text-crema">
                <h1 className=" text-9xl font-dancing ">Mi Amor</h1>
                <p className=" text-5xl font-dancing text-center lg:w-2/3 w-10/12 ">No me importa que pasen las horas, los dias, los años, lo unico que deseo es que todo ese tiempo pasarlo a tu lado</p>
            </div>
        </div>
   </section>
    )
}

export default Hero