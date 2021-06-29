
const fs =  require('fs');
const colors = require('colors');


// const crearArchivo = (base = 5) => {
//     return new Promise((resolve, reject) => {

//         console.log('==================');
//         console.log(' Tabla del: ', base);
//         console.log('==================');

//         let salida = '';
//         for(let i = 1; i <= 10; i++) {
//             salida += `${base} x ${i} = ${base * i}\n`;
//         }
//         console.log(salida);
//         fs.writeFileSync(`tabla-${base}.txt`,salida);

//         (salida)
//             ? resolve(`tabla-${base}.txt`)
//             : reject(`Error al crear tabla-${base}.txt`);
//     });
// }


const crearArchivo = async(base = 5, listar, hasta) => {
    
    try {
        let salida = '';
        let consola= '';

        for(let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${colors.green('x')} ${i} ${colors.green('=')} ${colors.blue(base * i)}\n`;
        }
        if(listar== true){
            console.log('=================='.rainbow);
            console.log(' Tabla del: '.red , colors.blue(base));
            console.log('=================='.rainbow);
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt` ,salida);

        return `tabla-${base}.txt`;

    } catch (error) {

        throw error;
    }

        
           
    
}



// const crearArchivo = (base = 5) =>{

//     console.log('==================');
//     console.log(' Tabla del: ', base);
//     console.log('==================');

//     let salida = '';
//     for(let i = 1; i <= 10; i++) {
//         salida += `${base} x ${i} = ${base * i}\n`;
        
//     }

//     console.log(salida);
//     fs.writeFileSync(`tabla-${base}.txt`,salida);

//     console.log(`tabla-${base}.txt creado`);

// }

module.exports = {
    crearArchivo
}