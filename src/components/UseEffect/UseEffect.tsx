import { useEffect, useState } from "react"





export const UseEffect = () => {

    const [counter, setCounter] = useState(1)
    console.log('simpleExample')

    useEffect(()=>{
        // setInterval( () => {
        //     console.log(counter)            
        //     setCounter(state => state + 1)
        // }, 1000 )
        // setTimeout(()=>{
        //     document.title = counter.toString()
        // }, 2000)
        //    сайдэффекты: 
        // api.getUser().then('')   - запросы на сервер(asinc)
        // setInterval              - установка интервалов(asinc)
        // indexedDB                - работа с базой данных
        // document.getElementId    - обращение напрямую к DOM-элементу
        // document.title = 'User ' - изменение напрямую в DOM-элементе
    }, []) // [counter] - перерисовка в зависимости от "counter". [] - один раз в начале. Если ничего нет, то перерисовывай всегда!!!
    
    return <>
        Hello, {counter}
        <button onClick={()=>setCounter(counter + 1)}>+</button>
    </>


}