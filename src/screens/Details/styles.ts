import styled from "styled-components/native" 

export const ContainerBox =styled.ScrollView `
flex:1;
background-Color:#7065e4;

`;

export const ContainerText = styled.Text `
color:#FFF;
text-align: center;
font-weight: bold;
font-size:20px;
`;

export const ButtonView = styled.View `
width: 30px;
            height: 30px;
            align-Items: center;
            justify-Content: center;
            border-Bottom-Left-Radius: 7px;
            border-Bottom-Right-Radius: 7px;
            border-Top-Left-Radius: 7px;
            border-Top-Right-Radius: 7px;

            background-Color: #FFF;

`;

export const Content = styled.View `
display:flex;
flex-direction:row;
justify-content:space-between;
margin-Top:25px;
padding:15px;
`;

export const MapContent = styled.View `
display:flex;
background-color: #FFF;
width:90%;
justify-content: center;
margin-left: 5%;
margin-top:5%;
border-Bottom-Left-Radius: 7px;
            border-Bottom-Right-Radius: 7px;
            border-Top-Left-Radius: 7px;
            border-Top-Right-Radius: 7px;
`;


export const TouchButton = styled.TouchableOpacity ``;

export const TextName  = styled.Text `
color:#121212;
font-size:20px;
font-weight:bold;
padding-left: 8px;
padding-top: 5px;

`;
export const TextPosition= styled.Text `
color: #bebebe;
margin-Top:2px;
padding-left: 8px;
`;