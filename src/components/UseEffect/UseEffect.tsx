import { useEffect, useState } from "react"





export const UseEffect = () => {

    const [counter, setCounter] = useState(1)
    console.log('simpleExample')

    useEffect(()=>{
        console.log('useEffect') 
        document.title = counter.toString()
        //    сайдэффекты: 
        // api.getUser().then('')   - запросы на сервер(asinc)
        // setInterval              - установка интервалов(asinc)
        // indexedDB                - работа с базой данных
        // document.getElementId    - обращение напрямую к DOM-элементу
        // document.title = 'User ' - изменение напрямую в DOM-элементе
    }, [counter])
    
    return <>
        Hello, {counter}
        <button onClick={()=>setCounter(counter + 1)}>+</button>
    </>


}