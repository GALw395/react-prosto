import { ChangeEvent,useRef, useState } from "react"


export const InputComponent = () => {
    const [inputValue1, setInputValue1] = useState('')
    const [inputValue2, setInputValue2] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setInputValue1(actualValue)
    }

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setInputValue2(el.value)
    }

    return (
        <>
            <div>
                <input value={inputValue1} onChange={onChange} /> - {inputValue1}
            </div>
            <div>
                <input ref={inputRef} /> <button onClick={save}>save</button> - {inputValue2}
            </div>


        </>
    )
}