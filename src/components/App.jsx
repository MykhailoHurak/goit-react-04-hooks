import React from 'react';
import 'components/App.css';
import ColorPicker from './ColorPicker';
import Counter from './Counter';
import Clock from './Clock';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export default class App extends React.Component {

  render() {

    return (
      <div className='App'>
        <Clock />

        <Counter
          initialValue={0}
        />

        <ColorPicker
          options={colorPickerOptions}
        />
      </div>
    );
  };
}