import { JSEncrypt } from 'jsencrypt'

export default {
    //加密
    encryptedData(data) {
        //公钥匙
        const publicKey =
            'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCg0SPMEjcnydrWT7ToSR2lz82h/80ZNAwdQ4yfhoIxV/C5MtuStxnokoDByDrQEZaa6+fOZJGdAXCp+LR//rpB97I7BR5P6u9zDTdHug/sA5XFihzjmE0ayOdLgMPUeEuBelaCPgQog558M/NLE54zkvGwpEs7ZesgV6WDXIsmIwIDAQAB'
        //新建JSEncrypt对象
        let encryptor = new JSEncrypt()
        //设置公钥
        encryptor.setPublicKey(publicKey)
        return encryptor.encrypt(data)
    },
}
