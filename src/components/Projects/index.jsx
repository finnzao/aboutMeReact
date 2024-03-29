import Item from './Item/Index';
import ImgCommercJs from '../../assets/projetos/jscommerc.png'
import ImgRestaurantNext from '../../assets/projetos/restaurantNext.png'
import background from '../../assets/projetos/nodebackground.jpg'
import backgroundDelivery from '../../assets/projetos/delivery.png'
function Projects() {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#000b5e]'>Projetos</h1>
            <p className='text-center py-8'>
                Aplicações baseadas nos meus conhecimentos ,e nos serviçoes que foram entregues como desenvolvedor.
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <Item img={ImgCommercJs} tools={"js"} title={"CommerceJs"} github={"https://github.com/finnzao/CommerceJs"} livepage={"https://commerce-js-delta.vercel.app"} />
                <Item img={ImgRestaurantNext} tools={"react,bootstrap"} title={"Apresentação Restaurante"} livepage={"https://presentation-restaurant.vercel.app"} />
                <Item img={background} tools={"nodejs,postgres,mysql"} title={"CRUD com banco de dados relacionados e sistema de login"} github={"https://github.com/finnzao/api-node-typescript"} />
                <Item img={backgroundDelivery} tools={"next,mongodb"} title={"Delivry com cardapio"} github={"https://github.com/finnzao/delivery_Next"} />

            </div>
        </div>
    )
}

export default Projects