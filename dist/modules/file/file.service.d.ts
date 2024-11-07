export declare class FileService {
    uploadFile(file: Express.Multer.File): Promise<string>;
    deleteFile(file_name: string): Promise<void>;
}
