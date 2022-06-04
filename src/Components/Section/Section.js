import React from 'react';

import "./Section.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Section = (props) => {
    return(
        <div id={props.id ? props.id : props.name} className="section">
               <Container>
                   <Row className="justify-content-center align-items-center">
                       <div className="section-header">{props.name}</div>
                        {props.children}
                   </Row>
               </Container>
        </div>
    )
}
export default Section;