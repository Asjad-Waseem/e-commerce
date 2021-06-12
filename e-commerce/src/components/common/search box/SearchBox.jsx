import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

function SearchBox(props) {


    return (

        <Form>
            <FormControl type="search" 
                         placeholder={props.placeholder} 
                         className="search__products mr-sm-2"
                         onChange = {props.handleChange} />
        </Form>
        
    )
}

export default SearchBox;
