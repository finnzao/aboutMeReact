import Certication from './Certification/index'
function AboutMe() {
    return (
        <div id='about' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 flex flex-col gap-5'>
            <h1 className='text-4xl font-bold text-center text-[#000b5e]'>Conhecimentos</h1>
            <h2 className='text-2xl font-bold text-left text-[#000b5e] underline'>Certificados</h2>
          
                <Certication name="Curso Web Mordeno Completo" founder='Cod3r' link={"https://www.freecodecamp.org/certification/finnzao/front-end-development-libraries"} />
                <Certication name="Front End Development Libraries" founder='freeCodeCamp' link={"https://www.freecodecamp.org/certification/finnzao/front-end-development-libraries"} />
       
        </div>
    )
}

export default AboutMe