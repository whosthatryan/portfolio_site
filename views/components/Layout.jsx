const React = require('react');

class Layout extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"/>
                    <title >.wholeheartedly</title>
                </head>
                <body className='is-family-secondary has-text-weight-bold'>
                    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a style={{fontSize: '75px'}}href='/wholeheartedly' className='mt-4 ml-4'>.wholeheartedly</a>
                        <a style={{fontSize: '15px'}}href='/wholeheartedly' className='mt-4 ml-4'>.about</a>
                        <a style={{fontSize: '15px'}}href='/wholeheartedly' className='mt-4 ml-4'>.contact</a>
                        <a style={{fontSize: '15px'}}href='/wholeheartedly/new' className='mt-4 ml-4'>.submit</a>
                    </div>
                </nav>
                    {this.props.children}
                    <footer>
                    </footer>
                </body>
            </html>
        )
    }
}
module.exports = Layout;