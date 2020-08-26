const React = require('react');
const ReactDOM = require('react-dom');
const Layout = require('./components/Layout.jsx');

class Airvolee extends React.Component {
    render() {
    const product = this.props.product
      return (
          <Layout>
              <div id="container">
                  {/* <div > */}
                  {/* <div id="mydivheader">.storm</div> */}
                    <video id="draggable8" className="ui-widget-content"
                    style={{width: '170px'}, {height: '390px'}} controls
                    autoPlay 
                    loop 
                    muted 
                    preload="auto" 
                    poster="images/storm.png">
                      <source src="../video/leaves.mp4" type="video/mp4"/>
                      <source src="../video/leaves.webm" type="video/webm"/>
                      <p>Your browser doesn't support HTML video. Here is a <a href="leaves.mp4">link to the video</a> instead.</p>
                    </video>
                  </div>
                    <div class="draggable9" id="one" className="ui-widget-content">
                      <div id="mydivheader">.2 til</div>
                      <audio controls>
                        <source src="../audio/2-til.wav" type="audio/wav"/>
                      Your browser does not support the audio element.
                      </audio>
                    </div>
                    <div class="draggable9" id="two" className="ui-widget-content">
                      <div id="mydivheader">.fcdicfs</div>
                      <audio controls>
                        <source src="../audio/fcdicfs.wav" type="audio/wav"/>
                      Your browser does not support the audio element.
                      </audio>
                    </div>
                    <div class="draggable9" id="three" className="ui-widget-content">
                      <div id="mydivheader">.rainbowroom</div>
                      <audio controls>
                        <source src="../audio/rainbowroom.wav" type="audio/wav"/>
                      Your browser does not support the audio element.
                      </audio>
                    </div>
                    <div class="draggable9" id="four" className="ui-widget-content">
                      <div id="mydivheader">.12 11 11</div>
                      <audio controls>
                        <source src="../audio/12-11-11.wav" type="audio/wav"/>
                      Your browser does not support the audio element.
                      </audio>
                    </div>
                    <div class="draggable9" id="five" className="ui-widget-content">
                      <div id="mydivheader">.half</div>
                      <audio controls>
                        <source src="../audio/half4.wav" type="audio/wav"/>
                      Your browser does not support the audio element.
                      </audio>
                    </div>
                    <div class="draggable9" id="six" className="ui-widget-content">
                      <div id="mydivheader">.micah's hd</div>
                      <audio controls>
                        <source src="../audio/micahshd.wav" type="audio/wav"/>
                      Your browser does not support the audio element.
                      </audio>
                    </div>
                    <div class="draggable9" id="seven" className="ui-widget-content">
                      <div id="mydivheader">.two days post</div>
                      <audio controls>
                        <source src="../audio/twodayspost.wav" type="audio/wav"/>
                      Your browser does not support the audio element.
                      </audio>
                    </div>
              {/* </div> */}
              <div id="draggable4" className='card-image is-inline-block box px-0 pt-0' style={{width: 250}}>
                    <div className='image is-4by4'>
                        <a>
                        <img src={`/images/art_idea1.jpg`}/>
                        </a>
                        <div style={{marginTop: '10px'}}>
                            <h1 style={{fontSize: '40px'}}>
                                air volee
                            </h1>
                            <p style={{textDecoration: 'underline', fontSize: '25px'}}>
                                19.20.20
                            </p>
                            <p style={{fontSize: '10px', marginTop: '5px', marginBottom: '5px'}}>
                                .available
                            </p>
                            <ul> 
                              <li>1: 2 til</li>
                              <li>2: f.c.d.i.c.f.s.</li>
                              <li>3: rainbowroom (ft christian brady)</li>
                              <li>4: 12 11 10</li>
                              <li>5: half</li>
                              <li>6: micah's hd</li>
                              <li>7: two days post</li>
                            </ul>
                            <p style={{marginTop: '5px'}}>
                                <a href={'/wholeheartedly'}>.back</a>
                            </p>
                        </div>
                    </div>
                </div>
          </Layout>
      );
    }
  }

  if (typeof window !== 'undefined') {
    ReactDOM.render(<Airvolee/>, document.body);
}

module.exports = Airvolee;