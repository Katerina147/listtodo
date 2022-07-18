import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'react-bootstrap'

const { Header, Title, Body } = Modal

export const CustomModal = ({ openModal, onHide, titleLabel, bodyLabel }) => {
    return (
        <Modal
            size="sm"
            show={openModal}
            onHide={onHide}
            aria-labelledby="example-modal-sizes-title-sm"
        >
            <Header closeButton>
                <Title id="example-modal-sizes-title-sm">{titleLabel}</Title>
            </Header>
            <Body>{bodyLabel}</Body>
        </Modal>
    )
}