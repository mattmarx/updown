
/**Calculates the portion of Michael's score from Michael's equity.*/
function meq(me) {
  var meq;
  if (me >= 45)
    meq = 0;
  else if (me >= 44)
    meq = -40;
  else if (me >= 43)
    meq = -80;
  else if (me >= 42)
    meq = -120;
  else if (me >= 41)
    meq = -160;
  else if (me >= 40)
    meq = -200;
  else
    meq = -1000;
  return meq;
}


/**Calculates the portion of Michael's score from Phuc's salary.*/
function mpsal(ps) {
  var mpsal;

  if (ps <= 70000)
    mpsal = 0;
  else if (ps <= 80000)
    mpsal = -6;
  else if (ps <= 90000)
    mpsal = -12;
  else if (ps <= 100000)
    mpsal = -16;
  else
    mpsal = -24;
  return mpsal;
}


/**Calculates the portion of Michael's score from the seed equity split.*/
function mseed(se) {
  var mseed;

  if (se == 1)
    mseed = 0;
  else if (se == 2)
    mseed = -10;
  else if (se == 3)
    mseed = -25;
  else if (se == 4)
    mseed = -33;
  return mseed;
}


/**Calculates the portion of Michael's score from Warren's equity.*/
function mwar(we) {
  var mwar;

  if (we >= 1.5)
    mwar = -8;
  else if (we >= 1.25)
    mwar = -4;
  else if (we >= 1)
    mwar = 0;
  else if (we >= 0.75)
    mwar = -4;
  else if (we >= 0.5)
    mwar = -8;
  else if (we >= 0.25)
    mwar = -12;
  else if (we >= 0)
    mwar = -16;

  return mwar;
}


/**Calculates the portion of Georg's score from Georg's equity.*/
function geq(ge) {
  var geq;
  if (ge >= 30)
    geq = 50;
  else if (ge >= 29)
    geq = 25;
  else if (ge >= 28)
    geq = 0;
  else if (ge >= 27)
    geq = -25;
  else
    geq = -50;
  return geq
}


/**Calculates the portion of Georg's score from Phuc's salary.*/
function gpsal(ps) {
  var gpsal;

  if (ps <= 70000)
    gpsal = 0;
  else if (ps <= 80000)
    gpsal = -5;
  else if (ps <= 90000)
    gpsal = -10;
  else if (ps <= 100000)
    gpsal = -25;
  else
    gpsal = -33;
  return gpsal
}


/**Calculates the portion of Georg's score from the seed equity split.*/
function gseed(se) {
  var gseed;

  if (se == 1)
    gseed = 0;
  else if (se == 2)
    gseed = -10;
  else if (se == 3)
    gseed = -25;
  else if (se == 4)
    gseed = -33;
  return gseed
}


/**Calculates the portion of Georg's score from Warren's equity.*/
function gwar(we) {
  var gwar;

  if (we >= 1.5)
    gwar = 0;
  else if (we >= 1.25)
    gwar = -10;
  else if (we >= 1)
    gwar = -20;
  else if (we >= 0.75)
    gwar = -30;
  else if (we >= 0.5)
    gwar = -40;
  else if (we >= 0.25)
    gwar = -50;
  else if (we >= 0)
    gwar = -60;
  return gwar
}


/**Calculates the portion of Phuc's score from Phuc's equity.*/
function peqraw(pe) {
  var peqraw;
  if (pe >= 28)
    peqraw = 80;
  else if (pe >= 27)
    peqraw = 40;
  else if (pe >= 26)
    peqraw = 0;
  else
    peqraw = -1000;
  return peqraw;
}


/**Calculates the portion of Phuc's score from Georg's equity.*/
function peqgeorg(ge) {
  var peqgeorg;
  if (ge >= 29)
    peqgeorg = -20;
  else if (ge >= 28)
    peqgeorg = 0;
  else if (ge >= 27)
    peqgeorg = 20;
  else
    peqgeorg = 40;
  return peqgeorg;

}

/**Calculates the portion of Phuc's score from whether Phuc has more equtiy than Georg.*/
function peqmorege(ge, pe) {
  var peqmorege;
  if (ge > pe)
    peqmorege = 0;
  else
    peqmorege = 30;
  return peqmorege;
}

/**Calculates the portion of Phuc's score from Phuc's equity.*/
function ppsal(ps) {
  var ppsal;
  if (ps <= 70000)
    ppsal = 50;
  else if (ps <= 80000)
    ppsal = 60;
  else if (ps <= 90000)
    ppsal = 70;
  else if (ps <= 100000)
    ppsal = 80;
  else
    ppsal = 90;
  return ppsal;

}

/**Calculates the portion of Phuc's score from the seed equity split.*/
function pseed(se) {
  var pseed;
  if (se == 1)
    pseed = -10000;
  else if (se == 2)
    pseed = -50;
  else if (se == 3)
    pseed = -20;
  else if (se == 4)
    pseed = 0;
  return pseed;
}

/**Calculates the portion of Phuc's score from Warren's equity.*/
function pwar(we) {
  var pwar;
  if (we >= 1.5)
    pwar = -6;
  else if (we >= 1.25)
    pwar = -3;
  else if (we >= 1)
    pwar = 0;
  else if (we >= 0.75)
    pwar = 3;
  else if (we >= 0.5)
    pwar = 6;
  else if (we >= 0.25)
    pwar = 9;
  else if (we >= 0)
    pwar = 12;
  return pwar;
}

/**Checks user input to make sure it's valid.
 * Returns true if at least one alert is shown, false otherwise.
*/
function assertspre(me, ge, pe, we, se, ps) {
  let shown = false;
  let str = "";

  if (me == "" || ps == "" || se == "" || we == "" || ge == "" || pe == "") {
    str = str + "Please enter a value in each field.\n\n";
    shown = true;
  }

  let sum = Number(me) + Number(ge) + Number(pe) + Number(we);
  if (sum !== 100) {
    if (Number.isNaN(sum)) {
      str = str + "Please make sure your equity percentages are numerical.\n\n";
      shown = true;
    }
    else {
      str = str + "Please make sure your equity percentages sum to 100.\n(They currently sum to " + sum + ")\n\n";
      shown = true;
    }

  }
  if (me < 0 || ge < 0 || pe < 0 || we < 0) {
    str = str + "All equity percentages must be positive.\n\n";
    shown = true;
  }
  if (shown == false) {
    if (me < 40) {
      str = str + "This equity split does not work for Michael. Please see the score sheet for more information.\n\n"
      shown = true;

    }
    if (pe < 26) {

      str = str + "This equity split does not work for phuc. Please see the score sheet for more information.\n\n"
      shown = true;
    }
  }

  if (Number.isNaN(Number(ps))) {
    str = str + "Please enter a salary for Phuc as a whole number e.g. 70,000.\n\n"
    shown = true;
  }

  if (ps < 0) {
    str = str + "Phuc's salary must be at least $0.\n\n";
    shown = true;
  }

  if (se != 1 && se != 2 && se != 3 && se != 4) {
    str = str + "Please select a seed equity split.\n\n";
    shown = true;
  }
  if (se == 1) {
    str = str + "This seed equity split doesn't work for Phuc. Please see the score sheet for more information.\n\n"
    shown = true;
  }
  if (shown == true) {
    alert(str);
  }


  if (shown == true) { return true }
  else { return false }
}

/**Checks user input results in a valid score for each person.
 * Returns true if at least one alert is shown, false otherwise.
*/
function assertspost(michaelscore, georgscore, phucscore) {
  let shown = false;
  str = ""
  if (michaelscore < -220) {
    str = str + "Michael's score is too low to accept.";
    shown = true;
  }
  if (georgscore < -115) {
    str = str + "Georg's score is too low to accept.";
    shown = true;
  }
  if (phucscore < 40) {
    str = str + "Phuc's score is too low to accept.";
    shown = true;
  }
  if (shown == true) {
    alert(str)
  }
  if (shown == true) { return true }
  else { return false }

}

/**Display the scores resulting from the user input.*/
function display() {
  let me = document.getElementById("me").value;
  let ps = document.getElementById("ps").value;
  let se = document.getElementById("se").value;
  let we = document.getElementById("we").value;
  let ge = document.getElementById("ge").value;
  let pe = document.getElementById("pe").value;
  let michaelscore;
  let georgscore;
  let phucscore;
  let totalscore;
  let SAW;

  me = me.replace('%', '');
  ge = ge.replace('%', '');
  pe = pe.replace('%', '');
  we = we.replace('%', '');
  ps = ps.replace('$', '');
  ps = ps.replace(',', '');



  michaelscore = meq(me) + mpsal(ps) + mseed(se) + mwar(we);
  georgscore = geq(ge) + gpsal(ps) + gseed(se) + gwar(we)
  phucscore = peqraw(pe) + peqgeorg(ge) + peqmorege(ge, pe) + ppsal(ps) + pseed(se) + pwar(we)
  totalscore = michaelscore + georgscore + phucscore;
  SAW = totalscore + 295


  if (Number.isNaN(michaelscore) || Number.isNaN(georgscore) || Number.isNaN(phucscore) || Number.isNaN(totalscore)) {
    michaelscore = "";
    georgscore = "";
    phucscore = "";
    totalscore = "";
    SAW = "";
  }

  if (!assertspre(me, ge, pe, we, se, ps)) {
    me = Number(me);
    ps = Number(ps);
    se = Number(se);
    we = Number(we);
    ge = Number(ge);
    pe = Number(pe);
    if (!assertspost(michaelscore, georgscore, phucscore)) {

      document.getElementById("moutput").innerHTML = michaelscore;
      document.getElementById("goutput").innerHTML = georgscore;
      document.getElementById("poutput").innerHTML = phucscore;
      document.getElementById("toutput").innerHTML = totalscore;
      document.getElementById("sawoutput").innerHTML = SAW;

    }
  }
}

