import { useEffect, useState } from "react"


export const ResetEffectExample = () => {

    const [text, setText] = useState("")
    console.log('component rendered' + text)

    useEffect(()=>{
        const hendler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)            
        }
        window.addEventListener('keypress', hendler)    
        return ()=>{   
            window.removeEventListener('keypress', hendler)     
        }
    }, [text])
    return <>
        {text}
    </>


}