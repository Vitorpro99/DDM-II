export class Produto{
    public id:          string;
    public produto:     string;
    public preco:       string;
    public quantidade:  string;

    constructor(obj: Partial<Produto>){
        if(obj){
            this.id =           obj.id
            this.produto =      obj.produto
            this.preco =        obj.preco
            this.quantidade =   obj.quantidade
        }
    }
    toString(){
        const objeto = `{
            "id": "${this.id}}"
            "produto": "${this.id}"
            "preco": "${this.preco}"
            "quantidade": "${this.quantidade}"
        }`
        return objeto
    }
    setFirestore(){
        const produto={
            id:         this.id,
            produto:    this.produto,
            preco:      this.preco,
            quantidade: this.quantidade
        }
        return produto
    }


}

