import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { Await } from "react-router-dom";

const productos = [
  {
    _id: "652803510a598cf5573918f3",
    nombre: "The Complete Common Core: State Standards Kit, Grade 5",
    sku: "D82015FFBF",
    precio: 12.88,
    descripcion: "...",
    imagenes: [
      {
        _id: "654f7cae84c15e3104b1b006",
        url: "https://images-na.ssl-images-amazon.com/images/I/41gxkFaSFfL.jpg",
        nombre:
          "https://images-na.ssl-images-amazon.com/images/I/41gxkFaSFfL.jpg",
      },
    ],
  },
  {
    _id: "652803510a598cf5573918f4",
    nombre:
      "Flash Furniture 25''W x 45''L Trapezoid Red HP Laminate Activity Table - Height Adjustable Short Legs",
    sku: "39F1B8A212",
    precio: 117.26,
    descripcion: "...",
    imagenes: [
      {
        _id: "654f7cae84c15e3104b1b00b",
        url: "https://images-na.ssl-images-amazon.com/images/I/31WxfYlS8XL.jpg",
        nombre:
          "https://images-na.ssl-images-amazon.com/images/I/31WxfYlS8XL.jpg",
      },
    ],
  },
  {
    _id: "652803510a598cf5573918f3",
    nombre: "The Complete Common Core: State Standards Kit, Grade 5",
    sku: "D82015FFBF",
    precio: 12.88,
    descripcion: "...",
    imagenes: [
      {
        _id: "654f7cae84c15e3104b1b006",
        url: "https://images-na.ssl-images-amazon.com/images/I/41gxkFaSFfL.jpg",
        nombre:
          "https://images-na.ssl-images-amazon.com/images/I/41gxkFaSFfL.jpg",
      },
    ],
  },
  {
    _id: "652803510a598cf5573918f4",
    nombre:
      "Flash Furniture 25''W x 45''L Trapezoid Red HP Laminate Activity Table - Height Adjustable Short Legs",
    sku: "39F1B8A212",
    precio: 117.26,
    descripcion: "...",
    imagenes: [
      {
        _id: "654f7cae84c15e3104b1b00b",
        url: "https://images-na.ssl-images-amazon.com/images/I/31WxfYlS8XL.jpg",
        nombre:
          "https://images-na.ssl-images-amazon.com/images/I/31WxfYlS8XL.jpg",
      },
    ],
  },
  {
    _id: "652803510a598cf5573918f3",
    nombre: "The Complete Common Core: State Standards Kit, Grade 5",
    sku: "D82015FFBF",
    precio: 12.88,
    descripcion: "...",
    imagenes: [
      {
        _id: "654f7cae84c15e3104b1b006",
        url: "https://images-na.ssl-images-amazon.com/images/I/41gxkFaSFfL.jpg",
        nombre:
          "https://images-na.ssl-images-amazon.com/images/I/41gxkFaSFfL.jpg",
      },
    ],
  },
  {
    _id: "652803510a598cf5573918f4",
    nombre:
      "Flash Furniture 25''W x 45''L Trapezoid Red HP Laminate Activity Table - Height Adjustable Short Legs",
    sku: "39F1B8A212",
    precio: 117.26,
    descripcion: "...",
    imagenes: [
      {
        _id: "654f7cae84c15e3104b1b00b",
        url: "https://images-na.ssl-images-amazon.com/images/I/31WxfYlS8XL.jpg",
        nombre:
          "https://images-na.ssl-images-amazon.com/images/I/31WxfYlS8XL.jpg",
      },
    ],
  },
];

const Gallery = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const [contador, setContador] = useState(0);


  const handleCargarProductos = () => {
    setListaProductos([...productos]);
  }

  useEffect(() => {
    console.log('pasando por useEffect');
    const cargarDatosAPI = async () => {
       const res = await fetch("https://apiexpress-x7sl.onrender.com/productos");
       const dataProductos = await res.json();

       setListaProductos ([...dataProductos]);

    }

    cargarDatosAPI();
  
 
  }, []);
  

  if (listaProductos.length === 0)
    return (
            <>
               <h2>Cargando productos...</h2>
               
            </>
    )
    
    
    return (
      <>
         <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
          {listaProductos.map((producto) => {
            return <Product key={producto._id} product={producto}></Product>;
          })}
        </div>
      </>
    );
};

export default Gallery;
