import React from 'react'
import Team from '../Team/Team'
import Explore from '../Explore/Explore'
import Bgvedio from '../Bg-vedio/Bgvedio'
import Contact from '../contact/Contact'
import Openings from '../Openings/Openings'
import Subscription from '../subscription/Subscription'
import ExtendMission from '../Mission/ExtendMission'
import Menu from '../Menuicon/Menu'
import Extendproduct from '../Product/Extendproduct'
import Home from '../Home/Home'
const Border = () => {
    return (
        <>
            <div>
                <Menu />
                <Home/>
                <Bgvedio />
                <ExtendMission />
            <Extendproduct />
                <Team />
                <Openings />
                <Explore />
                <Subscription />
                <Contact />
            </div>
        </>

        //     <div className='root-wrapper p-8 flex flex-col'>
        //         <div className="
        //   border-class
        //     border border-customgrey
        //     rounded-lg 
        //     relative 
        //     flex 
        //     flex-col 
        //     items-center 

        //     overflow-y-auto      
        //     z-10
        //   "   style={{
        //                 borderWidth: '1px',
        //                 borderColor: '#424242',
        //                 padding: '0px'
        //             }} >
        //             <Menu />
        //             <Home />
        //             <Bgvedio />
        //             <ExtendMission />
        //             {/* <Product/> */}
        //             <Extendproduct/>
        //             <Team />
        //             <Openings />
        //             <Explore />
        //             <Subscription />
        //             <Contact />
        //         </div>

        //     </div>

    )
}

export default Border