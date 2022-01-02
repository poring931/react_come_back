import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import Postitem from './components/Postitem';
import PostList from './components/PostList';
import Buttton from './components/UI/button/Button';
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([
      {id:1, title:'JS', body:'description'},
      {id:2, title:'JSss', body:'description'},
      {id:3, title:'JSaaa', body:'description'},
      {id:4, title:'JSww', body:'description'},
      {id:5, title:'JSeee', body:'description'},
  ])

  return (
    <div className="App">
      <form action="">
        <input type="text" placeholder='Название поста' />
        <input type="text" placeholder='Описание поста' />
        <Buttton >Создать пост</Buttton>
      </form>
      <PostList posts={posts} title='Список постов 1'/>
      
    </div>
  );
}

export default App;
