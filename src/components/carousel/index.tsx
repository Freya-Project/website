import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';

import {
    CarouselBg, CarouselDescription, CarouselSection, CarouselTitle, CarousselControls,
    ControlIndicator, ReadMoreButton, CarouselContainer, SlideContainer
} from './styles';

type CarouselItem = {
    title: string;
    description: string;
    url?: string;
};

type Carousel = {
    items?: CarouselItem[];
};

function createItem(item: CarouselItem, current?: boolean) {
    if(!item) return;
    const redirectToUrl = () => {
        const url = item.url;
    }
    return (
        <CarouselSection
            key={item.title}
            enter={current}
        >
            <CarouselTitle>
                {item.title}
            </CarouselTitle>
            <CarouselDescription>
                {item.description}
            </CarouselDescription>
            {item.url ? <ReadMoreButton onClick={redirectToUrl}>
                <Link href={item.url}>LER MAIS</Link>
            </ReadMoreButton> : <></>}
        </CarouselSection>
    );
}

const Carousel = (props: Carousel) => {
    const { items } = props;
    const [selectedItem, setSelectedItem] = useState(0);
    const [previousItem, setPreviousItem] = useState(items.length-1);
    const [lastTimeout, setLastTimeout] = useState({} as NodeJS.Timeout);
    const [tick, setTick] = useState(false);
    const [started, setStarted] = useState(false);

    function resetTimeout() {
        clearTimeout(lastTimeout);
        const timeout = setTimeout(() => {
            setTick(!tick);
        }, 25000);
        setLastTimeout(timeout);
    }

    function setItem(index: number){
        resetTimeout();
        if(selectedItem !== index) {
            setPreviousItem(selectedItem);
            setSelectedItem(index);
        } 
    }

    const contentList = useMemo(() => {
        const itemList = [createItem(items[selectedItem], true), createItem(items[previousItem])];
        const orderCheck = items.length > 2 ? 
            (selectedItem < previousItem && !(previousItem === items.length - 1 && selectedItem === 0))
                || (selectedItem === items.length -1 && previousItem === 0)
            : selectedItem < previousItem;
        const direction = orderCheck ? "left" : "right";
        const orderedItems = orderCheck ? itemList : itemList.reverse();
        return (
            <SlideContainer 
                key={`${selectedItem}${previousItem}`}
                direction={started ? direction : "nodirection"}>
                    {orderedItems}
            </SlideContainer>
        );

    }, [items, selectedItem, previousItem, tick]);

    const controlIndicatorList = useMemo(() => {
        return new Array(items.length).fill(undefined).map(
            (_: any, index: number) => {
                const setCurrent = () => {
                    setItem(index);
                }
                return <ControlIndicator
                    key={index}
                    onClick={setCurrent}
                    active={index === selectedItem}
                />;
            }
        );
    }, [items, selectedItem]);

    useEffect(() => {
        if(!started) {
            setStarted(true);
            resetTimeout();
        }else{
            const nextItem = selectedItem < items.length - 1 ? selectedItem + 1 : 0;
            setItem(nextItem);
        }
    }, [tick]);

    useEffect(() => {
        return () => {
            clearTimeout(lastTimeout);
        }
    }, [lastTimeout]);

    return (<CarouselBg>
        <CarouselContainer>
            {contentList}
        </CarouselContainer>
        <CarousselControls>
            {controlIndicatorList}
        </CarousselControls>
    </CarouselBg>);    
}

export default Carousel;
