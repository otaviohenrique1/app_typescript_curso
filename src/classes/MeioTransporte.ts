export enum Transporte {
  carro,
  bicicleta,
  andando,
  skate,
  patins,
  trem,
}6

export function escolherMeioTransporteEnumSwitch(locomocao: Transporte) {
  switch (locomocao) {
    case Transporte.carro:
      console.log("Carro");
      break;
    case Transporte.bicicleta:
      console.log("Bicicleta");
      break;
    case Transporte.andando:
      console.log("Andando");
      break;
    case Transporte.patins:
      console.log("Patins");
      break;
    case Transporte.skate:
      console.log("Skate");
      break;
    case Transporte.trem:
      console.log("Trem");
      break;
    default:
      console.log("Vou para aventura!");
      break;
  }
}