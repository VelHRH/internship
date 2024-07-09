export const enum Length {
    SALT = 32,
    KEY = 64,
}

export const SCRYPT_PARAMS = { N: 32768, r: 8, p: 1, maxmem: 64 * 1024 * 1024 };
export const SCRYPT_PREFIX = `$scrypt$N=${SCRYPT_PARAMS.N},r=${SCRYPT_PARAMS.r},p=${SCRYPT_PARAMS.p},maxmem=${SCRYPT_PARAMS.maxmem}$`;