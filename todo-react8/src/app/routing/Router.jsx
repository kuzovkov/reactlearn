import { useState, useEffect } from 'react';

// useState - это хук, который позволяет добавлять состояние в функциональные компоненты.
// useEffect - это хук, который позволяет выполнять побочные эффекты в функциональных компонентах, 
// таких как подписки, таймеры или запросы к API. Он принимает функцию и массив зависимостей, 
// и выполняет функцию после каждого рендера, если зависимости изменились.
// useRouter - это пользовательский хук, который позволяет отслеживать текущий путь в URL
//  и обновлять его при изменении.
// Router - это компонент, который рендерит соответствующий компонент в зависимости 
// от текущего пути в URL.
export const useRouter = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', onLocationChange);
    // Возвращаем функцию очистки, которая удаляет обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return path;
}

const matchPath  =(path, route) => {
  const pathParts = path.split('/');
  const routeParts = route.split('/');
  if (pathParts.length !== routeParts.length) {
    return null;
  }
  const params = {};
  for (let i = 0; i < pathParts.length; i++) {
    if (routeParts[i].startsWith(':')) {
      const paramName = routeParts[i].slice(1);
      params[paramName] = pathParts[i];
    } else if (routeParts[i] !== pathParts[i]) {
      return null;
    }
  }
  return params;
}

// useRouter - это пользовательский хук, который позволяет отслеживать текущий путь в URL
//  и обновлять его при изменении.
const Router = (props) => {
  const {routes} = props;
  const path = useRouter();
  // if (path.startsWith('/tasks/')) {
  //   const id = path.replace('/tasks/', '');
  //   const TaskPage = routes['/tasks/:id'];
  //   return <TaskPage params={{id}} />;
  // }
  // const Page = routes[path] ?? routes['*'];
  // return <Page />;
  for (const route in routes) {
    const params = matchPath(path, route);
    if (params) {
      const Page = routes[route];
      return <Page params={params} />;
    }
  }
  const NotFoundPage = routes['*'];
  return <NotFoundPage />;
}

export default Router;