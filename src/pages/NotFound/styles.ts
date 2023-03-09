import styled from 'styled-components';
import p404 from './../../assets/p404.png';

export const ContainerNotFound = styled.body`
margin: 0;
padding: 0;
box-sizing: border-box;
background: linear-gradient(45deg, #8500ff, #5acaff);
height: 100vh;
`;

export const ContentNotFound = styled.body`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${p404}),#151729;
    box-shadow: 0 15px 30px rgba(0,0,0,.5);
`;

export const BannerNotFound = styled.div`
    max-width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    text-align: center;
`;

export const TitleNotFound = styled.h2`
    font-size: 18vw;
    color: #fff;
    line-height: 1em;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.01);
`;

export const SubTitleNotFound = styled.h4`
    position: relative;
    font-size: 1.5em;
    margin-bottom: 20px;
    color: #111;
    background: #fff;
    font-weight: 300;
    padding: 10px 20px;
    display: inline-block;
`;

export const DescriptNotFound = styled.p`
    color: #fff;
    font-size: 1.2em;
`;

export const ButtonNotFound = styled.button`
align-items: center;
background-clip: padding-box;
background-color: #ff6400;
border: 1px solid transparent;
border-radius: .25rem;
box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
box-sizing: border-box;
color: #fff;
cursor: pointer;
display: inline-flex;
font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
font-size: 16px;
font-weight: 600;
justify-content: center;
line-height: 1.25;
margin: 0;
min-height: 3rem;
padding: calc(.875rem - 1px) calc(1.5rem - 1px);
position: relative;
text-decoration: none;
transition: all 250ms;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
vertical-align: baseline;
width: auto;
&:hover{
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    transform: translateY(-1px);
}
&:focus{
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}
&:active{
    background-color: #c85000;
  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
   transform: translateY(0);
}
`;

/* 
<script type="text/javascript">
    var container = document.createElementById('container');
    window.onmousemove = function(e){
        var x = - e.clientX,
            y = - e.clientY;
        container.style.backgroundPositionX  = x + 'px';
        container.style.backgroundPositionY  = y + 'px';


    }

</script>
*/ 