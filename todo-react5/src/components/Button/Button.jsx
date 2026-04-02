// импортируем стили для кнопки
// импорт ставится после импорта js файлов, чтобы стили применялись к компоненту
// если бы мы импортировали стили до импорта js файлов, то стили не применялись бы к компоненту,
//  так как компонент еще не был создан
// модульные стили позволяют использовать классы, которые не конфликтуют с другими классами в проекте
import styles from './Button.module.scss';

const Button = (props) => {
  const {
    className='',
    type='button',
    children,
    onClick,
    isDisabled=false
  } = props; 
  return (
    <button className={`${styles.button} ${className}`} type={type} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;