import { useEffect, useState } from 'react';
import CurrencyRow from './currencyRow';
import ValueRow from './valueRow';

const BASE_URL = 'https://api.frankfurter.app/latest?from=USD'

export default function CurrencyExchange() {

  /*const [currencyOptions, setCurrencyOptions] = useState([])
  console.log(currencyOptions);

    useEffect(() => {
      fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
          setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        })
    }, [])*/

    return (
        <div className='configure-wrapper'>
        <div className='row header-gap'>
        <div className='linebreak'/>
        <div className='col-1'>
          </div>
          <div className='col config'>
            <div className='linebreak'/>
            <div className='config-title'>Currency Converter</div>
            <ValueRow />
            <div className='display-container'>
            <CurrencyRow />
            </div>
            <div className='linebreak'/>
          </div>
          <div className='col-1'>
          </div>
          <div className='col-5'>
            <div className='exchange-table'>Currency Exchange Rates</div>
          </div>
          <div className='col'>
            <h1>Blank</h1>
          </div>
        </div>
      </div> 
    )
}