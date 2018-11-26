package classes

class Data(var dia: Int, var mes: Int, var ano: Int) {
    fun formatar(): String {
        return "$dia/$mes/$ano"
    }
}

fun main(args: Array<String>) {
    var nascimento = Data(10, 5, 1991)

    println("${nascimento.dia}/${nascimento.mes}/${nascimento.ano}")
    println(nascimento.formatar())

    with(nascimento) {
        println("$dia/$mes/$ano")
    }

    nascimento.mes = 11
    println(nascimento.formatar())
}