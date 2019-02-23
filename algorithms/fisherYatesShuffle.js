let names = ['john-snow', 'rolo', 'beon', 'ragnar', 'floki'];
let arlen = names.length;
while(--arlen > 0) {
    let randomNumber = ~~(Math.random() * (arlen+1));
    [names[randomNumber],names[arlen]] = [names[arlen], names[randomNumber]];
}

console.log(names);