let peça='torre'
let movimento;

switch (peça) {
    case 'peão':
        movimento= "1parafrente";
        break
    case 'torre':
        movimento= "parafrenteelados";
        break
    case 'cavalo':
        movimento= "emL";
        break
    case 'bispo':
        movimento= "emdiagonal";
        break
    case 'rainha':
        movimento= "todasasdireções"
        break
    case 'rei':
        movimento= "1emtodasasdireções"
        break
        default:
            movimento= "nem é peça, aff";
        break
    }
    console.log(movimento.toLowerCase(movimento));