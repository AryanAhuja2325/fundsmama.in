import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const useNavigationContext = () => {
    return useContext(NavigationContext);
};

export const NavigationProvider = ({ children }) => {
    const [hasSubmitted, setHasSubmitted] = useState(false);

    return (
        <NavigationContext.Provider value={{ hasSubmitted, setHasSubmitted }}>
            {children}
        </NavigationContext.Provider>
    );
};
