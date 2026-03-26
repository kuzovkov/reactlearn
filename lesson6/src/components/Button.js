import React, {useState, useEffect} from 'react';

const Button = ({text="Кнопка"}) => {
  const [click, setClick] = useState(0);
  console.log(click);
  useEffect(()=>{
    document.title = `Кликнули ${click} раз`;
  })
  return (
      <button onClick={()=> setClick(click+1)}>{text} {click}</button>
  );
}

export default Button