const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    stop: {
        alias: 's',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Imprime en un archivo la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}