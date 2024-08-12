const Tweet = (props) => {
    return (
        <div className="tweet">
            <h3>{props.name}</h3>
            <div>{props.username}</div>
            <div>{props.date}</div>
            <p>{props.message}</p>
        </div>
    );
}