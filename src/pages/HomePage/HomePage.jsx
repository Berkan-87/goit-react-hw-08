import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div
      style={{
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        fontFamily: 'Arial, sans-serif',
        marginLeft: '450px'
      }}
    >
      <h1
        style={{
          fontSize: '40px',
          marginBottom: '30px',
          color: '#333',
        }}
      >
        Welcome to your contact book!
      </h1>

      <div style={{ display: 'flex', gap: '20px' }}>
        <Link
          to="/register"
          style={{
            padding: '10px 20px',
            fontSize: '20px',
            color: 'white',
            backgroundColor: '#d33',
            borderRadius: '8px',
            textDecoration: 'none',
          }}
        >
          👉 Register
        </Link>
        <Link
          to="/login"
          style={{
            padding: '10px 20px',
            fontSize: '20px',
            color: 'white',
            backgroundColor: '#28a745',
            borderRadius: '8px',
            textDecoration: 'none',
            marginInlineStart: '200px'
          }}
        >
          👉 Login
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
