import React from 'react'
import '../css/RoomSection.css';
const RoomSection = () => {
    return (
        <section className="Room">
            <h1 className='Room--Heading'>What is Room? </h1>
            {/* Cards Section */}
            <div className='Room--Wrapper--Cards'>
                {/* Bedroom Section */}
                <div className='Room--Card Bedroom--Card'>
                    <img src={'/'} alt={'something'}/>
                    <h3 className='Room--Card__Title'> Card </h3>
                    <p className='Room--Card__Description'>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard
                    dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and
                    scrambled it to make a type </p>
                </div>
                {/* Bathroom Section */}
                <div className='Room--Card Bedhroom--Card'>
                    <img src={'/'} alt={'something'}/>
                    <h3 className='Room--Card__Title'> Card </h3>
                    <p className='Room--Card__Description'>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard
                    dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and
                    scrambled it to make a type </p>
                </div>
                {/* Cards Section */}
                <div className='Room--Card Bedhroom--Card'>
                    <img src={'/'} alt={'something'}/>
                    <h3 className='Room--Card__Title'> Card </h3>
                    <p className='Room--Card__Description'>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard
                    dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and
                    scrambled it to make a type </p>
                </div>
                {/* Cards Section */}
                <div className='Room--Card Bedhroom--Card'>
                    <img src={'/'} alt={'something'}/>
                    <h3 className='Room--Card__Title'> Card </h3>
                    <p className='Room--Card__Description'>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard
                    dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and
                    scrambled it to make a type </p>
                </div>
                
            </div>
        </section>
    )
}

export default RoomSection
