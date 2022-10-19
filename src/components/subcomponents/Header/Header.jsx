import React from 'react'
import "../../Lend/Lend.css"
import { Button } from "@mui/material";

export const Header = () => {
  return (
    <header>
        <div className="details-ctr">
            <div className="g-operator-details">
                <div 
                    className="g-operator-details-one" 
                    style={{marginTop:"15px", marginBottom:"20px"}}>
                    <p>
                        Station name:
                        <span>Lira Uni</span>
                    </p>
                    <p>
                        Station Operator: 
                        <span>Gaston256</span>
                    </p>
                    <p>
                        Operating capital: 
                        <span>#####</span>
                    </p>
                </div>
                <div 
                    className="g-operator-details-two"
                    style={{marginTop:"15px", marginBottom:"20px"}}>
                    <Button 
                        variant="outlined"
                        >LOGOUT
                    </Button>
                </div>
            </div>
        </div>
    </header>
  )
}
