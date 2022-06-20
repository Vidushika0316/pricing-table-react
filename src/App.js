import './App.css';

import { BiCheckboxSquare } from 'react-icons/bi';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="table centered">
        <div className="row">
          <div className="column">
            <ul className="price">
              <li className="header">
                <br />
                <br />
                Features
              </li>
              <li>Create upto 30 sites</li>
              <li>Create upto 20 sites</li>
              <li>Contract with codegen</li>
              <li>Daily notifications on review update</li>
              <li>Notifications every 3 days </li>
              <li>Notifications every 5 days</li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Silver
                <br />
                <span className="dollar">0</span>
                <p>per user per month</p>
                <div className="button_cont" align="center">
                  <href className="btn" target="_blank" rel="nofollow noopener">
                    Go Silver
                  </href>
                </div>
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Gold
                <br />
                <span className="dollar">25</span>
                <p>per user per month</p>
                <div className="button_cont" align="center">
                  <href className="btn" target="_blank" rel="nofollow noopener">
                    Go Gold
                  </href>
                </div>
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Platinum
                <br />
                <span className="dollar">50</span>
                <p>per user per month</p>
                <div className="button_cont" align="center">
                  <href className="btn" target="_blank" rel="nofollow noopener">
                    Go Platinum
                  </href>
                </div>
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
