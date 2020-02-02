//Elephant-rook=10
document.getElementById("11").setAttribute("onclick", "movele(this.id)");
document.getElementById("18").setAttribute("onclick", "movele(this.id)");
// document.getElementById("18").setAttribute("onclick","console.log(this.id)")
function movele(i) {
  clear();
  funinfo("rook");
  var n = i.toString();
  r = n[0];
  c = n[1];
  // r=parseInt(n[0])+1;
  // r=r.toString();
  // c=parseInt(n[1])-1;
  // c=c.toString();
  // console.log(c)
  for (i = r; i < 9; i++) {
    //loop for vertical movement
    v = document.getElementById(i + c).getAttribute("value");
    console.log(i + c, v);
    if (v == 0 || v == 1) {
      document.getElementById(i + c).style.backgroundColor = "rgb(247, 221, 224)";
    } else {
      break;
    }
  }
  for (i = c; i < 9; i++) {
    //loop for horizontal movement
    v = document.getElementById(r + i).getAttribute("value");
    console.log(r + i, v);
    if (v == 0 || v == 1) {
      document.getElementById(r + i).style.backgroundColor = "rgb(247, 221, 224)";
    } else {
      break;
    }
  }
  for (i = c; i > 0; i--) {
    v = document.getElementById(r + i).getAttribute("value");
    console.log(r + i, v);
    if (v == 0 || v == 1) {
      document.getElementById(r + i).style.backgroundColor = "rgb(247, 221, 224)";
    } else {
      break;
    }
  }
}

//Bishop=12
document.getElementById("13").setAttribute("onclick", "movbis(this.id)");
document.getElementById("16").setAttribute("onclick", "movbis(this.id)");
function movbis(i) {
  clear();
  funinfo("Bishop");
  var n = i.toString();
  r = n[0];
  c = n[1];

  k = parseInt(c) + 1;
  k = k.toString();
  for (i = 2; i < 7; i++) {
    k = k.toString();
    t = document.getElementById(i + k);
    // console.log(t)

    if (t == null) {
      break;
    }
    v = t.getAttribute("value");
    console.log(i + k, v);
    if (v == 0 || v == 12) {
      document.getElementById(i + k).style.backgroundColor = "rgb(247, 221, 224)";
    } else {
      break;
    }
    // document.getElementById(i+k).style.backgroundColor="rgb(247, 221, 224)"
    // console.log(i+k)
    k++;
  }

  j = parseInt(c) - 1;
  j = j.toString();
  for (i = 2; i < 9; i++) {
    j = j.toString();
    c = document.getElementById(i + j);

    if (c == null) {
      break;
    }
    v = c.getAttribute("value");
    console.log(i + j, v);
    if (v == 0 || v == 12) {
      document.getElementById(i + j).style.backgroundColor = "rgb(247, 221, 224)";
    } else {
      break;
    }
    // document.getElementById(i+j).style.backgroundColor="rgb(247, 221, 224)"
    // console.log(i+j)
    j--;
  }
}

//sol
document.getElementById("21").setAttribute("onclick", "movsol(this.id)");
document.getElementById("22").setAttribute("onclick", "movsol(this.id)");
document.getElementById("23").setAttribute("onclick", "movsol(this.id)");
document.getElementById("24").setAttribute("onclick", "movsol(this.id)");
document.getElementById("25").setAttribute("onclick", "movsol(this.id)");
document.getElementById("26").setAttribute("onclick", "movsol(this.id)");
document.getElementById("27").setAttribute("onclick", "movsol(this.id)");
document.getElementById("28").setAttribute("onclick", "movsol(this.id)");

function movsol(i) {
  clear();
  funinfo("sol");
  var n = i.toString();
  r = n[0];
  c = n[1];
  if (r == 2) {
    e = parseInt(r) + 2;
    e = e.toString();
    q = document.getElementById(e + c);
    v = q.getAttribute("value");

    p = parseInt(r) + 1;
    p = p.toString();
    u = document.getElementById(p + c);
    d = u.getAttribute("value");

    if (v == 0 && d == 0) {
      q.style.backgroundColor = "rgb(247, 221, 224)";
      u.style.backgroundColor = "rgb(247, 221, 224)";
    } else if (d == 0) {
      u.style.backgroundColor = "rgb(247, 221, 224)";
    }
  } else {
    e = parseInt(r) + 1;
    e = e.toString();
    p = document.getElementById(e + c);
    v = p.getAttribute("value");
    if (v == 0) {
      document.getElementById(e + c).style.backgroundColor = "rgb(247, 221, 224)";
    }
  }
}

//king
document.getElementById("14").setAttribute("onclick", "mov(this.id)");
function mov(i) {
  clear();
  funinfo("King");
  var n = i.toString();
  r = n[0];
  c = n[1];
  rn = parseInt(r);
  cn = parseInt(c);
  //top
  kt = document.getElementById(rn - 1 + c);
  if (kt !== null) {
    v = kt.getAttribute("value");
    console.log(rn - 1 + c, v);
    if (v == 0) {
      kt.style.backgroundColor = "rgb(247, 221, 224)";
    }
  }

  //bottom
  kb = document.getElementById(rn + 1 + c);
  if (kb !== null) {
    v = kb.getAttribute("value");
    console.log(rn + 1 + c, v);
    if (v == 0) {
      kb.style.backgroundColor = "rgb(247, 221, 224)";
    }
  }

  //right
  kr = document.getElementById(r + (cn + 1));
  if (kr !== null) {
    v = kr.getAttribute("value");
    console.log(r + (cn + 1), v);
    if (v == 0) {
      kr.style.backgroundColor = "rgb(247, 221, 224)";
    }
  }

  //left
  kl = document.getElementById(r + (cn - 1));
  if (kl !== null) {
    v = kl.getAttribute("value");
    if (v == 0) {
      kl.style.backgroundColor = "rgb(247, 221, 224)";
    }
  }

  //bottomright
  kpbr = (rn + 1).toString() + (cn + 1).toString();
  kbr = document.getElementById(kpbr);
  if (kbr !== null) {
    v = kbr.getAttribute("value");
    if (v == 0) {
      kbr.style.backgroundColor = "rgb(247, 221, 224)";
    }
  }

  //bottomleft
  kpbl = (rn + 1).toString() + (cn - 1).toString();
  kbl = document.getElementById(kpbl);
  if (kbl !== null) {
    v = kbl.getAttribute("value");
    if (v == 0) {
      kbl.style.backgroundColor = "rgb(247, 221, 224)";
    }
  }

  //topright
  kptr = (rn - 1).toString() + (cn + 1).toString();
  ktr = document.getElementById(kptr);
  if (ktr !== null) {
    v = ktr.getAttribute("value");
    if (v == 0) {
      ktr.style.backgroundColor = "rgb(247, 221, 224)";
    }
  }

  //topleft
  kptl = (rn - 1).toString() + (cn - 1).toString();
  ktl = document.getElementById(kptl);
  if (ktl !== null) {
    v = ktl.getAttribute("value");
    if (v == 0) {
      ktl.style.backgroundColor = "rgb(247, 221, 224)";
    }
  }
}

//First Horse - knight
var WH = document.getElementById("12");
WH.setAttribute("onclick", "funWH()");
function funWH() {
  funinfo("knight");
  clear();
  c = document.getElementById("22");
  v = c.getAttribute("value");
  console.log("22", v);
  w = document.getElementById("24").getAttribute("value");
  console.log("24", w);
  e = document.getElementById("31").getAttribute("value");
  console.log("31", e);
  r = document.getElementById("33").getAttribute("value");
  console.log("33", r);
  if (w == 0) {
    document.getElementById("24").style.backgroundColor = "rgb(247, 221, 224)";
  }
  if (e == 0) {
    document.getElementById("31").style.backgroundColor = "rgb(247, 221, 224)";
  }
  if (r == 0) {
    document.getElementById("33").style.backgroundColor = "rgb(247, 221, 224)";
  }
  // document.getElementById("R1C2").style.backgroundColor="rgb(247, 221, 224)"
}

//second Horse - knight
var WHH = document.getElementById("17");
WHH.setAttribute("onclick", "funWHH()");
function funWHH() {
  funinfo("knight");
  clear();
  document.getElementById("25").style.backgroundColor="rgb(247, 221, 224)"
  document.getElementById("36").style.backgroundColor = "rgb(247, 221, 224)";
  document.getElementById("38").style.backgroundColor = "rgb(247, 221, 224)";
}

//Queen
var WQ = document.getElementById("15");
WQ.setAttribute("onclick", "funWQ()");
function funWQ() {
  clear();
  //diagonal
  funinfo("Queen");
  k = 5;
  for (i = 1; i < 5; i++) {
    i = i.toString();
    k = k.toString();
    c = document.getElementById(i + k);
    v = c.getAttribute("value");
    if (v == 0) {
      document.getElementById(i + k).style.backgroundColor =
        "rgb(247, 221, 224)";
    } else {
      break;
    }
    // document.getElementById(""+i+"C"+k).style.backgroundColor="rgb(247, 221, 224)"
    k = parseInt(k);
    k++;
  }

  j = 5;
  for (i = 1; i < 6; i++) {
    i = i.toString();
    j = j.toString();
    c = document.getElementById(i + j);
    v = c.getAttribute("value");
    if (v == 0) {
      document.getElementById(i + j).style.backgroundColor =
        "rgb(247, 221, 224)";
    } else {
      break;
    }
    //document.getElementById(""+i+"C"+j).style.backgroundColor="rgb(247, 221, 224)"
    j = parseInt(j);
    j--;
  }

  //full row
  for (i = 1; i < 9; i++) {
    i = i.toString();
    c = document.getElementById(i + "5");
    v = c.getAttribute("value");
    if (v == 0) {
      document.getElementById(i + "5").style.backgroundColor =
        "rgb(247, 221, 224)";
    } else {
      break;
    }
    // document.getElementById(""+i+"C5").style.backgroundColor="rgb(247, 221, 224)"
  }

  //full col
  for (i = 1; i < 9; i++) {
    c = document.getElementById("1" + i);
    v = c.getAttribute("value");
    console.log("1" + i, v);
    if (v == 0) {
      document.getElementById("1" + i).style.backgroundColor =
        "rgb(247, 221, 224)";
    } else {
      break;
    }
    // document.getElementById("1"+i).style.backgroundColor="rgb(247, 221, 224)"
  }

//   document.getElementById("15").style.backgroundColor = "white";
}

function clear() {
  for (i = 1; i < 9; i++) {
    for (j = 1; j < 9; j++) {
      i = i.toString();
      j = j.toString();
      // console.log(i+j)
      if (i % 2 == 1 && j % 2 == 0) {
        // console.log("R"+i+"C"+j)
        document.getElementById(i + j).style.backgroundColor =
          "rgb(177, 174, 174)";
      }
      if (i % 2 == 0 && j % 2 == 1) {
        // console.log("R"+i+"C"+j)
        document.getElementById(i + j).style.backgroundColor =
          "rgb(177, 174, 174)";
      }
      if (i % 2 == 0 && j % 2 == 0) {
        document.getElementById(i + j).style.backgroundColor =
          "rgb(235, 235, 235)";
      }
      if (i % 2 == 1 && j % 2 == 1) {
        document.getElementById(i + j).style.backgroundColor =
          "rgb(235, 235, 235)";
      }
    }
  }
}

function funinfo(name) {
  if (name == "rook") {
    document.getElementById("chess").innerHTML = `
        <div class="alert alert-info" role="alert">
      <h4 class="alert-heading"> &#9820 <b>R</b>ook</h4>
      <p>The rooks are the most simple-moving chess pieces on the board. Their movements are only straight, moving forward, backward or side to side. At any point in the game, the piece can move in any direction that is straight ahead, behind or to the side. Here are a few things to know about how the Rook chess piece moves:
      <ul>
      <li>The rook piece can move forward, backward, left or right at any time.</li>
      <li>The rook piece can move anywhere from 1 to 7 squares in any direction, so long as it is not obstructed by any other piece.</li>
      </ul>
      </p>
      <hr>
      <image src="./imgs/rook.jfif">
      <button class="btn btn-primary ml-5 " onclick="window.location.reload()">ok got it</button>
    </div>
    `;
  }
  if (name == "Bishop") {
    document.getElementById("chess").innerHTML = `
        <div class="alert alert-info" role="alert">
      <h4 class="alert-heading"> &#9821 <b>B</b>ishop</h4>
      <p>The bishop chess piece is stuck moving in diagonals. Each player starts out with two bishop pieces, each one residing on its own color of square. Between both pieces, you can cover the entire board, but one piece can only cover one half of the board, only the colors of squares it started the game on.
      <ul>
      <li>The bishop can move in any direction diagonally, so long as it is not obstructed by another piece.</li>
      <li>The bishop piece cannot move past any piece that is obstructing its path.</li>
      <li>The bishop can take any other piece on the board that is within its bounds of movement.</li>
      </ul>
      </p>
      <hr>
      <image src="./imgs/bish.jfif">
      <button class="btn btn-primary ml-5" onclick="window.location.reload()">ok got it</button>
    </div>
    `;
  }
  if (name == "knight") {
    document.getElementById("chess").innerHTML = `
        <div class="alert alert-info" role="alert">
      <h4 class="alert-heading">&#9822 K<b>N</b>ight</h4>
      <p>The Knight chess piece moves in a very mysterious way. Unlike Rooks, Bishops or Queens, the Knight is limited in the number of squares it can move across. In fact, its movement is a very specific movement. The piece moves in a shape similar to the uppercase "L". Here are the specifics:
      <ul>
      <li>The Knight piece can move forward, backward, left or right two squares and must then move one square in either perpendicular direction.</li>
      <li>The Knight piece can only move to one of up to eight positions on the board.</li>
      <li>The Knight piece can move to any position not already inhabited by another piece of the same color.</li>
      <li>The Knight piece can skip over any other pieces to reach its destination position.</li>
      </ul>
      </p>
      <hr>
      <image src="./imgs/knight.jfif">
      <button class="btn btn-primary ml-5" onclick="window.location.reload()">ok got it</button>
    </div>
    `;
  }
  if (name == "Queen") {
    document.getElementById("chess").innerHTML = `
        <div class="alert alert-info" role="alert">
      <h4 class="alert-heading">&#9819 <b>Q</b>ueen</h4>
      <p>The queen chess piece is like a combination of the Rook and Bishop chess pieces. Each player starts out with one queen piece (although any pawn that makes it to the other side of the board can be traded in for another queen, which is why some chess sets come with extra queens).  The queen can move forward or diagonal in any direction. Here are a few notes:
      <ul>
      <li>The queen can move in any direction on a straight or diagonal path.</li>
      <li>The queen cannot "jump" over any piece on the board, so its movements are restricted to any direction of unoccupied squares.</li>
      <li>The queen can be used to capture any of your opponent's pieces on the board.</li>
      </ul>
      </p>
      <hr>
      <image src="./imgs/queen.jfif">
      <button class="btn btn-primary ml-5" onclick="window.location.reload()">ok got it</button>
    </div>
    `;
  }
  if (name == "King") {
    document.getElementById("chess").innerHTML = `
        <div class="alert alert-info" role="alert">
      <h4 class="alert-heading">&#9818 <b>k</b>ing </h4>
      <p>King chess pieces are somewhat limited in their movement. They cannot go riding across the chess board as quickly as most other pieces and they are easier to contain than most chess pieces from an opponent's perspective. Here are a few rules to note:
      <ul>
      <li>The king piece can move one single square in any direction.</li>
      <li>The king cannot move onto a square that is currently occupied by a piece from its own team.</li>
      <li>The king piece cannot move to any square that puts them into a "check" position.</li>
      <li>The king piece can participate in a move known as "castling", where the piece can move up to three squares while exchanging places with a rook chess piece.</li>
      </ul>
      </p>
      <hr>
      <image src="./imgs/king.jfif">
      <button class="btn btn-primary ml-5" onclick="window.location.reload()">ok got it</button>
    </div>
    `;
  }
  if (name == "sol") {
    document.getElementById("chess").innerHTML = `
        <div class="alert alert-info" role="alert">
      <h4 class="alert-heading">&#9823 <b>P</b>awn </h4>
      <p>Pawns are both simple and complex in their movements. The pawn piece has the fewest options of any chess piece on the board in where it can move and it can only move forward until it reaches the other side of the board. Here are a few things to know about how a pawn chess piece moves:
      <ul>
      <li>Pawn chess pieces can only directly forward one square, with two exceptions</li>
      <li>Pawns can move directly forward two squares on their first move only.</li>
      <li>Pawns can move diagonally forward when capturing an opponent's chess piece.</li>
      <li>Once a pawn chess piece reaches the other side of the chess board, the player may "trade" the pawn in for any other chess piece if they choose, except another king.</li>
      </ul>
      </p>
      <hr>
      <image src="./imgs/Pawn.jfif">
      <button class="btn btn-primary ml-5" onclick="window.location.reload()">ok got it</button>
    </div>
    `;
  }
}

