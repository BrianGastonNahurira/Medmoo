import React from "react";
import  "../Lend/Lend.css"
import { Button, Link } from "@mui/material";
import { Header} from "../subcomponents/Header/Header";
import { Options } from "../subcomponents/OptionBtns/Options";
import { Money } from "../subcomponents/MoneyBtnsLend/Money";
import { Details } from "../subcomponents/BorderDetailsLend/Details";
// import { Payment } from "../Pyment/Payment";


export const Lend = () => {
  return (
    <section>
      <div className="details_ctr">
        <Header />
        <div className='g-options'>
          <Link href="/lend"
            style={{textDecoration:"none"}}>
            <Button 
              variant="outlined"
              style={{width: "15%",padding:"10px "}}                
              >LEND
            </Button>
          </Link>
          <Link href="/payment"
            style={{textDecoration:"none"}}>
            <Button 
              variant="contained"
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
        <Money />
        <Details />
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
  );
};
