import React from "react";
import TextoCentral from "../components/TextoCentral";

export default props => {
    const numero = props.route
        && props.route.param
        && props.route.param.numero ? props.route.params.numero : 0
    return (
        <TextoCentral corFundo="#9932cd">
            Tela C - {numero}
        </TextoCentral>
    )
}