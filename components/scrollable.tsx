import {alpha, Typography} from "@mui/material";
import React, {Fragment, useEffect, useRef, useState} from "react";

export default function Scrollable({label, options, optionChanged}: {label:string, options: string[], optionChanged: (newOption: string) => void }) {
    const selectionAreaRef = useRef<any>();
    const childRefs = useRef<any>([]);
    childRefs.current = [];
    const [selectedOption, setSelectedOption] = useState('');

    const addToChildRefs = (el: any) => {
        if (el && !childRefs.current.includes(el)) {
            childRefs.current.push(el);
        }
    }

    function handleScroll() {
        const selectionAreaRect = selectionAreaRef.current.getBoundingClientRect();
        childRefs.current.forEach((child: any, index: number) => {
            const childRect = child.getBoundingClientRect();
            if (selectionAreaRect.top.toString() === childRect.top.toString() &&
                selectionAreaRect.right.toString() === childRect.right.toString() &&
                selectionAreaRect.bottom.toString() === childRect.bottom.toString() &&
                selectionAreaRect.left.toString() === childRect.left.toString()
            ) {
                setSelectedOption(child.textContent);
            }
        })
    }

    useEffect(() => {
        handleScroll();
    }, [options])

    useEffect(() => {
        if (selectedOption.length > 0) {
            optionChanged(selectedOption);
        }
    }, [selectedOption])

    return <Fragment>
        <div style={{position: 'relative', height: "320px", width: '100%'}}>
            <div style={{position: "absolute", width: 'inherit', height: '40px', backgroundColor: '#000', zIndex: 10}}/>
            <div style={{
                position: "absolute",
                width: 'inherit',
                height: '100px',
                backgroundColor: alpha('#000', 0.8),
                zIndex: 9,
                borderBottom: '1px solid #999'
            }}/>
            <div ref={selectionAreaRef} style={{
                marginTop: 110,
                position: "absolute",
                width: 'inherit',
                height: '100px',
                background: 'none',
                zIndex: -1,
            }}/>
            <div className="scroll-container" onScroll={handleScroll}>
                <div className="scroll-area"></div>
                {

                    options.map((option, index) => <div key={index} className='scroll-area'
                                                        ref={addToChildRefs}>
                        <Typography variant={'h3'}>{option}</Typography>
                    </div>)
                }
                <div style={{marginBottom: 0}} className="scroll-area"></div>
            </div>
            <div style={{bottom: 110, position: 'absolute', width: 'inherit', zIndex: 9, color: '#fff'}}>
                <Typography variant={'subtitle2'}>{label}</Typography>
            </div>
            <div style={{
                bottom: 0,
                position: "absolute",
                width: 'inherit',
                height: '100px',
                backgroundColor: alpha('#000', 0.8),
                zIndex: 9,
                borderTop: '1px solid #999'
            }}/>
            <div style={{
                position: "absolute",
                width: '100%',
                height: '40px',
                backgroundColor: '#000',
                zIndex: 10,
                bottom: 0
            }}/>
        </div>
    </Fragment>
}