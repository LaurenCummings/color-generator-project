import { useState, useEffect } from 'react';
import rgbToHex from './utils';

function SingleColor({rgb, weight, index}) {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    console.log(bcg);
    return (
        <article className={`color`} style={{backgroundColor:`rgb(${bcg})`}}>
            SingleColor
        </article>
    )
}

export default SingleColor;