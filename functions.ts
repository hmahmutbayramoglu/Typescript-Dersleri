let fonksiyon0=()=>{
}
function fonksiyon1( x ,y){
    
}
function fonksiyon2( x ,y):number{
    return
}
function fonksiyon3( x ,y):void{
}
 
// OLMASI GEREKEN
//       ||
//       \/
function fonksiyon4(x:number ,y:number):number{
    return x+y
}

console.log(fonksiyon4(14,24))


// İLK DEFAULT DEĞER VERME
function fonksiyon5(x:number ,y:number=1):number{
    return x+y
}

console.log(fonksiyon5(14))



// DEĞERİ İSTER VERİR İSTER VERMEZ FONKSİYONU KULLANAN KİŞİYE BAĞLI

function fonksiyon6(x:number ,y?:number):number{ // kullanıcıya bağlı olanları sona eklemeliyiz!!!
    
    //return x+y  bunu yaparsak y yi fonkiyonu kullanırken göndermezsek hata verir
    // çünkü vermediğimiz bişeyi toplayamaz 
    //bu yüzden kontrol etmemiz lazım

    if(y){ // y yi vermişse y true ise demek
        return x+y 

    }
    else{ //göndermemişse sadece x i geri döndür
        return x
    }


}


console.log("ilk değer verilmedi")
console.log(fonksiyon6(4)) // y y göndermediğimiz için sadece verdiğimizx değerini geri döndürür

console.log("ilk değer verildi")
console.log(fonksiyon6(6,4)) // şimdi y yide gönderdik y nin değeri olduğu için gönderdiğimiz x ve y yi toplayacak


  


//   -------------  REST  ------------- 
console.log("-------------  REST  -------------")


function davetliler(ilk:string , ...digerleri:string[]):string{
    

    return ilk+" "+ digerleri.join(" ") //join ==> digerleri dizisinin elemanlarının arasına boşluk bırak
}

console.log(davetliler("mahmut","ahmet","mehmet")) //ilk değiken olmasaydı hiç değer vermesekte çalışır

