import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';

function UserInfoCard(props) {
    const { name, fund, otherInfo } = props
  return (
    <Card className="d-flex" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>User Information</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item><strong>Name:</strong> {name}</ListGroup.Item>
          <ListGroup.Item><strong>Fund:</strong> {fund}</ListGroup.Item>
          {/* Add more ListGroup.Items for other user information */}
          {otherInfo && (
            <ListGroup.Item><strong>Other Info:</strong> {otherInfo}</ListGroup.Item>
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default UserInfoCard