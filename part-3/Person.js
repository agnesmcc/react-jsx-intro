const Person = (props) => {
    let voter = ""
    if (props.age > 18) {
        voter = (
            <h3>please go vote!</h3>
        )
    } else {
        voter = (
            <h3>you must be 18</h3>
        )
    }

    let name = props.name
    if (props.name.length > 8) {
        name = name.slice(0, 6)
    }

    return (
        <div>
            <p>Learn some information about this person</p>
            <div>Name: {name}</div>
            <div>Age: {props.age}</div>
            {voter}
            Theirs hobbies are:
            <ul>
                {props.hobbies.map((hobby) => (
                    <li>{hobby}</li>
                ))}
            </ul>
        </div>
    );
};