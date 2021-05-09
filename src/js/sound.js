import Config from "./config";

let errorSound = new Audio("../sound/error.wav");
let clickSounds = null;

export function init() {
  if (clickSounds !== null) return;
  clickSounds = {
    1: [
      {
        sounds: [
          new Audio("../sound/click1/click1_1.wav"),
          new Audio("../sound/click1/click1_1.wav"),
        ],
        counter: 0,
      },
      {
        sounds: [
          new Audio("../sound/click1/click1_2.wav"),
          new Audio("../sound/click1/click1_2.wav"),
        ],
        counter: 0,
      },
      {
        sounds: [
          new Audio("../sound/click1/click1_3.wav"),
          new Audio("../sound/click1/click1_3.wav"),
        ],
        counter: 0,
      },
    ],
    2: [
      {
        sounds: [
          new Audio("../sound/click2/click2_1.wav"),
          new Audio("../sound/click2/click2_1.wav"),
        ],
        counter: 0,
      },
      {
        sounds: [
          new Audio("../sound/click2/click2_2.wav"),
          new Audio("../sound/click2/click2_2.wav"),
        ],
        counter: 0,
      },
      {
        sounds: [
          new Audio("../sound/click2/click2_3.wav"),
          new Audio("../sound/click2/click2_3.wav"),
        ],
        counter: 0,
      },
    ],
    3: [
      {
        sounds: [
          new Audio("../sound/click3/click3_1.wav"),
          new Audio("../sound/click3/click3_1.wav"),
        ],
        counter: 0,
      },
      {
        sounds: [
          new Audio("../sound/click3/click3_2.wav"),
          new Audio("../sound/click3/click3_2.wav"),
        ],
        counter: 0,
      },
      {
        sounds: [
          new Audio("../sound/click3/click3_3.wav"),
          new Audio("../sound/click3/click3_3.wav"),
        ],
        counter: 0,
      },
    ],
    4: [
      {
        sounds: [
          new Audio("../sound/click4/click4_1.wav"),
          new Audio("../sound/click4/click4_11.wav"),
        ],
        counter: 0,
      },
      {
        sounds: [
          new Audio("../sound/click4/click4_2.wav"),
          new Audio("../sound/click4/click4_22.wav"),
        ],
        counter: 0,
      },
      {
        sounds: [
          new Audio("../sound/click4/click4_3.wav"),
          new Audio("../sound/click4/click4_33.wav"),
        ],
        counter: 0,
      },
      {
        sounds: [
          new Audio("../sound/click4/click4_4.wav"),
          new Audio("../sound/click4/click4_44.wav"),
        ],
        counter: 0,
      },
      {
        sounds: [
          new Audio("../sound/click4/click4_5.wav"),
          new Audio("../sound/click4/click4_55.wav"),
        ],
        counter: 0,
      },
      {
        sounds: [
          new Audio("../sound/click4/click4_6.wav"),
          new Audio("../sound/click4/click4_66.wav"),
        ],
        counter: 0,
      },
    ],
    zoinked: {
      a: [
        { 
          sounds: [
            new Audio("../sound/zoinked/a1.wav"),
            new Audio("../sound/zoinked/a1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/a2.wav"),
            new Audio("../sound/zoinked/a2.wav")
          ],
          counter: 0,
        }
      ],
      b: [
        { 
          sounds: [
            new Audio("../sound/zoinked/b1.wav"),
            new Audio("../sound/zoinked/b1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/b2.wav"),
            new Audio("../sound/zoinked/b2.wav")
          ],
          counter: 0,
        }
      ],
      c: [
        { 
          sounds: [
            new Audio("../sound/zoinked/c1.wav"),
            new Audio("../sound/zoinked/c1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/c2.wav"),
            new Audio("../sound/zoinked/c2.wav")
          ],
          counter: 0,
        }
      ],
      d: [
        { 
          sounds: [
            new Audio("../sound/zoinked/d1.wav"),
            new Audio("../sound/zoinked/d1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/d2.wav"),
            new Audio("../sound/zoinked/d2.wav")
          ],
          counter: 0,
        }
      ],
      e: [
        { 
          sounds: [
            new Audio("../sound/zoinked/e1.wav"),
            new Audio("../sound/zoinked/e1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/e2.wav"),
            new Audio("../sound/zoinked/e2.wav")
          ],
          counter: 0,
        }
      ],
      f: [
        { 
          sounds: [
            new Audio("../sound/zoinked/f1.wav"),
            new Audio("../sound/zoinked/f1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/f2.wav"),
            new Audio("../sound/zoinked/f2.wav")
          ],
          counter: 0,
        }
      ],
      g: [
        { 
          sounds: [
            new Audio("../sound/zoinked/g1.wav"),
            new Audio("../sound/zoinked/g1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/g2.wav"),
            new Audio("../sound/zoinked/g2.wav")
          ],
          counter: 0,
        }
      ],
      h: [
        { 
          sounds: [
            new Audio("../sound/zoinked/h1.wav"),
            new Audio("../sound/zoinked/h1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/h2.wav"),
            new Audio("../sound/zoinked/h2.wav")
          ],
          counter: 0,
        }
      ],
      i: [
        { 
          sounds: [
            new Audio("../sound/zoinked/i1.wav"),
            new Audio("../sound/zoinked/i1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/i2.wav"),
            new Audio("../sound/zoinked/i2.wav")
          ],
          counter: 0,
        }
      ],
      j: [
        { 
          sounds: [
            new Audio("../sound/zoinked/j1.wav"),
            new Audio("../sound/zoinked/j1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/j2.wav"),
            new Audio("../sound/zoinked/j2.wav")
          ],
          counter: 0,
        }
      ],
      k: [
        { 
          sounds: [
            new Audio("../sound/zoinked/k1.wav"),
            new Audio("../sound/zoinked/k1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/k2.wav"),
            new Audio("../sound/zoinked/k2.wav")
          ],
          counter: 0,
        }
      ],
      l: [
        { 
          sounds: [
            new Audio("../sound/zoinked/g1.wav"),
            new Audio("../sound/zoinked/g1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/g2.wav"),
            new Audio("../sound/zoinked/g2.wav")
          ],
          counter: 0,
        }
      ],
      m: [
        { 
          sounds: [
            new Audio("../sound/zoinked/m1.wav"),
            new Audio("../sound/zoinked/m1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/m2.wav"),
            new Audio("../sound/zoinked/m2.wav")
          ],
          counter: 0,
        }
      ],
      n: [
        { 
          sounds: [
            new Audio("../sound/zoinked/n1.wav"),
            new Audio("../sound/zoinked/n1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/n2.wav"),
            new Audio("../sound/zoinked/n2.wav")
          ],
          counter: 0,
        }
      ],
      o: [
        { 
          sounds: [
            new Audio("../sound/zoinked/o1.wav"),
            new Audio("../sound/zoinked/o1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/o2.wav"),
            new Audio("../sound/zoinked/o2.wav")
          ],
          counter: 0,
        }
      ],
      p: [
        { 
          sounds: [
            new Audio("../sound/zoinked/p1.wav"),
            new Audio("../sound/zoinked/p1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/p2.wav"),
            new Audio("../sound/zoinked/p2.wav")
          ],
          counter: 0,
        }
      ],
      q: [
        { 
          sounds: [
            new Audio("../sound/zoinked/q1.wav"),
            new Audio("../sound/zoinked/q1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/q2.wav"),
            new Audio("../sound/zoinked/q2.wav")
          ],
          counter: 0,
        }
      ],
      r: [
        { 
          sounds: [
            new Audio("../sound/zoinked/r1.wav"),
            new Audio("../sound/zoinked/r1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/r2.wav"),
            new Audio("../sound/zoinked/r2.wav")
          ],
          counter: 0,
        }
      ],
      s: [
        { 
          sounds: [
            new Audio("../sound/zoinked/s1.wav"),
            new Audio("../sound/zoinked/s1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/s2.wav"),
            new Audio("../sound/zoinked/s2.wav")
          ],
          counter: 0,
        }
      ],
      t: [
        { 
          sounds: [
            new Audio("../sound/zoinked/t1.wav"),
            new Audio("../sound/zoinked/t1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/t2.wav"),
            new Audio("../sound/zoinked/t2.wav")
          ],
          counter: 0,
        }
      ],
      u: [
        { 
          sounds: [
            new Audio("../sound/zoinked/u1.wav"),
            new Audio("../sound/zoinked/u1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/u2.wav"),
            new Audio("../sound/zoinked/u2.wav")
          ],
          counter: 0,
        }
      ],
      v: [
        { 
          sounds: [
            new Audio("../sound/zoinked/v1.wav"),
            new Audio("../sound/zoinked/v1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/v2.wav"),
            new Audio("../sound/zoinked/v2.wav")
          ],
          counter: 0,
        }
      ],
      w: [
        { 
          sounds: [
            new Audio("../sound/zoinked/w1.wav"),
            new Audio("../sound/zoinked/w1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/w2.wav"),
            new Audio("../sound/zoinked/w2.wav")
          ],
          counter: 0,
        }
      ],
      x: [
        { 
          sounds: [
            new Audio("../sound/zoinked/x1.wav"),
            new Audio("../sound/zoinked/x1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/x2.wav"),
            new Audio("../sound/zoinked/x2.wav")
          ],
          counter: 0,
        }
      ],
      y: [
        { 
          sounds: [
            new Audio("../sound/zoinked/y1.wav"),
            new Audio("../sound/zoinked/y1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/y2.wav"),
            new Audio("../sound/zoinked/y2.wav")
          ],
          counter: 0,
        }
      ],
      z: [
        { 
          sounds: [
            new Audio("../sound/zoinked/z1.wav"),
            new Audio("../sound/zoinked/z1.wav")
          ],
          counter: 0,
        },{
          sounds: [
            new Audio("../sound/zoinked/z2.wav"),
            new Audio("../sound/zoinked/z2.wav")
          ],
          counter: 0,
        }
      ]
    }
  };
}

export function playClick(key) {
  if (Config.playSoundOnClick === "off") return;
  if (clickSounds === null) init();

  let sound;
  if(Config.playSoundOnClick === "zoinked"){
    if(clickSounds.zoinked[key] == undefined) return;
    let rand = Math.floor(
      Math.random() * clickSounds.zoinked[key].length
    );
    sound = clickSounds.zoinked[key][0];
  }else{
    let rand = Math.floor(
      Math.random() * clickSounds[Config.playSoundOnClick].length
    );
    sound = clickSounds[Config.playSoundOnClick][rand];
  }

  sound.counter++;
  if (sound.counter === 2) sound.counter = 0;
  sound.sounds[sound.counter].currentTime = 0;
  sound.sounds[sound.counter].play();

}

export function playError() {
  if (!Config.playSoundOnError) return;
  errorSound.currentTime = 0;
  errorSound.play();
}