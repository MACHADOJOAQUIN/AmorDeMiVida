function ThirdCard(){
    return(
        <section className=" bg-crema w-full h-[125vh]  flex justify-center items-center ">
            <div className="lg:grid lg:grid-cols-3 flex flex-col w-[90%] h-[90%] lg:h-[80%] lg:w-[80%]  bg-gradient-to-br from-rosa3 to-rosa1 shadow-hero hover:shadow-heroHover rounded-xl transition-all 500ms">
               <div className=" col-span-2 flex justify-center items-center flex-col w-full h-full lg:bg-[url(./src/assets/heroV3.png)] rounded-xl bg-[url(./src/assets/fotos/nosotros5.jpg)] bg-cover bg-Third lg:bg-cover bg-no-repeat lg:bg-right text-crema">
                    <h1 className=" text-9xl font-dancing ">Orgullo</h1>
                    <p className=" text-5xl font-dancing text-center lg:w-2/3 w-10/12 ">Amor, quiero que seapas que estoy orgulloso de la persona en la que te estas convirtiendo y en todo lo que estas logrando, estyo orgullos de poder formar parte de tu vida, y poder hacerte feliz, sos una mujer sorprenderte que puede con todo lo que se interpongo o proponga, porque en tu vida no existe el fracaso y me doy cuenta cada dia, que  se rompe el lomo para consegir lo que quieras, y me enorgullese ser tu novio, Te amo con mi Vida, por siempre y para siempre</p>
                </div>
                <div className=" col-span-1 h-full  items-center justify-center lg:flex hidden ">
                    <img src="src\assets\fotos\nosotros5.jpg" alt="" className=" rounded-xl lg:max-h-[650px]"/>
                </div>
            </div>
       </section>
    )
}

export default ThirdCard