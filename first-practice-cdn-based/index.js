import Header from './Header'
import Content from './Content'
import Footer from './Footer'

function App() {
    return (
        <>
            <Header />
            <Content />
            <Footer />                    
        </>
    )
}

ReactDOM.render( <App />, document.getElementById('root') )