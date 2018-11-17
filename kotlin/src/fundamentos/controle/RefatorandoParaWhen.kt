package fundamentos.controle

fun main(args: Array<String>) {
    val nota = 8

    when (nota) {
        9, 10 -> println("Fanstástico")
        8, 7 -> println("Parabéns")
        6, 5, 4 -> println("Tem como recuperar")
        in 0..3 -> println("Te vejo no próximo semestre")
        else -> println("Nota inválida")
    }

}