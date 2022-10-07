import iconperson from '../images/icon-person.svg'
import icondollar from '../images/icon-dollar.svg'
import { useState } from 'react'

const CalculatorMain = () => {

    const amount = [5, 10, 15, 25, 50]

    const [tip, setTip] = useState('')
    const [bill, setBill] = useState('')
    const [customTip] = useState('')

  return (
    <>
    <div className="root-container freakin-hate-css">
        <form className="">
        <div className="first-section">
            <label htmlFor="bill" className="form-label">Bill</label>

            <div className="input-group mb-3">
                <img src={icondollar} alt={icondollar} className="input-group-text" />
                <input type="number" id="bill" value={bill} onChange={(e) => setBill(e.target.value)} className="form-control" placeholder="Enter an amount"/>
            </div>
        </div>

        <div className="tip-section-main">
            <label htmlFor="tip" className="form-label">Select Tip %</label>

             <div className="tip-section" id="tip">
                <button type="button" value={amount[0]} className="buttons" onClick={(e) => setTip(e.target.value)}>5%</button>
                <button type="button" value={amount[1]} className="buttons" onClick={(e) => setTip(e.target.value)}>10%</button>
                <button type="button" value={amount[2]} className="buttons" onClick={(e) => setTip(e.target.value)}>15%</button>
                <button type="button" value={amount[3]} className="buttons" onClick={(e) => setTip(e.target.value)}>25%</button>
                <button type="button" value={amount[4]} className="buttons" onClick={(e) => setTip(e.target.value)}>50%</button>
                <input type="number" className="form-control" value={customTip} placeholder="Custom" onChange={(e) => setTip(e.target.value)}></input>
            </div>
        </div>

        <div className="number-of-people-section">
            <label htmlFor="number-of-people" className="form-label">Number of People</label>

            <div className="input-group mb-3">
                <img src={iconperson} alt={iconperson} className="input-group-text" />
                <input type="number" id="number-of-people" className="form-control" placeholder="Enter the number of people"/>
            </div>
        </div>

        </form>

        <div className="output-section">
            <div className="total in-person">
                <span>Tip Amount<br/>/ person</span>
                <h3>{tip}</h3>
            </div>
            <div className="total all">
                <span>Total<br/>/ person</span>
                <h3>{tip}</h3>
            </div>
            <button type="reset" className="reset">RESET</button>
        </div>

    </div>
    </>
  )
}

export default CalculatorMain
