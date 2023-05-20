const security = {
  hash: (pass) => {
    const hash = crypto.createHash('sha512').update(pass).digest('hex');
    return hash;
  },
  verificar: (pass, hash) => {
    const inputHash = crypto.createHash('sha512').update(pass).digest('hex');
    return inputHash === hash;
  }
}
export default security