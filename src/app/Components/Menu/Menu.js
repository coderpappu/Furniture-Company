import React from "react"
import Header from "./Header/Header"
import Main_Menu from "./Main_Menu/Main_Menu";
import MenuContent from "./Menu_Content/MenuContent";



const Head_Menu = () => {
    return (
        <>
            <div className='w-100% h-[800px]  bg-[url(https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-center bg-cover bg-no-repeat'>

                <Header />
                <Main_Menu/>
                <MenuContent/>
            </div>
        </>
    )
}

export default Head_Menu;
