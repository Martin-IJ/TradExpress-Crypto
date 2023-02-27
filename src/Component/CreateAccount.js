import React from 'react'
import appleLogo from '../Assets/Icon awesome-apple.svg'
import playLogo from '../Assets/Group 53.svg'

const CreateAccount = () => {
  return (
    <div className='container-fluid py-5'>
        <div className="createAccount text-center py-5">
            <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
            <h2 className='fw-bold'>Create your account for free and start trading today!</h2>
            <button className="btn mt-5">Get Started</button>
            <div className="createPlayStore d-flex gap-2 justify-content-center mt-5">
                <div className="appStore d-flex align-items-center">
                    <img src={appleLogo} alt="App Store" />
                    <div className="text text-start ms-3">
                        <p className='m-0'>Download on the</p>
                        <h5 className='m-0'>App Store</h5>
                    </div>
                </div>
                <div className="playStore d-flex align-items-center">
                    <img src={playLogo} alt="App Store" />
                    <div className="text text-start ms-3">
                        <p className='m-0'>Get on</p>
                        <h5 className='m-0'>Google Play</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateAccount