import React from 'react'
import './Convector.css'
import CurrencyField from '../CurrencyField/CurrencyField.js'
import Exchange from '../Exchange/Exchange.js'

export default function convector() {
    return (
        <div className='Convector'>
                   <CurrencyField></CurrencyField>
                   <Exchange></Exchange>
                   <CurrencyField></CurrencyField>
        </div>
    )
}
