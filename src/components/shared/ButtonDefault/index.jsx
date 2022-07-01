import React from 'react'
import { Button } from 'react-bootstrap'

export const ButtonDefault = ({ className, onClick, label, icon }) => (
    <Button variant="light" className={className} onClick={onClick} icon={icon}>
        {label}
    </Button>
)
