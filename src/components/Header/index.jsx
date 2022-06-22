import React from 'react'
import { Row, Col } from 'react-bootstrap'
import s from './Header.module.scss'

export const Header = () => {
    return (
        <Row>
            <Col>
                <div className={s.root}>Todo List</div>
            </Col>
        </Row>
    )
}
