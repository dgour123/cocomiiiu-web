import React from 'react'
import { Gallery } from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {Gallery.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img
              src={client.logo}
              alt='client'
              className='sm:w-full w-full object-contain p-2 rounded-2xl'
            />           
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
