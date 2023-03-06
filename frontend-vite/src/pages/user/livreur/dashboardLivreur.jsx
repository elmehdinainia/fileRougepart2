import { React, useState } from "react"
import { Link } from 'react-router-dom';

function Client() {

  const [open, setOpen] = useState(true)
  const Menus = [
    { title: "Dashboad", src: "dashboard" },
    { title: "Salade", src: "salade", gap: true },
    { title: "Pizza", src: "pizza" },
    { title: "Tacos", src: "tacos" },
    { title: "Sandwich", src: "sandwich" },
    { title: "Desserts", src: "dessert" },
    { title: "Setting", src: "setting", gap: true },
    { title: "Logout", src: "logout" },
  ]

  return (
    <div>
      Hello Livreur


    </div>
  )
}

export default Client