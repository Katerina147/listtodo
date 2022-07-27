import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const ButtonDefault = ({ className, onClick, label }) => (
    <Button variant="light" className={className} onClick={onClick}>
        {label}
    </Button>
)

ButtonDefault.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
}
