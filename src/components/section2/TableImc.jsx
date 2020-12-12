import React from 'react'
import { Table } from 'react-bootstrap'

export default function TableImc() {
    return (
        <Table striped bordered hover size="lg">
            <thead>
                <tr>
                    <th>Cédula</th>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2132234234</td>
                    <td>Carlos Mejía</td>
                </tr>
                <tr>
                    <td>5456456</td>
                    <td>Andrea Meneses</td>
                </tr>
                <tr>
                    <td>435435</td>
                    <td>Juan Gomez</td>
                </tr>
            </tbody>
        </Table>
    )
}
