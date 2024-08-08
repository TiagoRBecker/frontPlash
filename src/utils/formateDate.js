export const getDate = (dateIniti, dateEnd) => {
    const dateStart = new Date(Number(dateIniti));
    const dateFinal = new Date(Number(dateEnd));
    const month = dateStart.getMonth() + 1;
    const startDay = dateStart.getDate();
    const endDay = dateFinal.getDate();
    const formatWithTwoDigits = (value) => value.toString().padStart(2, "0");

    const formattedStartDay = formatWithTwoDigits(startDay);
    const formattedEndDay = formatWithTwoDigits(endDay);

    let nameMonth;
    switch (month) {
      case 1:
        nameMonth = "Janeiro";
        break;
      case 2:
        nameMonth = "Fevereiro";
        break;
      case 3:
        nameMonth = "Março";
        break;
      case 4:
        nameMonth = "Abril";
        break;
      case 5:
        nameMonth = "Maio";
        break;
      case 6:
        nameMonth = "Junho";
        break;
      case 7:
        nameMonth = "Julho";
        break;
      case 8:
        nameMonth = "Agosto";
        break;
      case 9:
        nameMonth = "Setembro";
        break;
      case 10:
        nameMonth = "Outubro";
        break;
      case 11:
        nameMonth = "Novembro";
        break;
      case 12:
        nameMonth = "Dezembro";
        break;
      default:
        nameMonth = "";
    }
    return `${formattedStartDay}/${formattedEndDay} ${nameMonth}`;
  };