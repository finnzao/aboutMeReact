import React from 'react';
import Item from './item';
// import data from '../../../database/Works' data is not a function
const data = [
  {
    year: 2021,
    title: 'Criação de Laddings Page',
    duration: '1 ano e meio',
    details:
      'Durante um ano e meio ofereci serviço de freelance para criação de laddings pages empresas de comesticos,produtos digitais e marketing.Nessa aplicações foram usados os principais frameworks usado nessas aplicações foram ReactJs e NextJs. Em alguns casos foi usado o NodeJs como backend'

  },
  {
    year: 2021,
    title: 'Assistência para aplicações CMS',
    duration: '8 meses',
    details:
      'Assitencia tecnica e designe para aplicações CMS(Nuvemshop e Shopify ), trabalhando na parte de personalização dos temas e fazendo alterações de acorodo com o pedido do cliente.'
  }
]

function Work() {
  return (
    <div id='works' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 	'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-10'>Experiências</h1>
      {
        data.map((item, id) => (
          <Item
            key={id}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
    </div>
  )
}

export default Work