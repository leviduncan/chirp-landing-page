import style from 'styled-components'

export const Card = style.div`
    
    color: ${(props) => props.color ? props.color : 'gray'};
    font-size: unset;
    border: solid 1px ${(props) => props.borderColor ? props.borderColor : '#c7c7c7'};
    border-radius: 8px;
    background-color: ${(props) => props.bg ? props.bg : 'white'};
    padding: ${(props) => props.padding ? props.padding : '20px'};
`