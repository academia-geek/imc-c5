import React from 'react'
import TableImc from './TableImc'
import { Button, CardBody } from 'reactstrap';

export default function BodyImcView() {
    return (
        <CardBody>
            <TableImc/>
            <Button color="danger">Danger!</Button>
        </CardBody>
    )
}
