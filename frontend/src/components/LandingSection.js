import React from 'react'
import { Container } from 'react-bootstrap'
import '../css/LandingSection.css'
const LandingSection = () => {
    return (

        <section className='Landing container-fluid' id='Landing--Section'>
            <Container>
                <div className='Landing--Wrapper'>
                    <h1 className='Landing--Greeting'>Welcome</h1>
                    <p className='Landing--Description'>Lorem Ipsum and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
            </Container>
        </section>

    )
}

export default LandingSection
