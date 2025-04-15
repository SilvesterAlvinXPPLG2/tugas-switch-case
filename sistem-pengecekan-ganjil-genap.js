let plat_nomer = ["L 1239 VGA"]
let tanggal = 3;
let array = plat_nomer[0].split(" ")
switch (true) {
    case (array[1] % 2 == 0 && tanggal % 3 == 0):
        console.log("maaf, anda harus saya tahan sebentar");
        break;
    default:
        console.log("silahkan melanjutkan perjalanan anda");
        break;
}