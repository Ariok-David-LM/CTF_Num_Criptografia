import crypto from 'crypto'
const security = {
  hash: (pass) => {
    const hash = crypto.createHash('md5').update(pass).digest('hex');
    return hash;
  },
  verificar: (pass, hash) => {
    const inputHash = crypto.createHash('md5').update(pass).digest('hex');
    return inputHash === hash;
  },
  bandera: () => {
    return 'Flag{3num3r4c10nYCr1pt0gr4f14_2023}'
  }
}
export default security