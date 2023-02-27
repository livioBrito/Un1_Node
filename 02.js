readdir('/caminho/do/diretorio')
  .then(files => console.log(files))
  .catch(err => console.error(err));