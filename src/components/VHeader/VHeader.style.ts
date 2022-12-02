import styled from "styled-components";



export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
width: 80%;
margin: auto;

`;




export const Avatar = styled.div`


`;


export const Img = styled.img`
width: 50px;
height: 50px;
`


export const ShopingCart = styled.div`
position: relative;
z-index: 1;
cursor: pointer;

.shoping{
    font-size: 40px
}
`;


export const NumberItems = styled.div`
width: 25px;
height: 25px;
background-color: red;
border-radius: 50px;
position: absolute;
top: -11px;
left: 50%;
transform: translateX(-50%);
z-index: -1;
display: flex;
align-items: center;
justify-content: center;
`

export const Number = styled.p`
font-size: 20px;
font-weight: bold;
`