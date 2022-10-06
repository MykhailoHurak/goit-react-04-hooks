// import { Component } from 'react';
import { useState, useEffect, useRef } from 'react';
import './Clock.css';

// Hooks ==============================================================
export default function Clock() {

    const [time, setTime] = useState(() => new Date()); 
    
    const intervalId = useRef(null); // {current: null}

    useEffect(() => {
        intervalId.current = setInterval(() => {
            console.log('Це інтервал кожні 1000ms ' + Date.now());
            setTime(new Date());
        }, 1000);
        
        return () => {
            console.log('Це фунуція перед наступним викликом useEffect');
            stop();
        }

    }, []);

    const stop = () => {
        clearInterval(intervalId.current);
    };

    console.log(intervalId);
    
    return (
        <div className='container'>
            <h2 className='title'>Clock</h2>
            <p className='clockface'>
                Поточний час: {time.toLocaleTimeString()}
            </p>
            <button
                type="button"
                className='button'
                onClick={stop}
            >
                Зупинити
            </button>
      </div>
    );
}

// Live Cycles ========================================================
// export default class OldClock extends Component {
//     state = {
//         time: new Date(),
//     };

//     intervalId = null;

//     componentDidMount() {
//         this.intervalId = setInterval(() => {
//             console.log('Це інтервал кожні 1000ms ' + Date.now());
//             this.setState({ time: new Date() });
//         }, 1000);
//     };

//     componentWillUnmount() {
//         console.log('Цей метод викликається перед розмонтуванням компонента');
//         this.stop();
//     };

//     stop = () => {
//         clearInterval(this.intervalId);
//     };

//     render() {
//         return (
//             <div className='container'>
//                 <h2 className='title'>Clock</h2>
//                 <p className='clockface'>
//                     Поточний час: {this.state.time.toLocaleTimeString()}
//                 </p>
//                 <button
//                     type="button"
//                     className='button'
//                     onClick={this.stop}
//                 >
//                     Зупинити
//                 </button>
//           </div>
//         );
//     };
// };