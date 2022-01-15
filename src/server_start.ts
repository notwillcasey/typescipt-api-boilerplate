import app from './server';
const PORT: any = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})