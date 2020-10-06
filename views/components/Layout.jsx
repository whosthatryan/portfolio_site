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

                    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>


                    <link rel='stylesheet' href='/css/style.css'/>

                    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css'/>

                    <title >ryan mclaughlin</title>
                </head>
                <body> 
                    <div className='is-family-secondary has-text-weight-bold'>
                        <nav className='navbar is-transparent' role='navigation' aria-label='main navigation'>
                            <div className='navbar-brand'>
                                {/* <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </a> */}
                                <div className="navbar-start">
                                    <a id='ryPic' className='navbar-item' style={{fontSize: '50px'}} className='mt-4 ml-4'>
                                        ryan
                                    </a>
                                    <a id='helloWorld' className='navbar-item' style={{fontSize: '50px'}} className='mt-4 ml-4'>
                                        c
                                    </a>
                                    <a id='aboutBtn' className='navbar-item' style={{fontSize: '50px'}} className='mt-4 ml-4'>
                                        mclaughlin
                                    </a>
                                    <div className='navbar-item has-dropdown is-hoverable'>
                                        <a style={{fontSize: '15px', color: '#3274dc'}} className='navbar-link'>
                                            software
                                        </a>
                                        <div className='navbar-dropdown'>
                                        <a 
                                            id='scapesBtn'
                                            className='navbar-item'>
                                                scapes////
                                            </a>
                                            <a 
                                            id='plantedBtn'
                                            className='navbar-item'>
                                                planted: dead or alive
                                            </a>
                                            <a 
                                            id='bowlBtn'
                                            className='navbar-item'>
                                                better bowl
                                            </a>
                                        </div>
                                    </div>
                                    <div class="navbar-item has-dropdown is-hoverable">
                                        <a class="navbar-link" className='mt-4 ml-4' style={{fontSize: '15px', color: '#3274dc'}}>
                                        music
                                        </a>
                                        <div class="navbar-dropdown">
                                            <div class="nested navbar-item dropdown">
                                                <div class="dropdown-trigger">
                                                    <button class= 'is-family-secondary has-text-weight-bold' class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                                        <a className='navbar-item'>
                                                            air volee
                                                        </a>
                                                        <span class="icon is-small">
                                                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                                    <div class="dropdown-content">
                                                        <a id='effexor' class="dropdown-item">
                                                            effexor ep
                                                        </a>
                                                        <a id ='selfTitled' class="dropdown-item">
                                                            s/t
                                                        </a>
                                                        <a id='ready' href="#" class="dropdown-item">
                                                            ready
                                                        </a>
                                                        <a id='musicSite' href='https://www.ryancmclaughlin.com' target='_blank' class="dropdown-item">
                                                            more
                                                        </a>
                                                    </div>
                                                </div>
                                                
                                            </div> 
                                        </div> 
                                        
                                    </div> 
                                </div> 
                                <a id='resume'
                                    className='navbar-item' style={{fontSize: '15px', color: '#3274dc'}}>
                                    resume
                                </a>
                                <a id='github'
                                    className='navbar-item' href='https://www.github.com/whosthatryan' target='_blank' style={{fontSize: '10px', color: '#3274dc'}}>
                                    g i t h u b
                                </a>
                                <a id='github'
                                    className='navbar-item' href='https://www.linkedin.com/in/ryancmclaughlin/' target='_blank' style={{fontSize: '10px', color: '#3274dc'}}>
                                    l i n k e d i n
                                </a>
                            </div>
                        </nav>
                    </div>
                    <div>
                        {this.props.children}
                    </div>
                    <footer>
                    </footer>
                </body>
            </html>
        );
    }
}
 
module.exports = Layout;