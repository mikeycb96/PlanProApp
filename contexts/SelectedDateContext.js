import React, { createContext, useState } from 'react';

export const SelectedDateContext = createContext(null);

const SelectedDateContextProvider = (props) => {
    const [selectedDate, setSelectedDate] = useState("");
    const contextValue = {selectedDate, setSelectedDate};


return(
    <SelectedDateContext.Provider value={contextValue}>
        {props.children}
    </SelectedDateContext.Provider>
)
}

export default SelectedDateContextProvider