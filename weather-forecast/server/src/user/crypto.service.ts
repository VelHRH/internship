import { Length, SCRYPT_PARAMS, SCRYPT_PREFIX } from "constants/crypto"
import * as crypto from "node:crypto"

export class CryptoService {

    public hashPassword(password: string): Promise<string> {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(Length.SALT, (err, salt) => {
                if (err) {
                    reject(err)
                    return;
                }
                crypto.scrypt(password, salt, Length.KEY, SCRYPT_PARAMS, (err, hash) => {
                    if (err) {
                        reject(err)
                        return;
                    }
                    resolve(this.serializeHash(hash, salt));
                })
            })
        })
    }

    public comparePasswords(password: string, serializedHash: string): Promise<boolean> {
        const { params, salt, hash } = this.deserializeHash(serializedHash);
        return new Promise((resolve, reject) => {
            const callback = (err, hashedPassword) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(crypto.timingSafeEqual(hashedPassword, hash));
            };
            crypto.scrypt(password, salt, hash.length, params, callback);
        });
    }

    private serializeHash(hash: Buffer, salt: Buffer): string {
        const saltString = salt.toString('base64').split('=')[0];
        const hashString = hash.toString('base64').split('=')[0];
        return `${SCRYPT_PREFIX}${saltString}$${hashString}`;
    }

    private deserializeHash(phc: string) {
        const [, name, options, salt64, hash64] = phc.split('$');
        if (name !== 'scrypt') {
          throw new Error('Wrong hash algorithm'); // TODO: custom error
        }
        const params = this.parseOptions(options);
        const salt = Buffer.from(salt64, 'base64');
        const hash = Buffer.from(hash64, 'base64');
        return { params, salt, hash };
    };

    private parseOptions(options: string): Record<string, number> {
        const values: (string | number)[][] = [];
        const items = options.split(',');
        for (const item of items) {
            const [key, val] = item.split('=');
            values.push([key, Number(val)]);
        }
        return Object.fromEntries(values);
    }
}