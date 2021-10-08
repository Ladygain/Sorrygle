const { writeFileSync } = require("fs");
const { Sorrygle } = require("../dist/index.js");

// writeFileSync("output.mid", Sorrygle.parse("(q=32)(v<tb~~~~~~>ab(q=16)  a~~~)"));
// process.exit(0);

writeFileSync("output.mid", Sorrygle.parse(`
#1
1 =/   {1 baGa (o=5)
2 =/ |:   c~__dcvbc                       e~__feDe
4 =/      baGabaGa                      } <!^c~~~>a_^c_
6 =/      [>ga]b_[Fa]_[eg]_[Fa]_          [>ga]b_[Fa]_[eg]_[Fa]_
8 =/      [>ga]b_[Fa]_[eg]_[DF]_       /1 e~~~(vbaGa)         :|
10=/ /2   e~~~           |: [ce]_[df]_    [eg]_[eg]_agfe
13=/      [[<!d~~~>|vb~vg~]][ce]_[df]_    [eg]_[eg]_agfe
15=/      [vbd]~~~[vac]_[vbd]_            [ce]_[ce]_fedc
17=/      (v[[<!b~~~>|G~e~]])[vac]_[vbd]_ [ce]_[ce]_fedc
19=/      (v[bG]~~~)(o=4){=1}             <!^c~~~>a_b_
24=/      ^c_b_a_G_                       a_e_f_d_
26=/      c~~~(q=32)(v<tb~~~~~>ab)(q=16)  va~~~               :|

#2(q=8)
1 =/   {2 __
2 =/ |:   va[ce][ce][ce]                  va[ce][ce][ce]
4 =/      va[ce]va[ce]                  } va[ce][ce][ce]
6 =/      (ve[b^e][b^e][b^e]              e[b^e][b^e][b^e]
8 =/      e[b^e]vbb                    /1 e~__)               :|
10=/ /2   ve~            |: __            vccvee
13=/      g~__                            vccvee
15=/      g~__                            vvavavcc
17=/      e~__                            vvavavcc
19=/      e~{=2}                          vf[vaD][vaD][vaD]
24=/      (ve[a^e]d[fb]                   c[ea]d[fb]
26=/      [ea][ea][eG][eG]                [vaa]~)             :|
`));