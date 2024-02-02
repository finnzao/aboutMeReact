import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Main() {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src='https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt="" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/70'>
                <div className='max-w-[700px] m-auto h-full flex flex-col justify-center items-center align-items:center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Olá! Meu nome é Felipe</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>E eu sou desenvolvedor {'  '}
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                '  FrontEnd 🎨',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                ' BackEnd 🛠️',
                                1000,
                                '  FullStack 💻',
                                50000,
                            ]}
                            wrapper="div"
                            cursor={true}
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <a href="https://github.com/finnzao" target="_blank" rel="noopener noreferrer">
                            <FaGithub className='cursor-pointer' size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/luiz-felipe-8949a6227/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='cursor-pointer' size={20} />
                        </a>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main