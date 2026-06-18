window.addEventListener("load", () => {
  /** Функция-помощник для создания одинаковых стрелок
   * @param startId стартовый элемент
   * @param endId конечный элемент
   * @param startSocket откуда выходит линия
   * @param endId куда входит линия
   * @example createArrowLine("from", "to");
   */
  function createArrowLine(
    startId,
    endId,
    startSocket = "left",
    endSocket = "auto",
  ) {
    new LeaderLine(
      document.getElementById(startId),
      document.getElementById(endId),
      {
        path: "grid",
        color: "#8a9ba8",
        size: 2,
        endArrow: true,
        startSocket,
        endSocket,
      },
    );
  }

  createArrowLine("duhast", "alliksaar");
  createArrowLine("klitotehnis", "alliksaar");
  createArrowLine("zverek", "alliksaar");
  createArrowLine("stroy", "alliksaar");
  createArrowLine("shirinkina", "alliksaar");

  createArrowLine("troyan", "klitotehnis");
  createArrowLine("vodolazskaya", "klitotehnis");
  createArrowLine("borgdorf", "klitotehnis");
  createArrowLine("brys", "klitotehnis");

  createArrowLine("vozignuy", "borgdorf");
  createArrowLine("boltushkina", "borgdorf");
  createArrowLine("visyulkin", "borgdorf");

  createArrowLine("visyulkin", "vozignuy", "right", "right");
});
