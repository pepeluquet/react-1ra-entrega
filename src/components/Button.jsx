function Button (props) {
    return (
        <button style={{ backgroundColor: 'green'}}>
            {props.text}
        </button>
    )
}

export default Button