import React, { useEffect } from "react";
import {Header, MainContainer,CreateContainer, MenuheaderContainer } from './components'
import { Route,Routes } from "react-router";
import { AnimatePresence } from 'framer-motion'
import { useStateValue } from "./context/stateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";


const App =() => {
    const [{foodItems},dispatch] = useStateValue()

    const fetchData = async () =>{
        await getAllFoodItems().then(data =>{
           dispatch({
            type:actionType.Set_FOOD_ITEMS,
            foodItems:data
           })
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <AnimatePresence exitBeforeEnter>
            <div className="w-screen h-auto flex flex-col bg-primary">
            {/* absolute */}
            <Header/>

            <main className="mt-16 md:mt-20 px-6 py-5 w-full">
                <Routes>
                    <Route path="/city" element={<MainContainer/>}></Route>
                    <Route path="/menu" element={<MenuheaderContainer/>}></Route>
                    <Route path="/createItem" element={<CreateContainer/>}></Route>
                </Routes>
            </main>
            </div>
        </AnimatePresence>
    ) 
    
};

export default App