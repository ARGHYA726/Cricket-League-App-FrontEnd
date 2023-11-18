import React from 'react'
import CarouselContainer from './CarouselContainer'
import Footer from './footer'
import LoginPage from './LoginPage'

function Home() {
    return (
        <>
            <LoginPage />
            <CarouselContainer />
            <Footer />
        </>
    )
}

export default Home