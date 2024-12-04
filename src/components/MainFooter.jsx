import React from 'react'
import { Card } from 'react-bootstrap'

export default function MainFooter() {
  return (
    <Card>
      <Card.Header className='text-center bg-info-subtle'>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0 text-center bg-info-subtle">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}
