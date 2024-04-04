import { ElectronHandler } from '../../preload/index'

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    versions: {
      node: string
      chrome: string
      electron: string
    }
  }
}

export {};