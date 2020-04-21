import React from 'react';

const Footer = () => {
    return  (
        <div className='py-4 text-center bg-gray-400'>
            MyDailyStatus é um projeto criado durante o FullStack Lab do DevPleno.<br />
            Implementado por : <a href='https://www.linkedin.com/in/luan-medeiros-silveira-868020141/'>Luan Medeiros Silveira</a>
        </div>
    )
}
// autenticação - Saber que vc é vc, por exemplo uma identidade multi factor auth
// autorização - O que o usuário pode fazer, onde pode ir
export default Footer