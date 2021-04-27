abstract class KrediBase {
    constructor() {
        
    }

    kaydet():void{
        console.log("Kredi kaydedildi");
    }

    //her class da değişecek fonksiyon
    abstract hesapla():void;

}



class ABankasi extends KrediBase {
    constructor() {
        //inherit ettiğimiz class ın ctor u çalıştığı için alışırke istedikerini vermemiz lazım.
        // istemiyorsa super diyip bırakmalıyız.
        super();
    }


    hesapla(): void {
        console.log("A Bankasına göre hesaplandı.");
    }

    aBankasınaYeniÖzellik(){
        console.log("A Bankası Yeni Özellik");
    };
}

class BBankasi extends KrediBase{
    constructor() {
        super();
    }
    
    hesapla(): void {
        console.log("B Bankasına göre hesaplandı.");
    }
}
let aBankasi = new ABankasi();
aBankasi.kaydet();
aBankasi.hesapla();


let bBankasi = new BBankasi();
bBankasi.kaydet();
bBankasi.hesapla();




 
//EN İYİ KULLANIM  TEK YERDEN KREDİ VEREN BANKAYI DEĞİŞTİREBİLİYORSUN ÇOK KOLAY
let kredi : KrediBase;
kredi=new ABankasi();
kredi=new BBankasi();
