import './App.css'
import { ImageSlider } from './ImageSlider'

function App() {
  const slides = [
    { url: "http://localhost:5173/bike.jpg", title: "bike" },
    { url: "http://localhost:5173/car.jpg", title: "car" },
    { url: "http://localhost:5173/forest.jpg", title: "forest" },
    { url: "http://localhost:5173/night.jpg", title: "night" },
    { url: "http://localhost:5173/sunset.jpg", title: "sunset" },
  ];  
 
  return (
    <div>
      <h1>Image Slider</h1>
      <div className='containerStyles'>
        <ImageSlider slides={slides} />
      </div>
    </div>
  )
}

export default App
