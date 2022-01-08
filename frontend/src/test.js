import React, { useState } from 'react';

export const Parent = () => {
  const [data, setData] = useState(null);

    const handleCallback = (childData) =>{
        setData(childData)
    }
        return(
            <div>
                <Child parentCallback = {handleCallback}/>
                {data}
            </div>
        )
}

const Child = (props) => {
    const onTrigger = (event) => {
        props.parentCallback(() => {
          console.log('This also works')
        });
        event.preventDefault();
    }
        return(
        <div>
            <form onSubmit = {onTrigger}>
                <input type = "submit" value = "Submit"/>
            </form>
        </div>
        )
}

export default Parent;