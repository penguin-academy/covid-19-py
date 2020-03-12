import React from 'react'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Home = ({ history }) => {

  const onGoToReportPage = () => {
    history.push('report')
  }

  return (
    <div>
      <Container style={{ paddingTop: '20px' }}>
        <Jumbotron >
          <h1>Corona Virus - Paraguay</h1>
          <p>
            Informacion sobre el estado actual del corona virus en el Paraguay
        </p>
          <p>
            <Button onClick={onGoToReportPage} variant="info" style={{ margin: '10px' }}>Autoreportarse</Button>
          </p>
        </Jumbotron>
      </Container>
    </div>
  )
}

export default Home
