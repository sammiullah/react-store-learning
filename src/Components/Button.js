import styled from 'styled-components'

export const ButtonContainer = styled.button`
    
    color : ${ props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)" }; 
    text-transform: capitalize;
    font-size:1.4rem;
    background: transparent;
    border-radius: 0.2rem;
    padding: 5px 20px;
    border: ${
        props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"
    };
    &:hover {
        color :   ${ props => props.cart ? "var(--mainYellow)" : "var(--mainBlue)" } ;   
        background-color:  ${ props => props.cart ? "var(--mainDark)" : "var(--lightBlue)" }; 
    }
    &:focus{
        outline: none !important;
    }
`