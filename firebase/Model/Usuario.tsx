export class Usuario{
    public id: string;
    public nome: string;
    public email: string;
    public senha: string;
    public fone: string;
    public foto: string;

    constructor(obj: Partial<Usuario>){
        if(obj){
            this.id = obj.id
            this.nome = obj.nome
            this.email = obj.email
            this.senha = obj.senha
            this.fone = obj.fone
            this.foto = obj.foto
        }
    }
    toString(){
        const objeto = `{
            "id": "${this.id}"
            "nome": "${this.nome}"
            "email": "${this.email}"
            "senha": "${this.senha}"
            "fone": "${this.fone}"
            "foto": "${this.foto}"
        }`
        return objeto
    }
    setFirestore(){
        const usuario={
            id: this.id,
            nome: this.nome,
            email: this.email,
            senha: this.senha,
            fone: this.fone,
            foto: this.foto
        }
        return usuario
    } 
}