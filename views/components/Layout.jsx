const React = require('react');

class Layout extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <meta name='viewport' content='width=device-width, initial-scale=1'></meta>

                    <script
                    src='https://code.jquery.com/jquery-3.5.1.min.js'
                    integrity='sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0='
                    crossOrigin='anonymous'>
                    </script>

                    <script
                    src='https://code.jquery.com/ui/1.12.1/jquery-ui.min.js'
                    integrity='sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU='
                    crossOrigin='anonymous'>
                    </script>

                    <script src='/js/index.js' defer></script>

                    <link rel='stylesheet' href='/css/style.css'/>

                    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css'/>

                    <title >ryan mclaughlin</title>
                </head>
                <body> 
                    <div className='is-family-secondary has-text-weight-bold'>
                        <nav className='navbar is-black' role='navigation' aria-label='main navigation'>
                            <div className='navbar-brand'>
                                <div className="navbar-start">
                                    <a id='about-button' className='navbar-item' style={{fontSize: '50px'}} className='mt-4 ml-4'>
                                        ryan c mclaughlin
                                    </a>
                        {/* <a className='navbar-item'  id='about-button' style={{fontSize: '15px'}} className='mt-4 ml-4'>about
                        </a> */}
                        {/* <a className='navbar-item'  style={{fontSize: '15px'}}href='/wholeheartedly/index' className='mt-4 ml-4'>software
                        </a> */}
                                <div className='navbar-item has-dropdown is-hoverable'>
                                    <a style={{fontSize: '15px', color: '#3274dc'}} className='navbar-link'>
                                        software
                                    </a>
                                    <div className='navbar-dropdown'>
                                        <a 
                                        id='planted'
                                        className='navbar-item'>
                                            planted: dead or alive
                                        </a>
                                    </div>
                                </div>
                                <div className='navbar-item has-dropdown is-hoverable'>
                                    <a style={{fontSize: '15px', color: '#3274dc'}} className='navbar-link'>
                                        music
                                    </a>
                                </div>
                                <div className="navbar-end">
                                    <div className='navbar-item'>
                                        <div className='field is-grouped'>
                                            <p className='control'>
                                                <button className="button">
                                                    <span className="icon">
                                                    <i className="fab fa-github"></i>
                                                    </span>
                                                    <span>GitHub</span>
                                                </button>
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    <body>
                        {this.props.children}
                    </body>
                    <footer>
                    </footer>
                    </div>
                </body>
            </html>
        );
    }
}
 
module.exports = Layout;