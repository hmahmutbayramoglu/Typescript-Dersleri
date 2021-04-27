let sehirler:string[] = ["istanbul", "Ankara" , "İzmir" , "Kocaeli"];




//normalde in çalışma mantığı bu sadece index değerlerini getirir
console.log(" ------------  FOR İN  ------------ ");
for (const item in sehirler) {
    console.log(item)
 }




// Sadece kendi değerini getirir
console.log(" ------------  FOR OF  ------------ ");
for (const item of sehirler) {
    console.log(item);
}



//burada index değerini getirmesini engeller şart ile değerini kendi getirir
console.log(" ------------  FOR İN ŞARTLI  ------------ ");
for (const item in sehirler) {
    if (Object.prototype.hasOwnProperty.call(sehirler, item)) {
        const element = sehirler[item];
        console.log(element)
    }
}