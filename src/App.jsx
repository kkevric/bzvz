const App = () => {
    const isLogedIn = true;
    let button;

    if (isLogedIn) {
        button = <button>LogOut</button>;
    } else {
        button = <button>LogIn</button>;
    }

    return (
        <div>
            {button}

            <br />

            {isLogedIn && <button>LogOut</button>}
            {!isLogedIn && <button>LogIn</button>}

            <br />

            {
                isLogedIn 
                    ? <button>LogOut</button> 
                    : <button>LogIn</button>
            }
        </div>
    );
};

export default App;
