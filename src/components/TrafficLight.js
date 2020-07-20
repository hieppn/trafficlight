import React, {Component} from 'react';
import classNames from 'classnames';

import './TrafficLight.css';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component{


    render(){
        /*} const {currentColor} = this.state;*/
        const {currentColor} = this.props;
        console.log('Rendering...',currentColor);
        return <div className="TrafficLight">
            <div className={classNames('bulb','red',{
                active:currentColor === RED
            })}/>
           <div className={classNames('bulb','orange',{
                active:currentColor === ORANGE
            })}/>
            <div className={classNames('bulb','green',{
                active:currentColor === GREEN
            })}/>
        </div>;
    }
}
export default TrafficLight;