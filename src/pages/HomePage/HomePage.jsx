// const HomePage = () => {
//   return (
//     <div>
//       <h1>Welcome to the Home Page!</h1>
//     </div>
//   );
// };

// export default HomePage;

import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Добро пожаловать!</h1>
      <p>
        <Link to="/register">Перейти к регистрации</Link>
      </p>
    </div>
  );
};

export default HomePage;



