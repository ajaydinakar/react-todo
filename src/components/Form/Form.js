import React,{useEffect} from 'react'

export default function Form(props) {
useEffect(()=>{console.log("form useeffect")

})

  return (
    <div>
      <form  onSubmit={props.onsubmit}>
<input type="text " onChange={props.onchange} value={props.value}></input>
<input type="submit" value="submit" ></input>
</form>



    </div>
  )
}
