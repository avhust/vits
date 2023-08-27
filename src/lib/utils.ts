export function makePhotoName(total: number, extension: string): Array<string> {
    return Array.from({ length: total }, (_, i) => `photo${i + 1}.${extension}`)
}