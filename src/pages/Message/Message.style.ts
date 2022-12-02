import styled from "styled-components";


type Props = {
  active?: string
  activ?: string
  height?: number
}






export const Message = styled.div`
 width: 80%;
 margin: auto;
 display: flex;
 gap: 30px;
 
 
`

export const UsersChat = styled.div`
   width: 20%;
   background-color: white;
   box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.10);

`;



export const MessageTitle = styled.h1`
padding: 20px 0 20px 20px;
`




export const UserChatMessage = styled.div<Props>`
display: flex;
align-items: center;
gap: 20px;
padding: 0 0 0 20px;
cursor: pointer;
background-color: ${props => props.active ? 'pink' : "#e8ecfc"};




`



export const ImgUserChat = styled.img`
width: 20%;
`



export const UserDataActive = styled.div`
display: flex;
align-items: center;
gap: 15px;
`;


export const NumeUser = styled.h1`

`



export const ImgOpenChat = styled.img`
width: 5%;
`


export const AvtiveUser = styled.div<Props>`
width: 15px;
height: 15px;
background-color: ${props => props.activ};
border-radius: 50%;
`;






export const MessageChat = styled.div`
 box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.10);
 width: 100%;
 height: 600px;
 position: relative;
 overflow-x: hidden;
`;


export const OpenChatUser = styled.div`
display: flex;
padding: 20px;
align-items: center;
height: 100px;
border-bottom: 1px solid black;
position: fixed;
background-color: white;
width: 60.7%;
`;



export const MessageSender = styled.div<Props>`
padding:  150px 0px 0px 0px;
position: relative;
z-index: -1;

`;



export const MessageCurentId = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
gap: 15px;
padding: 0 20px 0 0 ;

a{
    display: contents;
}
`;


export const MessageParagraph = styled.p`
border: 1px solid black;
border-radius: 50px;
padding: 5px;
`;


export const AvatarMessage = styled.img`
width: 5%;
`;



export const MessageDestinatar = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;

gap: 15px;
padding: 0 0 0 20px ;

a{
    display: contents;
}
`

