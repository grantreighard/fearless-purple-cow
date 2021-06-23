import React, {useState} from 'react';
import axios from 'axios';
import EmojiDisplay from './emojiDisplay';
import './purpleCow.css';

const PurpleCow = () => {
    const [count, setCount] = useState(0);

    const getHits = () => {
        axios
            .get("https://api.countapi.xyz/hit/grantreighard.com/1ccb732e-b55a-4404-ad3f-0f99c02fe44e")
            .then(res => {
                setCount(res.data.value);
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div>
            <h1>Purple Cow Project</h1>
            <button onClick={getHits}>Get number of hits and display</button>
            {count > 0 ? <h3>Number of hits: {count}</h3> : null}

            <div className="cows">
                {count > 0 ?
                    count <= 50 
                ?
                    new Array(count).fill(0).map((num, index) => {
                        return <EmojiDisplay key={index} />
                    }) 
                : 
                    new Array(50).fill(0).map((num, index) => {
                        return <EmojiDisplay key={index} />
                    })
                :
                    null}
                
                {count > 50 ?  <div className="plus-more">+ {count - 50} more</div> : null}
            </div>
        </div>
    )
}

export default PurpleCow;