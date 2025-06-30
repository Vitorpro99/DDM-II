export class Veiculo{
    public id:      string;
    public marca:   string;
    public modelo:  string;
    public ano:     string;
    public motor:   string;
    public foto:    string;

    constructor(obj: Partial<Veiculo>){
        if(obj){
            this.id     =    obj.id
            this.marca  =    obj.marca
            this.modelo =    obj.modelo
            this.ano    =    obj.ano
            this.motor  =    obj.motor
            this.foto   =    obj.foto
        }
    }
    toString(){
        const objeto = `{
            "id": "${this.id}"
            "marca": "${this.marca}"
            "modelo": "${this.modelo}"
            "ano": "${this.ano}"
            "motor": "${this.motor}"
            "foto": "${this.foto}"
        }`
        return objeto;
    }
    toFirestore(){
        const veiculo={
            id:     this.id,
            marca:  this.marca,
            modelo: this.modelo,
            ano:    this.modelo,
            motor:  this.motor,
            foto: this.foto ?? null
        }
        return veiculo
    }
}