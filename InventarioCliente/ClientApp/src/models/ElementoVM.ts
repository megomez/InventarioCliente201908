export class ElementoVM {
  id: number = 0;
  descripcion: string = "";
  serial: string = "";
  valorCompra: number = 0;
  fechaCompra: string = "";
  estado: string = ""; // Estados => ('Sin asignar', 'Asignado', 'Dañado', 'Retirado')
  telementoId: number = 0;
  telemento: string = "";
}
