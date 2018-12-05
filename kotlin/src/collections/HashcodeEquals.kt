package collections

class Objeto(val nome: String, val descricao: String) {

    override fun hashCode(): Int {
        return nome.length
    }

    override fun equals(other: Any?) = if (other is Objeto) {
        nome.equals(other.nome, ignoreCase = true)
    } else {
        false
    }
}

fun main(args: Array<String>) {
    val conjunto = hashSetOf(
            Objeto("Cadeira", "..."), // Hascode = 7
            Objeto("Mesa", "..."), // Hascode = 4
            Objeto("Faca", "..."), // Hascode = 4
            Objeto("Copo", "...") // Hascode = 4
    )

    conjunto.contains(Objeto("faca", "???")).print()
}