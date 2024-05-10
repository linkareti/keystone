import type { Readable } from 'stream'
import type { ImageExtension, FileMetadata } from '../../types'

export type ImageAdapter = {
  download(filename: string): Promise<{
    stream: ReadableStream<any>
    contentType?: string,
    contentLength?: number
  }>
  upload(buffer: Buffer, id: string, extension: string): Promise<void>
  delete(id: string, extension: ImageExtension): Promise<void>
  url(id: string, extension: ImageExtension): Promise<string>
}

export type FileAdapter = {
  download(filename: string): Promise<{
    stream: ReadableStream<any>
    contentType?: string,
    contentLength?: number
  }>
  upload(stream: Readable, filename: string): Promise<FileMetadata>
  delete(id: string): Promise<void>
  url(filename: string): Promise<string>
}
