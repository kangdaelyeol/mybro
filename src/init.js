import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');
app.get('/', (req, res) => {
	res.render('page');
});

app.use('/static', express.static('assets'));
app.use('/video', express.static('src/videoscene'));
app.use('/client', express.static('src/client'));

app.listen(PORT, () => {
	console.log(`PORT ${PORT} listening well`);
});
