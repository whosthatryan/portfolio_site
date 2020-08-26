const React = require('react');
const Layout = require('./components/Layout.jsx');

class Show extends React.Component {
    render() {
        const { product, id } = this.props;
        return (
            <Layout>
                <p id="draggable12"style={{fontSize: '50px', marginLeft: '1000px'}}>
                   <a href="/wholeheartedly/index">
                        .back
                    </a>
                </p> 
                <div id="container">
                <div id="draggable4" className='card-image is-inline-block mt-4 mx-3 box px-0 pt-0' style={{width: 250}}>
                    <figure className='image is-4by4'>
                        <a>
                        <img src={`${product.art}`} />
                        </a>
                        <div style={{marginTop: '10px'}}>
                            <h1 style={{fontSize: '40px'}}>
                                { product.name }
                            </h1>
                            <p style={{fontSize: '25px', marginBottom: '15px', fontStyle: 'bold'}}>
                                { product.title }
                            </p>
                            <p>
                                { product.isForSale ? `.available` : `.unavailable` }
                            </p>
                            <p style={{marginTop: '10px', marginBottom: '7px'}}>
                                <a href={`/wholeheartedly/${this.props.product._id}/edit`}>.edit</a>
                            </p>
                        </div>
                    </figure>
                </div>
            <div>
            <div id="draggable13" className="ui-widget-content">
                <video 
                style={{width: '200px'}, {height: '400px'}} controls
                autoPlay 
                loop 
                muted 
                preload="auto">
                <source src= { product.video } type="video/mp4"/>
                <source src= { product.video } type="video/webm"/>
                <p>Your browser doesn't support HTML video. Here is a <a href= { product.video } >link to the video</a> instead.</p>
                </video>
            </div>
                <div id="draggable14" className="ui-widget-content">
                    <div id="mydivheader">{product.title}</div>
                    <audio controls>
                    <source src= { product.audio }type="audio/mpeg"/>
                    <source src= { product.audio } type="audio/wav"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
        </div>
            </Layout>
        )
    };
};

module.exports = Show;