import { useState, useEffect } from 'react';
import rgbToHex from './utils';

function SingleColor({rgb, weight, index}) {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    console.log(bcg);
    return (
        <div>
            SingleColor
        </div>
    )
}

export default SingleColor;