import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone'

function RenderTime({ timezone }) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Better way to set timezones using moment library
      setTime(moment().tz(timezone).format('hh:mm:ss a'))
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [timezone]) // [timezone] represents array that will cause the useEffect to trigger

  return <div className='curr-time'>Current Time: {time}</div>
}

export default RenderTime
