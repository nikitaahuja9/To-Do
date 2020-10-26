import React, { Component } from "react";

import { ResizableBox } from 'react-resizable';
import Create from './Create.component';
import List from './List.component';

import style from '../../src/App.css'

export default class ToDo extends Component {
    render() {
        return (
            <div style={{ overflow: 'scroll' }}>

                    <div class="header">
                        PERSONAL PLANNER
                        
                    <img src="pencil.png" style={{height:'1em', width:'1.2em'}}/>
                    </div>

                    <div className="layoutRoot">
                        <ResizableBox
                            className="custom-box box"
                            width={window.innerWidth * 0.3}
                            height={250}
                            style={{fontSize:'18px', fontWeight:'700', justifyContent:'center', alignItems:'center', textalign:'center'}}
                            handle={(h) => <span className={`custom-handle custom-handle-${h}`} />}
                            handleSize={[8, 8]}
                            resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
                            <span className="text">{"Welcome to your planner! Use this tool to manage all your daily tasks."}</span>
                        </ResizableBox>
                        <ResizableBox
                            className="custom-box box"
                            width={window.innerWidth * 0.63}
                            height={250}
                            handle={(h) => <span className={`custom-handle custom-handle-${h}`} />}
                            handleSize={[8, 8]}
                            style={{fontSize:'14px', fontWeight:'700'}}
                            resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
                            <span className="text"><Create/></span>
                        </ResizableBox>
                    </div>

                    <div className="layoutRoot">
                        <ResizableBox
                            className="custom-box box"
                            width={window.innerWidth}
                            height={600}
                            handle={(h) => <span className={`custom-handle custom-handle-${h}`} />}
                            handleSize={[8, 8]}
                            style={{fontSize:'16px', fontWeight:'700'}}
                            resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
                            <span className="text"><List/></span>
                        </ResizableBox>
                    </div>

                    <div class="my-footer">
                        <p>Copyright © 2020</p>
                    </div>

                </div>
        )
    }
}