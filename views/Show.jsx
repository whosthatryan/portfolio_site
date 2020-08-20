const React = require('react');
const Layout = require('./components/Layout.jsx');

class Show extends React.Component {
    render() {
        const { product, id } = this.props;
        return (
            <Layout>
            <div style={{textAlign: 'center'}}>
                <div className='card-image is-inline-block mt-4 mx-3 box px-0 pt-0' style={{width: 400}}>
                    <figure className='image is-4by4'>
                        <a href={`/wholeheartedly/${product._id}`}>
                        <img src={`${product.img}`} />
                        </a>
                        <div style={{marginTop: '10px'}}>
                            <h1 style={{fontSize: '20px'}}>
                                { product.name }
                            </h1>
                            <p>
                                { product.description }
                            </p>
                            <p>
                                ${ product.price }
                            </p>
                            <p>
                                { product.isForSale ? `.available` : `.unavailable` }
                            </p>
                            <p>
                                <a href={`/wholeheartedly/${this.props.product._id}/edit`}>.edit</a>
                            </p>
                        </div>
                    </figure>
                </div>
                    <p>
                        <a href="/wholeheartedly">.back</a>
                    </p>
            </div>
            </Layout>
        )
    };
};

module.exports = Show;