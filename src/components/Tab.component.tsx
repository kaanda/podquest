'use client'
import { useState } from 'react'
import { ClockIcon } from '@heroicons/react/20/solid'
import images from '../service/Images.json'

function TabContent() {
    const [selectedIndex, setSelectedIndex] = useState(0)
  
    const renderContent = () => {
      switch (selectedIndex) {
        case 0:
          return (
            <>
              {images.map((image, index) => (
                <div key={index} className="tab-image-list">
                    <img src={image.src} alt={image.alt} />                 
                    <h2>{image.title}</h2>
                    <p>{image.description}</p>
                    <p><ClockIcon className="w-3 h-3 mr-1" />{Math.floor(image.totalDuration / 60)} min</p>
                </div>
              ))}
            </>
          )
        case 1:
          return <div>Content 2</div>
        case 2:
          return <div>Content 3</div>
        default:
          return null
      }
    }
  
    return (
      <div className="tab-relative">
        <div className="flex space-x-2 border-b border-gray-200">
          <button 
            className={`px-4 py-2 ${selectedIndex === 0 ? 'border-b-2 font-bold border-black' : 'border-b-2 border-transparent'}`}
            onClick={() => setSelectedIndex(0)}
          >
            Todos
          </button>
          <button 
            className={`px-4 py-2 ${selectedIndex === 1 ? 'border-b-2 font-bold border-black' : 'border-b-2 border-transparent'}`}
            onClick={() => setSelectedIndex(1)}
          >
            Saúde
          </button>
          <button 
            className={`px-4 py-2 ${selectedIndex === 2 ? 'border-b-2 font-bold border-black' : 'border-b-2 border-transparent'}`}
            onClick={() => setSelectedIndex(2)}
          >
            Business
          </button>
        </div>
        <div className="tab-images">
          {renderContent()}
        </div>
      </div>
    )
  }
  
  export default TabContent