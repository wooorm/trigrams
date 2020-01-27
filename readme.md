# trigrams

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]

Trigrams for 400+ languages.

## Install

[npm][]:

```sh
npm install trigrams
```

## Use

###### `trigrams.all()`

```js
trigrams.all().eng
```

Yields:

```js
{
  'nou': 1,
  'n  ': 1,
  ' ai': 1,
  // …
  ' an': 129,
  'the': 152,
  ' th': 154
}
```

Returns an object mapping [*UDHR in Unicode*][unicode] codes to objects mapping
trigrams to occurrence counts.

###### `trigrams.top()`

```js
trigrams.top().pam
```

Yields:

```js
{
  'anm': 8,
  'obr': 8,
  'gpa': 8,
  // …
  'ang': 374,
  'ing': 420,
  'ng ': 805
}
```

Same as `trigrams.all()` but for results are only the top 300 trigrams.

###### `trigrams.min()`

```js
trigrams.min().nld
```

Yields:

```js
[
  'als',
  'oon',
  'rdi',
  // …
  'an ',
  'de ',
  'en '
]
```

A bit like `trigrams.top()`, but returns an array containing the top 300
trigrams sorted from least occuring to most occurring.

## Data

The trigrams are based on the [unicode][] versions of the [universal declaration
of human rights][udhr].

The files are created from all paragraphs made available by
[`wooorm/udhr`][wooorm-udhr] and do not include headings and such.

## Cleaning

Before creating trigrams,

*   The unicode characters from `\u0021` to `\u0040` (both including) are
    removed
*   One or more white space characters (`\s+`) are replaced with a single space
*   Alphabetic characters are lower cased (`[A-Z]`)

Additionally, the input is padded with two spaces on both sides.

## Support

<!--support start-->

| Code | Name | OHCHR | All? | Top? | Min? |
| ---- | ---- | ----- | ---- | ---- | ---- |
| 007 | Sãotomense | [1128](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1128) | [Yes](data/all/007.json) | [Yes](data/top/007.json) | [Yes](data/min/007.json) |
| 008 | Crioulo, Upper Guinea (008) | No | [Yes](data/all/008.json) | [Yes](data/top/008.json) | [Yes](data/min/008.json) |
| 009 | Mbundu (009) | No | [Yes](data/all/009.json) | [Yes](data/top/009.json) | [Yes](data/min/009.json) |
| 010 | Tetun Dili | No | [Yes](data/all/010.json) | [Yes](data/top/010.json) | [Yes](data/min/010.json) |
| 011 | Umbundu (011) | No | [Yes](data/all/011.json) | [Yes](data/top/011.json) | [Yes](data/min/011.json) |
| 012 | (Bizisa) | [bz1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bz1) | [Yes](data/all/012.json) | [Yes](data/top/012.json) | [Yes](data/min/012.json) |
| 013 | (Mijisa) | [bz2](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bz2) | [Yes](data/all/013.json) | [Yes](data/top/013.json) | [Yes](data/min/013.json) |
| 014 | (Maiunan) | [ma1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ma1) | [Yes](data/all/014.json) | [Yes](data/top/014.json) | [Yes](data/min/014.json) |
| 015 | (Magar / Dhut) | [ma2](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ma2) | No | No | No |
| 016 | (Minjiang, spoken) | [mi1_spok](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mi1_spok) | [Yes](data/all/016.json) | [Yes](data/top/016.json) | [Yes](data/min/016.json) |
| 017 | (Minjiang, written) | [mi1_written](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mi1_written) | [Yes](data/all/017.json) | [Yes](data/top/017.json) | [Yes](data/min/017.json) |
| 018 | (Tajpuriya) | [ta1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ta1) | No | No | No |
| 019_deva | (Tokpegola, Devanagari) | [tok](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tok) | No | No | No |
| 019_tibt | (Tokpegola, Tibetan) | [tok](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tok) | No | No | No |
| 020 | Drung | [ty1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ty1) | [Yes](data/all/020.json) | [Yes](data/top/020.json) | [Yes](data/min/020.json) |
| 021 | (Muzzi) | [mz1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mz1) | No | No | No |
| 022 | (Klau) | [kl1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kl1) | No | No | No |
| 023 | (Jinan) | [ji1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ji1) | No | No | No |
| 024 | (Tajpuriya) | [Ta1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Ta1) | No | No | No |
| 025 | (Bizisa) | [Bz1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Bz1) | No | No | No |
| abk | Abkhaz | [abk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=abk) | [Yes](data/all/abk.json) | [Yes](data/top/abk.json) | [Yes](data/min/abk.json) |
| ace | Aceh | [atj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=atj) | [Yes](data/all/ace.json) | [Yes](data/top/ace.json) | [Yes](data/min/ace.json) |
| acu | Achuar-Shiwiar | [acu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=acu) | [Yes](data/all/acu.json) | [Yes](data/top/acu.json) | [Yes](data/min/acu.json) |
| acu_1 | Achuar-Shiwiar (1) | [jiv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jiv) | [Yes](data/all/acu_1.json) | [Yes](data/top/acu_1.json) | [Yes](data/min/acu_1.json) |
| ada | Dangme | [gac1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gac1) | [Yes](data/all/ada.json) | [Yes](data/top/ada.json) | [Yes](data/min/ada.json) |
| ady | Adyghe | [ady](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ady) | [Yes](data/all/ady.json) | [Yes](data/top/ady.json) | [Yes](data/min/ady.json) |
| afr | Afrikaans | [afk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=afk) | [Yes](data/all/afr.json) | [Yes](data/top/afr.json) | [Yes](data/min/afr.json) |
| agr | Aguaruna | [agr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=agr) | [Yes](data/all/agr.json) | [Yes](data/top/agr.json) | [Yes](data/min/agr.json) |
| aii | Assyrian Neo-Aramaic | [aii](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aii) | [Yes](data/all/aii.json) | [Yes](data/top/aii.json) | [Yes](data/min/aii.json) |
| ajg | Aja | [ajg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ajg) | [Yes](data/all/ajg.json) | [Yes](data/top/ajg.json) | [Yes](data/min/ajg.json) |
| aka_akuapem | Twi (Akuapem) | [tws1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tws1) | [Yes](data/all/aka_akuapem.json) | [Yes](data/top/aka_akuapem.json) | [Yes](data/min/aka_akuapem.json) |
| aka_asante | Twi (Asante) | [ass](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ass) | [Yes](data/all/aka_asante.json) | [Yes](data/top/aka_asante.json) | [Yes](data/min/aka_asante.json) |
| aka_fante | Fante | [tws3](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tws3) | [Yes](data/all/aka_fante.json) | [Yes](data/top/aka_fante.json) | [Yes](data/min/aka_fante.json) |
| als | Albanian, Tosk | [aln](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aln) | [Yes](data/all/als.json) | [Yes](data/top/als.json) | [Yes](data/min/als.json) |
| alt | Altai, Southern | [alt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=alt) | [Yes](data/all/alt.json) | [Yes](data/top/alt.json) | [Yes](data/min/alt.json) |
| amc | Amahuaca | [amc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amc) | [Yes](data/all/amc.json) | [Yes](data/top/amc.json) | [Yes](data/min/amc.json) |
| ame | Yaneshaʼ | [ame](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ame) | [Yes](data/all/ame.json) | [Yes](data/top/ame.json) | [Yes](data/min/ame.json) |
| amh | Amharic | [amh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amh) | [Yes](data/all/amh.json) | [Yes](data/top/amh.json) | [Yes](data/min/amh.json) |
| ami | Amis | [ami](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ami) | [Yes](data/all/ami.json) | [Yes](data/top/ami.json) | [Yes](data/min/ami.json) |
| amr | Amarakaeri | [amr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amr) | [Yes](data/all/amr.json) | [Yes](data/top/amr.json) | [Yes](data/min/amr.json) |
| arb | Arabic, Standard | [arz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arz) | [Yes](data/all/arb.json) | [Yes](data/top/arb.json) | [Yes](data/min/arb.json) |
| arl | Arabela | [arl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arl) | [Yes](data/all/arl.json) | [Yes](data/top/arl.json) | [Yes](data/min/arl.json) |
| arn | Mapudungun | [aru](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aru) | [Yes](data/all/arn.json) | [Yes](data/top/arn.json) | [Yes](data/min/arn.json) |
| asm | Assamese | [asm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=asm) | No | No | No |
| ast | Asturian | [aub](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aub) | [Yes](data/all/ast.json) | [Yes](data/top/ast.json) | [Yes](data/min/ast.json) |
| auc | Waorani | [1127](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1127) | [Yes](data/all/auc.json) | [Yes](data/top/auc.json) | [Yes](data/min/auc.json) |
| auv | Occitan (Auvergnat) | [auv1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=auv1) | [Yes](data/all/auv.json) | [Yes](data/top/auv.json) | [Yes](data/min/auv.json) |
| awa | Awadhi | [awa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=awa) | No | No | No |
| ayo | Ayoreo | [ayo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ayo) | No | No | No |
| ayr | Aymara, Central | [aym](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aym) | [Yes](data/all/ayr.json) | [Yes](data/top/ayr.json) | [Yes](data/min/ayr.json) |
| azj_cyrl | Azerbaijani, North (Cyrillic) | [azb1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=azb1) | [Yes](data/all/azj_cyrl.json) | [Yes](data/top/azj_cyrl.json) | [Yes](data/min/azj_cyrl.json) |
| azj_latn | Azerbaijani, North (Latin) | [azb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=azb) | [Yes](data/all/azj_latn.json) | [Yes](data/top/azj_latn.json) | [Yes](data/min/azj_latn.json) |
| bam | Bamanankan | [bra](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bra) | [Yes](data/all/bam.json) | [Yes](data/top/bam.json) | [Yes](data/min/bam.json) |
| ban | Bali | [bzc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bzc) | [Yes](data/all/ban.json) | [Yes](data/top/ban.json) | [Yes](data/min/ban.json) |
| bap | Bantawa | [bap](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bap) | No | No | No |
| bax | Bamun | [bax](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bax) | [Yes](data/all/bax.json) | [Yes](data/top/bax.json) | [Yes](data/min/bax.json) |
| bba | Baatonum | [bba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bba) | [Yes](data/all/bba.json) | [Yes](data/top/bba.json) | [Yes](data/min/bba.json) |
| bci | Baoulé | [bci](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bci) | [Yes](data/all/bci.json) | [Yes](data/top/bci.json) | [Yes](data/min/bci.json) |
| bcl | Bicolano, Central | [bkl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bkl) | [Yes](data/all/bcl.json) | [Yes](data/top/bcl.json) | [Yes](data/min/bcl.json) |
| bel | Belarusan | [ruw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ruw) | [Yes](data/all/bel.json) | [Yes](data/top/bel.json) | [Yes](data/min/bel.json) |
| bem | Bemba | [bem](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bem) | [Yes](data/all/bem.json) | [Yes](data/top/bem.json) | [Yes](data/min/bem.json) |
| ben | Bengali | [bng](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bng) | [Yes](data/all/ben.json) | [Yes](data/top/ben.json) | [Yes](data/min/ben.json) |
| bfa | Bari | [bfa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bfa) | [Yes](data/all/bfa.json) | [Yes](data/top/bfa.json) | [Yes](data/min/bfa.json) |
| bgp | Balochi, Eastern | [bgp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bgp) | No | No | No |
| bho | Bhojpuri | [bhj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bhj) | [Yes](data/all/bho.json) | [Yes](data/top/bho.json) | [Yes](data/min/bho.json) |
| bin | Edo | [edo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=edo) | [Yes](data/all/bin.json) | [Yes](data/top/bin.json) | [Yes](data/min/bin.json) |
| bis | Bislama | [bcy](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bcy) | [Yes](data/all/bis.json) | [Yes](data/top/bis.json) | [Yes](data/min/bis.json) |
| bjj | Kanauji | [bjj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bjj) | No | No | No |
| blt | Tai Dam | No | [Yes](data/all/blt.json) | [Yes](data/top/blt.json) | [Yes](data/min/blt.json) |
| blu | Hmong Njua | [blu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=blu) | [Yes](data/all/blu.json) | [Yes](data/top/blu.json) | [Yes](data/min/blu.json) |
| bmj | Bote | [bmj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bmj) | No | No | No |
| boa | Bora | [boa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=boa) | [Yes](data/all/boa.json) | [Yes](data/top/boa.json) | [Yes](data/min/boa.json) |
| bod | Tibetan, Central | [tic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tic) | [Yes](data/all/bod.json) | [Yes](data/top/bod.json) | [Yes](data/min/bod.json) |
| bos_cyrl | Bosnian (Cyrillic) | [src4](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src4) | [Yes](data/all/bos_cyrl.json) | [Yes](data/top/bos_cyrl.json) | [Yes](data/min/bos_cyrl.json) |
| bos_latn | Bosnian (Latin) | [src1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src1) | [Yes](data/all/bos_latn.json) | [Yes](data/top/bos_latn.json) | [Yes](data/min/bos_latn.json) |
| bpy | Bishnupriya | [bpy](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bpy) | No | No | No |
| brd | Baram | [brd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=brd) | No | No | No |
| bre | Breton | [brt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=brt) | [Yes](data/all/bre.json) | [Yes](data/top/bre.json) | [Yes](data/min/bre.json) |
| brx_deva | Bodo | [brx](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=brx) | No | No | No |
| btb | Bulu | [btb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=btb) | [Yes](data/all/btb.json) | [Yes](data/top/btb.json) | [Yes](data/min/btb.json) |
| buc | Bushi | [buc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=buc) | [Yes](data/all/buc.json) | [Yes](data/top/buc.json) | [Yes](data/min/buc.json) |
| bug | Bugis | [bpr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bpr) | [Yes](data/all/bug.json) | [Yes](data/top/bug.json) | [Yes](data/min/bug.json) |
| bul | Bulgarian | [blg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=blg) | [Yes](data/all/bul.json) | [Yes](data/top/bul.json) | [Yes](data/min/bul.json) |
| bvi | Belanda Viri | [bvi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bvi) | No | No | No |
| byh | Bhujel | [byh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=byh) | No | No | No |
| cab | Garifuna | [cab](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cab) | [Yes](data/all/cab.json) | [Yes](data/top/cab.json) | [Yes](data/min/cab.json) |
| cak | Kaqchikel, Central | [cak1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cak1) | [Yes](data/all/cak.json) | [Yes](data/top/cak.json) | [Yes](data/min/cak.json) |
| cas | Tsimané | [cas](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cas) | No | No | No |
| cat | Catalan-Valencian-Balear | [cln](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cln) | [Yes](data/all/cat.json) | [Yes](data/top/cat.json) | [Yes](data/min/cat.json) |
| cax | Chiquitano | [cax](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cax) | No | No | No |
| cbi | Chachi | [1122](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1122) | [Yes](data/all/cbi.json) | [Yes](data/top/cbi.json) | [Yes](data/min/cbi.json) |
| cbr | Cashibo-Cacataibo | [cbr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbr) | [Yes](data/all/cbr.json) | [Yes](data/top/cbr.json) | [Yes](data/min/cbr.json) |
| cbs | Cashinahua | [cbs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbs) | [Yes](data/all/cbs.json) | [Yes](data/top/cbs.json) | [Yes](data/min/cbs.json) |
| cbt | Chayahuita | [cbt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbt) | [Yes](data/all/cbt.json) | [Yes](data/top/cbt.json) | [Yes](data/min/cbt.json) |
| cbu | Candoshi-Shapra | [cbu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbu) | [Yes](data/all/cbu.json) | [Yes](data/top/cbu.json) | [Yes](data/min/cbu.json) |
| ccp | Chakma | No | No | No | No |
| ccx | Zhuang, Yongbei | [ccx](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ccx) | [Yes](data/all/ccx.json) | [Yes](data/top/ccx.json) | [Yes](data/min/ccx.json) |
| cdm | Chepang | [cdm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cdm) | No | No | No |
| ceb | Cebuano | [ceb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ceb) | [Yes](data/all/ceb.json) | [Yes](data/top/ceb.json) | [Yes](data/min/ceb.json) |
| ces | Czech | [czc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=czc) | [Yes](data/all/ces.json) | [Yes](data/top/ces.json) | [Yes](data/min/ces.json) |
| cha | Chamorro | [cjd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjd) | [Yes](data/all/cha.json) | [Yes](data/top/cha.json) | [Yes](data/min/cha.json) |
| chj | Chinantec, Ojitlán | [chj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chj) | [Yes](data/all/chj.json) | [Yes](data/top/chj.json) | [Yes](data/min/chj.json) |
| chk | Chuukese | [tru1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tru1) | [Yes](data/all/chk.json) | [Yes](data/top/chk.json) | [Yes](data/min/chk.json) |
| chr_cased | Cherokee (cased) | No | [Yes](data/all/chr_cased.json) | [Yes](data/top/chr_cased.json) | [Yes](data/min/chr_cased.json) |
| chr_uppercase | Cherokee (uppercase) | No | [Yes](data/all/chr_uppercase.json) | [Yes](data/top/chr_uppercase.json) | [Yes](data/min/chr_uppercase.json) |
| chv | Chuvash | [chv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chv) | No | No | No |
| chx | Chantyal | [chx](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chx) | No | No | No |
| cic | Chickasaw | [cic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cic) | [Yes](data/all/cic.json) | [Yes](data/top/cic.json) | [Yes](data/min/cic.json) |
| cjk | Chokwe | [cjk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjk) | [Yes](data/all/cjk.json) | [Yes](data/top/cjk.json) | [Yes](data/min/cjk.json) |
| cjk_AO | Chokwe (Angola) | [cjk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjk) | [Yes](data/all/cjk_AO.json) | [Yes](data/top/cjk_AO.json) | [Yes](data/min/cjk_AO.json) |
| cjs | Shor | [cjs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjs) | [Yes](data/all/cjs.json) | [Yes](data/top/cjs.json) | [Yes](data/min/cjs.json) |
| cjy | Chinese, Jinyu | [cjy](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjy) | [Yes](data/all/cjy.json) | No | No |
| ckb | Kurdish, Central | [kdb1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdb1) | [Yes](data/all/ckb.json) | [Yes](data/top/ckb.json) | [Yes](data/min/ckb.json) |
| cmn_hans | Chinese, Mandarin (Simplified) | [chn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chn) | [Yes](data/all/cmn_hans.json) | No | No |
| cmn_hans_beijing | Chinese, Mandarin (Beijing) | [be1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=be1) | No | No | No |
| cmn_hans_guiyang | Chinese, Mandarin (Guiyang) | [gu1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gu1) | No | No | No |
| cmn_hans_harbin | Chinese, Mandarin (Harbin) | [ha2](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ha2) | No | No | No |
| cmn_hans_nanjing | Chinese, Mandarin (Nanjing) | [na1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=na1) | No | No | No |
| cmn_hans_tianjin | Chinese, Mandarin (Tianjin) | [ti1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ti1) | No | No | No |
| cmn_hant | Chinese, Mandarin (Traditional) | No | [Yes](data/all/cmn_hant.json) | No | No |
| cnh | Chin, Haka | [hak](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hak) | [Yes](data/all/cnh.json) | [Yes](data/top/cnh.json) | [Yes](data/min/cnh.json) |
| cni | Asháninka | [cni](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cni) | [Yes](data/all/cni.json) | [Yes](data/top/cni.json) | [Yes](data/min/cni.json) |
| cnr | Montenegrin | [cnr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cnr) | No | No | No |
| cof | Colorado | [cof](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cof) | [Yes](data/all/cof.json) | [Yes](data/top/cof.json) | [Yes](data/min/cof.json) |
| con | Cofán | [ccc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ccc) | No | No | No |
| cos | Corsican | [coi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=coi) | [Yes](data/all/cos.json) | [Yes](data/top/cos.json) | [Yes](data/min/cos.json) |
| cot | Caquinte | [cot](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cot) | [Yes](data/all/cot.json) | [Yes](data/top/cot.json) | [Yes](data/min/cot.json) |
| cpu | Ashéninka, Pichis | [cpu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cpu) | [Yes](data/all/cpu.json) | [Yes](data/top/cpu.json) | [Yes](data/min/cpu.json) |
| crs | Seselwa Creole French | [crs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=crs) | [Yes](data/all/crs.json) | [Yes](data/top/crs.json) | [Yes](data/min/crs.json) |
| csa | Chinantec, Chiltepec | [csa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=csa) | [Yes](data/all/csa.json) | [Yes](data/top/csa.json) | [Yes](data/min/csa.json) |
| csw | Cree, Swampy | [crm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=crm) | [Yes](data/all/csw.json) | [Yes](data/top/csw.json) | [Yes](data/min/csw.json) |
| ctd | Chin, Tedim | [tid](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tid) | [Yes](data/all/ctd.json) | [Yes](data/top/ctd.json) | [Yes](data/min/ctd.json) |
| cym | Welsh | [wls](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wls) | [Yes](data/all/cym.json) | [Yes](data/top/cym.json) | [Yes](data/min/cym.json) |
| dag | Dagbani | [dag](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dag) | [Yes](data/all/dag.json) | [Yes](data/top/dag.json) | [Yes](data/min/dag.json) |
| dan | Danish | [dns](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dns) | [Yes](data/all/dan.json) | [Yes](data/top/dan.json) | [Yes](data/min/dan.json) |
| ddn | Dendi | [den](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=den) | [Yes](data/all/ddn.json) | [Yes](data/top/ddn.json) | [Yes](data/min/ddn.json) |
| deu_1901 | German, Standard (1901) | [ger](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ger) | [Yes](data/all/deu_1901.json) | [Yes](data/top/deu_1901.json) | [Yes](data/min/deu_1901.json) |
| deu_1996 | German, Standard (1996) | No | [Yes](data/all/deu_1996.json) | [Yes](data/top/deu_1996.json) | [Yes](data/min/deu_1996.json) |
| dga | Dagaare, Southern | [dga](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dga) | [Yes](data/all/dga.json) | [Yes](data/top/dga.json) | [Yes](data/min/dga.json) |
| dhi | Dhimal | [dhi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dhi) | No | No | No |
| dhw | Danuwar | [dhw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dhw) | No | No | No |
| dip | Dinka, Northeastern | [dinka](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dinka) | [Yes](data/all/dip.json) | [Yes](data/top/dip.json) | [Yes](data/min/dip.json) |
| div | Maldivian | [div](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=div) | [Yes](data/all/div.json) | [Yes](data/top/div.json) | [Yes](data/min/div.json) |
| dry | Darai | [dry](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dry) | No | No | No |
| dyo | Jola-Fonyi | [dyo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dyo) | [Yes](data/all/dyo.json) | [Yes](data/top/dyo.json) | [Yes](data/min/dyo.json) |
| dyu | Jula | [dyu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dyu) | [Yes](data/all/dyu.json) | [Yes](data/top/dyu.json) | [Yes](data/min/dyu.json) |
| dzo | Dzongkha | [dzo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dzo) | [Yes](data/all/dzo.json) | [Yes](data/top/dzo.json) | [Yes](data/min/dzo.json) |
| ell_monotonic | Greek (monotonic) | [grk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=grk) | [Yes](data/all/ell_monotonic.json) | [Yes](data/top/ell_monotonic.json) | [Yes](data/min/ell_monotonic.json) |
| ell_polytonic | Greek (polytonic) | No | [Yes](data/all/ell_polytonic.json) | [Yes](data/top/ell_polytonic.json) | [Yes](data/min/ell_polytonic.json) |
| emk | Maninkakan, Eastern | [mni](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mni) | [Yes](data/all/emk.json) | [Yes](data/top/emk.json) | [Yes](data/min/emk.json) |
| eml | Romagnolo | [eml](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eml) | [Yes](data/all/eml.json) | [Yes](data/top/eml.json) | [Yes](data/min/eml.json) |
| eng | English | [eng](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eng) | [Yes](data/all/eng.json) | [Yes](data/top/eng.json) | [Yes](data/min/eng.json) |
| epo | Esperanto | [1115](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1115) | [Yes](data/all/epo.json) | [Yes](data/top/epo.json) | [Yes](data/min/epo.json) |
| ese | Ese Ejja | [ese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ese) | No | No | No |
| est | Estonian | [est](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=est) | [Yes](data/all/est.json) | [Yes](data/top/est.json) | [Yes](data/min/est.json) |
| eus | Basque | [bsq](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bsq) | [Yes](data/all/eus.json) | [Yes](data/top/eus.json) | [Yes](data/min/eus.json) |
| eve | Even | [eve](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eve) | [Yes](data/all/eve.json) | [Yes](data/top/eve.json) | [Yes](data/min/eve.json) |
| evn | Evenki | [evn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=evn) | [Yes](data/all/evn.json) | [Yes](data/top/evn.json) | [Yes](data/min/evn.json) |
| ewe | Éwé | [ewe](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ewe) | [Yes](data/all/ewe.json) | [Yes](data/top/ewe.json) | [Yes](data/min/ewe.json) |
| fao | Faroese | [fae](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fae) | [Yes](data/all/fao.json) | [Yes](data/top/fao.json) | [Yes](data/min/fao.json) |
| fij | Fijian | [fji](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fji) | [Yes](data/all/fij.json) | [Yes](data/top/fij.json) | [Yes](data/min/fij.json) |
| fin | Finnish | [fin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fin) | [Yes](data/all/fin.json) | [Yes](data/top/fin.json) | [Yes](data/min/fin.json) |
| fkv | Finnish, Kven | [fkv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fkv) | No | No | No |
| flm | Chin, Falam | [fal](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fal) | [Yes](data/all/flm.json) | [Yes](data/top/flm.json) | [Yes](data/min/flm.json) |
| fon | Fon | [foa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=foa) | [Yes](data/all/fon.json) | [Yes](data/top/fon.json) | [Yes](data/min/fon.json) |
| fra | French | [frn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn) | [Yes](data/all/fra.json) | [Yes](data/top/fra.json) | [Yes](data/min/fra.json) |
| fri | Frisian, Western | [fri](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fri) | [Yes](data/all/fri.json) | [Yes](data/top/fri.json) | [Yes](data/min/fri.json) |
| fuf | Pular | [fuf](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fuf) | [Yes](data/all/fuf.json) | [Yes](data/top/fuf.json) | [Yes](data/min/fuf.json) |
| fuf_adlm | Pular (Adlam) | No | No | No | No |
| fur | Friulian | [frl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frl) | [Yes](data/all/fur.json) | [Yes](data/top/fur.json) | [Yes](data/min/fur.json) |
| fuv | Fulfulde, Nigerian | [fum](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fum) | [Yes](data/all/fuv.json) | [Yes](data/top/fuv.json) | [Yes](data/min/fuv.json) |
| gaa | Ga | [gac2](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gac2) | [Yes](data/all/gaa.json) | [Yes](data/top/gaa.json) | [Yes](data/min/gaa.json) |
| gag | Gagauz | [gag](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gag) | [Yes](data/all/gag.json) | [Yes](data/top/gag.json) | [Yes](data/min/gag.json) |
| gan | Chinese, Gan | [gan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gan) | [Yes](data/all/gan.json) | No | No |
| gax | Oromo, Borana-Arsi-Guji | [gax](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gax) | [Yes](data/all/gax.json) | [Yes](data/top/gax.json) | [Yes](data/min/gax.json) |
| gbm | Garhwali | [gbm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gbm) | No | No | No |
| gjn | Gonja | [dum](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dum) | [Yes](data/all/gjn.json) | [Yes](data/top/gjn.json) | [Yes](data/min/gjn.json) |
| gkp | Kpelle, Guinea | [gkp1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gkp1) | [Yes](data/all/gkp.json) | [Yes](data/top/gkp.json) | [Yes](data/min/gkp.json) |
| gla | Gaelic, Scottish | [gls](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gls) | [Yes](data/all/gla.json) | [Yes](data/top/gla.json) | [Yes](data/min/gla.json) |
| gld | Nanai | [gld](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gld) | [Yes](data/all/gld.json) | [Yes](data/top/gld.json) | [Yes](data/min/gld.json) |
| gle | Gaelic, Irish | [gli1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gli1) | [Yes](data/all/gle.json) | [Yes](data/top/gle.json) | [Yes](data/min/gle.json) |
| glg | Galician | [gln](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gln) | [Yes](data/all/glg.json) | [Yes](data/top/glg.json) | [Yes](data/min/glg.json) |
| glv | Manx | No | [Yes](data/all/glv.json) | [Yes](data/top/glv.json) | [Yes](data/min/glv.json) |
| gno | Gondi, Northern | [gno](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gno) | No | No | No |
| gnw | Guarani, Western Bolivian | [gnw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gnw) | No | No | No |
| guc | Wayuu | [guc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=guc) | [Yes](data/all/guc.json) | [Yes](data/top/guc.json) | [Yes](data/min/guc.json) |
| gug | Guaraní, Paraguayan | [gun](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gun) | [Yes](data/all/gug.json) | [Yes](data/top/gug.json) | [Yes](data/min/gug.json) |
| guj | Gujarati | [gjr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gjr) | [Yes](data/all/guj.json) | [Yes](data/top/guj.json) | [Yes](data/min/guj.json) |
| guu | Yanomamö | [guu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=guu) | [Yes](data/all/guu.json) | [Yes](data/top/guu.json) | [Yes](data/min/guu.json) |
| gvr | Gurung, Western | [gvr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gvr) | No | No | No |
| gyr | Guarayu | [gua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gua) | [Yes](data/all/gyr.json) | [Yes](data/top/gyr.json) | [Yes](data/min/gyr.json) |
| hak | Chinese, Hakka | [ha1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ha1) | [Yes](data/all/hak.json) | No | No |
| hat_kreyol | Haitian Creole French (Kreyol) | [hat](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hat) | [Yes](data/all/hat_kreyol.json) | [Yes](data/top/hat_kreyol.json) | [Yes](data/min/hat_kreyol.json) |
| hat_popular | Haitian Creole French (Popular) | [hat1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hat1) | [Yes](data/all/hat_popular.json) | [Yes](data/top/hat_popular.json) | [Yes](data/min/hat_popular.json) |
| hau_NE | Hausa (Niger) | [gej](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gej) | [Yes](data/all/hau_NE.json) | [Yes](data/top/hau_NE.json) | [Yes](data/min/hau_NE.json) |
| hau_NG | Hausa (Nigeria) | [gej](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gej) | [Yes](data/all/hau_NG.json) | [Yes](data/top/hau_NG.json) | [Yes](data/min/hau_NG.json) |
| hau_3 | Hausa | [hau](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hau) | No | No | No |
| haw | Hawaiian | [hwi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hwi) | [Yes](data/all/haw.json) | [Yes](data/top/haw.json) | [Yes](data/min/haw.json) |
| hea | Hmong, Northern Qiandong | [hea](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hea) | [Yes](data/all/hea.json) | [Yes](data/top/hea.json) | [Yes](data/min/hea.json) |
| heb | Hebrew | [hbr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hbr) | [Yes](data/all/heb.json) | [Yes](data/top/heb.json) | [Yes](data/min/heb.json) |
| hil | Hiligaynon | [hil](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hil) | [Yes](data/all/hil.json) | [Yes](data/top/hil.json) | [Yes](data/min/hil.json) |
| hin | Hindi | [hnd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hnd) | [Yes](data/all/hin.json) | [Yes](data/top/hin.json) | [Yes](data/min/hin.json) |
| hlt | Chin, Matu | [hlt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hlt) | [Yes](data/all/hlt.json) | [Yes](data/top/hlt.json) | [Yes](data/min/hlt.json) |
| hms | Hmong, Southern Qiandong | [hms](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hms) | [Yes](data/all/hms.json) | [Yes](data/top/hms.json) | [Yes](data/min/hms.json) |
| hna | Mina | [hna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hna) | [Yes](data/all/hna.json) | [Yes](data/top/hna.json) | [Yes](data/min/hna.json) |
| hne | Chhattisgarhi | [hne](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hne) | No | No | No |
| hni | Hani | [hni](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hni) | [Yes](data/all/hni.json) | [Yes](data/top/hni.json) | [Yes](data/min/hni.json) |
| hns | Hindustani, Sarnami | [hns](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hns) | [Yes](data/all/hns.json) | [Yes](data/top/hns.json) | [Yes](data/min/hns.json) |
| hoc | Ho | [Hoc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Hoc) | No | No | No |
| hrv | Croatian | [src2](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src2) | [Yes](data/all/hrv.json) | [Yes](data/top/hrv.json) | [Yes](data/min/hrv.json) |
| hsb | Sorbian, Upper | [wee](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wee) | [Yes](data/all/hsb.json) | [Yes](data/top/hsb.json) | [Yes](data/min/hsb.json) |
| hsf | Huastec (Sierra de Otontepec) | [hus](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hus) | [Yes](data/all/hsf.json) | [Yes](data/top/hsf.json) | [Yes](data/min/hsf.json) |
| hsn | Chinese, Xiang | [hsn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hsn) | No | No | No |
| hun | Hungarian | [hng](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hng) | [Yes](data/all/hun.json) | [Yes](data/top/hun.json) | [Yes](data/min/hun.json) |
| hus | Huastec (Veracruz) | [1118](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1118) | [Yes](data/all/hus.json) | [Yes](data/top/hus.json) | [Yes](data/min/hus.json) |
| huu | Huitoto, Murui | [huu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=huu) | [Yes](data/all/huu.json) | [Yes](data/top/huu.json) | [Yes](data/min/huu.json) |
| hva | Huastec (San Luís Potosí) | [hva](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hva) | [Yes](data/all/hva.json) | [Yes](data/top/hva.json) | [Yes](data/min/hva.json) |
| hye | Armenian | [arm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arm) | [Yes](data/all/hye.json) | [Yes](data/top/hye.json) | [Yes](data/min/hye.json) |
| ibb | Ibibio | [ibb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ibb) | [Yes](data/all/ibb.json) | [Yes](data/top/ibb.json) | [Yes](data/min/ibb.json) |
| ibo | Igbo | [igr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=igr) | [Yes](data/all/ibo.json) | [Yes](data/top/ibo.json) | [Yes](data/min/ibo.json) |
| ido | Ido | [1120](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1120) | [Yes](data/all/ido.json) | [Yes](data/top/ido.json) | [Yes](data/min/ido.json) |
| idu | Idoma | [idu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=idu) | No | No | No |
| iii | Nuosu | [iii](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=iii) | [Yes](data/all/iii.json) | No | No |
| ijs | Ijo, Southeast | [ijs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ijs) | No | No | No |
| ike | Inuktitut, Eastern Canadian | [esb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=esb) | [Yes](data/all/ike.json) | [Yes](data/top/ike.json) | [Yes](data/min/ike.json) |
| ilo | Ilocano | [ilo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ilo) | [Yes](data/all/ilo.json) | [Yes](data/top/ilo.json) | [Yes](data/min/ilo.json) |
| ina | Interlingua | [1119](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1119) | [Yes](data/all/ina.json) | [Yes](data/top/ina.json) | [Yes](data/min/ina.json) |
| ind | Indonesian | [inz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=inz) | [Yes](data/all/ind.json) | [Yes](data/top/ind.json) | [Yes](data/min/ind.json) |
| isl | Icelandic | [ice](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ice) | [Yes](data/all/isl.json) | [Yes](data/top/isl.json) | [Yes](data/min/isl.json) |
| ita | Italian | [itn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=itn) | [Yes](data/all/ita.json) | [Yes](data/top/ita.json) | [Yes](data/min/ita.json) |
| jav | Javanese (Latin) | [jan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jan) | [Yes](data/all/jav.json) | [Yes](data/top/jav.json) | [Yes](data/min/jav.json) |
| jav_java | Javanese (Javanese) | No | [Yes](data/all/jav_java.json) | [Yes](data/top/jav_java.json) | [Yes](data/min/jav_java.json) |
| jiv | Shuar | [1125](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1125) | [Yes](data/all/jiv.json) | [Yes](data/top/jiv.json) | [Yes](data/min/jiv.json) |
| jpn | Japanese | [jpn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jpn) | [Yes](data/all/jpn.json) | [Yes](data/top/jpn.json) | [Yes](data/min/jpn.json) |
| jpn_tokyo | Japanese (Tokyo) | [to1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=to1) | No | No | No |
| jpn_osaka | Japanese (Osaka) | [obe](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=obe) | No | No | No |
| jul | Jirel | [jul](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jul) | No | No | No |
| kaa | Karakalpak | [kaa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kaa) | No | No | No |
| kal | Inuktitut, Greenlandic | [esg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=esg) | [Yes](data/all/kal.json) | [Yes](data/top/kal.json) | [Yes](data/min/kal.json) |
| kan | Kannada | [kjv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kjv) | [Yes](data/all/kan.json) | [Yes](data/top/kan.json) | [Yes](data/min/kan.json) |
| kas | Kashmiri | [ksh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ksh) | No | No | No |
| kat | Georgian | [geo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=geo) | [Yes](data/all/kat.json) | [Yes](data/top/kat.json) | [Yes](data/min/kat.json) |
| kaz | Kazakh | [kaz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kaz) | [Yes](data/all/kaz.json) | [Yes](data/top/kaz.json) | [Yes](data/min/kaz.json) |
| kbd | Kabardian | [kbd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kbd) | [Yes](data/all/kbd.json) | [Yes](data/top/kbd.json) | [Yes](data/min/kbd.json) |
| kbp | Kabiyé | [kbp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kbp) | [Yes](data/all/kbp.json) | [Yes](data/top/kbp.json) | [Yes](data/min/kbp.json) |
| kde | Makonde | [kde](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kde) | [Yes](data/all/kde.json) | [Yes](data/top/kde.json) | [Yes](data/min/kde.json) |
| kdh | Tem | [kdh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdh) | [Yes](data/all/kdh.json) | [Yes](data/top/kdh.json) | [Yes](data/min/kdh.json) |
| kea | Kabuverdianu | [kea](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kea) | [Yes](data/all/kea.json) | [Yes](data/top/kea.json) | [Yes](data/min/kea.json) |
| kek | Q'eqchi' | [1116](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1116) | [Yes](data/all/kek.json) | [Yes](data/top/kek.json) | [Yes](data/min/kek.json) |
| kfa | Kodava | [kfa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kfa) | No | No | No |
| kfx_deva | Pahari, Kullu | [kfx](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kfx) | No | No | No |
| kgg_deva | Kusunda | [kgg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kgg) | No | No | No |
| kha | Khasi | [kha](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kha) | [Yes](data/all/kha.json) | [Yes](data/top/kha.json) | [Yes](data/min/kha.json) |
| khk | Mongolian, Halh (Cyrillic) | [khk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=khk) | [Yes](data/all/khk.json) | [Yes](data/top/khk.json) | [Yes](data/min/khk.json) |
| khk_mong | Mongolian, Halh (Mongolian) | No | [Yes](data/all/khk_mong.json) | No | No |
| khm | Khmer, Central | [khm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=khm) | [Yes](data/all/khm.json) | [Yes](data/top/khm.json) | [Yes](data/min/khm.json) |
| khr | Kharia | [khr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=khr) | No | No | No |
| kin | Rwanda | [rua1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rua1) | [Yes](data/all/kin.json) | [Yes](data/top/kin.json) | [Yes](data/min/kin.json) |
| kir | Kirghiz | [kdo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdo) | [Yes](data/all/kir.json) | [Yes](data/top/kir.json) | [Yes](data/min/kir.json) |
| kjh | Khakas | [kjh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kjh) | [Yes](data/all/kjh.json) | [Yes](data/top/kjh.json) | [Yes](data/min/kjh.json) |
| kkh_lana | Khün | No | [Yes](data/all/kkh_lana.json) | [Yes](data/top/kkh_lana.json) | [Yes](data/min/kkh_lana.json) |
| kmb | Mbundu | [mlo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mlo) | [Yes](data/all/kmb.json) | [Yes](data/top/kmb.json) | [Yes](data/min/kmb.json) |
| kmr | Kurdish, Northern | [kur](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kur) | [Yes](data/all/kmr.json) | [Yes](data/top/kmr.json) | [Yes](data/min/kmr.json) |
| kmr_arab | Kurdish, Northern (Arabic) | [kur](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kur) | No | No | No |
| knc | Kanuri, Central | [kph](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kph) | [Yes](data/all/knc.json) | [Yes](data/top/knc.json) | [Yes](data/min/knc.json) |
| kng | Koongo | [kon](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kon) | [Yes](data/all/kng.json) | [Yes](data/top/kng.json) | [Yes](data/min/kng.json) |
| kng_AO | Koongo (Angola) | [kng](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kng) | [Yes](data/all/kng_AO.json) | [Yes](data/top/kng_AO.json) | [Yes](data/min/kng_AO.json) |
| koi | Komi-Permyak | [koi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=koi) | [Yes](data/all/koi.json) | [Yes](data/top/koi.json) | [Yes](data/min/koi.json) |
| koo | Konjo | [koo1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=koo1) | [Yes](data/all/koo.json) | [Yes](data/top/koo.json) | [Yes](data/min/koo.json) |
| kor | Korean | [kkn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kkn) | [Yes](data/all/kor.json) | [Yes](data/top/kor.json) | [Yes](data/min/kor.json) |
| kqn | Kaonde | [kqn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kqn) | [Yes](data/all/kqn.json) | [Yes](data/top/kqn.json) | [Yes](data/min/kqn.json) |
| kqs | Kissi, Northern | [kqs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kqs) | No | No | No |
| kra | Kumhali | [kra](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kra) | No | No | No |
| kri | Krio | [kri](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kri) | [Yes](data/all/kri.json) | [Yes](data/top/kri.json) | [Yes](data/min/kri.json) |
| krl | Karelian | [krl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=krl) | [Yes](data/all/krl.json) | [Yes](data/top/krl.json) | [Yes](data/min/krl.json) |
| ksw | Karen, S'gaw | [ksw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ksw) | No | No | No |
| ktu | Kituba | [ktu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ktu) | [Yes](data/all/ktu.json) | [Yes](data/top/ktu.json) | [Yes](data/min/ktu.json) |
| kwi | Awa-Cuaiquer | [kwi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kwi) | [Yes](data/all/kwi.json) | [Yes](data/top/kwi.json) | [Yes](data/min/kwi.json) |
| kxl | Kurux, Nepali | [kxl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kxl) | No | No | No |
| lad | Ladino | [lad](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lad) | [Yes](data/all/lad.json) | [Yes](data/top/lad.json) | [Yes](data/min/lad.json) |
| lao | Lao | [nol](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nol) | [Yes](data/all/lao.json) | [Yes](data/top/lao.json) | [Yes](data/min/lao.json) |
| lat | Latin | [ltn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ltn) | [Yes](data/all/lat.json) | [Yes](data/top/lat.json) | [Yes](data/min/lat.json) |
| lat_1 | Latin (1) | [ltn1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ltn1) | [Yes](data/all/lat_1.json) | [Yes](data/top/lat_1.json) | [Yes](data/min/lat_1.json) |
| lav | Latvian | [lat](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lat) | [Yes](data/all/lav.json) | [Yes](data/top/lav.json) | [Yes](data/min/lav.json) |
| lep_deva | Lepcha | [lep](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lep) | No | No | No |
| lhm | Lhomi | [lhm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lhm) | No | No | No |
| lia | Limba, West-Central | [lia](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lia) | [Yes](data/all/lia.json) | [Yes](data/top/lia.json) | [Yes](data/min/lia.json) |
| lif | Limbu | [lif](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lif) | No | No | No |
| lij | Ligurian | [lij](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lij) | [Yes](data/all/lij.json) | [Yes](data/top/lij.json) | [Yes](data/min/lij.json) |
| lin | Lingala | [lin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lin) | [Yes](data/all/lin.json) | [Yes](data/top/lin.json) | [Yes](data/min/lin.json) |
| lin_tones | Lingala (tones) | No | [Yes](data/all/lin_tones.json) | [Yes](data/top/lin_tones.json) | [Yes](data/min/lin_tones.json) |
| lit | Lithuanian | [lit](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lit) | [Yes](data/all/lit.json) | [Yes](data/top/lit.json) | [Yes](data/min/lit.json) |
| lld | Ladin | [lld](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lld) | [Yes](data/all/lld.json) | [Yes](data/top/lld.json) | [Yes](data/min/lld.json) |
| lnc | Occitan (Languedocien) | [prv1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prv1) | [Yes](data/all/lnc.json) | [Yes](data/top/lnc.json) | [Yes](data/min/lnc.json) |
| lns | Lamnso' | [nso](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nso) | [Yes](data/all/lns.json) | [Yes](data/top/lns.json) | [Yes](data/min/lns.json) |
| lob | Lobi | [lob](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lob) | [Yes](data/all/lob.json) | [Yes](data/top/lob.json) | [Yes](data/min/lob.json) |
| lot | Otuho | [lot](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lot) | [Yes](data/all/lot.json) | [Yes](data/top/lot.json) | [Yes](data/min/lot.json) |
| loz | Lozi | [lbm1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lbm1) | [Yes](data/all/loz.json) | [Yes](data/top/loz.json) | [Yes](data/min/loz.json) |
| ltz | Luxembourgeois | [lux](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lux) | [Yes](data/all/ltz.json) | [Yes](data/top/ltz.json) | [Yes](data/min/ltz.json) |
| lua | Luba-Kasai | [lub](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lub) | [Yes](data/all/lua.json) | [Yes](data/top/lua.json) | [Yes](data/min/lua.json) |
| lue | Luvale | [lue](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lue) | [Yes](data/all/lue.json) | [Yes](data/top/lue.json) | [Yes](data/min/lue.json) |
| lug | Ganda | [lap1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lap1) | [Yes](data/all/lug.json) | [Yes](data/top/lug.json) | [Yes](data/min/lug.json) |
| lun | Lunda | [mlo1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mlo1) | [Yes](data/all/lun.json) | [Yes](data/top/lun.json) | [Yes](data/min/lun.json) |
| lus | Mizo | [lus](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lus) | [Yes](data/all/lus.json) | [Yes](data/top/lus.json) | [Yes](data/min/lus.json) |
| mad | Madura | [mhj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mhj) | [Yes](data/all/mad.json) | [Yes](data/top/mad.json) | [Yes](data/min/mad.json) |
| mag | Magahi | [mqm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mqm) | [Yes](data/all/mag.json) | [Yes](data/top/mag.json) | [Yes](data/min/mag.json) |
| mah | Marshallese | [mzm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mzm) | [Yes](data/all/mah.json) | [Yes](data/top/mah.json) | [Yes](data/min/mah.json) |
| mai | Maithili | No | [Yes](data/all/mai.json) | [Yes](data/top/mai.json) | [Yes](data/min/mai.json) |
| mai_2 | Maithili (2) | [mai](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mai) | No | No | No |
| mal | Malayalam | [mjs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mjs) | [Yes](data/all/mal.json) | [Yes](data/top/mal.json) | [Yes](data/min/mal.json) |
| mam | Mam, Northern | [mam](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mam) | [Yes](data/all/mam.json) | [Yes](data/top/mam.json) | [Yes](data/min/mam.json) |
| mar | Marathi | [mrt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mrt) | [Yes](data/all/mar.json) | [Yes](data/top/mar.json) | [Yes](data/min/mar.json) |
| maz | Mazahua Central | [maz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=maz) | [Yes](data/all/maz.json) | [Yes](data/top/maz.json) | [Yes](data/min/maz.json) |
| mcd | Sharanahua | [mcd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mcd) | [Yes](data/all/mcd.json) | [Yes](data/top/mcd.json) | [Yes](data/min/mcd.json) |
| mcf | Matsés | [mcf](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mcf) | [Yes](data/all/mcf.json) | [Yes](data/top/mcf.json) | [Yes](data/min/mcf.json) |
| men | Mende | [mfy](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mfy) | [Yes](data/all/men.json) | [Yes](data/top/men.json) | [Yes](data/min/men.json) |
| mfq | Moba | [mfq](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mfq) | No | No | No |
| mgp | Maga, Eastern | [mag](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mag) | No | No | No |
| mic | Micmac | [mic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mic) | [Yes](data/all/mic.json) | [Yes](data/top/mic.json) | [Yes](data/min/mic.json) |
| min | Minangkabau | [mpu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mpu) | [Yes](data/all/min.json) | [Yes](data/top/min.json) | [Yes](data/min/min.json) |
| miq | Mískito | [miq](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=miq) | [Yes](data/all/miq.json) | [Yes](data/top/miq.json) | [Yes](data/min/miq.json) |
| mjz | Mahji | [mjz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mjz) | No | No | No |
| mkd | Macedonian | [mkj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mkj) | [Yes](data/all/mkd.json) | [Yes](data/top/mkd.json) | [Yes](data/min/mkd.json) |
| mlt | Maltese | [mls](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mls) | [Yes](data/all/mlt.json) | [Yes](data/top/mlt.json) | [Yes](data/min/mlt.json) |
| mly_arab | Malay (Arabic) | No | [Yes](data/all/mly_arab.json) | [Yes](data/top/mly_arab.json) | [Yes](data/min/mly_arab.json) |
| mly_latn | Malay (Latin) | [mli](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mli) | [Yes](data/all/mly_latn.json) | [Yes](data/top/mly_latn.json) | [Yes](data/min/mly_latn.json) |
| mnw | Mon | No | [Yes](data/all/mnw.json) | [Yes](data/top/mnw.json) | [Yes](data/min/mnw.json) |
| mos | Mòoré | [mhm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mhm) | [Yes](data/all/mos.json) | [Yes](data/top/mos.json) | [Yes](data/min/mos.json) |
| mri | Maori | [mbf](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mbf) | [Yes](data/all/mri.json) | [Yes](data/top/mri.json) | [Yes](data/min/mri.json) |
| mto | Mixe, Totontepec | [mto](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mto) | [Yes](data/all/mto.json) | [Yes](data/top/mto.json) | [Yes](data/min/mto.json) |
| mtp | Wichí Lhamtés Nocten | [mtp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mtp) | No | No | No |
| mve | Marwari | [mkd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mkd) | No | No | No |
| mvf_mong | Mongolian, Peripheral (Mongolian) | [mvf](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mvf) | No | No | No |
| mxi | Mozarabic | [moz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=moz) | [Yes](data/all/mxi.json) | [Yes](data/top/mxi.json) | [Yes](data/min/mxi.json) |
| mxv | Mixtec, Metlatónoc | [mxv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mxv) | [Yes](data/all/mxv.json) | [Yes](data/top/mxv.json) | [Yes](data/min/mxv.json) |
| mya | Burmese | [bms](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bms) | [Yes](data/all/mya.json) | [Yes](data/top/mya.json) | [Yes](data/min/mya.json) |
| mzi | Mazatec, Ixcatlán | [mao](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mao) | [Yes](data/all/mzi.json) | [Yes](data/top/mzi.json) | [Yes](data/min/mzi.json) |
| nan | Chinese, Min Nan | [nan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nan) | [Yes](data/all/nan.json) | No | No |
| nav | Navajo | [nav](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nav) | [Yes](data/all/nav.json) | [Yes](data/top/nav.json) | [Yes](data/min/nav.json) |
| nba | Nyemba | [nba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nba) | [Yes](data/all/nba.json) | [Yes](data/top/nba.json) | [Yes](data/min/nba.json) |
| nbl | Ndebele | [nel](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nel) | [Yes](data/all/nbl.json) | [Yes](data/top/nbl.json) | [Yes](data/min/nbl.json) |
| ndo | Ndonga | [1114](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1114) | [Yes](data/all/ndo.json) | [Yes](data/top/ndo.json) | [Yes](data/min/ndo.json) |
| nds | Saxon, Low | [ige](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ige) | [Yes](data/all/nds.json) | [Yes](data/top/nds.json) | [Yes](data/min/nds.json) |
| nep | Nepali | [nep](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nep) | [Yes](data/all/nep.json) | [Yes](data/top/nep.json) | [Yes](data/min/nep.json) |
| new | Newar | [new](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=new) | No | No | No |
| nhn | Nahuatl, Central | [nhn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nhn) | [Yes](data/all/nhn.json) | [Yes](data/top/nhn.json) | [Yes](data/min/nhn.json) |
| nio | Nganasan | [nio](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nio) | [Yes](data/all/nio.json) | [Yes](data/top/nio.json) | [Yes](data/min/nio.json) |
| niu | Niue | [niu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=niu) | No | No | No |
| niv | Gilyak | [Nivkh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Nivkh) | No | No | No |
| njo | Naga, Ao | [njo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=njo) | [Yes](data/all/njo.json) | [Yes](data/top/njo.json) | [Yes](data/min/njo.json) |
| nku | Kulango, Bouna | [kou](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kou) | [Yes](data/all/nku.json) | [Yes](data/top/nku.json) | [Yes](data/min/nku.json) |
| nld | Dutch | [dut](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dut) | [Yes](data/all/nld.json) | [Yes](data/top/nld.json) | [Yes](data/min/nld.json) |
| nno | Norwegian, Nynorsk | [nrn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nrn) | [Yes](data/all/nno.json) | [Yes](data/top/nno.json) | [Yes](data/min/nno.json) |
| nob | Norwegian, Bokmål | [nrr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nrr) | [Yes](data/all/nob.json) | [Yes](data/top/nob.json) | [Yes](data/min/nob.json) |
| not | Nomatsiguenga | [not](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=not) | [Yes](data/all/not.json) | [Yes](data/top/not.json) | [Yes](data/min/not.json) |
| nso | Sotho, Northern | [srt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=srt) | [Yes](data/all/nso.json) | [Yes](data/top/nso.json) | [Yes](data/min/nso.json) |
| nus | Nuer | [nus](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nus) | No | No | No |
| nya_chechewa | Nyanja (Chechewa) | [nyj1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyj1) | [Yes](data/all/nya_chechewa.json) | [Yes](data/top/nya_chechewa.json) | [Yes](data/min/nya_chechewa.json) |
| nya_chinyanja | Nyanja (Chinyanja) | [nyj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyj) | [Yes](data/all/nya_chinyanja.json) | [Yes](data/top/nya_chinyanja.json) | [Yes](data/min/nya_chinyanja.json) |
| nym | Nyamwezi | [nyz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyz) | [Yes](data/all/nym.json) | [Yes](data/top/nym.json) | [Yes](data/min/nym.json) |
| nyn | Nyankore | [nyn1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyn1) | [Yes](data/all/nyn.json) | [Yes](data/top/nyn.json) | [Yes](data/min/nyn.json) |
| nzi | Nzema | [nze](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nze) | [Yes](data/all/nzi.json) | [Yes](data/top/nzi.json) | [Yes](data/min/nzi.json) |
| oaa | Orok | [oaa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=oaa) | [Yes](data/all/oaa.json) | [Yes](data/top/oaa.json) | [Yes](data/min/oaa.json) |
| oci_1 | Occitan (Francoprovençal, Fribourg) | [Fr3](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Fr3) | [Yes](data/all/oci_1.json) | [Yes](data/top/oci_1.json) | [Yes](data/min/oci_1.json) |
| oci_2 | Occitan (Francoprovençal, Savoie) | [fr2](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fr2) | [Yes](data/all/oci_2.json) | [Yes](data/top/oci_2.json) | [Yes](data/min/oci_2.json) |
| oci_3 | Occitan (Francoprovençal, Vaud) | [fr4](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fr4) | [Yes](data/all/oci_3.json) | [Yes](data/top/oci_3.json) | [Yes](data/min/oci_3.json) |
| oci_4 | Occitan (Francoprovençal, Valais) | [frp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frp) | [Yes](data/all/oci_4.json) | [Yes](data/top/oci_4.json) | [Yes](data/min/oci_4.json) |
| ojb | Ojibwa, Northwestern | [ojb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ojb) | [Yes](data/all/ojb.json) | [Yes](data/top/ojb.json) | [Yes](data/min/ojb.json) |
| oki | Okiek | [oki](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=oki) | [Yes](data/all/oki.json) | [Yes](data/top/oki.json) | [Yes](data/min/oki.json) |
| orh | Oroqen | [orh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=orh) | [Yes](data/all/orh.json) | [Yes](data/top/orh.json) | [Yes](data/min/orh.json) |
| ori | Odia | [ory](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ory) | No | No | No |
| oss | Osetin | [ose](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ose) | [Yes](data/all/oss.json) | [Yes](data/top/oss.json) | [Yes](data/min/oss.json) |
| ote | Otomi, Mezquital | [1111](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1111) | [Yes](data/all/ote.json) | [Yes](data/top/ote.json) | [Yes](data/min/ote.json) |
| pam | Pampangan | [pmp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pmp) | [Yes](data/all/pam.json) | [Yes](data/top/pam.json) | [Yes](data/min/pam.json) |
| pan | Panjabi, Eastern | [pnj1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pnj1) | [Yes](data/all/pan.json) | [Yes](data/top/pan.json) | [Yes](data/min/pan.json) |
| pap | Papiamentu | [pap](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pap) | [Yes](data/all/pap.json) | [Yes](data/top/pap.json) | [Yes](data/min/pap.json) |
| pau | Palauan | [plu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=plu) | [Yes](data/all/pau.json) | [Yes](data/top/pau.json) | [Yes](data/min/pau.json) |
| pbb | Páez | [pbb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pbb) | [Yes](data/all/pbb.json) | [Yes](data/top/pbb.json) | [Yes](data/min/pbb.json) |
| pbu | Pashto, Northern | [pbu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pbu) | [Yes](data/all/pbu.json) | [Yes](data/top/pbu.json) | [Yes](data/min/pbu.json) |
| pcd | Picard | [frn2](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn2) | [Yes](data/all/pcd.json) | [Yes](data/top/pcd.json) | [Yes](data/min/pcd.json) |
| pcm | Pidgin, Nigerian | [pcm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pcm) | [Yes](data/all/pcm.json) | [Yes](data/top/pcm.json) | [Yes](data/min/pcm.json) |
| pes_1 | Farsi, Western | [prs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prs) | [Yes](data/all/pes_1.json) | [Yes](data/top/pes_1.json) | [Yes](data/min/pes_1.json) |
| pes_2 | Dari | [prs1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prs1) | [Yes](data/all/pes_2.json) | [Yes](data/top/pes_2.json) | [Yes](data/min/pes_2.json) |
| pis | Pijin | [pis](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pis) | [Yes](data/all/pis.json) | [Yes](data/top/pis.json) | [Yes](data/min/pis.json) |
| piu | Pintupi-Luritja | [piu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=piu) | [Yes](data/all/piu.json) | [Yes](data/top/piu.json) | [Yes](data/min/piu.json) |
| plt | Malagasy, Plateau | [mex](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mex) | [Yes](data/all/plt.json) | [Yes](data/top/plt.json) | [Yes](data/min/plt.json) |
| pnb | Panjabi, Western | No | [Yes](data/all/pnb.json) | [Yes](data/top/pnb.json) | [Yes](data/min/pnb.json) |
| pol | Polish | [pql](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pql) | [Yes](data/all/pol.json) | [Yes](data/top/pol.json) | [Yes](data/min/pol.json) |
| pon | Pohnpeian | [pnf](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pnf) | [Yes](data/all/pon.json) | [Yes](data/top/pon.json) | [Yes](data/min/pon.json) |
| por_BR | Portuguese (Brazil) | No | [Yes](data/all/por_BR.json) | [Yes](data/top/por_BR.json) | [Yes](data/min/por_BR.json) |
| por_PT | Portuguese (Portugal) | [por](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=por) | [Yes](data/all/por_PT.json) | [Yes](data/top/por_PT.json) | [Yes](data/min/por_PT.json) |
| pov | Crioulo, Upper Guinea | [gbc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gbc) | [Yes](data/all/pov.json) | [Yes](data/top/pov.json) | [Yes](data/min/pov.json) |
| ppl | Pipil | [ppl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ppl) | [Yes](data/all/ppl.json) | [Yes](data/top/ppl.json) | [Yes](data/min/ppl.json) |
| prq | Ashéninka Perené | [cpp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cpp) | [Yes](data/all/prq.json) | [Yes](data/top/prq.json) | [Yes](data/min/prq.json) |
| prv | Occitan | [pro](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pro) | [Yes](data/all/prv.json) | [Yes](data/top/prv.json) | [Yes](data/min/prv.json) |
| pwo | Karen, Pwo Western | [pwo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pwo) | No | No | No |
| quc | K'iche', Central | [1117](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1117) | [Yes](data/all/quc.json) | [Yes](data/top/quc.json) | [Yes](data/min/quc.json) |
| qud | Quechua (Unified Quichua, old Hispanic orthography) | [qud1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qud1) | [Yes](data/all/qud.json) | [Yes](data/top/qud.json) | [Yes](data/min/qud.json) |
| qug | Quichua, Chimborazo Highland | [qug](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qug) | [Yes](data/all/qug.json) | [Yes](data/top/qug.json) | [Yes](data/min/qug.json) |
| qul | Quechua, North Bolivian | [qul](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qul) | No | No | No |
| quy | Quechua, Ayacucho | [quy](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=quy) | [Yes](data/all/quy.json) | [Yes](data/top/quy.json) | [Yes](data/min/quy.json) |
| quz | Quechua, Cusco | [quz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=quz) | [Yes](data/all/quz.json) | [Yes](data/top/quz.json) | [Yes](data/min/quz.json) |
| qva | Quechua, Ambo-Pasco | [qeg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qeg) | [Yes](data/all/qva.json) | [Yes](data/top/qva.json) | [Yes](data/min/qva.json) |
| qvc | Quechua, Cajamarca | [qnt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qnt) | [Yes](data/all/qvc.json) | [Yes](data/top/qvc.json) | [Yes](data/min/qvc.json) |
| qvh | Quechua, Huamalíes-Dos de Mayo Huánuco | [qej](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qej) | [Yes](data/all/qvh.json) | [Yes](data/top/qvh.json) | [Yes](data/min/qvh.json) |
| qvm | Quechua, Margos-Yarowilca-Lauricocha | [qei](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qei) | [Yes](data/all/qvm.json) | [Yes](data/top/qvm.json) | [Yes](data/min/qvm.json) |
| qvn | Quechua, North Junín | [qju](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qju) | [Yes](data/all/qvn.json) | [Yes](data/top/qvn.json) | [Yes](data/min/qvn.json) |
| qwh | Quechua, Huaylas Ancash | [qan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qan) | [Yes](data/all/qwh.json) | [Yes](data/top/qwh.json) | [Yes](data/min/qwh.json) |
| qxa | Quechua, South Bolivian | [qec1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qec1) | [Yes](data/all/qxa.json) | [Yes](data/top/qxa.json) | [Yes](data/min/qxa.json) |
| qxn | Quechua, Northern Conchucos Ancash | [qed](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qed) | [Yes](data/all/qxn.json) | [Yes](data/top/qxn.json) | [Yes](data/min/qxn.json) |
| qxu | Quechua, Arequipa-La Unión | [qar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qar) | [Yes](data/all/qxu.json) | [Yes](data/top/qxu.json) | [Yes](data/min/qxu.json) |
| rab | Chamling | [rab](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rab) | No | No | No |
| raj | Malvi | [raj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=raj) | No | No | No |
| rar | Rarotongan | [rrt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rrt) | [Yes](data/all/rar.json) | [Yes](data/top/rar.json) | [Yes](data/min/rar.json) |
| rji | Raji | [rji](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rji) | No | No | No |
| rjs | Rajbanshi | [rjs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rjs) | No | No | No |
| rmn | Romani, Balkan | [rmn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmn) | [Yes](data/all/rmn.json) | [Yes](data/top/rmn.json) | [Yes](data/min/rmn.json) |
| rmn_1 | Romani, Balkan (1) | [rmn1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmn1) | [Yes](data/all/rmn_1.json) | [Yes](data/top/rmn_1.json) | [Yes](data/min/rmn_1.json) |
| rmy | Aromanian | [rmy1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmy1) | [Yes](data/all/rmy.json) | [Yes](data/top/rmy.json) | [Yes](data/min/rmy.json) |
| roh | Romansch | No | [Yes](data/all/roh.json) | [Yes](data/top/roh.json) | [Yes](data/min/roh.json) |
| roh_puter | Romansch (Puter) | No | [Yes](data/all/roh_puter.json) | [Yes](data/top/roh_puter.json) | [Yes](data/min/roh_puter.json) |
| roh_rumgr | Romansch (Grischun) | [rhe](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rhe) | [Yes](data/all/roh_rumgr.json) | [Yes](data/top/roh_rumgr.json) | [Yes](data/min/roh_rumgr.json) |
| roh_surmiran | Romansch (Surmiran) | No | [Yes](data/all/roh_surmiran.json) | [Yes](data/top/roh_surmiran.json) | [Yes](data/min/roh_surmiran.json) |
| roh_sursilv | Romansch (Sursilvan) | No | [Yes](data/all/roh_sursilv.json) | [Yes](data/top/roh_sursilv.json) | [Yes](data/min/roh_sursilv.json) |
| roh_sutsilv | Romansch (Sutsilvan) | No | [Yes](data/all/roh_sutsilv.json) | [Yes](data/top/roh_sutsilv.json) | [Yes](data/min/roh_sutsilv.json) |
| roh_vallader | Romansch (Vallader) | No | [Yes](data/all/roh_vallader.json) | [Yes](data/top/roh_vallader.json) | [Yes](data/min/roh_vallader.json) |
| ron_1953 | Romanian (1953) | [rum](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rum) | [Yes](data/all/ron_1953.json) | [Yes](data/top/ron_1953.json) | [Yes](data/min/ron_1953.json) |
| ron_1993 | Romanian (1993) | No | [Yes](data/all/ron_1993.json) | [Yes](data/top/ron_1993.json) | [Yes](data/min/ron_1993.json) |
| ron_2006 | Romanian (2006) | No | [Yes](data/all/ron_2006.json) | [Yes](data/top/ron_2006.json) | [Yes](data/min/ron_2006.json) |
| run | Rundi | [rud1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rud1) | [Yes](data/all/run.json) | [Yes](data/top/run.json) | [Yes](data/min/run.json) |
| rus | Russian | [rus](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rus) | [Yes](data/all/rus.json) | [Yes](data/top/rus.json) | [Yes](data/min/rus.json) |
| sag | Sango | [saj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=saj) | [Yes](data/all/sag.json) | [Yes](data/top/sag.json) | [Yes](data/min/sag.json) |
| sah | Yakut | [sah](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sah) | [Yes](data/all/sah.json) | [Yes](data/top/sah.json) | [Yes](data/min/sah.json) |
| san | Sanskrit | [skt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=skt) | [Yes](data/all/san.json) | [Yes](data/top/san.json) | [Yes](data/min/san.json) |
| san_gran | Sanskrit (Grantha) | No | No | No | No |
| sat | Santhali | [sat](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sat) | No | No | No |
| sck | Sadri | [kis](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kis) | No | No | No |
| sco | Scots | [sco](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sco) | [Yes](data/all/sco.json) | [Yes](data/top/sco.json) | [Yes](data/min/sco.json) |
| scp | Helambu Sherpa | [scp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=scp) | No | No | No |
| sey | Secoya | [1123](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1123) | [Yes](data/all/sey.json) | [Yes](data/top/sey.json) | [Yes](data/min/sey.json) |
| shk | Shilluk | [shk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shk) | [Yes](data/all/shk.json) | [Yes](data/top/shk.json) | [Yes](data/min/shk.json) |
| shn | Shan | [sjn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sjn) | [Yes](data/all/shn.json) | [Yes](data/top/shn.json) | [Yes](data/min/shn.json) |
| shp | Shipibo-Conibo | [shp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shp) | [Yes](data/all/shp.json) | [Yes](data/top/shp.json) | [Yes](data/min/shp.json) |
| sin | Sinhala | [snh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=snh) | [Yes](data/all/sin.json) | [Yes](data/top/sin.json) | [Yes](data/min/sin.json) |
| sja | Epena | [1126](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1126) | No | No | No |
| sjk_deva | Seke | [skj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=skj) | No | No | No |
| skr | Seraiki | [skr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=skr) | [Yes](data/all/skr.json) | [Yes](data/top/skr.json) | [Yes](data/min/skr.json) |
| slk | Slovak | [slo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=slo) | [Yes](data/all/slk.json) | [Yes](data/top/slk.json) | [Yes](data/min/slk.json) |
| slr | Salar | [slr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=slr) | No | No | No |
| slv | Slovenian | [slv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=slv) | [Yes](data/all/slv.json) | [Yes](data/top/slv.json) | [Yes](data/min/slv.json) |
| sme | Saami, North | [lpi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lpi) | [Yes](data/all/sme.json) | [Yes](data/top/sme.json) | [Yes](data/min/sme.json) |
| smo | Samoan | [smy](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=smy) | [Yes](data/all/smo.json) | [Yes](data/top/smo.json) | [Yes](data/min/smo.json) |
| sna | Shona | [shd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shd) | [Yes](data/all/sna.json) | [Yes](data/top/sna.json) | [Yes](data/min/sna.json) |
| snd | Sindhi | [snd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=snd) | No | No | No |
| snk | Soninke | [snn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=snn) | [Yes](data/all/snk.json) | [Yes](data/top/snk.json) | [Yes](data/min/snk.json) |
| snn | Siona | [1121](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1121) | [Yes](data/all/snn.json) | [Yes](data/top/snn.json) | [Yes](data/min/snn.json) |
| som | Somali | [som](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=som) | [Yes](data/all/som.json) | [Yes](data/top/som.json) | [Yes](data/min/som.json) |
| sot | Sotho, Southern | [sso](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sso) | [Yes](data/all/sot.json) | [Yes](data/top/sot.json) | [Yes](data/min/sot.json) |
| spa | Spanish | [spn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=spn) | [Yes](data/all/spa.json) | [Yes](data/top/spa.json) | [Yes](data/min/spa.json) |
| src | Sardinian, Logudorese | [srd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=srd) | [Yes](data/all/src.json) | [Yes](data/top/src.json) | [Yes](data/min/src.json) |
| srp_cyrl | Serbian (Cyrillic) | [src5](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src5) | [Yes](data/all/srp_cyrl.json) | [Yes](data/top/srp_cyrl.json) | [Yes](data/min/srp_cyrl.json) |
| srp_latn | Serbian (Latin) | [src3](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src3) | [Yes](data/all/srp_latn.json) | [Yes](data/top/srp_latn.json) | [Yes](data/min/srp_latn.json) |
| srq | Sirionó | [srq](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=srq) | No | No | No |
| srr | Serer-Sine | [ses](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ses) | [Yes](data/all/srr.json) | [Yes](data/top/srr.json) | [Yes](data/min/srr.json) |
| ssw | Swati | [swz1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swz1) | [Yes](data/all/ssw.json) | [Yes](data/top/ssw.json) | [Yes](data/min/ssw.json) |
| suk | Sukuma | [sua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sua) | [Yes](data/all/suk.json) | [Yes](data/top/suk.json) | [Yes](data/min/suk.json) |
| sun | Sunda | [suo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=suo) | [Yes](data/all/sun.json) | [Yes](data/top/sun.json) | [Yes](data/min/sun.json) |
| sus | Susu | [sus](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sus) | [Yes](data/all/sus.json) | [Yes](data/top/sus.json) | [Yes](data/min/sus.json) |
| suz | Sunwar | [suz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=suz) | No | No | No |
| suz_1 | Sunwar (2) | [suz1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=suz1) | No | No | No |
| swb | Comorian, Maore | [swb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swb) | [Yes](data/all/swb.json) | [Yes](data/top/swb.json) | [Yes](data/min/swb.json) |
| swe | Swedish | [swd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swd) | [Yes](data/all/swe.json) | [Yes](data/top/swe.json) | [Yes](data/min/swe.json) |
| swh | Swahili | [swa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swa) | [Yes](data/all/swh.json) | [Yes](data/top/swh.json) | [Yes](data/min/swh.json) |
| tah | Tahitian | [tht](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tht) | [Yes](data/all/tah.json) | [Yes](data/top/tah.json) | [Yes](data/min/tah.json) |
| taj | Tamang, Eastern | [taj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=taj) | [Yes](data/all/taj.json) | No | No |
| tam | Tamil | [tcv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tcv) | [Yes](data/all/tam.json) | [Yes](data/top/tam.json) | [Yes](data/min/tam.json) |
| tam_LK | Tamil (Sri Lanka) | No | [Yes](data/all/tam_LK.json) | [Yes](data/top/tam_LK.json) | [Yes](data/min/tam_LK.json) |
| taq | Tamasheq | [taq](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=taq) | No | No | No |
| taq_tfng | Tamasheq (Tifinagh) | [taq](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=taq) | No | No | No |
| tat | Tatar | [ttr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ttr) | [Yes](data/all/tat.json) | [Yes](data/top/tat.json) | [Yes](data/min/tat.json) |
| tbz | Ditammari | [tbz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tbz) | [Yes](data/all/tbz.json) | [Yes](data/top/tbz.json) | [Yes](data/min/tbz.json) |
| tca | Ticuna | [tca](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tca) | [Yes](data/all/tca.json) | [Yes](data/top/tca.json) | [Yes](data/min/tca.json) |
| tel | Telugu | [tcw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tcw) | [Yes](data/all/tel.json) | [Yes](data/top/tel.json) | [Yes](data/min/tel.json) |
| tem | Themne | [tej](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tej) | [Yes](data/all/tem.json) | [Yes](data/top/tem.json) | [Yes](data/min/tem.json) |
| tet | Tetun | [ttm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ttm) | [Yes](data/all/tet.json) | [Yes](data/top/tet.json) | [Yes](data/min/tet.json) |
| tgk | Tajiki | [pet](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pet) | [Yes](data/all/tgk.json) | [Yes](data/top/tgk.json) | [Yes](data/min/tgk.json) |
| tgl | Tagalog | [tgl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tgl) | [Yes](data/all/tgl.json) | [Yes](data/top/tgl.json) | [Yes](data/min/tgl.json) |
| tgl_tglg | Tagalog (Tagalog) | No | [Yes](data/all/tgl_tglg.json) | No | No |
| tha | Thai | [thj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=thj) | [Yes](data/all/tha.json) | [Yes](data/top/tha.json) | [Yes](data/min/tha.json) |
| tha2 | Thai (2) | No | [Yes](data/all/tha2.json) | [Yes](data/top/tha2.json) | [Yes](data/min/tha2.json) |
| thf | Thangmi | [thf](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=thf) | No | No | No |
| thl | Tharu, Dangaura | [thl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=thl) | No | No | No |
| ths | Thakali | [ths](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ths) | No | No | No |
| tir | Tigrigna | [tgn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tgn) | [Yes](data/all/tir.json) | [Yes](data/top/tir.json) | [Yes](data/min/tir.json) |
| tiv | Tiv | [tiv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tiv) | [Yes](data/all/tiv.json) | [Yes](data/top/tiv.json) | [Yes](data/min/tiv.json) |
| tji | Tujia, Nothern | [tji](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tji) | No | No | No |
| tly | Talysh | [tly](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tly) | [Yes](data/all/tly.json) | [Yes](data/top/tly.json) | [Yes](data/min/tly.json) |
| tna | Tacana | [tna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tna) | No | No | No |
| tob | Toba | [tob](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tob) | [Yes](data/all/tob.json) | [Yes](data/top/tob.json) | [Yes](data/min/tob.json) |
| toi | Tonga | [toi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=toi) | [Yes](data/all/toi.json) | [Yes](data/top/toi.json) | [Yes](data/min/toi.json) |
| toj | Tojolabal | [toj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=toj) | [Yes](data/all/toj.json) | [Yes](data/top/toj.json) | [Yes](data/min/toj.json) |
| ton | Tongan | [tov](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tov) | [Yes](data/all/ton.json) | [Yes](data/top/ton.json) | [Yes](data/min/ton.json) |
| top | Totonac, Papantla | [top](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=top) | [Yes](data/all/top.json) | [Yes](data/top/top.json) | [Yes](data/min/top.json) |
| tpi | Tok Pisin | [pdg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pdg) | [Yes](data/all/tpi.json) | [Yes](data/top/tpi.json) | [Yes](data/min/tpi.json) |
| trn | Trinitario | [trn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=trn) | No | No | No |
| tsn | Tswana | [tsw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tsw) | [Yes](data/all/tsn.json) | [Yes](data/top/tsn.json) | [Yes](data/min/tsn.json) |
| tso_MZ | Tsonga (Mozambique) | [tso](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tso) | [Yes](data/all/tso_MZ.json) | [Yes](data/top/tso_MZ.json) | [Yes](data/min/tso_MZ.json) |
| tso_ZW | Tsonga (Zimbabwe) | [tso1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tso1) | [Yes](data/all/tso_ZW.json) | [Yes](data/top/tso_ZW.json) | [Yes](data/min/tso_ZW.json) |
| tsz | Purepecha | [1112](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1112) | [Yes](data/all/tsz.json) | [Yes](data/top/tsz.json) | [Yes](data/min/tsz.json) |
| tuk_cyrl | Turkmen (Cyrillic) | [tck](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tck) | [Yes](data/all/tuk_cyrl.json) | [Yes](data/top/tuk_cyrl.json) | [Yes](data/min/tuk_cyrl.json) |
| tuk_latn | Turkmen (Latin) | No | [Yes](data/all/tuk_latn.json) | [Yes](data/top/tuk_latn.json) | [Yes](data/min/tuk_latn.json) |
| tur | Turkish | [trk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=trk) | [Yes](data/all/tur.json) | [Yes](data/top/tur.json) | [Yes](data/min/tur.json) |
| tyv | Tuva | [tyv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tyv) | [Yes](data/all/tyv.json) | [Yes](data/top/tyv.json) | [Yes](data/min/tyv.json) |
| tzc | Tzotzil (Chamula) | [tzc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzc) | [Yes](data/all/tzc.json) | [Yes](data/top/tzc.json) | [Yes](data/min/tzc.json) |
| tzh | Tzeltal, Oxchuc | [tzc1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzc1) | [Yes](data/all/tzh.json) | [Yes](data/top/tzh.json) | [Yes](data/min/tzh.json) |
| tzm | Tamazight, Central Atlas | [tzm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzm) | [Yes](data/all/tzm.json) | [Yes](data/top/tzm.json) | [Yes](data/min/tzm.json) |
| tzm_tfng | Tamazight, Central Atlas (Tifinagh) | No | [Yes](data/all/tzm_tfng.json) | No | No |
| uig_arab | Uyghur (Arabic) | [uig](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uig) | [Yes](data/all/uig_arab.json) | [Yes](data/top/uig_arab.json) | [Yes](data/min/uig_arab.json) |
| uig_latn | Uyghur (Latin) | No | [Yes](data/all/uig_latn.json) | [Yes](data/top/uig_latn.json) | [Yes](data/min/uig_latn.json) |
| ukr | Ukrainian | [ukr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ukr) | [Yes](data/all/ukr.json) | [Yes](data/top/ukr.json) | [Yes](data/min/ukr.json) |
| umb | Umbundu | [mnf](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mnf) | [Yes](data/all/umb.json) | [Yes](data/top/umb.json) | [Yes](data/min/umb.json) |
| unr | Mundari | [unr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=unr) | No | No | No |
| ura | Urarina | [ura](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ura) | [Yes](data/all/ura.json) | [Yes](data/top/ura.json) | [Yes](data/min/ura.json) |
| urd | Urdu | [urd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=urd) | [Yes](data/all/urd.json) | [Yes](data/top/urd.json) | [Yes](data/min/urd.json) |
| urd_2 | Urdu (2) | [urd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=urd) | [Yes](data/all/urd_2.json) | [Yes](data/top/urd_2.json) | [Yes](data/min/urd_2.json) |
| uzn_cyrl | Uzbek, Northern (Cyrillic) | [uzb1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uzb1) | [Yes](data/all/uzn_cyrl.json) | [Yes](data/top/uzn_cyrl.json) | [Yes](data/min/uzn_cyrl.json) |
| uzn_latn | Uzbek, Northern (Latin) | [uzb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uzb) | [Yes](data/all/uzn_latn.json) | [Yes](data/top/uzn_latn.json) | [Yes](data/min/uzn_latn.json) |
| vai | Vai | [vai](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vai) | [Yes](data/all/vai.json) | [Yes](data/top/vai.json) | [Yes](data/min/vai.json) |
| vay | Wayu | [vay](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vay) | No | No | No |
| vec | Venetian | [vec](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vec) | [Yes](data/all/vec.json) | [Yes](data/top/vec.json) | [Yes](data/min/vec.json) |
| ven | Venda | [tsh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tsh) | [Yes](data/all/ven.json) | [Yes](data/top/ven.json) | [Yes](data/min/ven.json) |
| vep | Veps | [vep](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vep) | [Yes](data/all/vep.json) | [Yes](data/top/vep.json) | [Yes](data/min/vep.json) |
| vie | Vietnamese | [vie](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vie) | [Yes](data/all/vie.json) | [Yes](data/top/vie.json) | [Yes](data/min/vie.json) |
| vie_han | Vietnamese (Han nom) | No | [Yes](data/all/vie_han.json) | No | No |
| vmw | Makhuwa | [vmw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vmw) | [Yes](data/all/vmw.json) | [Yes](data/top/vmw.json) | [Yes](data/min/vmw.json) |
| war | Waray-Waray | [wry](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wry) | [Yes](data/all/war.json) | [Yes](data/top/war.json) | [Yes](data/min/war.json) |
| wln | Walloon | [frn1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn1) | [Yes](data/all/wln.json) | [Yes](data/top/wln.json) | [Yes](data/min/wln.json) |
| wol | Wolof | [wol](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wol) | [Yes](data/all/wol.json) | [Yes](data/top/wol.json) | [Yes](data/min/wol.json) |
| wuu | Chinese, Wu | [wuu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wuu) | [Yes](data/all/wuu.json) | No | No |
| wwa | Waama | [ako](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ako) | [Yes](data/all/wwa.json) | [Yes](data/top/wwa.json) | [Yes](data/min/wwa.json) |
| xho | Xhosa | [xos](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=xos) | [Yes](data/all/xho.json) | [Yes](data/top/xho.json) | [Yes](data/min/xho.json) |
| xsm | Kasem | [kas](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kas) | [Yes](data/all/xsm.json) | [Yes](data/top/xsm.json) | [Yes](data/min/xsm.json) |
| xsr | Sherpa | [xsr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=xsr) | No | No | No |
| yad | Yagua | [yad](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yad) | [Yes](data/all/yad.json) | [Yes](data/top/yad.json) | [Yes](data/min/yad.json) |
| yao | Yao | [yao](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yao) | [Yes](data/all/yao.json) | [Yes](data/top/yao.json) | [Yes](data/min/yao.json) |
| yap | Yapese | [yps](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yps) | [Yes](data/all/yap.json) | [Yes](data/top/yap.json) | [Yes](data/min/yap.json) |
| ybh | Yakkha | [ybh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ybh) | No | No | No |
| ydd | Yiddish, Eastern | [ydd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ydd) | [Yes](data/all/ydd.json) | [Yes](data/top/ydd.json) | [Yes](data/min/ydd.json) |
| ykg | Yukaghir, Northern | [ykg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ykg) | [Yes](data/all/ykg.json) | [Yes](data/top/ykg.json) | [Yes](data/min/ykg.json) |
| yor | Yoruba | [yor](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yor) | [Yes](data/all/yor.json) | [Yes](data/top/yor.json) | [Yes](data/min/yor.json) |
| yrk | Nenets | [yrk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yrk) | No | No | No |
| yua | Maya, Yucatán | [yua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yua) | [Yes](data/all/yua.json) | [Yes](data/top/yua.json) | [Yes](data/min/yua.json) |
| yue | Chinese, Yue | [yue](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yue) | [Yes](data/all/yue.json) | No | No |
| yuz | Yuracare | [yuz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yuz) | No | No | No |
| zam | Zapotec, Miahuatlán | [zam](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zam) | [Yes](data/all/zam.json) | [Yes](data/top/zam.json) | [Yes](data/min/zam.json) |
| zdj | Comorian, Ngazidja | [zdj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zdj) | [Yes](data/all/zdj.json) | [Yes](data/top/zdj.json) | [Yes](data/min/zdj.json) |
| zgh | Tamazight, Standard Morocan | [ama](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ama) | [Yes](data/all/zgh.json) | [Yes](data/top/zgh.json) | [Yes](data/min/zgh.json) |
| zro | Záparo | [1124](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1124) | [Yes](data/all/zro.json) | [Yes](data/top/zro.json) | [Yes](data/min/zro.json) |
| ztu | Zapotec, Güilá | [ztu1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ztu1) | [Yes](data/all/ztu.json) | [Yes](data/top/ztu.json) | [Yes](data/min/ztu.json) |
| zul | Zulu | [zuu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zuu) | [Yes](data/all/zul.json) | [Yes](data/top/zul.json) | [Yes](data/min/zul.json) |

<!--support end-->

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/wooorm/trigrams.svg

[build]: https://travis-ci.org/wooorm/trigrams

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/trigrams.svg

[coverage]: https://codecov.io/github/wooorm/trigrams

[downloads-badge]: https://img.shields.io/npm/dm/trigrams.svg

[downloads]: https://www.npmjs.com/package/trigrams

[author]: https://wooorm.com

[license]: license

[npm]: https://docs.npmjs.com/cli/install

[unicode]: https://www.unicode.org/udhr/

[udhr]: https://www.ohchr.org/EN/UDHR/Pages/UDHRIndex.aspx

[wooorm-udhr]: https://github.com/wooorm/udhr
