export declare class NfcError extends Error {
    code: NfcError.ErrorCode;
    constructor(code: NfcError.ErrorCode, message: string);
    static tagLostError(): NfcError;
    static notConnectedError(): NfcError;
    static unknownError(errString: string): NfcError;
    static internalError(message: string): void;
}
export declare namespace NfcError {
    enum ErrorCode {
        Unknown = "NfcUnknownError",
        InternalError = "NfcInternalError",
        TagLostError = "NfcTagLostError",
        NotConnectedError = "NfcNotConnectedError"
    }
}
