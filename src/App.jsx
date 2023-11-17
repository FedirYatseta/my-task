import { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import useSortAndFilter from './hooks';
import React from 'react';
function App() {
  const [users, setUsers] = useState([]);

  const { searchTerm, handleSearch, handleSortChange, sortDirection, sortedData } = useSortAndFilter(users)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
      .catch(error => console.log('Error fetching data:', error));
  }, []);



  return (
    <div className="App">
      <div className='container'>
        <input style={{ padding: '5px', marginRight: '10px' }}
          type="text"
          placeholder="Пошук за іменем"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select style={{ padding: '5px', marginRight: '10px' }} onChange={handleSortChange} value={sortDirection}>
          <option value='desc'>Спадання</option>
          <option value='asc'>Зростання</option>
        </select>
        <ol style={{ padding: '5px', }}>
          {sortedData.map((item, index) => (
            <li key={index}>
              <div style={{ color: '#000', padding: '10px', fontSize: '18px', fontWeight: 600 }}>{item.name}</div>
              <div className='linkGroup'>
                <Link className='btnLink' to={`post/${item.id}`}>Переглянути пости</Link>
                <Link className='btnLink' to={`album/${item.id}`}>Переглянути альбоми</Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
