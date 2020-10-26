import React, { Component } from "react";

import { ResizableBox } from 'react-resizable';
import style from './App.css';

export default class App extends Component {

    state = {
        width: 200,
        height: 200,
        absoluteWidth: 200,
        absoluteHeight: 200,
        absoluteLeft: 0,
        absoluteTop: 0,
    };

    onResetClick = () => {
        this.setState({ width: 200, height: 200, absoluteWidth: 200, absoluteHeight: 200 });
    };

    onResize = (event, { element, size, handle }) => {
        this.setState({ width: size.width, height: size.height });
    };

    onResizeAbsolute = (event, { element, size, handle }) => {
        this.setState((state) => {
            let newLeft = state.absoluteLeft;
            let newTop = state.absoluteTop;
            const deltaHeight = size.height - state.absoluteHeight;
            const deltaWidth = size.width - state.absoluteWidth;
            if (handle[0] === 'n') {
                newTop -= deltaHeight;
            } else if (handle[0] === 's') {
                newTop += deltaHeight;
            }
            if (handle[handle.length - 1] === 'w') {
                newLeft -= deltaWidth;
            } else if (handle[handle.length - 1] === 'e') {
                newLeft += deltaWidth;
            }

            return {
                absoluteWidth: size.width,
                absoluteHeight: size.height,
                absoluteLeft: newLeft,
                absoluteTop: newTop,
            };
        });
    };

    render() {

        return (
            <div className='container'>

                <div style={{ overflow: 'scroll' }}>

                    <div class="header">
                        TO DO LIST
                        
                    <img src="pencil.png" style={{height:'1em', width:'1.2em'}}/>
                    </div>

                    <div className="layoutRoot">
                        <ResizableBox
                            className="custom-box box"
                            width={window.innerWidth * 0.3}
                            height={250}
                            handle={(h) => <span className={`custom-handle custom-handle-${h}`} />}
                            handleSize={[8, 8]}
                            resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
                            <span className="text">{"One"}</span>
                        </ResizableBox>
                        <ResizableBox
                            className="custom-box box"
                            width={window.innerWidth * 0.63}
                            height={250}
                            handle={(h) => <span className={`custom-handle custom-handle-${h}`} />}
                            handleSize={[8, 8]}
                            resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
                            <span className="text">{"Two"}</span>
                        </ResizableBox>
                    </div>

                    <div className="layoutRoot">
                        <ResizableBox
                            className="custom-box box"
                            width={window.innerWidth}
                            height={300}
                            handle={(h) => <span className={`custom-handle custom-handle-${h}`} />}
                            handleSize={[8, 8]}
                            resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
                            <span className="text">{"Three"}</span>
                        </ResizableBox>
                    </div>

                    <div class="footer">
                        <p>Copyright © 2020</p>
                    </div>

                </div>
            </div>
        )
    }

}