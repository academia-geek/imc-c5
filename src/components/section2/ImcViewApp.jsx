import React from 'react'
import BodyImcView from './BodyImcView'
import HeaderImcView from './HeaderImcView'
import {Card} from 'reactstrap'

export default function ImcViewApp() {
    return (<Card>
        <HeaderImcView/>
        <BodyImcView/>
    </Card>
    )
}
