import React from 'react'
import { Header } from '../subcomponents/Header/Header'
import { Options } from "../subcomponents/OptionBtns/Options"
import "../Pyment/Payment.css"
import { Button, Link } from '@mui/material'


export const Payment = () => {
  return (
    <section>
      <div className='payment-ctr'>
        <Header />
        <div className='g-options'>
          <Link href="/lend"
            style={{textDecoration:"none"}}>
            <Button 
              variant="contained"
              style={{width: "15%",padding:"10px "}}                
              >LEND
            </Button>
          </Link>
          <Link href="/payment"
            style={{textDecoration:"none"}}>
            <Button 
              variant="outlined"
              style={{width: "15%",padding:"10px "}}
              >PAYMENT
            </Button>
            </Link>
            <Link href="/statements"
              style={{textDecoration:"none"}}>
              <Button 
                variant="contained"
                style={{width: "15%",padding:"10px "}}
                >STATEMENTS
              </Button>
            </Link>
        </div>
        <div className="g-pay">
          <p className="g-amount-to-borrow">Amount to pay</p>
          <Button 
            variant="outlined"
            style={{width: "10%",padding:"10px "}}
            >5500
          </Button>
          <Button 
            variant="outlined"
            style={{width: "10%",padding:"10px",marginLeft:"25px"}}
            >11000
          </Button>
          <Button 
            variant="outlined"
            style={{width: "10%",padding:"10px",marginLeft:"25px"}}
            >16500
          </Button>
          <Button 
            style={{width: "10%",padding:"10px",marginLeft:"25px"}}
            variant="outlined"
            >22000
          </Button>
      </div>
       <div className="g-output">
        <p>
          Amount Payed:<span>#####</span>
        </p>
        <p>
          Boda Name:<span>Gaston256</span>
        </p>
        <p>
          Boda Stage: <span>Ayere Center</span>
        </p>
        <p>
          Registered District: <span>Lira</span>
        </p>
        <p>
          Date of Payment: <span>1/sept/2022</span>
        </p>
      </div>
            <div className="g-submit-btns">
        <Button
          variant="contained"
          style={{marginBottom: "15px"}}
          >Confirm 
        </Button>
        <Button 
          variant="contained"
          style={{marginBottom: "15px", marginLeft:"35px"}}
          >Cancel
        </Button>
      </div>
      </div>
    </section>
  )
}

// to be implemented tonight.

// when you click on the button 
// it should change from contained to outlined and vs
// then the options displayed should change

