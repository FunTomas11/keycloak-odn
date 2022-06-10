export interface RuntimeConfig {
  api: {
    hostName: string,
    port: number,
    protocol: string,
    gateway: {
      prefix: string,
      common: string,
      admin: string,
      teacher: string,
      student: string,
      parent: string,
      files: string,
      resumable: string,
      images: string,
      version: string,
      urls: string,
    }
  }
}
