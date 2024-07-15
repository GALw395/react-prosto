import { useState } from "react"



function generateData() {
    console.log("generateData")
    return 10   
}



export const UseState = () => {

    console.log('UseState')

    const [counter, setCounter] = useState(generateData)

    return (
        <>
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            {counter}
        </>
    )

}