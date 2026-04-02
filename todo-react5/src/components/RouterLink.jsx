const RouterLink = (props) => {
  const { 
    to, 
    children, 
    ...rest 
  } = props;
  
  // handleClick - это функция, которая обрабатывает клик по ссылке. Она предотвращает 
  // стандартное поведение браузера,
  // обновляет URL с помощью history.pushState и вызывает событие popstate, чтобы уведомить
  //  роутер об изменении пути.
  // to - это строка, которая представляет путь, который нужно перейти.
  // children - это дочерний элемент, который будет отображаться внутри ссылки.
  // ...rest - это все остальные свойства, которые будут переданы внутри ссылки.
  const handleClick = (e) => {
    e.preventDefault();
    window.history.pushState(null, '', to);
    const popStateEvent = new PopStateEvent('popstate');
    window.dispatchEvent(popStateEvent);
  }

  return (
    <a href={to} onClick={handleClick} {...rest}>{children}</a>
  );
}   

export default RouterLink;