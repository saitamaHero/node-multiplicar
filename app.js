const argv = require('./config/yargs').argv;
const colors = require('colors')

const multiply = require('./operations/multiply');

console.log(argv.base);
console.log(argv.stop);


if(argv._.length > 0){
    let command = argv._[0];

    switch(command){
        case 'listar':
            console.log('======================='.green);
            console.log(`Tabla del ${argv.base} al ${argv.stop}`.green);
            console.log('======================='.green);

            
            multiply.getTable(argv.base, argv.stop).forEach(element => {
                console.log(element.replace("\n","").yellow);
            });
            
        break;

        case 'crear':
            multiply.saveTableToFile(argv.base, argv.stop).then(
                fn => {
                    console.log(`Archivo guardado: ${fn}`.green);
                }
            ).catch(err => console.error(err));
        break;

        default:
            console.log(`El comando ${ command } no existe.`);
            
    }
}




