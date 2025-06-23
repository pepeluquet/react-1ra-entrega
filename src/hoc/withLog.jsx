const withLog = (Component) => {
    function ComponentWithLog (props) {
        console.log("pagina cargada correctamente")
    
        return (
            <Component {...props} />
        )
    }

    return ComponentWithLog
}

export default withLog