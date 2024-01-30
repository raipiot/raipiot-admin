import { BrandConfig, TeamConfig } from '@raipiot-infra/config'
import { useState } from 'react'

import viteLogo from '/vite.svg'

import raipiotLogo from './assets/img/raipiot.png'
import reactLogo from './assets/react.svg'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="m-auto flex h-screen max-w-[1280px] flex-col items-center justify-center">
      <a
        href="https://www.raipiot.com"
        target="_blank"
        rel="noreferrer"
        className="mb-8"
      >
        <img
          src={raipiotLogo}
          className="w-32 hover:animate-pulse"
          alt="raipiot logo"
          loading="eager"
        />
      </a>
      <div className="mb-8 flex items-center space-x-6">
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={viteLogo}
            className="w-20 hover:animate-bounce"
            alt="Vite logo"
            loading="eager"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={reactLogo}
            className="w-20 hover:animate-spin"
            alt="React logo"
            loading="eager"
          />
        </a>
      </div>

      <div className="mb-4 text-4xl">{BrandConfig.name} React Starter</div>
      <div className="mb-4 text-xl">Vite + React + TypeScript</div>
      <button
        type="button"
        onClick={() => setCount((v) => v + 1)}
        className="mb-4 rounded-md bg-gray-200 p-2"
      >
        count is {count}
      </button>
      <div>Powered by {TeamConfig.name}</div>
    </div>
  )
}
