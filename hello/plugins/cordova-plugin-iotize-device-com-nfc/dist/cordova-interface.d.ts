export interface CordovaInterface {
    close(): Promise<void>;
    connect(tech: string, timeout: number): Promise<void>;
    transceive(data: ArrayBuffer | string): Promise<string>;
}
