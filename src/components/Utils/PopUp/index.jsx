import React from 'react'

function PopUp({ stateMsg }) {

    console.log(stateMsg)
    return (
        <div className='fixed top-0 left-0 '>
            <div className='w-screen h-full'>
                {
                    stateMsg == true ?
                        <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                            <div className="flex justify-center">
                                <div className="py-1">
                                    <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                    </svg>

                                </div>


                                <div>
                                    <p className="font-bold">Mensagem Enviada com Sucesso!</p>
                                    <p className="text-sm text-center">Aguarde o contato.</p>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="bg-red-400 border-t-4 border-red-100 rounded-b text-black-900 px-4 py-3 shadow-md" role="alert">
                            <div className="flex justify-center items-center">
                                <div className="py-1"><svg className="fill-red h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>

                                <p className="font-bold">Dados do formulário inválidos</p>

                            </div>
                        </div>

                }
            </div>
        </div >
    )
}

export default PopUp