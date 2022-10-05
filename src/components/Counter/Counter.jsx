// import { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import './Counter.css';

// Hooks ==============================================================
export default function Counter() {
    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);

    const handleCounterAIncrement = () => {
        setCounterA(prevState => prevState + 1);
    };

    const handleCounterBIncrement = () => {
        setCounterB(prevState => prevState + 1);
    };

    useEffect(() => {
        // console.log('Запускається useEffect ' + Date.now());
        const totalClicks = counterA + counterB;
        document.title = `Всього клікнули ${totalClicks} разів`;
        console.log(document.title);
    }, [counterA, counterB]);

    return (
        <div className='counter'>
            <h2 className='counter_title'>Counter</h2>
            
            <div className='controls'>
                <button
                    className='button'
                    type="button"
                    onClick={handleCounterAIncrement}
                >
                    Клінкнули CounterA {counterA} разів
                </button>
            
                <button
                    className='button'
                    type="button"
                    onClick={handleCounterBIncrement}
                >
                    Клінкнули CounterB {counterB} разів
                </button>
            </div>
        </div>
    );
};

// Live Cycles ========================================================
// class OldCounter extends Component {
//     state = {
//         counterA: 0,
//         counterB: 0,
//     };

//     handleCounterAIncrement = () => {
//         this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
//     };

//     handleCounterBIncrement = () => {
//         this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
//     };

//     componentDidMount() {
//         const { counterA, counterB } = this.state;
//         const totalClicks = counterA + counterB;

//         document.title = `Всего кликнули ${totalClicks} раз`;
//     }

//     componentDidUpdate(prevProps, prevState) {
//         const { counterA, counterB } = this.state;

//         if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
//             const totalClicks = counterA + counterB;

//             document.title = `Всего кликнули ${totalClicks} раз`;
//         }
//     }

//     render() {
//         return (
//             <div className='counter'>
//                 <h2 className='counter_title'>Counter</h2>

//                 <div className='controls'>
//                     <button
//                         className='button'
//                         type="button"
//                         onClick={this.handleCounterAIncrement}
//                     >
//                         Клікнули counterA {this.state.counterA} разів
//                     </button>

//                     <button
//                         className='button'
//                         type="button"
//                         onClick={this.handleCounterBIncrement}
//                     >
//                         Клікнули counterB {this.state.counterB} разів
//                     </button>
//                 </div>
//             </div>
//         );
//     };
// };