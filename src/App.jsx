import FisrtCard from "./componentes/FirstCard"
function App() {
  return (
    <div className='flex flex-col justify-center items-center gap-[5vh] py-[5vh] font-dancing text-crema '>

    <FisrtCard image='nosotros4'
      title='Mi amor'

      text1='Escribo esto tratando de expresar todo lo que me haces sentir.'
      text2='Eres mi mundo, mi todo, y cada día que pasa me doy cuenta que estyo con la persona indicada.'
      none='hidden'
      none1='hidden'
    />
    <FisrtCard image='nosotros3' 
      title='Felicidad'

      text1='Estoy feliz de que ya llevemos dos meses juntos, quiero recordarte lo especial que eres para mí.'
      text2='Cada momento que compartimos se ha vuelto un unico en mi corazón.'
      text3='Estamos a punto de empezar nuestro primer viaje juntos, una aventura que deseo desde que te conocí.'
      text4='Estoy emocionado por poder descubrir lugares hermosos con vos mi amor, pero más emocionado aún por la oportunidad de seguir construyendo nuestra historia.'
      none1='hidden'

    />
    <FisrtCard image='nosotros2'
      title='Orgullo'

      text1='Amor, eres asombrosa. Estoy tan orgulloso de todo lo que estás logrando.'
      text2='Tu dedicación y esfuerzo en cada uno de tus proyectos me llenan de admiración.'
      text3='Me enorgullece ser parte de tu vida y poder apoyarte en tus metas y sueños.'
      text4='Quiero que te quede claro y siempre recuerdes que estaré a tu lado, alentándote en cada paso que des.'
      none1='hidden'

    />
    <FisrtCard image='nosotros5'
      title='Crecimiento'

      text1='Pero lo más importante es lo que generaste en mi como persona.'
      text2='Tu presencia en mi vida ha sido una bendición, y gracias a ti he credido y madurado (aunque sea un nene todavia).'
      text3='Me has ayudado a ser un mejor persona, mejor hijo, mejor novio.'
      text4='Tu amor y apoyo me han dado fuerzas para superar mis propias limitaciones y me has enseñado a tener confianza en mí mismo.'
      none1='hidden'

    />
    <FisrtCard image='nosotros4'
      title='Gracias'

      text1='Bebe, te agradezco infinitamente por todo lo que haces por mí.'
      text2='Tu amor, cariño y comprensión han transformado mi vida de una manera que nunca creí posible.'
      text3='Prometo estar siempre a tu lado, amarte y cuidarte en cada momento.'
      none='hidden'
      none1='hidden'

    />
      <FisrtCard image='nosotros3'
      title='Nosotros'
      edit='text-4xl'
      text1='Eres el amor de mi vida, y estoy emocionado por el futuro que construiremos juntos.'
      text2='No importa qué obstáculos se presenten en nuestro camino, sé que juntos podremos superarlos.'
      text3='Eres mi todo, mi apoyo incondicional y mi motivación para alcanzar mis metas.'
      text4='Te amo con todo mi corazón, y siempre estaré agradecido por dios, por darme la bendicion de permitirme estas en tu vida.'
      text5='Con todo mi amor, Yo 😁'
    />
    </div>
  )
}


export default App