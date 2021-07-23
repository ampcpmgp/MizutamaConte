import { contextBridge, ipcRenderer } from 'electron';
import { Cut } from './@types/cut';

interface BufferLike {
  buffer: ArrayBuffer;
  byteOffset: number;
  byteLength: number;
}

contextBridge.exposeInMainWorld('api', {
  loadPlatform: (): Promise<void | string> =>
    ipcRenderer
      .invoke('load-platform')
      .then((result) => result)
      .catch((err) => console.log(err)),
  loadPSD: (): Promise<BufferLike[] | ArrayBuffer[]> =>
    ipcRenderer
      .invoke('load-psd')
      .then((result) => result)
      .catch((err) => console.log(err)),
  loadJSON: (): Promise<Cut[]> =>
    ipcRenderer
      .invoke('load-json')
      .then((result) => result)
      .catch((err) => console.log(err)),
});
