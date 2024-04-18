export class Computadora{

	/*
	 	CREATE TABLE COMPUTADORA(
	  ID_COMPU NUMBER,
	  MARCA NVARCHAR2(50),
	  MODELO NVARCHAR2(50),
	  RAM NUMBER,
	  PROCESADOR NVARCHAR2(50),
	  PRECIO NUMBER,
	  CONSTRAINT COMPUTADORA_PK PRIMARY KEY(ID_COMPU)
		);
	*/

	idCompu !: number;
	marca !: string;
	modelo !: string;
	ram !: number;
	procesador !: string;
	precio !: number;

}