import React from 'react'
import Payment from '../Assets/payments.png'
import Freedom from '../Assets/pngegg(6).png'
import Invest from '../Assets/invest2.png'

const MoreDb = () => {
  return (
    <div>
        <div className="row justify-content-around gap-2 px-md-4" style={{margin:'10px'}}>
            <div className="col-12 col-md-3 paymentCard">
                <img src={Payment} alt="" />
                <h2>Easy Mode of Payment</h2>
                <p>People can now easily send and receive money from anywhere in the world to purchase goods and pay for services.</p>
            </div>
            <div className="col-12 col-md-3 paymentCard">
                <img src={Freedom} alt="" />
                <h2>Financial Freedom</h2>
                <p>Just like the internet no single entity controls the Crypto network which provides users transparency and privacy, which puts you in absolute control of your money.</p>
            </div>
            <div className="col-12 col-md-3 paymentCard">
              <img src={Invest} alt="" />
              <h2>Investment</h2>
              <p>The constant demand as made Cryptocurrecies a Digital Gold used for alternative store of wealth on long term investments.</p>
            </div>
        </div>
    </div>
  )
}

export default MoreDb