import { useEffect } from 'react';

const withLoading = (Component) => {
    function ComponentWithLoading (props) {
        useEffect(() => {
            console.log("pagina cargada correctamente");
        }, []);

        return (
            <Component {...props} />
        )
    }

    return ComponentWithLoading
}

export default withLoading