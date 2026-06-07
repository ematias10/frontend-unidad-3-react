import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar'
import FilterBar from './components/FilterBar'

const productos = [
  {id: 1, nombre: 'Audifonos Gamer RGB', precio: 19990, imagen: null, stock: true},
  {id: 2, nombre: 'Teclado Gamer RGB', precio: 29990, imagen: null, stock: true},
  {id: 3, nombre: 'Mouse Gamer RGB', precio: 14990, imagen: null, stock: false},
  {id: 4, nombre: 'Silla Gamer RGB', precio: 49990, imagen: null, stock: true},
  {id: 5, nombre: 'Escritorio Gamer RGB', precio: 99990, imagen: null, stock: false},
  {id: 6, nombre: 'Monitor Gamer RGB', precio: 199990, imagen: null, stock: true},
]


function App() {
  const [soloConStock, setSoloConStock] = useState(false);
  const productosFiltrados = soloConStock ? productos.filter((p) => p.stock): productos;

  const [contador, setContador] = useState(0);

  const agregarAlCarrito = () => setContador((prev) => prev + 1);
  const quitarDelCarrito = () => setContador((prev) => prev > 0 ? prev - 1: 0);

  return (
    <div className="App">
      <Navbar cartCount={contador} />
      <FilterBar soloConStock={soloConStock} onChange={setSoloConStock} />

      <main className="product-grid">
        {productosFiltrados.map(producto => (
          <ProductCard
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
            stock={producto.stock}
            onAgregar={agregarAlCarrito}
            onQuitar={quitarDelCarrito}
          />
        ))}
      </main>
    </div>
  )
}

export default App
