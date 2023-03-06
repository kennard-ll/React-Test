import './App.scss';

function App() {
  return (
    <div>
    <header >
        <div className="container">
            <div className="menu">
              <ul>
                <div className='img'></div>
                <li><a href="#">Coffee house</a></li>
                <li><a href="#">Our coffee</a></li>
                <li><a href="#">For your pleasure</a></li>
              </ul>
              <h1>Our Coffee</h1>
            </div>
        </div>
    </header>

    <main>

      <div className="main-container">
        <div className='about'>
            <div>
              <div className='img'></div>
            </div>
            <div className='about-text'>
              <h2>About our beans</h2>
              <div className='br'>
                <div className='line-img'></div>
                <div className='about-img'></div>
                <div className='line-img'></div> 
              </div>
              <p>Extremity sweetness difficult behaviour he of. On<br></br> disposal of as landlord horrible.<br/><br></br>Afraid at highly months do things on at. Situation<br /> recommend objection do intention<br />so questions.<br />As greatly removed calling pleased improve an.<br /> Last ask him cold feel<br />met spot shy want. Children me laughing we<br /> prospect answered followed. At it went<br />is song that held help face.</p>
            </div>
        </div>

        <div className="line"></div>
        <section>
            <div className="search">
                <div className="card-input">
                  <h4>Lookiing for</h4>
                  <input className='input' type="text" placeholder='start typing here...' />
                </div>
                <div className="card-filter">
                  <h4>Or filter</h4>
                  <button>Brazil</button>
                  <button>Kenya</button>
                  <button>Columbia</button>
                </div>
            </div>
            <div className="cards">
              <div className="card">
                  <div className="card-img"></div>
                  <h3>AROMISTICO Coffee 1 kg</h3>
                  <p>Brazil</p>
                  <p><span>6.99$</span></p>
              </div>
              <div className="card">
                  <div className="card-img"></div>
                  <h3>AROMISTICO Coffee 1 kg</h3>
                  <p>Brazil</p>
                  <p><span>6.99$</span></p>
              </div>
              <div className="card">
                  <div className="card-img"></div>
                  <h3>AROMISTICO Coffee 1 kg</h3>
                  <p>Brazil</p>
                  <p><span>6.99$</span></p>
              </div>
              <div className="card">
                  <div className="card-img"></div>
                  <h3>AROMISTICO Coffee 1 kg</h3>
                  <p>Brazil</p>
                  <p><span>6.99$</span></p>
              </div>
              <div className="card">
                  <div className="card-img"></div>
                  <h3>AROMISTICO Coffee 1 kg</h3>
                  <p>Brazil</p>
                  <p><span>6.99$</span></p>
              </div>
              <div className="card">
                  <div className="card-img"></div>
                  <h3>AROMISTICO Coffee 1 kg</h3>
                  <p>Brazil</p>
                  <p><span>6.99$</span></p>
              </div>
            </div>
        </section>

        <footer>
            <ul>
              <div className='img'></div>
              <li><a href="#">Coffee house</a></li>
              <li><a href="#">Our coffee</a></li>
              <li><a href="#">For your pleasure</a></li>
            </ul>
        </footer>
        <div className='footer-menu'>
        <div className="footer-img"></div>
        <div className='footer-beans'></div>
        <div className="footer-img"></div>
        </div>
      </div>
    </main>
    </div>
  );
}

export default App;