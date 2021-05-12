import React, { PropsWithChildren } from 'react';
import NavigationBar from './navigationBar';
import { CarouselBg, NavigationContainer } from './styles';

const NavigationHeader = () => {
    return (<NavigationContainer>
        <NavigationBar/>
        <CarouselBg></CarouselBg>
    </NavigationContainer>);
}

export default NavigationHeader;
