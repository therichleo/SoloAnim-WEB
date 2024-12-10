import express from 'express'
import { engine } from 'express-handlebars'

const app = express();
const PORT = 5000;

//para acceder a datos de formularios dentro de la pogina
app.use(express.urlencoded({ extended: true }));

// Iniciacion de hdbs
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


// Ruta inicial
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/foro', (req,res) => {
    res.render('foro')
})


app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
