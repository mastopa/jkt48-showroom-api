const getCustomRoom = (type) => {
  let rooms;
  if (type === "trainee") {
    rooms = {
      aralie: "509985",
      delynn: "509992",
      alya: "461451",
      anindya: "461452",
      lana: "509997",
      erine: "510000",
      cathy: "461454",
      elin: "461475",
      chelsea: "461458",
      cynthia: "461463",
      danella: "461466",
      daisy: "461465",
      fritzy: "510011",
      gendis: "461476",
      lily: "510012",
      trisha: "510013",
      moreen: "510014",
      michie: "461481",
      levi: "510016",
      nayla: "510064",
      nachia: "510065",
      oline: "510067",
      regie: "510068",
      ribka: "510070",
      nala: "510071",
      kimmy: "510073",
    };
  } else {
    rooms = {
      amanda: "400710",
      lia: "400713",
      callie: "400714",
      ela: "400715",
      indira: "400716",
      lyn: "400717",
      raisha: "400718",
    };
  }
  return rooms;
};

module.exports = getCustomRoom;
