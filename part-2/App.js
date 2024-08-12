const App = () => {
    return (
        <div>
            <Tweet
                username="bobby"
                name="Bobby"
                date="08/01/2024"
                message="I am Bob"/>
            <Tweet
                username="angie"
                name="Angela"
                date="08/02/2024"
                message="I am Angela"/>
            <Tweet
                username="michael"
                name="Mike"
                date="08/03/2024"
                message="I am Mike"/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
