import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const ButtonIcon = ({ icon, onClick, className }) => (
    <Button variant="light" onClick={onClick} className={className}>
        <FontAwesomeIcon icon={icon} />
    </Button>
)

ButtonIcon.propTypes = {
    icon: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
}
