const React = require('react');

class Layout extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

                    <link href = "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" 
                    rel = "stylesheet"/>

                    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css"/>

                    <link rel="stylesheet" href="/css/style.css"/>

                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"/>

                    <script
                    src="https://code.jquery.com/jquery-3.5.1.min.js"
                    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
                    crossorigin="anonymous">
                    </script>

                    <script
                    src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
                    integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
                    crossorigin="anonymous">
                    </script>

                    <script src="../controllers/drag.js">
                    </script>

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