

class Kisi{


    kaydet(){
        console.log("kişi kaydedildi.");
    }
}


class Personel extends Kisi{
    maasÖde(){
        console.log("maas ödendi.");
    }
}

class Müsteri extends Kisi{
satisYap(){
    console.log("Satış yapıldı")
}
}

let personel = new Personel();
personel.kaydet();
personel.maasÖde();

let müsteri =new Müsteri();
müsteri.kaydet();
müsteri.satisYap();






