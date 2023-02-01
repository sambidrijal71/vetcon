import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'


import React from 'react'

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <Header />
            <Footer />
            <div>
                <Button primary>Primary</Button>
                <Button secondary>Secondary</Button>
                <Button success>Warning</Button>
                <Button danger>Danger</Button>
            </div>
            <div>
                <Button primary outline>Primary</Button>
                <Button secondary outline>Secondary</Button>
                <Button success outline>Success</Button>
                <Button warning outline>Warning</Button>
                <Button danger outline>Danger</Button>
            </div>
            <div>
                <Button primary rounded>Primary</Button>
                <Button secondary rounded>Secondary</Button>
                <Button success rounded>Success</Button>
                <Button warning rounded>Warning</Button>
                <Button danger rounded>Danger</Button>
            </div>
            <div>
                <Button primary outline rounded>Primary</Button>
                <Button secondary outline rounded>Secondary</Button>
                <Button success outline rounded>Success</Button>
                <Button warning outline rounded>Warning</Button>
                <Button danger outline rounded>Danger</Button>
            </div>
        </div>
    )
}
