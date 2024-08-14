export default function NavBar() {
    const myStyle={
        
        color : 'white'
    }
    return (
       <div >
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark" >
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">News Updates</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={myStyle}>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/business">Business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/general">General</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/health">Health</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/science">Science</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sports">Sports</a>
                        </li>
                        </ul>
                </div>
                </div>
            
        </nav> 
        </div> 
      
    );
}              