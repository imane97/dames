$(document).ready(function(){

  //DEPLACEMENTS DES PIONS

  //=>CLIQUER LE PION NOIR marquer les pions déplaçable ou non

  for (var i = 0; i < 100; i++) {
    //-Ajouter une classe NEVER aux pions du bord du damier
    if (i=10; i<90; i+10) {
      $("pion").addClass("never"); }

      else if (i=9; i<100; i+10) {
        $("pion").addClass("never");
      }
      //et DEPLAÇABLE aux autres pions.
      else{
        $(this).addClass("deplaçable");
      }
    }

    //Si on clique sur un pion que l'on veut déplacer
    $("pion").click(function(){
      //- Si il est DEPLAÇABLE
      if (this.find(".deplaçable")) {
        //et que les cases de diagonales sont libres
        if ($(this.find("case[i+9]"))=== $( (this.find("case[i+11]"))=== $("case[i]".find(".free")) ) {
          // on surligner les cases en diagonales
          light(this.find("case[i+9]");
          light(this.find("case[i+11]");
          //alors on lui ajoute une classe VOIE-LIBRE..
          $(this).addClass("voie-libre");
        }
      }

      //-Si il est NEVER
      if (this.find(".never") {
        //alors on surligne la seule case en diagonale disponible
        if (i=9; i<100; i++10) && $( (this.find("case[i+11]"))=== $("case[i+11]".find(".free")) ) {
          light("case[i+11]");
        }
        //Alors on surligne la seule case en diagonale disponible
        else if{ (i=10; i<90; i+10) && ( (this.find("case[i+11]"))=== $("case[i+11]".find(".free")) ) {
          light("case[i+11]");
        }

      }
    }


    //=>CLIQUER LE PION ROUGE, marquer les pions déplaçable ou non

    for (var i = 100; i > 0; i--) {
      //-Ajouter une classe NEVER aux pions du bord du damier
      if (i=90; i>0; i-10) {
        $("pion").addClass("never"); }

        else if (i=99; i>0; i-10) {
          $("pion").addClass("never");
        }
        //et DEPLAÇABLE aux autres pions.
        else{
          $(this).addClass("deplaçable");
        }
      }

      //Si on clique sur un pion que l'on veut déplacer
      $("pion").click(function(){
        //- Si il est DEPLAÇABLE
        if (this.find(".deplaçable")) {
          //et que les cases de diagonales sont libres
          if ($(this.find("case[i-9]"))=== $( (this.find("case[i-11]"))=== $("case[i]".find(".free")) ) {
            // on surligner les cases en diagonales
            light(this.find("case[i-9]");
            light(this.find("case[i-11]");
            //alors on lui ajoute une classe VOIE-LIBRE..
            $(this).addClass("voie-libre");
          }
        }

        //-Si il est NEVER
        if (this.find(".never") {
          //alors on surligne la seule case en diagonale disponible
          if (i=9; i<100; i++10) && $( (this.find("case[i-11]"))=== $("case[i-11]".find(".free")) ) {
            light("case[i-11]");
          }
          //Alors on surligne la seule case en diagonale disponible
          else if{ (i=10; i<90; i+10) && ( (this.find("case[i-11]"))=== $("case[i-11]".find(".free")) ) {
            light("case[i-11]");
          }

        }
      }
  });

  //Création de la classe NEVER
  //Création de la classe DEPLAÇABLE
  //Création de la VOIE
  //LIGHT UNIQUEMENT LES CASES DISPONNIBLE
  //Création de la fonction LIGHT
  //DEPLACER LE PION






});
