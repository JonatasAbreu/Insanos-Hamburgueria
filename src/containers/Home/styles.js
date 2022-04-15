import styled from 'styled-components'
import Background from "../../assets/buger2.jpg"


export const Container = styled.div` 
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

`
export const Image = styled.img`

`

export const ContainerIntes = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    padding: 50px 36px;
`
export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 50px;

`
export const Label = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    align-items: center;
    letter-spacing: -0.408px;
    color: #000000;
    margin-left: 18px;
    
`
export const Input = styled.input`
    width: 342px;
    height: 58px;
    margin-bottom: 42px;
    padding-left: 15px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300px;
    font-size: 18px;
    line-height: 21px;
    color: #000000;


    
`
export const Button = styled.button`
    width: 342px;
    height: 68px;
    background: red;
    margin-top: 50px;
    margin-bottom: 51px;
    border: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 900px;
    font-size: 17px;
    line-height: 2px;
    color: #FFFFFF;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    
    

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`
