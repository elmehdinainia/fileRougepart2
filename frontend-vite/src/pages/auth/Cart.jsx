import React from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../../components/CardProduct'

const Cart = () => {
  const productDataItem = useSelector((state)=>state.product.cartItem)
  console.log(productDataItem)
  return (
    <div className=' p-2 md:p-4'>
      <h2 className='text-lg md:text-2xl font-bold text-slate-600'>Your Cart items</h2>
      <div className='my-4'>
        {/* display cart item */}
         <div className=' w-full max-w-3xl '>
          {
            productDataItem.map(el=>{
              return(
                <CardProduct 
                key={el._id}
                id={el._id}
                description={el.description}
                name={el.name}
                images={el.images}
                category={el.category}
                qty={el.qty}
                total={el.total}
                price={el.price}

                />
              )
            })
          }
         </div>
         {/* totzl cart items */}
         <div className=''></div>

      </div>

    </div>
  )
}

export default Cart