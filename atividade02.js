function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('Olá!');
  await sleep(2000);
  console.log('Depois de 2 segundos');
}

main();
