import { Request, Response} from 'express';
import EmailService from '../services/EmailService';

const userData = [
    {
        name: 'Victor',
        idade: 19,
        emprego: 'CS Agent'
    },

    {
        name: 'Vittória',
        idade: 16,
        emprego: 'None'
    },

    {
        name: 'Cláudia',
        idade: 36,
        emprego: 'Auxiliar administrativa'
    }

]

export default {

    async index(req: Request, res: Response){
        return res.json(userData);
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService;
        emailService.sendMail({ 
            to: {
              name: 'Victor Atavila', 
              email: 'victoratavila@hotmail.com' 
            },

            message: { 
              subject: 'Bem vindo ao sistema', 
              body: 'Bem vindo! =)'
            }
        });

        res.send('Sucesso!');
    }
    
};