console.log("DEĞİŞKENLER (variable) ")


let sayi: number
sayi = 10
console.log(sayi + " - " + sayi.valueOf())

let isim: string
isim = "mahmut"
console.log(isim + " - " + isim.valueOf())

let onay: boolean
onay = true
console.log(onay + " - " + onay.valueOf())




let stringDizi: string[] = ["Ankara", "İstanbul"]

stringDizi.forEach(item => {
    console.log(item)
})


let numberDizi: number[] = [1, 2, 34, 5, 6, 7]

numberDizi.forEach(item => {
    console.log(item)
})


console.log("Generic Array")

let numberDizi2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

console.log(numberDizi2[0])



//-------  TUPLE  -------
console.log("----- TUPLE -----")

let dizi3: [string, number] = ["İstanbul", 2]

console.log(dizi3[0][2]) // dizi3 ün 0. elemanının 2.elemanını ver nasıl oluyor
//  çünkü stringler bir char dizisidir o yüzden dizi gibi ayırdı ve 2. elemanını getirdi 

dizi3.forEach(item => {
    console.log(item)
})


// -------  ENUM  -------

console.log("-----  ENUM  -----")

enum Sehir {
    istanbul = 1,
    ankara,
    izmir,
    adana,
    kocaeli,
    sakarya
}

// console.log(Sehir[0]) istanbulun değerini 1 verdiğimiz için 1 den başladı o yüzden 0. elemanı olmadı

console.log(Sehir[1])

let sehir: Sehir = Sehir.istanbul






// -------  ANY  -------

console.log("-------  ANY  -------")

// gelecek verinin türünü bilmedğimizde kullanırız


let veri: any

veri = '*'
veri = 2
veri = "istanbul"
veri = {


    void() {
        return "added"
    }


}

console.log(veri.void())





//--------  VOİD  --------
console.log("--------  VOİD  --------")


let degerdöndürmez : void = null // Veya
let degerdöndürmez2 : void = undefined



function degerDöndüren():number{
    return 45
}
console.log(degerDöndüren())

function degerDöndürenmeyen():void{
    console.log("Değer döndürmeyen fonksiyon | metot")
}

degerDöndürenmeyen()




//--------  UNDİFİNED & NULL  --------
console.log("--------   UNDİFİNED & NULL   --------")

// undifined DEĞER tipler için kullanılır değer atanmamış hali


let sayi3:number;

console.log(sayi3)

// Null REFERANS tipler için kullanılır referans atanmamış hali

class nesne{

}

console.log(nesne)



