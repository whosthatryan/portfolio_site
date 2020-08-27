const React = require('react');

class Layout extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

                    <script
                    src="https://code.jquery.com/jquery-3.5.1.min.js"
                    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
                    crossOrigin="anonymous">
                    </script>

                    <script
                    src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
                    integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
                    crossOrigin="anonymous">
                    </script>

                    <script src="/js/index.js" defer></script>

                    <link rel="stylesheet" href="/css/style.css"/>

                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"/>

                    <title >.wholeheartedly</title>
                </head>
                <body className='is-family-secondary has-text-weight-bold'>
                    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a style={{fontSize: '75px'}}href='/wholeheartedly' className='mt-4 ml-4'>.wholeheartedly
                        </a>
                        <a id="about-button" style={{fontSize: '15px'}} className='mt-4 ml-4'>.about
                        </a>
                        <a style={{fontSize: '15px'}}href='/wholeheartedly/index' className='mt-4 ml-4'>.submissions
                        </a>
                        <a style={{fontSize: '15px'}}href='/wholeheartedly/new' className='mt-4 ml-4'>.submit
                        </a>
                        <a style={{fontSize: '15px'}}href='/wholeheartedly/new' className='mt-4 ml-4'>.sign up/sign in
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a style={{fontSize: '35px', color: '#3274dc'}} className="navbar-link">
                            .releases
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item" href='/releases/airvolee'>
                                    air volee
                                </a>
                            </div>
                        </div>
                    </div>
                    </nav>
                    <body>
                    {this.props.children}
                    </body>
                    <footer>
                    </footer>
                </body>
            </html>
        );
    }
}
module.exports = Layout;