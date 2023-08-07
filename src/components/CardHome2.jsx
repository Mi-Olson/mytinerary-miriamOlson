import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function CardHome2() {
    return (
        <>
            <Card style={{ width: '18rem' }}>

                <Card.Body>
                    <Card.Title>Find the perfect destination</Card.Title>
                    <Card.Text>
                        Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.
                    </Card.Text>



                    <Button className=" btn btn-bd-primary " variant="flat" >View More</Button>
                </Card.Body>
            </Card>
        </>
    )
}
