import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Logo from '../../assets/logoInsanos.png'
import Lixeira from '../../assets/lixeira.svg'

import { Container, Image, ContainerIntes, H1, Button, User } from './styles'


const Order = () => {
  const [users, setUsers] = useState([])
  const navegate = useNavigate()
  

  useEffect(() => {
    async function fetchOrder() {
      const { data: newOrder } = await axios.get("http://localhost:3001/order")
      setUsers(newOrder)
    }

    fetchOrder()

  }, [])

  async function deletFood(userId) {
    await axios.delete(`http://localhost:3001/order/${userId}`)
    const newFood = users.filter(user => user.id !== userId)

    setUsers(newFood)
  }

function goBackPage() {
  navegate("/")

}

  return (
    <Container>
      <Image alt="burger" src={Logo} />


      <H1>Pedidos!</H1>
      <ContainerIntes>
        

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <div>
                <p>{user.food} </p>
                <p>{user.name}</p>
              </div>
              <button onClick={() => deletFood(user.id)}><img alt="icone-lixo" src={Lixeira} /></button>
            </User>
          ))
          }
        </ul>

        <Button onClick={goBackPage}>Voltar</Button>

       
      </ContainerIntes>
    </Container>
  )
}

export default Order
