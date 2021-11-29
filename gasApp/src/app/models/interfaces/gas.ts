export interface GasolineraResponse {
    fecha:             string;
    ListaEESSPrecio:   Gasolinera[];
    nota:              string;
    resultadoConsulta: string;
}

export interface Gasolinera {
    cP:                             string;
    dirección:                      string;
    horario:                        string;
    latitud:                        string;
    Localidad:                      string;
    longitudWGS84:                  string;
    margen:                         Margen;
    municipio:                      string;
    precioBiodiesel:                PrecioBiodiesel;
    precioBioetanol:                PrecioBioetanol;
    precioGasNaturalComprimido:     PrecioGasNaturalComprimido;
    precioGasNaturalLicuado:        PrecioGasNaturalLicuado;
    precioGasesLicuadosDelPetróleo: PrecioGasesLicuadosDelPetróleo;
    precioGasoleoA:                 string;
    precioGasoleoB:                 string;
    precioGasoleoPremium:           string;
    precioGasolina95E10:            PrecioGasolina95_E;
    precioGasolina95E5:             string;
    precioGasolina95E5Premium:      PrecioGasolina95_E;
    precioGasolina98E10:            PrecioGasolina98E10;
    precioGasolina98E5:             string;
    precioHidrogeno:                string;
    provincia:                      Provincia;
    remisión:                       Remisión;
    rótulo:                         string;
    tipoVenta:                      TipoVenta;
    bioEtanol:                      BioEtanol;
    ésterMetílico:                  ÉsterMetílico;
    ideess:                         string;
    idMunicipio:                    string;
    idProvincia:                    string;
    idccaa:                         string;
}

export enum BioEtanol {
    The00 = "0,0",
    The100 = "10,0",
    The850 = "85,0",
}

export enum Margen {
    D = "D",
    I = "I",
    N = "N",
}

export enum PrecioBiodiesel {
    Empty = "",
    The1159 = "1,159",
    The1199 = "1,199",
    The1219 = "1,219",
    The1229 = "1,229",
    The1249 = "1,249",
    The1259 = "1,259",
    The1269 = "1,269",
    The1279 = "1,279",
    The1289 = "1,289",
    The1299 = "1,299",
    The1339 = "1,339",
    The1349 = "1,349",
    The1358 = "1,358",
    The1378 = "1,378",
    The1388 = "1,388",
    The1389 = "1,389",
    The1399 = "1,399",
    The1419 = "1,419",
    The1425 = "1,425",
    The1449 = "1,449",
    The1459 = "1,459",
    The1474 = "1,474",
    The1479 = "1,479",
    The1529 = "1,529",
    The1669 = "1,669",
    The1749 = "1,749",
}

export enum PrecioBioetanol {
    Empty = "",
    The1487 = "1,487",
    The1679 = "1,679",
    The1702 = "1,702",
    The1729 = "1,729",
    The1739 = "1,739",
}

export enum PrecioGasNaturalComprimido {
    Empty = "",
    The0894 = "0,894",
    The0895 = "0,895",
    The0900 = "0,900",
    The0919 = "0,919",
    The0920 = "0,920",
    The0959 = "0,959",
    The0969 = "0,969",
    The0979 = "0,979",
    The0980 = "0,980",
    The0985 = "0,985",
    The0989 = "0,989",
    The0995 = "0,995",
    The1004 = "1,004",
    The1020 = "1,020",
    The1030 = "1,030",
    The1039 = "1,039",
    The1040 = "1,040",
    The1050 = "1,050",
    The1079 = "1,079",
    The1090 = "1,090",
    The1095 = "1,095",
    The1099 = "1,099",
    The1249 = "1,249",
    The1259 = "1,259",
    The1389 = "1,389",
    The1590 = "1,590",
}

export enum PrecioGasNaturalLicuado {
    Empty = "",
    The0759 = "0,759",
    The0840 = "0,840",
    The0889 = "0,889",
    The0919 = "0,919",
    The0924 = "0,924",
    The0929 = "0,929",
    The0942 = "0,942",
    The0949 = "0,949",
    The0990 = "0,990",
    The0999 = "0,999",
    The1009 = "1,009",
    The1025 = "1,025",
    The1050 = "1,050",
    The1090 = "1,090",
    The1159 = "1,159",
    The1389 = "1,389",
}

export enum PrecioGasesLicuadosDelPetróleo {
    Empty = "",
    The0609 = "0,609",
    The0650 = "0,650",
    The0659 = "0,659",
    The0669 = "0,669",
    The0679 = "0,679",
    The0689 = "0,689",
    The0699 = "0,699",
    The0700 = "0,700",
    The0715 = "0,715",
    The0729 = "0,729",
    The0734 = "0,734",
    The0739 = "0,739",
    The0740 = "0,740",
    The0749 = "0,749",
    The0750 = "0,750",
    The0755 = "0,755",
    The0758 = "0,758",
    The0759 = "0,759",
    The0760 = "0,760",
    The0770 = "0,770",
    The0775 = "0,775",
    The0779 = "0,779",
    The0783 = "0,783",
    The0785 = "0,785",
    The0787 = "0,787",
    The0789 = "0,789",
    The0790 = "0,790",
    The0795 = "0,795",
    The0796 = "0,796",
    The0798 = "0,798",
    The0799 = "0,799",
    The0800 = "0,800",
    The0805 = "0,805",
    The0807 = "0,807",
    The0808 = "0,808",
    The0809 = "0,809",
    The0810 = "0,810",
    The0811 = "0,811",
    The0815 = "0,815",
    The0817 = "0,817",
    The0818 = "0,818",
    The0819 = "0,819",
    The0820 = "0,820",
    The0823 = "0,823",
    The0825 = "0,825",
    The0828 = "0,828",
    The0829 = "0,829",
    The0830 = "0,830",
    The0835 = "0,835",
    The0837 = "0,837",
    The0838 = "0,838",
    The0839 = "0,839",
    The0840 = "0,840",
    The0845 = "0,845",
    The0847 = "0,847",
    The0848 = "0,848",
    The0849 = "0,849",
    The0850 = "0,850",
    The0851 = "0,851",
    The0852 = "0,852",
    The0855 = "0,855",
    The0859 = "0,859",
    The0865 = "0,865",
    The0868 = "0,868",
    The0869 = "0,869",
    The0870 = "0,870",
    The0871 = "0,871",
    The0875 = "0,875",
    The0878 = "0,878",
    The0879 = "0,879",
    The0889 = "0,889",
    The0894 = "0,894",
    The0895 = "0,895",
    The0899 = "0,899",
    The0900 = "0,900",
    The0905 = "0,905",
    The0908 = "0,908",
    The0909 = "0,909",
    The0913 = "0,913",
    The0919 = "0,919",
    The0927 = "0,927",
    The0929 = "0,929",
    The0936 = "0,936",
    The0939 = "0,939",
    The0955 = "0,955",
    The0980 = "0,980",
    The0998 = "0,998",
    The0999 = "0,999",
}

export enum PrecioGasolina95_E {
    Empty = "",
    The1079 = "1,079",
    The1149 = "1,149",
    The1159 = "1,159",
    The1209 = "1,209",
    The1274 = "1,274",
    The1358 = "1,358",
    The1389 = "1,389",
    The1399 = "1,399",
    The1409 = "1,409",
    The1418 = "1,418",
    The1419 = "1,419",
    The1420 = "1,420",
    The1423 = "1,423",
    The1429 = "1,429",
    The1438 = "1,438",
    The1439 = "1,439",
    The1445 = "1,445",
    The1449 = "1,449",
    The1452 = "1,452",
    The1459 = "1,459",
    The1469 = "1,469",
    The1479 = "1,479",
    The1488 = "1,488",
    The1498 = "1,498",
    The1499 = "1,499",
    The1500 = "1,500",
    The1509 = "1,509",
    The1513 = "1,513",
    The1519 = "1,519",
    The1524 = "1,524",
    The1526 = "1,526",
    The1529 = "1,529",
    The1534 = "1,534",
    The1539 = "1,539",
    The1544 = "1,544",
    The1549 = "1,549",
    The1550 = "1,550",
    The1554 = "1,554",
    The1559 = "1,559",
    The1568 = "1,568",
    The1569 = "1,569",
    The1574 = "1,574",
    The1575 = "1,575",
    The1578 = "1,578",
    The1579 = "1,579",
    The1584 = "1,584",
    The1588 = "1,588",
    The1589 = "1,589",
    The1594 = "1,594",
    The1598 = "1,598",
    The1599 = "1,599",
    The1604 = "1,604",
    The1607 = "1,607",
    The1609 = "1,609",
    The1614 = "1,614",
    The1615 = "1,615",
    The1619 = "1,619",
    The1624 = "1,624",
    The1629 = "1,629",
    The1630 = "1,630",
    The1634 = "1,634",
    The1639 = "1,639",
    The1644 = "1,644",
    The1649 = "1,649",
    The1654 = "1,654",
    The1656 = "1,656",
    The1659 = "1,659",
    The1664 = "1,664",
    The1669 = "1,669",
    The1674 = "1,674",
    The1679 = "1,679",
    The1684 = "1,684",
    The1689 = "1,689",
    The1694 = "1,694",
    The1699 = "1,699",
    The1709 = "1,709",
    The1714 = "1,714",
    The1719 = "1,719",
    The1729 = "1,729",
    The1749 = "1,749",
    The1759 = "1,759",
}

export enum PrecioGasolina98E10 {
    Empty = "",
    The1493 = "1,493",
    The1499 = "1,499",
    The1625 = "1,625",
    The1639 = "1,639",
    The1665 = "1,665",
}

export enum Provincia {
    Albacete = "ALBACETE",
    Alicante = "ALICANTE",
    Almería = "ALMERÍA",
    ArabaÁlava = "ARABA/ÁLAVA",
    Asturias = "ASTURIAS",
    Badajoz = "BADAJOZ",
    BalearsIlles = "BALEARS (ILLES)",
    Barcelona = "BARCELONA",
    Bizkaia = "BIZKAIA",
    Burgos = "BURGOS",
    Cantabria = "CANTABRIA",
    CastellónCastelló = "CASTELLÓN / CASTELLÓ",
    Ceuta = "CEUTA",
    CiudadReal = "CIUDAD REAL",
    CoruñaA = "CORUÑA (A)",
    Cuenca = "CUENCA",
    Cáceres = "CÁCERES",
    Cádiz = "CÁDIZ",
    Córdoba = "CÓRDOBA",
    Gipuzkoa = "GIPUZKOA",
    Girona = "GIRONA",
    Granada = "GRANADA",
    Guadalajara = "GUADALAJARA",
    Huelva = "HUELVA",
    Huesca = "HUESCA",
    Jaén = "JAÉN",
    León = "LEÓN",
    Lleida = "LLEIDA",
    Lugo = "LUGO",
    Madrid = "MADRID",
    Melilla = "MELILLA",
    Murcia = "MURCIA",
    Málaga = "MÁLAGA",
    Navarra = "NAVARRA",
    Ourense = "OURENSE",
    Palencia = "PALENCIA",
    PalmasLas = "PALMAS (LAS)",
    Pontevedra = "PONTEVEDRA",
    RiojaLa = "RIOJA (LA)",
    Salamanca = "SALAMANCA",
    SantaCruzDeTenerife = "SANTA CRUZ DE TENERIFE",
    Segovia = "SEGOVIA",
    Sevilla = "SEVILLA",
    Soria = "SORIA",
    Tarragona = "TARRAGONA",
    Teruel = "TERUEL",
    Toledo = "TOLEDO",
    ValenciaValència = "VALENCIA / VALÈNCIA",
    Valladolid = "VALLADOLID",
    Zamora = "ZAMORA",
    Zaragoza = "ZARAGOZA",
    Ávila = "ÁVILA",
}

export enum Remisión {
    Dm = "dm",
    Om = "OM",
}

export enum TipoVenta {
    P = "P",
    R = "R",
}

export enum ÉsterMetílico {
    The00 = "0,0",
    The100 = "10,0",
    The120 = "12,0",
    The200 = "20,0",
    The300 = "30,0",
    The70 = "7,0",
}
