import { useMemo, useState } from "react"



export const Example1 = () => {

    const [a, setA] = useState(1)
    const [b, setB] = useState(1)

    let resaltA = 1
    let resaltB = 1

    resaltA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resaltB = resaltB * i
    }


    return <>
        <input value={a} onChange={e => setA(Number(e.currentTarget.value))} />  {/*два варианта приведения типа строка к типу число */}
        <input value={b} onChange={e => setB(+e.currentTarget.value)} />          {/*два варианта приведения типа строка к типу число */}
        <hr />
        <div>
            Result for a: {resaltA}
        </div>
        <div>
            Result for b: {resaltB}
        </div>
    </>
}