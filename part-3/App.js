const App = () => {
    return (
        <div>
            <Person
                name="Bobby"
                age={10}
                hobbies={["singing", "dancing"]}
            />
            <Person
                name="Angela"
                age={19}
                hobbies={["fishing", "cooking"]}
            />
            <Person
                name="Augustine"
                age={25}
                hobbies={["writing", "singing", "eating"]}
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
