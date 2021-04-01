# trigrams

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]

Trigrams for 400+ languages.

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install trigrams
```

## API

This package exports the following identifiers: `top`, `min`.
There is no default export.

### `top()`

```js
import {top} from 'trigrams'

console.log((await top()).pam)
```

Yields:

```js
{
  'isa': 6,
  'upa': 6,
  'i k': 6,
  // …
  'ang': 273,
  'ing': 282,
  'ng ': 572
}
```

Returns a promise resolving to an object mapping [*UDHR in Unicode*][unicode]
codes to objects mapping the top 300 trigrams to occurrence counts.

### `min()`

```js
import {min} from 'trigrams'

console.log((await min()).nld)
```

Yields:

```js
[
  ' ar',
  'eer',
  'tij',
  // …
  'de ',
  'an ',
  'en '
]
```

A bit like `top`, but returns a promise resolving to arrays containing the top
300 trigrams sorted from least occurring to most occurring.

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

| Code | Name | OHCHR |
| - | - | - |
| 007 | Sãotomense | [1128](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1128) |
| 008 | Crioulo, Upper Guinea (008) | No |
| 009 | Mbundu (009) | No |
| 010 | Tetun Dili | No |
| 011 | Umbundu (011) | No |
| 012 | (Bizisa) | [bz1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bz1) |
| 013 | (Mijisa) | [bz2](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bz2) |
| 014 | (Maiunan) | [ma1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ma1) |
| 016 | (Minjiang, spoken) | [mi1_spok](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mi1_spok) |
| 017 | (Minjiang, written) | [mi1_written](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mi1_written) |
| 020 | Drung | [ty1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ty1) |
| 026 | (Yeonbyeon) | [ye1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ye1) |
| aar | Afar | [aar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aar) |
| abk | Abkhaz | [abk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=abk) |
| ace | Aceh | [atj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=atj) |
| acu | Achuar-Shiwiar | [acu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=acu) |
| acu_1 | Achuar-Shiwiar (1) | [jiv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jiv) |
| ada | Dangme | [gac1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gac1) |
| ady | Adyghe | [ady](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ady) |
| afr | Afrikaans | [afk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=afk) |
| agr | Aguaruna | [agr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=agr) |
| aii | Assyrian Neo-Aramaic | [aii](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aii) |
| ajg | Aja | [ajg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ajg) |
| aka_akuapem | Twi (Akuapem) | [tws1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tws1) |
| aka_asante | Twi (Asante) | [ass](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ass) |
| aka_fante | Fante | [tws3](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tws3) |
| als | Albanian, Tosk | [aln](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aln) |
| alt | Altai, Southern | [alt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=alt) |
| amc | Amahuaca | [amc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amc) |
| ame | Yaneshaʼ | [ame](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ame) |
| amh | Amharic | [amh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amh) |
| ami | Amis | [ami](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ami) |
| amr | Amarakaeri | [amr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amr) |
| arb | Arabic, Standard | [arz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arz) |
| arl | Arabela | [arl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arl) |
| arn | Mapudungun | [aru](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aru) |
| ast | Asturian | [aub](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aub) |
| auc | Waorani | [1127](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1127) |
| auv | Occitan (Auvergnat) | [auv1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=auv1) |
| ayr | Aymara, Central | [aym](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aym) |
| azj_cyrl | Azerbaijani, North (Cyrillic) | [azb1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=azb1) |
| azj_latn | Azerbaijani, North (Latin) | [azb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=azb) |
| bam | Bamanankan | [bra](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bra) |
| ban | Bali | [bzc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bzc) |
| bax | Bamun | [bax](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bax) |
| bba | Baatonum | [bba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bba) |
| bci | Baoulé | [bci](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bci) |
| bcl | Bicolano, Central | [bkl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bkl) |
| bel | Belarusan | [ruw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ruw) |
| bem | Bemba | [bem](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bem) |
| ben | Bengali | [bng](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bng) |
| bfa | Bari | [bfa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bfa) |
| bho | Bhojpuri | [bhj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bhj) |
| bin | Edo | [edo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=edo) |
| bis | Bislama | [bcy](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bcy) |
| blt | Tai Dam | No |
| blu | Hmong Njua | [blu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=blu) |
| boa | Bora | [boa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=boa) |
| bod | Tibetan, Central | [tic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tic) |
| bos_cyrl | Bosnian (Cyrillic) | [src4](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src4) |
| bos_latn | Bosnian (Latin) | [src1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src1) |
| bre | Breton | [brt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=brt) |
| btb | Bulu | [btb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=btb) |
| buc | Bushi | [buc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=buc) |
| bug | Bugis | [bpr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bpr) |
| bul | Bulgarian | [blg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=blg) |
| cab | Garifuna | [cab](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cab) |
| cak | Kaqchikel, Central | [cak1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cak1) |
| cat | Catalan-Valencian-Balear | [cln](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cln) |
| cbi | Chachi | [1122](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1122) |
| cbr | Cashibo-Cacataibo | [cbr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbr) |
| cbs | Cashinahua | [cbs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbs) |
| cbt | Chayahuita | [cbt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbt) |
| cbu | Candoshi-Shapra | [cbu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbu) |
| ccx | Zhuang, Yongbei | [ccx](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ccx) |
| ceb | Cebuano | [ceb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ceb) |
| ces | Czech | [czc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=czc) |
| cha | Chamorro | [cjd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjd) |
| chj | Chinantec, Ojitlán | [chj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chj) |
| chk | Chuukese | [tru1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tru1) |
| chr_cased | Cherokee (cased) | No |
| chr_uppercase | Cherokee (uppercase) | No |
| cic | Chickasaw | [cic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cic) |
| cjk | Chokwe | [cjk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjk) |
| cjk_AO | Chokwe (Angola) | [cjk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjk) |
| cjs | Shor | [cjs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjs) |
| ckb | Kurdish, Central | [kdb1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdb1) |
| cnh | Chin, Haka | [hak](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hak) |
| cni | Asháninka | [cni](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cni) |
| cof | Colorado | [cof](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cof) |
| cos | Corsican | [coi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=coi) |
| cot | Caquinte | [cot](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cot) |
| cpu | Ashéninka, Pichis | [cpu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cpu) |
| crh | Crimean Tatar | [crh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=crh) |
| crs | Seselwa Creole French | [crs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=crs) |
| csa | Chinantec, Chiltepec | [csa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=csa) |
| csw | Cree, Swampy | [crm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=crm) |
| ctd | Chin, Tedim | [tid](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tid) |
| cym | Welsh | [wls](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wls) |
| dag | Dagbani | [dag](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dag) |
| dan | Danish | [dns](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dns) |
| ddn | Dendi | [den](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=den) |
| deu_1901 | German, Standard (1901) | [ger](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ger) |
| deu_1996 | German, Standard (1996) | No |
| dga | Dagaare, Southern | [dga](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dga) |
| dip | Dinka, Northeastern | [dinka](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dinka) |
| div | Maldivian | [div](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=div) |
| dyo | Jola-Fonyi | [dyo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dyo) |
| dyu | Jula | [dyu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dyu) |
| dzo | Dzongkha | [dzo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dzo) |
| ell_monotonic | Greek (monotonic) | [grk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=grk) |
| ell_polytonic | Greek (polytonic) | No |
| emk | Maninkakan, Eastern | [mni](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mni) |
| eml | Romagnolo | [eml](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eml) |
| eng | English | [eng](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eng) |
| epo | Esperanto | [1115](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1115) |
| ese | Ese Ejja | [ese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ese) |
| est | Estonian | [est](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=est) |
| eus | Basque | [bsq](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bsq) |
| eve | Even | [eve](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eve) |
| evn | Evenki | [evn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=evn) |
| ewe | Éwé | [ewe](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ewe) |
| fao | Faroese | [fae](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fae) |
| fij | Fijian | [fji](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fji) |
| fin | Finnish | [fin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fin) |
| fkv | Finnish, Kven | [fkv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fkv) |
| flm | Chin, Falam | [fal](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fal) |
| fon | Fon | [foa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=foa) |
| fra | French | [frn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn) |
| fri | Frisian, Western | [fri](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fri) |
| fuf | Pular | [fuf](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fuf) |
| fur | Friulian | [frl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frl) |
| fuv | Fulfulde, Nigerian | [fum](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fum) |
| fuv2 | Fulfulde, Nigerian (2) | [fuv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fuv) |
| gaa | Ga | [gac2](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gac2) |
| gag | Gagauz | [gag](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gag) |
| gax | Oromo, Borana-Arsi-Guji | [gax](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gax) |
| gjn | Gonja | [dum](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dum) |
| gkp | Kpelle, Guinea | [pke](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pke) |
| gla | Gaelic, Scottish | [gls](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gls) |
| gld | Nanai | [gld](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gld) |
| gle | Gaelic, Irish | [gli1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gli1) |
| glg | Galician | [gln](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gln) |
| glv | Manx | No |
| gsw1 | Alemannisch (Elsassisch) | [gsw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gsw) |
| guc | Wayuu | [guc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=guc) |
| gug | Guaraní, Paraguayan | [gun](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gun) |
| guj | Gujarati | [gjr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gjr) |
| guu | Yanomamö | [guu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=guu) |
| gyr | Guarayu | [gua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gua) |
| hat_kreyol | Haitian Creole French (Kreyol) | [hat](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hat) |
| hat_popular | Haitian Creole French (Popular) | [hat1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hat1) |
| hau_NE | Hausa (Niger) | [gej](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gej) |
| hau_NG | Hausa (Nigeria) | [gej](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gej) |
| haw | Hawaiian | [hwi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hwi) |
| hea | Hmong, Northern Qiandong | [hea](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hea) |
| heb | Hebrew | [hbr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hbr) |
| hil | Hiligaynon | [hil](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hil) |
| hin | Hindi | [hnd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hnd) |
| hlt | Chin, Matu | [hlt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hlt) |
| hms | Hmong, Southern Qiandong | [hms](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hms) |
| hna | Mina | [hna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hna) |
| hni | Hani | [hni](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hni) |
| hns | Hindustani, Sarnami | [hns](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hns) |
| hrv | Croatian | [src2](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src2) |
| hsb | Sorbian, Upper | [wee](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wee) |
| hsf | Huastec (Sierra de Otontepec) | [hus](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hus) |
| hun | Hungarian | [hng](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hng) |
| hus | Huastec (Veracruz) | [1118](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1118) |
| huu | Huitoto, Murui | [huu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=huu) |
| hva | Huastec (San Luís Potosí) | [hva](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hva) |
| hye | Armenian | [arm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arm) |
| ibb | Ibibio | [ibb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ibb) |
| ibo | Igbo | [igr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=igr) |
| ido | Ido | [1120](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1120) |
| ike | Inuktitut, Eastern Canadian | [esb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=esb) |
| ilo | Ilocano | [ilo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ilo) |
| ina | Interlingua | [1119](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1119) |
| ind | Indonesian | [inz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=inz) |
| isl | Icelandic | [ice](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ice) |
| ita | Italian | [itn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=itn) |
| jav | Javanese (Latin) | [jan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jan) |
| jav_java | Javanese (Javanese) | No |
| jiv | Shuar | [1125](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1125) |
| jpn | Japanese | [jpn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jpn) |
| kal | Inuktitut, Greenlandic | [esg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=esg) |
| kan | Kannada | [kjv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kjv) |
| kat | Georgian | [geo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=geo) |
| kaz | Kazakh | [kaz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kaz) |
| kbd | Kabardian | [kbd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kbd) |
| kbp | Kabiyé | [kbp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kbp) |
| kde | Makonde | [kde](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kde) |
| kdh | Tem | [kdh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdh) |
| kea | Kabuverdianu | [kea](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kea) |
| kek | Q'eqchi' | [1116](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1116) |
| kha | Khasi | [kha](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kha) |
| khk | Mongolian, Halh (Cyrillic) | [khk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=khk) |
| khm | Khmer, Central | [khm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=khm) |
| kin | Rwanda | [rua1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rua1) |
| kir | Kirghiz | [kdo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdo) |
| kjh | Khakas | [kjh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kjh) |
| kkh_lana | Khün | No |
| kmb | Mbundu | [mlo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mlo) |
| kmr | Kurdish, Northern | [kur](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kur) |
| knc | Kanuri, Central | [kph](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kph) |
| kng | Koongo | [kon](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kon) |
| kng_AO | Koongo (Angola) | [kng](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kng) |
| koi | Komi-Permyak | [koi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=koi) |
| koo | Konjo | [koo1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=koo1) |
| kor | Korean | [kkn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kkn) |
| kqn | Kaonde | [kqn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kqn) |
| kqs | Kissi, Northern | [kqs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kqs) |
| kri | Krio | [kri](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kri) |
| krl | Karelian | [krl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=krl) |
| ktu | Kituba | [ktu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ktu) |
| kwi | Awa-Cuaiquer | [kwi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kwi) |
| lad | Ladino | [lad](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lad) |
| lao | Lao | [nol](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nol) |
| lat | Latin | [ltn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ltn) |
| lat_1 | Latin (1) | [ltn1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ltn1) |
| lav | Latvian | [lat](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lat) |
| lia | Limba, West-Central | [lia](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lia) |
| lij | Ligurian | [lij](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lij) |
| lin | Lingala | [lin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lin) |
| lin_tones | Lingala (tones) | No |
| lit | Lithuanian | [lit](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lit) |
| lld | Ladin | [lld](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lld) |
| lnc | Occitan (Languedocien) | [prv1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prv1) |
| lns | Lamnso' | [nso](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nso) |
| lob | Lobi | [lob](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lob) |
| lot | Otuho | [lot](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lot) |
| loz | Lozi | [lbm1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lbm1) |
| ltz | Luxembourgeois | [lux](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lux) |
| lua | Luba-Kasai | [lub](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lub) |
| lue | Luvale | [lue](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lue) |
| lug | Ganda | [lap1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lap1) |
| lun | Lunda | [mlo1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mlo1) |
| lus | Mizo | [lus](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lus) |
| mad | Madura | [mhj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mhj) |
| mag | Magahi | [mqm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mqm) |
| mah | Marshallese | [mzm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mzm) |
| mai | Maithili | No |
| mal | Malayalam | [mjs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mjs) |
| mal_chillus | Malayalam | [mjs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mjs) |
| mam | Mam, Northern | [mam](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mam) |
| mar | Marathi | [mrt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mrt) |
| maz | Mazahua Central | [maz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=maz) |
| mcd | Sharanahua | [mcd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mcd) |
| mcf | Matsés | [mcf](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mcf) |
| men | Mende | [mfy](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mfy) |
| mfq | Moba | [mfq](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mfq) |
| mic | Micmac | [mic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mic) |
| min | Minangkabau | [mpu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mpu) |
| miq | Mískito | [miq](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=miq) |
| mkd | Macedonian | [mkj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mkj) |
| mlt | Maltese | [mls](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mls) |
| mly_arab | Malay (Arabic) | No |
| mly_latn | Malay (Latin) | [mli](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mli) |
| mnw | Mon | No |
| mos | Mòoré | [mhm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mhm) |
| mri | Maori | [mbf](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mbf) |
| mto | Mixe, Totontepec | [mto](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mto) |
| mxi | Mozarabic | [moz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=moz) |
| mxv | Mixtec, Metlatónoc | [mxv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mxv) |
| mya | Burmese | [bms](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bms) |
| mzi | Mazatec, Ixcatlán | [mao](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mao) |
| nav | Navajo | [nav](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nav) |
| nba | Nyemba | [nba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nba) |
| nbl | Ndebele | [nel](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nel) |
| ndo | Ndonga | [1114](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1114) |
| nds | Saxon, Low | [ige](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ige) |
| nep | Nepali | [nep](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nep) |
| nhn | Nahuatl, Central | [nhn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nhn) |
| nio | Nganasan | [nio](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nio) |
| niu | Niue | [niu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=niu) |
| njo | Naga, Ao | [njo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=njo) |
| nku | Kulango, Bouna | [kou](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kou) |
| nld | Dutch | [dut](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dut) |
| nno | Norwegian, Nynorsk | [nrn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nrn) |
| nob | Norwegian, Bokmål | [nrr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nrr) |
| not | Nomatsiguenga | [not](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=not) |
| nso | Sotho, Northern | [srt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=srt) |
| nya_chechewa | Nyanja (Chechewa) | [nyj1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyj1) |
| nya_chinyanja | Nyanja (Chinyanja) | [nyj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyj) |
| nym | Nyamwezi | [nyz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyz) |
| nyn | Nyankore | [nyn1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyn1) |
| nzi | Nzema | [nze](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nze) |
| oaa | Orok | [oaa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=oaa) |
| oci_1 | Occitan (Francoprovençal, Fribourg) | [Fr3](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Fr3) |
| oci_2 | Occitan (Francoprovençal, Savoie) | [fr2](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fr2) |
| oci_3 | Occitan (Francoprovençal, Vaud) | [fr4](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fr4) |
| oci_4 | Occitan (Francoprovençal, Valais) | [frp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frp) |
| ojb | Ojibwa, Northwestern | [ojb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ojb) |
| oki | Okiek | [oki](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=oki) |
| orh | Oroqen | [orh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=orh) |
| oss | Osetin | [ose](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ose) |
| ote | Otomi, Mezquital | [1111](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1111) |
| pam | Pampangan | [pmp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pmp) |
| pan | Panjabi, Eastern | [pnj1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pnj1) |
| pap | Papiamentu | [pap](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pap) |
| pau | Palauan | [plu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=plu) |
| pbb | Páez | [pbb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pbb) |
| pbu | Pashto, Northern | [pbu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pbu) |
| pcd | Picard | [frn2](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn2) |
| pcm | Pidgin, Nigerian | [pcm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pcm) |
| pes_1 | Farsi, Western | [prs](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prs) |
| pes_2 | Dari | [prs1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prs1) |
| pis | Pijin | [pis](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pis) |
| piu | Pintupi-Luritja | [piu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=piu) |
| plt | Malagasy, Plateau | [mex](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mex) |
| pnb | Panjabi, Western | No |
| pol | Polish | [pql](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pql) |
| pon | Pohnpeian | [pnf](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pnf) |
| por_BR | Portuguese (Brazil) | No |
| por_PT | Portuguese (Portugal) | [por](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=por) |
| pov | Crioulo, Upper Guinea | [gbc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gbc) |
| ppl | Pipil | [ppl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ppl) |
| prv | Occitan | [pro](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pro) |
| quc | K'iche', Central | [1117](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1117) |
| qud | Quechua (Unified Quichua, old Hispanic orthography) | [qud1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qud1) |
| qug | Quichua, Chimborazo Highland | [qug](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qug) |
| quy | Quechua, Ayacucho | [quy](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=quy) |
| quz | Quechua, Cusco | [quz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=quz) |
| qva | Quechua, Ambo-Pasco | [qeg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qeg) |
| qvc | Quechua, Cajamarca | [qnt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qnt) |
| qvh | Quechua, Huamalíes-Dos de Mayo Huánuco | [qej](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qej) |
| qvm | Quechua, Margos-Yarowilca-Lauricocha | [qei](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qei) |
| qvn | Quechua, North Junín | [qju](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qju) |
| qwh | Quechua, Huaylas Ancash | [qan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qan) |
| qxa | Quechua, South Bolivian | [qec1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qec1) |
| qxn | Quechua, Northern Conchucos Ancash | [qed](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qed) |
| qxu | Quechua, Arequipa-La Unión | [qar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qar) |
| rar | Rarotongan | [rrt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rrt) |
| rmn | Romani, Balkan | [rmn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmn) |
| rmn_1 | Romani, Balkan (1) | [rmn1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmn1) |
| rmy | Aromanian | [rmy1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmy1) |
| roh | Romansch | No |
| roh_puter | Romansch (Puter) | No |
| roh_rumgr | Romansch (Grischun) | [rhe](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rhe) |
| roh_surmiran | Romansch (Surmiran) | No |
| roh_sursilv | Romansch (Sursilvan) | No |
| roh_sutsilv | Romansch (Sutsilvan) | No |
| roh_vallader | Romansch (Vallader) | No |
| ron_1953 | Romanian (1953) | [rum](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rum) |
| ron_1993 | Romanian (1993) | No |
| ron_2006 | Romanian (2006) | No |
| run | Rundi | [rud1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rud1) |
| rus | Russian | [rus](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rus) |
| sag | Sango | [saj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=saj) |
| sah | Yakut | [sah](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sah) |
| san | Sanskrit | [skt](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=skt) |
| sco | Scots | [sco](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sco) |
| sey | Secoya | [1123](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1123) |
| shk | Shilluk | [shk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shk) |
| shn | Shan | [sjn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sjn) |
| shp | Shipibo-Conibo | [shp](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shp) |
| sin | Sinhala | [snh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=snh) |
| skr | Seraiki | [skr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=skr) |
| slk | Slovak | [slo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=slo) |
| slv | Slovenian | [slv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=slv) |
| sme | Saami, North | [lpi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lpi) |
| smo | Samoan | [smy](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=smy) |
| sna | Shona | [shd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shd) |
| snk | Soninke | [snn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=snn) |
| snn | Siona | [1121](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1121) |
| som | Somali | [som](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=som) |
| sot | Sotho, Southern | [sso](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sso) |
| spa | Spanish | [spn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=spn) |
| src | Sardinian, Logudorese | [srd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=srd) |
| srp_cyrl | Serbian (Cyrillic) | [src5](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src5) |
| srp_latn | Serbian (Latin) | [src3](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src3) |
| srr | Serer-Sine | [ses](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ses) |
| ssw | Swati | [swz1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swz1) |
| suk | Sukuma | [sua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sua) |
| sun | Sunda | [suo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=suo) |
| sus | Susu | [sus](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sus) |
| swb | Comorian, Maore | [swb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swb) |
| swe | Swedish | [swd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swd) |
| swh | Swahili | [swa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swa) |
| tah | Tahitian | [tht](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tht) |
| tam | Tamil | [tcv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tcv) |
| tam_LK | Tamil (Sri Lanka) | No |
| tat | Tatar | [ttr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ttr) |
| tbz | Ditammari | [tbz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tbz) |
| tca | Ticuna | [tca](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tca) |
| tel | Telugu | [tcw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tcw) |
| tem | Themne | [tej](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tej) |
| tet | Tetun | [ttm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ttm) |
| tgk | Tajiki | [pet](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pet) |
| tgl | Tagalog | [tgl](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tgl) |
| tha | Thai | [thj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=thj) |
| tha2 | Thai (2) | No |
| tir | Tigrigna | [tgn](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tgn) |
| tiv | Tiv | [tiv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tiv) |
| tly | Talysh | [tly](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tly) |
| tob | Toba | [tob](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tob) |
| toi | Tonga | [toi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=toi) |
| toj | Tojolabal | [toj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=toj) |
| ton | Tongan | [tov](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tov) |
| top | Totonac, Papantla | [top](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=top) |
| tpi | Tok Pisin | [pdg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pdg) |
| tsn | Tswana | [tsw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tsw) |
| tso_MZ | Tsonga (Mozambique) | [tso](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tso) |
| tso_ZW | Tsonga (Zimbabwe) | [tso1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tso1) |
| tsz | Purepecha | [1112](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1112) |
| tuk_cyrl | Turkmen (Cyrillic) | [tck](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tck) |
| tuk_latn | Turkmen (Latin) | No |
| tur | Turkish | [trk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=trk) |
| tyv | Tuva | [tyv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tyv) |
| tzc | Tzotzil (Chamula) | [tzc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzc) |
| tzh | Tzeltal, Oxchuc | [tzc1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzc1) |
| tzm | Tamazight, Central Atlas | [tzm](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzm) |
| uig_arab | Uyghur (Arabic) | [uig](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uig) |
| uig_latn | Uyghur (Latin) | No |
| ukr | Ukrainian | [ukr](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ukr) |
| umb | Umbundu | [mnf](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mnf) |
| ura | Urarina | [ura](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ura) |
| urd | Urdu | [urd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=urd) |
| urd_2 | Urdu (2) | [urd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=urd) |
| uzn_cyrl | Uzbek, Northern (Cyrillic) | [uzb1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uzb1) |
| uzn_latn | Uzbek, Northern (Latin) | [uzb](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uzb) |
| vai | Vai | [vai](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vai) |
| vec | Venetian | [vec](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vec) |
| ven | Venda | [tsh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tsh) |
| ven2 | Venda | [ven](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ven) |
| vep | Veps | [vep](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vep) |
| vie | Vietnamese | [vie](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vie) |
| vmw | Makhuwa | [vmw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vmw) |
| war | Waray-Waray | [wry](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wry) |
| wln | Walloon | [frn1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn1) |
| wol | Wolof | [wol](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wol) |
| wwa | Waama | [ako](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ako) |
| xho | Xhosa | [xos](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=xos) |
| xsm | Kasem | [kas](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kas) |
| yad | Yagua | [yad](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yad) |
| yao | Yao | [yao](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yao) |
| yap | Yapese | [yps](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yps) |
| ydd | Yiddish, Eastern | [ydd](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ydd) |
| ykg | Yukaghir, Northern | [ykg](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ykg) |
| yor | Yoruba | [yor](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yor) |
| yua | Maya, Yucatán | [yua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yua) |
| zam | Zapotec, Miahuatlán | [zam](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zam) |
| zdj | Comorian, Ngazidja | [zdj](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zdj) |
| zgh | Tamazight, Standard Morocan | [ama](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ama) |
| zro | Záparo | [1124](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1124) |
| ztu | Zapotec, Güilá | [ztu1](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ztu1) |
| zul | Zulu | [zuu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zuu) |

<!--support end-->

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/trigrams/workflows/main/badge.svg

[build]: https://github.com/wooorm/trigrams/actions

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
