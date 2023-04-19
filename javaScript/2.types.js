// В JavaScript существует 8 типов данных:
// number - целые и дробные числа, включает значения Infinity и NaN
// Bigint - целые числа состоящие более чем из 16 цифр
// string - строки
// boolean - логические значения (true и false)
// null - специальное значение, имеющее смысл неизвестного значения, "ничего"
// undefined - специальное значение, имеющии смысл "значение еще не определено"
// Symbol - уникальные значения
// object -  сущности "ключ-значение"

typeof 1 // number
typeof "1" // string
typeof true // boolean
typeof null // object
typeof undefined // undefined
typeof {} // object

// Преобразование типов

// Строковое: String()
String(true) // "true"
String(1) // "1"
String(undefined) // "undefined"
String({}) // "[object Object]"

// Численное: Number() или математические операции
"10" / "2" // 5
+"12" // 12
Number("1") // 1
Number("Привет") // NaN
Number(null) // 0
Number(undefined) // NaN

// Логическое: Boolean() или логические операции (например, двойное отрицание - !!)
Boolean("")  // false
Boolean(0) // false
Boolean("0") // true
Boolean("false") // true
Boolean(undefined) // false
!!("") // false

// Нестрогое сравнение (==, !=) приводит к числу каждое из указанных значений, в результате игнорируя их исходные типы.
// Строгое сравнение (===, !==) осуществляет сравнение без приведения типов, тем самым учитывая при сравнении, что значения имеют разные типы.
5 == "5" // true
5 === "5" // false