import React from 'react'
import { Button } from "@mui/material";
import "../../Lend/Lend.css"


export const Money = () => {
  return (
    <section>
        <div className="details-ctr">
          <div className="g-borrow">
          <p className="g-amount-to-borrow">Amount to borrow</p>
          <Button 
            variant="outlined"
            style={{width: "10%",padding:"10px "}}
            >5000
          </Button>
          <Button 
            variant="outlined"
            style={{width: "10%",padding:"10px",marginLeft:"25px"}}
            >10000
        </Button>
        <Button 
          variant="outlined"
          style={{width: "10%",padding:"10px",marginLeft:"25px"}}
          >15000
        </Button>
        <Button 
        style={{width: "10%",padding:"10px",marginLeft:"25px"}}
          variant="outlined"
          >20000
        </Button>
      </div>
        </div>
    </section>
  )
}
