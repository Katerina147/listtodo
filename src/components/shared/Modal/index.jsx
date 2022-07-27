import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'

const { Header, Title, Body } = Modal

export const CustomModal = ({ openModal, onHide, title, content }) => {
    return (
        <Modal
            size="sm"
            show={openModal}
            onHide={onHide}
            aria-labelledby="example-modal-sizes-title-sm"
        >
            <Header closeButton>
                <Title id="example-modal-sizes-title-sm">{title}</Title>
            </Header>
            <Body>{content}</Body>
        </Modal>
    )
}

CustomModal.propTypes = {
    openModal: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
}
