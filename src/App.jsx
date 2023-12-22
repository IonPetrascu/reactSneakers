import React from 'react'

function App() {
    return (
        <div className='wrapper clear'>
            <header className='d-flex justify-between align-center p-40'>
                <div className='d-flex align-center'>
                    <img width='40' height='40' src="/img/logo.png" />
                    <div className='ml-15'>
                        <h3 className='text-uppercase'>React Sneakers</h3>
                        <p className='opacity-5'>Магазин лучших кросовок</p>
                    </div>
                </div>
                <ul className='d-flex'>
                    <li className='d-flex mr-30 align-center'>
                        <img className='mr-10' width='18' height='18' src="/img/Cart.svg" />
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img width='18' height='18' src="/img/User.svg" />
                    </li>
                </ul>
            </header>
            <div className='content p-40'>
                <h1 className='mb-40 '>Все кроссовки</h1>
             <div className='d-flex flex-wrap'>
                   <div className='card'>
                       <img  width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
                       <h5 className='mb-15 mt-15'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                       <div className='d-flex justify-between align-center'>
                           <div className='d-flex flex-column '>
                               <span>
                                   Цена:
                               </span>
                               <b>12 999 руб.</b>
                           </div>
                           <button className='button'>
                               <img width={11} height={11} src="/img/addIcon.svg" alt="Plus" />
                           </button>
                       </div>
                   </div>
                   <div className='card'>
                       <img  width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers" />
                       <h5 className='mb-15 mt-15'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                       <div className='d-flex justify-between align-center'>
                           <div className='d-flex flex-column '>
                               <span>
                                   Цена:
                               </span>
                               <b>12 999 руб.</b>
                           </div>
                           <button className='button'>
                               <img width={11} height={11} src="/img/addIcon.svg" alt="Plus" />
                           </button>
                       </div>
                   </div>
                   <div className='card'>
                       <img  width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers" />
                       <h5 className='mb-15 mt-15'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                       <div className='d-flex justify-between align-center'>
                           <div className='d-flex flex-column '>
                               <span>
                                   Цена:
                               </span>
                               <b>12 999 руб.</b>
                           </div>
                           <button className='button'>
                               <img width={11} height={11} src="/img/addIcon.svg" alt="Plus" />
                           </button>
                       </div>
                   </div>
                   <div className='card'>
                       <img  width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers" />
                       <h5 className='mb-15 mt-15'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                       <div className='d-flex justify-between align-center'>
                           <div className='d-flex flex-column '>
                               <span>
                                   Цена:
                               </span>
                               <b>12 999 руб.</b>
                           </div>
                           <button className='button'>
                               <img width={11} height={11} src="/img/addIcon.svg" alt="Plus" />
                           </button>
                       </div>
                   </div>
                   <div className='card'>
                       <img  width={133} height={112} src="/img/sneakers/5.jpg" alt="Sneakers" />
                       <h5 className='mb-15 mt-15'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                       <div className='d-flex justify-between align-center'>
                           <div className='d-flex flex-column '>
                               <span>
                                   Цена:
                               </span>
                               <b>12 999 руб.</b>
                           </div>
                           <button className='button'>
                               <img width={11} height={11} src="/img/addIcon.svg" alt="Plus" />
                           </button>
                       </div>
                   </div>
                   <div className='card'>
                       <img  width={133} height={112} src="/img/sneakers/6.jpg" alt="Sneakers" />
                       <h5 className='mb-15 mt-15'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                       <div className='d-flex justify-between align-center'>
                           <div className='d-flex flex-column '>
                               <span>
                                   Цена:
                               </span>
                               <b>12 999 руб.</b>
                           </div>
                           <button className='button'>
                               <img width={11} height={11} src="/img/addIcon.svg" alt="Plus" />
                           </button>
                       </div>
                   </div>
             </div>
            </div>
        </div>
    )
}

export default App