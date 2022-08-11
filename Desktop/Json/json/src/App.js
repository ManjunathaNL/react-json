import './App.css';
// import { useState, useEffect } from 'react';
import { users } from './users';
import Modal from "./Modal";
import useModal from './useModal';
import "./styles.css";

function App() {
  const { isShowing, toggle } = useModal();
  return (
    <div className="container">
      <div className="row">
        {users.map(data => (
          <div className="col-md-6" key={data.id}>
            <div className="card">
              <div className="card-body">
                <div className="images">
                  <img
                    src={data.thumbnail.large}
                    className="card-img-top"
                    alt="img"
                    width={700}
                    height={300}
                  />
                </div>
                <div className='card-dec'>
                  <h3 className="card-title">
                    {data.title}
                  </h3>
                  <p className="card-text">
                    {data.content}
                    <br />
                  </p>
                </div>
                <div className='author-div'>
                  <span className="author">{data.author.name} - {data.author.role}</span>
                  <span className="date">{data.date}</span>
                </div>
                <button className="button-default" onClick={toggle}>Show Modal</button>
                <Modal
                  isShowing={isShowing}
                  hide={toggle}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default App;
