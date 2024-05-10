import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Gifs.css'

export default function Gifs({ gifUrls, title, info }) {
    return (
        <div className='container'>
            <Row className='d-flex align-items-center flex-column' >
                <div className='bg-white backOfGifs d-flex a;ign-items-center'>
                    {gifUrls.map((gifUrl, index) => (
                        <Col key={index} >
                            <img src={gifUrl} alt={`Image ${index + 1}`} className='gif' />
                        </Col>
                    ))}
                </div>
                <Col >
                    <h1 className='title'>{title}</h1>
                </Col>

                <Col >
                    <p className='info'>{info}</p>
                </Col>
            </Row>

        </div>
    )
}
