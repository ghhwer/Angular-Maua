export class Aluno {
    nome:string
    idade:number
    email:string
    curso:string
    constructor()
    constructor(nome:string, idade: number, email:string, curso:string)
    constructor(nome?:string, idade?: number, email?:string, curso?:string) {
        this.nome = nome
        this.idade = idade
        this.email = email
        this.curso = curso
    }
}
