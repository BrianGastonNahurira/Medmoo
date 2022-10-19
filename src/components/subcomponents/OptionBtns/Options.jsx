import React from 'react'
import "../../Lend/Lend.css"
import { Button , TextField, Link} from "@mui/material";


export const Options = () => {
  return (
   <section>
    <div className="details-ctr">
        <div className="g-options">
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
                <div className="g-num-money">
          <TextField 
            id="outlined-basic"
            label="Enter number plate" 
            variant="outlined"
            fullWidth="true"
            margin="normal"
            style={{width:"50%", margin: "15px 0px"}} 
          />
        </div>
    </div>
   </section>
  )
}
