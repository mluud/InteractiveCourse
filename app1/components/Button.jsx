import { useState } from "react";

export default function Button(props){

return (
<button onClick={props.functionHandler}>
          count is {props.value}
        </button>
)
}