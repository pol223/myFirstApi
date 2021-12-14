const status = {
    ok: 200,
    notFound: 404,
};

const hoy = new Date();

module.exports = {
    fechamili: (req, res) => {
        let mili = new Date().getTime();
        res.status(status.ok).send({data: mili});
    },
    fechaform1: (req, res) => {
        const fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
        res.status(status.ok).send({data: fecha});
    },
    fechaform2: (req, res) => {
        const hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
        res.status(status.ok).send({hora: hora});
    }
};