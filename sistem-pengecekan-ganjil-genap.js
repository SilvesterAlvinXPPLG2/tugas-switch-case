let plat_nomer = ["L 1238 VGA"]
let tanggal = 5;
let array = plat_nomer[0].split(" ")
switch (true) {
    case (array[1] % 2 == 0 && tanggal % 2 == 0 || array[1] % 2 == 1 && tanggal % 2 == 1):
        console.log("silahkan melanjutkan perjalanan anda");
        break;
    default:
        console.log("maaf, anda haru saya tahan sebentar");
        break;
}