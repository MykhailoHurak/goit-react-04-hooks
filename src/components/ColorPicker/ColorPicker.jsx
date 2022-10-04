import { useState } from 'react';
import './ColorPicker.css';

export default function ColorPicker({ options }) {

    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    // state = { activeButtonIndex: 0, };

    const setActiveIndex = index => {
        setActiveButtonIndex(index);
    };
    // setActiveIndex = (index) => { this.setState({ activeButtonIndex: index }) };

    const { label } = options[activeButtonIndex]; // теж саме
    // const { label } = options[activeButtonIndex];

    const makeButtonClassName = index => { // const присвоїли makeButtonClassName
        const buttonClasses = ['colorPicker__button'];
        if (index === activeButtonIndex) { // прибрали this.state
            buttonClasses.push('colorPicker__button--active')
        }
        return buttonClasses.join(' ');
    };
    // makeButtonClassName = index => {
    //         const buttonClasses = ['colorPicker__button'];
    //         if (index === this.state.activeButtonIndex) {
    //             buttonClasses.push('colorPicker__button--active')
    //         }
    //         return buttonClasses.join(' ');
    //     };

    return (
        <div className='colorPicker'>
            <h2 className='colorPicker_title'>ColorPicker</h2>
            <p>Selected color: <span className='colorPicker_label'>{label}</span></p>
            <div className='colorPicker__buttonBox'>
                {options.map(({ label, color }, index) => {
                    const buttonClassName = makeButtonClassName(index);

                    return (
                        <button
                            className={buttonClassName}
                            key={label}
                            style={{ backgroundColor: color }}
                            onClick={() => setActiveIndex(index)}
                        >
                        </button>
                    )
                })}
            </div>
        </div>
    )
};

// class OldColorPicker extends React.Component {
//     state = {
//         activeButtonIndex: 0,
//     };

//     setActiveIndex = (index) => {
//         this.setState({ activeButtonIndex: index })
//     };

//     makeButtonClassName = index => {
//         const buttonClasses = ['colorPicker__button'];

//         if (index === this.state.activeButtonIndex) {
//             buttonClasses.push('colorPicker__button--active')
//         }
//         return buttonClasses.join(' ');
//     };

//     render() {
//         const { options } = this.props;
//         const { activeButtonIndex } = this.state;
//         const { label } = options[activeButtonIndex];

//         return (
//             <div className='colorPicker'>
//                 <h2 className='colorPicker_title'>ColorPicker</h2>
//                 <p>Selected color: <span className='colorPicker_label'>{label}</span></p>
//                 <div className='colorPicker__buttonBox'>
//                     {this.props.options.map(({ label, color }, index) => {
//                         const buttonClassName = this.makeButtonClassName(index);

//                         return (
//                             <button
//                                 className={buttonClassName}
//                                 key={label}
//                                 style={{ backgroundColor: color }}
//                                 onClick={() => this.setActiveIndex(index)}
//                             >
//                             </button>
//                         )
//                     })}
//                 </div>
//             </div>
//         )
//     }
// }

// export default ColorPicker;