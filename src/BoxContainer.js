import React from 'react';
import Box from './Box';
import {connect} from 'react-redux';

const BoxContainer = (props) => {
    const boxes = props.options.map((box, i) => <Box info={box} />)
    return (
        <div>
            {boxes}
        </div>
    );
};

export default connect(state => state, {})(BoxContainer);