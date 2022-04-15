import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Logo from '../../assets/logoInsanos.png'


import { Container, Image, ContainerIntes, H1, Input, Button, Label } from './styles'


const App = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  const inputFood = useRef()
  const inputName = useRef()
  

  async function addNewRequest() {

    const { data: newOrder } = await axios.post("http://localhost:3001/order", {
      food: inputFood.current.value,
      name: inputName.current.value,
    })

    setUsers([...users, newOrder])

    navigate("/pedidos")

  }

  
  return (
    <Container>
      <Image alt="burger" src={Logo} />


      <H1>Faça seu pedido!</H1>
      <ContainerIntes>
        <Label>Pedido</Label>
        <Input ref={inputFood} placeholder="Pedido"></Input>

        <Label>Nome do Cliente</Label>
        <Input ref={inputName} placeholder="Nome do Cliente"></Input>

        <Button onClick={addNewRequest}>Novo Pedido</Button>

       

      </ContainerIntes>
    </Container>
  )
}

export default App
