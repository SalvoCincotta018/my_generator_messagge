const num = Math.floor(Math.random() * 10);
const messaggio = num => {
    if (num === 0) {
        return "Amare non è guardarsi l'un l'altro, ma guardare insieme nella stessa direzione.";
    } else if (num === 1) {
        return "Fra i rumori della folla ce ne stiamo noi due, felici di essere insieme, parlando piano, forse nemmeno una parola.";
    } else if (num === 2) {
        return "Se cos'è l'amore, è grazie a te";
    } else if (num === 3) {
        return "L'amore è quella cosa che non puoi decidere, che si manifesta in ogni battito del cuore... Quella cosa che si chiama amore sei tu...";
    } else if (num === 4) {
        return "L'amore è perdersi in uno sguardo e ritrovarsi in un abbraccio nell'estasi di un bacio.";
    } else if (num === 5) {
        return "Il vero amore è camminare, mano nella mano, nella quotidianità di questo mondo";
    } else {
        return "Cos'è per te l'Amore? L'amore è _____________(continua tu)";
    }
};

console.log(messaggio(num));