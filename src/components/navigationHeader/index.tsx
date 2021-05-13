import React from 'react';
import Carousel from '../carousel';
import NavigationBar from './navigationBar';
import { NavigationContainer } from './styles';

const NavigationHeader = () => {
    const carouselItems = [
        {
            title: "Projeto Bifrost",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan mi ut nulla imperdiet iaculis. Nulla non pellentesque sapien. Morbi in euismod neque. Donec hendrerit, ipsum eget consectetur tincidunt, nibh mi convallis magna, et vulputate ligula velit ut turpis. Donec elementum odio erat, vel consequat diam maximus non. Sed mollis, augue id sollicitudin placerat, massa odio...",
            url: "https://sla.com"
        },
        {
            title: "Novidades",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan mi ut nulla imperdiet iaculis. Nulla non pellentesque sapien. Morbi in euismod neque. Donec hendrerit, ipsum eget consectetur tincidunt, nibh mi convallis magna, et vulputate ligula velit ut turpis. Donec elementum odio erat, vel consequat diam maximus non. Sed mollis, augue id sollicitudin placerat, massa odio...",
            url: "https://sla2.com"
        },
        {
            title: "Parceria",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan mi ut nulla imperdiet iaculis. Nulla non pellentesque sapien. Morbi in euismod neque. Donec hendrerit, ipsum eget consectetur tincidunt, nibh mi convallis magna, et vulputate ligula velit ut turpis. Donec elementum odio erat, vel consequat diam maximus non. Sed mollis, augue id sollicitudin placerat, massa odio...",
            url: "https://sla3.com"
        },
    ];
    return (<NavigationContainer>
        <NavigationBar/>
        <Carousel items={carouselItems}/>
    </NavigationContainer>);
}

export default NavigationHeader;
