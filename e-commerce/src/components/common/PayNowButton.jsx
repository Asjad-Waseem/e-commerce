import React from 'react';

import { Button } from 'react-bootstrap';

function PayNowButton(props) {
    
    return (

        <Button className = "col-md-6" 
                style = {{ backgroundColor: "#f0c14b", borderRadius: "15px", border: "1px solid #eee", fontSize: "16px", fontWeight: "bold" }}
                onClick = {props.onClick}
                >PAY NOW</Button>
        
    )
}

export default PayNowButton;
