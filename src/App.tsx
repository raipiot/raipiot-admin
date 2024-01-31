import { BrandConfig, TeamConfig } from '@raipiot-infra/config'
import clsx from 'clsx'
import { useState } from 'react'

import viteLogo from '/vite.svg'

import styles from './app.module.scss'
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
        className="mb-2"
      >
        <img
          src={raipiotLogo}
          className={styles.logo}
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
            className={clsx(styles.logo, styles.vite)}
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
            className={clsx(styles.logo, styles.react)}
            alt="React logo"
            loading="eager"
          />
        </a>
      </div>
      <div className="mb-8 text-4xl">{BrandConfig.name} React Starter</div>
      <button
        type="button"
        onClick={() => setCount((v) => v + 1)}
        className="mb-8 rounded-md bg-gray-200 p-2"
      >
        count is {count}
      </button>
      <div className="mb-8 text-sm text-gray-500">Edit src/App.tsx and save to test HMR</div>
      <div className="text-sm tracking-wide">Powered by {TeamConfig.name}</div>
    </div>
  )
}
