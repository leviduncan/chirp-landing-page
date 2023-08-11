import style from 'styled-components'

const Logo = style.div`
    
    color: ${(props) => props.color ? props.color : '#1DA1F2'};
    font-size: ${(props) => props.fontsize ? props.fontsize : '16px'};
    font-weight: ${(props) => props.fontweight ? props.fontweight : '900'};
    font-style: oblique;

`
export default Logo