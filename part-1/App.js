const App = () => {
    return (
        <div>
            <FirstComponent/>
            <NamedComponent name="Bob"/>
            <NamedComponent name="Tom"/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
