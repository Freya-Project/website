import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { CarouselBg, CarouselDescription, CarouselSection, CarouselTitle, CarousselControls, ControlIndicator, ReadMoreButton } from './styles';

type CarouselItem = {
    title: string;
    description: string;
    url?: string;
};

type Carousel = {
    items?: CarouselItem[];
};

const Carousel = (props: Carousel) => {
    const { items } = props;
    const [selectedItem, setSelectedItem] = useState(-1);
    const [tick, setTick] = useState(false);

    const contentList = useMemo(() => {
        return items?.map((item: CarouselItem, index: number) =>  {
            const redirectToUrl = () => {
                const url = item.url;
            }
            return (<React.Fragment key={item.title}>
                <CarouselTitle>
                    {item.title}
                </CarouselTitle>
                <CarouselDescription>
                    {item.description}
                </CarouselDescription>
                {item.url ? <ReadMoreButton onClick={redirectToUrl}>
                    <Link href={item.url}>LER MAIS</Link>
                </ReadMoreButton> : <></>}
            </React.Fragment>);
        })
    }, [items]);

    const controlIndicatorList = useMemo(() => {
        return new Array(items.length).fill(undefined).map(
            (_: any, index: number) => {
                const setItem = () => {
                    setSelectedItem(index);
                }
                return <ControlIndicator
                    key={index}
                    onClick={setItem}
                    active={index === selectedItem}
                />;
            }
        );
    }, [items, selectedItem]);

    useEffect(() => {
        const nextItem = selectedItem < items.length - 1 ? selectedItem + 1 : 0;
        setSelectedItem(nextItem);
        const timeout = setTimeout(() => {
            setTick(!tick);
        }, 25000);
        return () => {
            clearTimeout(timeout);
        }
    }, [tick]);

    return (<CarouselBg>
        <CarouselSection>
            {contentList[selectedItem]}
        </CarouselSection>
        <CarousselControls>
            {controlIndicatorList}
        </CarousselControls>
    </CarouselBg>);    
}

export default Carousel;
