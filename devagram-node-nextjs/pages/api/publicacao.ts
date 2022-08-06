import type { NextApiResponse } from "next";
import type { RespostaPadraoMsg } from "../../types/RespostaPadraoMsg";
import nc from 'next-connect';
import { upload, uploadImagemCosmic } from "../../services/uploadImagemCosmic";
import { conectarMongoDB } from "../../middlewares/conectarMongoDB";
import { validarTokenJWT } from "../../middlewares/validarTokenJWT";

const handler = nc()
    .use(upload.single('file'))
    .post(async (req: any, res: NextApiResponse<RespostaPadraoMsg>) => {
        
        try{
            if(!req || !req.body){
                return res.status(400).json({erro: 'Parametros de entrada nao informados'});
            }
            const {descricao} = req?.body;

            if(!descricao || descricao.length < 2){
                return res.status(400).json({erro: 'Descricao nao e valida'});
            }
    
            if(!req.file){
                return res.status(400).json({erro: 'Imagem e obrigatoria'});
            }
            
            return res.status(200).json({msg: 'Publicacao esta valida'});

        }catch(e){
            console.log(e);
            return res.status(400).json({erro: 'Erro ao cadastrar a publicacao'});
        }
    });

export const config = {
    api: {
        bodyParser : false
    }
}

export default validarTokenJWT(conectarMongoDB(handler));