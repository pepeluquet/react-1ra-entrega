import { useEffect } from 'react'

const withLog = (Component) => {
    function ComponentWithLog (props) {
        useEffect(() => {
            console.log("pagina cargada correctamente")
        }, [])

        return (
            <Component {...props} />
        )
    }

    return ComponentWithLog
}

export default withLog