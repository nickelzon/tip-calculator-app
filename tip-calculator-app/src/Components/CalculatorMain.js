import iconperson from '../images/icon-person.svg'
import icondollar from '../images/icon-dollar.svg'
import logo from '../images/logo.svg'
import { useState } from 'react'

const CalculatorMain = () => {

    const [tip, setTip] = useState('')
    const [bill, setBill] = useState('')
    const [people, setPeople] = useState(1)

    const [totalTip, setTotalTip] = useState(0)

    var sub = tip / 100

    const reload = () => {
        window.location.reload()
    }

  return (
    <>
<div className="root-container">
<img src={logo} alt={logo} className="logo"/>
    <div className="main-container freakin-hate-css">

        <form className="form-input">
        <div className="first-section">
            <label htmlFor="bill" className="form-label">Bill</label>

            <div className="input-group mb-3">
                <img src={icondollar} alt={icondollar} className="input-group-text" />
                <input type="number" id="bill" value={bill} onChange={(e) => setBill(e.target.value)} className="form-control" placeholder="Enter the amount"/>
            </div>
        </div>

        <div className="tip-section-main">
            <label htmlFor="tip" className="form-label">Select Tip %</label>

             <div className="tip-section" id="tip">
                <button type="button" className="buttons" onClick={() => setTip(5)}>5%</button>
                <button type="button" className="buttons" onClick={() => setTip(10)}>10%</button>
                <button type="button" className="buttons" onClick={() => setTip(15)}>15%</button>
                <button type="button" className="buttons" onClick={() => setTip(25)}>25%</button>
                <button type="button" className="buttons" onClick={() => setTip(50)}>50%</button>
                <input type="number" className="form-control" value={tip} placeholder="How many percent?" onChange={(e) => setTip(e.target.value)}></input>
            </div>
        </div>

        <div className="number-of-people-section">
            <label htmlFor="number-of-people" className="form-label">Number of People</label>

            <div className="input-group mb-3">
                <img src={iconperson} alt={iconperson} className="input-group-text" />
                <input type="number" id="number-of-people" value={people} className="form-control" placeholder="Enter the number of people" onChange={(e) => setPeople(e.target.value)}/>
            </div>

            <button type="button" className="btn btn-warning" onClick={() => setTotalTip((sub * bill))}>Calculate</button>
        </div>

        </form>

        <form className="output-section">
            <div className="total in-person">
                <span>Tip Amount<br/>per person</span>
                <h3>${(totalTip).toFixed(2)}</h3>
            </div>
            <div className="total all">
                <span>Total tip:</span>
                <h3>${(totalTip * people).toFixed(2)}</h3>
            </div>
            <button type="button" className="reset" onClick={() => reload()}>RESET</button>
        </form>

    </div>
</div>
    </>
  )
}

export default CalculatorMain
