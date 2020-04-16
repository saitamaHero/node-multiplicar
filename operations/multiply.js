let getTable = (base, stop) => {
    let data = [];

    if (base > 0) {
        for (let index = 1; index <= stop; index++) {
            data.push(`${base} * ${index} = ${index * base}\n`);
        }
    }

    return data;
};

let saveTableToFile = (base, stop) =>{
    return new Promise((resolve, reject) => {
        const fs = require('fs');

        if(!Number(base)){
            reject(`${base} is not a number`);
        }else{
            let filename = `results/table-${base}.txt`;
            let table = getTable(base, stop);
    
            fs.writeFile(filename, table.join(""), (err) => {
                if (err) reject(err);
    
                resolve(filename);
            });
        }
    });
};

module.exports = {
    saveTableToFile,
    getTable
}