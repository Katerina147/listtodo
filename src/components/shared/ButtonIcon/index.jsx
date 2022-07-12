import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'

export const ButtonIcon = ({ icon, onClick, className }) => (
    <Button variant="light" onClick={onClick} className={className}>
        <FontAwesomeIcon icon={icon} />
    </Button>
)
