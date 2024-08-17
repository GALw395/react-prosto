import { useEffect, useState } from "react"
import style from "./AnalogClockView.module.css"

type PropsType = { mode: 'digital' | 'analog' }

export const Clock = (props: PropsType) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => { setDate(new Date()) }, 1000)
        return () => { clearInterval(intervalID) }
    }, [])

    let view

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date} />
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date} />
    }

    return <div>{view}</div>
}

type ClockViewPropsType = {
    date: Date
}

export const DigitalClockView = ({ date }: ClockViewPropsType) => {

    const getTwoDigitsString = (number: number) => number < 10 ? '0' + number : number

    return <>
        <span>{getTwoDigitsString(date.getHours())}</span>
        :
        <span>{getTwoDigitsString(date.getMinutes())}</span>
        :
        <span>{getTwoDigitsString(date.getSeconds())}</span>
    </>
}

export const AnalogClockView = ({ date }: ClockViewPropsType) => {

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };


    return (
        <div className={style.clock}>
            <div className={style["analog-clock"]}>
                <div className={`${style.dial} ${style.seconds}`} style={secondsStyle} />
                <div className={`${style.dial} ${style.minutes}`} style={minutesStyle} />
                <div className={`${style.dial} ${style.hours}`} style={hoursStyle} />
            </div>
        </div>
    )
}
