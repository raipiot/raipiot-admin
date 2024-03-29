import { fileURLToPath, URL } from 'node:url'

import {
  AhooksResolver,
  AntdResolver,
  RaipiotAntdResolver,
  reactPresets
} from '@raipiot-infra/auto-import'
import { BootstrapAnimation } from '@raipiot-infra/bootstrap-animation'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import React from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import Info from 'unplugin-info/vite'
import type { ProxyOptions } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import ViteCompression from 'vite-plugin-compression'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const {
    VITE_PORT,
    VITE_BASE_API_PREFIX,
    VITE_BASE_API_URL,
    VITE_MOCK_API_PREFIX,
    VITE_MOCK_API_URL
  } = env as ImportMetaEnv

  const port = parseInt(VITE_PORT, 10) || 5173
  const proxy: Record<string, string | ProxyOptions> = {
    [VITE_BASE_API_PREFIX]: {
      target: VITE_BASE_API_URL,
      changeOrigin: true,
      rewrite: (path: string) => path.replace(VITE_BASE_API_PREFIX, '')
    },
    [VITE_MOCK_API_PREFIX]: {
      target: VITE_MOCK_API_URL,
      changeOrigin: true,
      rewrite: (path: string) => path.replace(VITE_MOCK_API_PREFIX, '')
    }
  }

  return {
    base: '/',
    plugins: [
      React(),
      TanStackRouterVite(),
      AutoImport({
        dts: '@types/auto-imports.d.ts',
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.md$/ // .md
        ],
        imports: [
          ...reactPresets,
          {
            from: '@/constants',
            imports: ['GlobalEnvConfig']
          }
        ],
        resolvers: [
          AntdResolver({
            prefix: 'A'
          }),
          AhooksResolver(),
          RaipiotAntdResolver()
        ],
        dirs: []
      }),
      BootstrapAnimation(),
      Icons({
        autoInstall: true,
        compiler: 'jsx',
        jsx: 'react'
      }),
      ViteCompression({
        verbose: true, // 是否在控制台中输出压缩结果
        disable: true,
        threshold: 10240, // 体积过小时不压缩
        algorithm: 'gzip', // 压缩算法
        ext: '.gz',
        deleteOriginFile: true // 源文件压缩后是否删除
      }),
      Info()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : []
    },
    server: {
      host: true,
      port,
      strictPort: true,
      open: false,
      proxy
    },
    preview: {
      host: true,
      port,
      strictPort: true,
      open: false,
      proxy
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            axios: ['axios'],
            antd: ['antd'],
            'lodash-es': ['lodash-es']
          }
        }
      }
    }
  }
})
