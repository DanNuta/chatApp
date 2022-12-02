import styled from "styled-components";


type Props = {
    top?: string,
}

export const AvatarShowRecenzii = styled.div<Props>`
position: absolute;
top: ${props => props.top ? props.top : "40px"};
background-color: #f2f7ff;
z-index: 10;
border-radius: 20px;
padding: 20px;
text-align: center;
box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.24);
`;


export const ImgSowAvatarRecenzii = styled.img`
width: 70px;
height: 70px;
`;


export const NumeAvatar = styled.h3`

`;


export const EmailAvatar = styled.h4`
`;