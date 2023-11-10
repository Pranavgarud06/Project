import { useState } from "react";


const initialInput = {
    'current-savings' :'',
    'yearly-contribution': '',
    'expected-return': '',
    duration : ''
};

function Form(props) {
   const [userInput , setUserInput] = useState(initialInput);

    function submitHandler(event) {
        event.preventDefault();

        props.onCalculate(userInput);
    }

    function resetHandler() {
        setUserInput (initialInput);
    }

    function ChangeHnadler(input, value) {
            setUserInput((prevInput)=> {
                return {
                    ...prevInput,
                    [input]: +value, 

                }
            }
            );
    };
    return (
        <form onSubmit={submitHandler} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings (₹)</label>
                    <input onChange={(event) => ChangeHnadler('current-savings', 
                     event.target.value)} value={userInput['current-savings']} type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings (₹)</label>
                    <input onChange={(event) => ChangeHnadler('yearly-contribution', 
                     event.target.value)}  value={userInput['yearly-contribution']}type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input onChange={(event) => ChangeHnadler('expected-return', 
                     event.target.value)}  value={userInput['expected-return']} type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(event) => ChangeHnadler('duration', 
                     event.target.value)}  value={userInput['duration']}type="number" id="duration" />
                </p>
            </div>
            <p className="actions">
                <button onClick={resetHandler} type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>




    );
};


export default Form