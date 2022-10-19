import React from 'react'
import { Header } from '../subcomponents/Header/Header'
import "../Statemets/statements.css"
import { Button , TextField, Link} from "@mui/material";
import { StateTable } from './Table';
import { NetCash } from './NetCash';


export const Statements = () => {
  return (
    <section>
        <div className='g-statements'>
            <Header />
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
                        variant="outlined"
                        style={{width: "15%",padding:"10px "}}
                        >STATEMENTS
                    </Button>
                </Link>
                <StateTable />
                <NetCash />
            </div>
            
        </div>

    </section>

  )
}
