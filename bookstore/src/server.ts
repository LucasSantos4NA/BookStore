import express from 'express';
import bookRoutes from './routes/bookRoutes';
import authRoutes from './routes/authRoutes';

const app = express();
app.use(express.json());

app.use('/books', bookRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});