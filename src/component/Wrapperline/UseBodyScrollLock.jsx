import React, { useEffect, useState } from 'react'

const UseBodyScrollLock = () => {
    
    const bodyStyle =document.body.style
    const [isLocked, setIsLocked] = useState(bodyStyle.overflowY === 'hidden')

    useEffect(()=>{
    //    bodyStyle.overflowY = isLocked ? 'hidden' : 'scroll'
    },[isLocked])

    const toggle =()=>setIsLocked(prevState => !prevState)

    return [isLocked,toggle]
 
}

export default UseBodyScrollLock