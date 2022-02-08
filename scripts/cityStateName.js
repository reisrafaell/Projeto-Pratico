export default function cityStateName(region) {
    let regionShow = "";
  
    switch (region) {
      case "Acre":
        regionShow = "AC";
        break;
      case "Alagoas":
        regionShow = "AL";
        break;
      case "Amapá":
        regionShow = "AP";
        break;
      case "Amazonas":
        regionShow = "AM";
        break;
      case "Bhaia":
        regionShow = "BA";
        break;
      case "Ceará":
        regionShow = "CE";
        break;
      case "Espírito Santo":
        regionShow = "ES";
        break;
      case "Goiás":
        regionShow = "GO";
        break;
      case "Maranhão":
        regionShow = "MA";
        break;
      case "Mato Grosso":
        regionShow = "MT";
        break;
      case "Mato Grosso do Sul":
        regionShow = "MS";
        break;
      case "Minas Gerais":
        regionShow = "MG";
        break;
      case "Pará":
        regionShow = "PA";
        break;
      case "Paraíba":
        regionShow = "PB";
        break;
      case "Paraná":
        regionShow = "PR";
        break;
      case "Pernambuco":
        regionShow = "PE";
        break;
      case "Piauí":
        regionShow = "PI";
        break;
      case "Rio de Janeiro":
        regionShow = "RJ";
        break;
      case "Rio Grande do Norte":
        regionShow = "RN";
        break;
      case "Rio Grande do Sul":
        regionShow = "RS";
        break;
      case "Rondônia":
        regionShow = "RO";
        break;
      case "Roraima":
        regionShow = "RR";
        break;
      case "Santa Catarina":
        regionShow = "SC";
        break;
      case "São Paulo":
        regionShow = "SP";
        break;
      case "Sergipe":
        regionShow = "SE";
        break;
      case "Tocantins":
        regionShow = "TO";
        break;
    }
  
    return regionShow;
  }