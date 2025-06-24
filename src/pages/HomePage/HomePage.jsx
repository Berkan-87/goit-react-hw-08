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
      <h1>Welcome to your contact book!</h1>
      <p>
        <Link to="/register" style={{ color: 'red', fontSize: '30px' }}>👉 Go to Registration</Link>
      </p>
    </div>
  );
};

export default HomePage;



