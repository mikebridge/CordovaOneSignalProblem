import { QueueComProtocol } from '@iotize/device-client.js/protocol/impl/queue-com-protocol';
import { ComProtocolConnectOptions, ComProtocolDisconnectOptions, ComProtocolSendOptions, ComProtocolOptions } from '@iotize/device-client.js/protocol/api/com-protocol.interface';
import { Observable } from 'rxjs';
import { NfcError } from './errors';
export declare class NFCComProtocol extends QueueComProtocol {
    constructor(options?: ComProtocolOptions);
    static iOSProtocol(): NFCComProtocol;
    _connect(options?: ComProtocolConnectOptions): Observable<any>;
    _disconnect(options?: ComProtocolDisconnectOptions): Observable<any>;
    write(data: Uint8Array): Promise<any>;
    read(): Promise<Uint8Array>;
    send(data: Uint8Array, options?: ComProtocolSendOptions): Observable<Uint8Array>;
    _onConnectionLost(error: NfcError): void;
}
