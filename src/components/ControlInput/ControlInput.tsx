import { ChangeEvent, useState } from "react"


export const ControlInput = () => {
    const [inputValue1, setInputValue1] = useState('')
    const [inputValue2, setInputValue2] = useState(false)
    const [inputValue3, setInputValue3] = useState <string | undefined> (undefined)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue1(e.currentTarget.value)
    }
    const onChange2 = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue2(e.currentTarget.checked)
    }
    const onChange3 = (e: ChangeEvent<HTMLSelectElement>) => {
        setInputValue3(e.currentTarget.value)
    }


    return (
        <>
            <div>
                <input value={inputValue1} onChange={onChange} /> - {inputValue1}
            </div>
            <div>
                <input type="checkbox" checked={inputValue2} onChange={onChange2} /> - {inputValue2 ? 'true' : 'false'}
            </div>

            <div>
                <select value={inputValue3} onChange={onChange3}>
                    <option>none</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>




        </>
    )
}