import style from 'styled-components'

export const Card = style.div`
    width: 100%;
    height: unset;
    color: ${(props) => props.color ? props.color : 'gray'};
    font-size: unset;
    font-weight: 400;
    border: solid 1px ${(props) => props.borderColor ? props.borderColor : '#c7c7c7'};
    border-radius: 8px;
    background-color: ${(props) => props.bg ? props.bg : 'white'};
    padding: 20px;
`