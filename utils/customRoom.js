const getCustomRoom = (type) => {
  let rooms;
  if (type === "trainee") {
    rooms = {
      alya: "461451",
      anin: "461452",
      cathcy: "461454",
      chelsea: "461458",
      cynthia: "461463",
      elin: "461475",
      danella: "461466",
      daisy: "461465",
      gracie: "461478",
      greseel: "461479",
      gendis: "461476",
      jeane: "461480",
      michie: "461481",
    };
  } else {
    rooms = {
      amanda: "400710",
      christy: "318112",
      lia: "400713",
      zee: "317727",
      callie: "400714",
      oniel: "318218",
      olla: "318218",
      feni: "317738",
      fiony: "318223",
      flora: "318224",
      freya: "318225",
      ella: "400715",
      gita: "318117",
      gracie: "461478",
      greesel: "461479",
      eli: "318118",
      indah: "318227",
      indira: "400716",
      jessi: "318228",
      lyn: "400717",
      kathrina: "318230",
      lulu: "318232",
      marsha: "318233",
      muthe: "318204",
      raisha: "400718",
      adel: "318239",
      gracia: "318208",
    };
  }

  return rooms;
};

module.exports = getCustomRoom;
