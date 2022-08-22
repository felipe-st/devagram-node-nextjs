import mongoose, {Schema} from "mongoose";

const UsuarioSchema = new Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true},
    avatar: {type: String, required: false},
    seguidores: {type: Number, default: 0},
    seguindo: {type: Number, default: 0},
    publicacoes: {type: Number, default: 0}
});

// para exportar o modelo usuarios (linha 14) ou caso 
// não exista criar o model de nome 'usuarios', passando o Schema (linha 15):
export const UsuarioModel = (mongoose.models.usuarios ||
    mongoose.model('usuarios', UsuarioSchema));