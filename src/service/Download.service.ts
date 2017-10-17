import { resolve } from 'path';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import fetch = require("node-fetch");

export class DownloadService {
    public tempFolder = resolve(process.cwd(), 'temp');

    public async downloadFile(link: string, filename): Promise<void> {
        if (!existsSync(this.tempFolder)) {
            mkdirSync(this.tempFolder)
        }
        const content = await fetch(link).then((response: any) => response.buffer());;
        writeFileSync(resolve(this.tempFolder, filename), content);
    }

    public readFileFromTemp(filename: string): Buffer {
        return readFileSync(resolve(this.tempFolder, filename));
    }
}
