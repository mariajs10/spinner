const list = "|/-\\|/-\\|";
let t = 100;
for (let item of list) {
  setTimeout(() => {
    process.stdout.write(`\r ${item}`);
  }, t);
  t += 200;
}
