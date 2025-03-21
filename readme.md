# trigrams

[![Build][badge-build-image]][badge-build-url]
[![Coverage][badge-coverage-image]][badge-coverage-url]
[![Downloads][badge-downloads-image]][badge-downloads-url]

Trigrams for 460+ languages.

## Contents

* [What is this?](#what-is-this)
* [When should I use this?](#when-should-i-use-this)
* [Install](#install)
* [Use](#use)
* [API](#api)
  * [`min()`](#min)
  * [`top()`](#top)
* [Data](#data)
* [Compatibility](#compatibility)
* [Contribute](#contribute)
* [Security](#security)
* [License](#license)

## What is this?

This package exposes all trigrams for natural languages.
Based on the most translated copyright-free document on this planet:
UDHR.

## When should I use this?

When you are dealing with natural language detection.

## Install

This package is [ESM only][github-gist-esm].
In Node.js
(version 14+, 16+),
install with [npm][npmjs-install]:

```sh
npm install trigrams
```

In Deno with [`esm.sh`][esmsh]:

```js
import {min, top} from 'https://esm.sh/trigrams@5'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {min, top} from 'https://esm.sh/trigrams@5?bundle'
</script>
```

## Use

```js
import {min, top} from 'trigrams'

console.log((await min()).nld)
console.log((await top()).pam)
```

Yields:

```js
[ // 300 top trigrams.
  ' ar',
  'eer',
  'tij',
  // …
  'de ',
  'an ',
  'en ' // Most common trigram.
]
```

```js
{ // 300 top trigrams.
  'isa': 6,
  'upa': 6,
  'i k': 6,
  // …
  'ang': 273,
  'ing': 282,
  'ng ': 572 // Most common trigram with how often it was found.
}
```

## API

This package exports the identifiers
[`min`][api-min] and
[`top`][api-top].
It exports no [TypeScript][] types.
There is no default export.

### `min()`

Get top trigrams.

###### Returns

Returns a promise resolving to arrays containing the top 300 trigrams sorted
from least occurring to most occurring
(`Promise<Record<string, Array<string>>>`).

### `top()`

Get top trigrams to occurrence counts.

###### Returns

Returns a promise resolving to an object mapping
*[UDHR in Unicode][unicode]*
codes to objects mapping the top 300 trigrams to occurrence counts
(`Promise<Record<string, Record<string, number>>>`).

## Data

The trigrams are based on the [unicode][] versions of the [universal declaration
of human rights][ohchr-udhr].

The files are created from all paragraphs made available by
[`wooorm/udhr`][github-wooorm-udhr] and do not include headings and such.

Before creating trigrams,

* the unicode characters from `\u0021` to `\u0040` (both including) are
  removed
* one or more white space characters (`\s+`) are replaced with a single space
* alphabetic characters are lower cased (`[A-Z]`)

Additionally,
the input is padded with two spaces on both sides.

<!--support start-->

| Code | Name |
| - | - |
| 007 | [Sãotomense](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1128) |
| 008 | Crioulo, Upper Guinea (008) |
| 009 | Mbundu (009) |
| 010 | Tetun Dili |
| 011 | Umbundu (011) |
| 013 | [(Mijisa)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bz2) |
| 014 | [(Maiunan)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ma1) |
| 016 | [(Minjiang, spoken)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mi1_spok) |
| 017 | [(Minjiang, written)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mi1_written) |
| 020 | [Drung](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ty1) |
| 021 | [(Muzzi)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mz1) |
| 022 | [(Klau)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kl1) |
| 025 | [(Bizisa)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Bz1) |
| 026 | [(Yeonbyeon)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ye1) |
| 027 | [Gumuz](https://www.ohchr.org/en/human-rights/universal-declaration/translations/gumuz) |
| 028 | [Kafa](https://www.ohchr.org/en/human-rights/universal-declaration/translations/kafi-noono) |
| 029 | [Sidamo](https://www.ohchr.org/en/human-rights/universal-declaration/translations/sidaamu-afoo) |
| 030 | [Kituba (2)](https://www.ohchr.org/en/node/104406) |
| 032 | [South Azerbaijani](https://www.ohchr.org/en/node/104397) |
| 041 | [Latvian (2)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lat) |
| 042 | Spanish (resolution) |
| 043 | [Zarma](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zarma) |
| aar | [Afar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aar) |
| abk | [Abkhaz](https://www.ohchr.org/en/human-rights/universal-declaration/translations/abkhaz) |
| ace | [Aceh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=atj) |
| acu | [Achuar-Shiwiar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=acu) |
| acu\_1 | [Achuar-Shiwiar (1)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jiv) |
| ada | [Dangme](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gac1) |
| ady | [Adyghe](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ady) |
| afr | [Afrikaans](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=afk) |
| agr | [Aguaruna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=agr) |
| aii | [Assyrian Neo-Aramaic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aii) |
| ajg | [Aja](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ajg) |
| aka\_akuapem | [Twi (Akuapem)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tws1) |
| aka\_asante | [Twi (Asante)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ass) |
| aka\_fante | [Fante](https://www.ohchr.org/en/node/102556) |
| als | [Albanian, Tosk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aln) |
| alt | [Altai, Southern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=alt) |
| amc | [Amahuaca](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amc) |
| ame | [Yaneshaʼ](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ame) |
| amh | [Amharic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amh) |
| ami | [Amis](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ami) |
| amr | [Amarakaeri](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=amr) |
| arb | [Arabic, Standard](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arz) |
| arl | [Arabela](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arl) |
| arn | [Mapudungun](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aru) |
| ast | [Asturian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aub) |
| auc | [Waorani](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1127) |
| auv | [Occitan (Auvergnat)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=auv1) |
| ayr | [Aymara, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=aym) |
| azj\_cyrl | [Azerbaijani, North (Cyrillic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=azb1) |
| azj\_latn | [Azerbaijani, North (Latin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=azb) |
| bam | [Bamanankan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bra) |
| ban | [Bali](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bzc) |
| bax | [Bamun](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bax) |
| bba | [Baatonum](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bba) |
| bci | [Baoulé](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bci) |
| bcl | [Bicolano, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bkl) |
| bel | [Belarusan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ruw) |
| bem | [Bemba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bem) |
| ben | [Bengali](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bng) |
| bfa | [Bari](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bfa) |
| bho | [Bhojpuri](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bhj) |
| bin | [Edo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=edo) |
| bis | [Bislama](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bcy) |
| blt | Tai Dam |
| blu | [Hmong Njua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=blu) |
| boa | [Bora](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=boa) |
| bod | [Tibetan, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tic) |
| bos\_cyrl | [Bosnian (Cyrillic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src4) |
| bos\_latn | [Bosnian (Latin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src1) |
| bre | [Breton](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=brt) |
| btb | [Bulu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=btb) |
| buc | [Bushi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=buc) |
| bug | [Bugis](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bpr) |
| bul | [Bulgarian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=blg) |
| cab | [Garifuna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cab) |
| cak | [Kaqchikel, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cak1) |
| cat | [Catalan-Valencian-Balear](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cln) |
| cbi | [Chachi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1122) |
| cbr | [Cashibo-Cacataibo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbr) |
| cbs | [Cashinahua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbs) |
| cbt | [Chayahuita](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbt) |
| cbu | [Candoshi-Shapra](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cbu) |
| ccx | [Zhuang, Yongbei](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ccx) |
| ceb | [Cebuano](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ceb) |
| ces | [Czech](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=czc) |
| cha | [Chamorro](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjd) |
| chj | [Chinantec, Ojitlán](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chj) |
| chk | [Chuukese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tru1) |
| chr\_cased | Cherokee (cased) |
| chr\_uppercase | Cherokee (uppercase) |
| chv | [Chuvash](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=chv) |
| cic | [Chickasaw](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cic) |
| cjk | [Chokwe](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjk) |
| cjk\_AO | [Chokwe (Angola)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjk) |
| cjs | [Shor](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cjs) |
| ckb | [Kurdish, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdb1) |
| cnh | [Chin, Haka](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hak) |
| cni | [Asháninka](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cni) |
| cnr | [Montenegrin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cnr) |
| cof | [Colorado](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cof) |
| cos | [Corsican](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=coi) |
| cot | [Caquinte](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cot) |
| cpu | [Ashéninka, Pichis](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=cpu) |
| crh | [Crimean Tatar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=crh) |
| crs | [Seselwa Creole French](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=crs) |
| csa | [Chinantec, Chiltepec](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=csa) |
| csw | [Cree, Swampy](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=crm) |
| ctd | [Chin, Tedim](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tid) |
| cym | [Welsh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wls) |
| dag | [Dagbani](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dag) |
| dan | [Danish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dns) |
| ddn | [Dendi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=den) |
| deu\_1901 | [German, Standard (1901)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ger) |
| deu\_1996 | German, Standard (1996) |
| dga | [Dagaare, Southern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dga) |
| dip | [Dinka, Northeastern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dinka) |
| div | [Maldivian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=div) |
| dyo | [Jola-Fonyi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dyo) |
| dyu | [Jula](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dyu) |
| dzo | [Dzongkha](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dzo) |
| ell\_monotonic | [Greek (monotonic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=grk) |
| ell\_polytonic | Greek (polytonic) |
| emk | [Maninkakan, Eastern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mni) |
| eml | [Romagnolo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eml) |
| eng | [English](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eng) |
| epo | [Esperanto](https://www.ohchr.org/en/human-rights/universal-declaration/translations/esperanto) |
| ese | [Ese Ejja](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ese) |
| est | [Estonian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=est) |
| eus | [Basque](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bsq) |
| eve | [Even](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=eve) |
| evn | [Evenki](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=evn) |
| ewe | [Éwé](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ewe) |
| fao | [Faroese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fae) |
| fij | [Fijian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fji) |
| fin | [Finnish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fin) |
| fkv | [Finnish, Kven](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fkv) |
| flm | [Chin, Falam](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fal) |
| fon | [Fon](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=foa) |
| fra | [French](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn) |
| fri | [Frisian, Western](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fri) |
| fuf | [Pular](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fuf) |
| fur | [Friulian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frl) |
| fuv | [Fulfulde, Nigerian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fum) |
| fuv2 | [Fulfulde, Nigerian (2)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fuv) |
| fvr | [Fur](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fvr) |
| gaa | [Ga](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gac2) |
| gag | [Gagauz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gag) |
| gax | [Oromo, Borana-Arsi-Guji](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gax) |
| gjn | [Gonja](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dum) |
| gkp | [Kpelle, Guinea](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pke) |
| gla | [Gaelic, Scottish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gls) |
| gld | [Nanai](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gld) |
| gle | [Gaelic, Irish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gli1) |
| glg | [Galician](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gln) |
| glv | Manx |
| gsw1 | [Alemannisch (Elsassisch)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gsw) |
| guc | [Wayuu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=guc) |
| gug | [Guaraní, Paraguayan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gun) |
| guj | [Gujarati](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gjr) |
| guu | [Yanomamö](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=guu) |
| gyr | [Guarayu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gua) |
| hat\_kreyol | [Haitian Creole French (Kreyol)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hat) |
| hat\_popular | [Haitian Creole French (Popular)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hat1) |
| hau\_NE | [Hausa (Niger)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gej) |
| hau\_NG | [Hausa (Nigeria)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gej) |
| hau\_3 | [Hausa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hau) |
| haw | [Hawaiian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hwi) |
| hea | [Hmong, Northern Qiandong](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hea) |
| heb | [Hebrew](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hbr) |
| hil | [Hiligaynon](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hil) |
| hin | [Hindi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hnd) |
| hlt | [Chin, Matu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hlt) |
| hms | [Hmong, Southern Qiandong](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hms) |
| hna | [Gen](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hna) |
| hni | [Hani](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hni) |
| hns | [Hindustani, Sarnami](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hns) |
| hrv | [Croatian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src2) |
| hsb | [Sorbian, Upper](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wee) |
| hsf | [Huastec (Sierra de Otontepec)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hus) |
| hun | [Hungarian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hng) |
| hus | [Huastec (Veracruz)](https://www.ohchr.org/en/human-rights/universal-declaration/translations/tenek-huasteco) |
| huu | [Huitoto, Murui](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=huu) |
| hva | [Huastec (San Luís Potosí)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=hva) |
| hye | [Armenian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=arm) |
| ibb | [Ibibio](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ibb) |
| ibo | [Igbo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=igr) |
| ido | [Ido](https://www.ohchr.org/en/human-rights/universal-declaration/translations/ido) |
| idu | [Idoma](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=idu) |
| ijs | [Ijo, Southeast](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ijs) |
| ike | [Inuktitut, Eastern Canadian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=esb) |
| ilo | [Ilocano](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ilo) |
| ina | [Interlingua](https://www.ohchr.org/en/human-rights/universal-declaration/translations/interlingua) |
| ind | [Indonesian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=inz) |
| isl | [Icelandic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ice) |
| ita | [Italian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=itn) |
| jav | [Javanese (Latin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jan) |
| jav\_java | Javanese (Javanese) |
| jiv | [Shuar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1125) |
| jpn | [Japanese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=jpn) |
| jpn\_osaka | [Japanese (Osaka)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=obe) |
| jpn\_tokyo | [Japanese (Tokyo)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=to1) |
| kaa | [Karakalpak](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kaa) |
| kal | [Inuktitut, Greenlandic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=esg) |
| kan | [Kannada](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kjv) |
| kat | [Georgian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=geo) |
| kaz | [Kazakh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kaz) |
| kbd | [Kabardian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kbd) |
| kbp | [Kabiyé](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kbp) |
| kde | [Makonde](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kde) |
| kdh | [Tem](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdh) |
| kea | [Kabuverdianu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kea) |
| kek | [Q'eqchi'](https://www.ohchr.org/en/human-rights/universal-declaration/translations/qechikekchi) |
| kha | [Khasi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kha) |
| khk | [Mongolian, Halh (Cyrillic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=khk) |
| khm | [Khmer, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=khm) |
| kin | [Rwanda](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rua1) |
| kir | [Kirghiz](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kdo) |
| kjh | [Khakas](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kjh) |
| kkh\_lana | Khün |
| kmb | [Mbundu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mlo) |
| kmr | [Kurdish, Northern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kur) |
| knc | [Kanuri, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kph) |
| kng | [Koongo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kon) |
| kng\_AO | [Koongo (Angola)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kng) |
| koi | [Komi-Permyak](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=koi) |
| koo | [Konjo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=koo1) |
| kor | [Korean](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kkn) |
| kqn | [Kaonde](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kqn) |
| kqs | [Kissi, Northern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kqs) |
| kri | [Krio](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kri) |
| krl | [Karelian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=krl) |
| ktu | [Kituba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ktu) |
| kwi | [Awa-Cuaiquer](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kwi) |
| lad | [Ladino](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lad) |
| lao | [Lao](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nol) |
| lat | [Latin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ltn) |
| lat\_1 | [Latin (1)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ltn1) |
| lav | [Latvian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lat) |
| lia | [Limba, West-Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lia) |
| lij | [Ligurian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lij) |
| lin | [Lingala](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lin) |
| lin\_tones | Lingala (tones) |
| lit | [Lithuanian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lit) |
| lld | [Ladin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lld) |
| lnc | [Occitan (Languedocien)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prv1) |
| lns | [Lamnso'](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nso) |
| lob | [Lobi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lob) |
| lot | [Otuho](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lot) |
| loz | [Lozi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lbm1) |
| ltz | [Luxembourgeois](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lux) |
| lua | [Luba-Kasai](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lub) |
| lue | [Luvale](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lue) |
| lug | [Ganda](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lap1) |
| lun | [Lunda](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mlo1) |
| lus | [Mizo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lus) |
| mad | [Madura](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mhj) |
| mag | [Magahi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mqm) |
| mah | [Marshallese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mzm) |
| mai | Maithili |
| mal | [Malayalam](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mjs) |
| mal\_chillus | [Malayalam](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mjs) |
| mam | [Mam, Northern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mam) |
| mar | [Marathi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mrt) |
| maz | [Mazahua Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=maz) |
| mcd | [Sharanahua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mcd) |
| mcf | [Matsés](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mcf) |
| men | [Mende](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mfy) |
| mfq | [Moba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mfq) |
| mic | [Micmac](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mic) |
| min | [Minangkabau](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mpu) |
| miq | [Mískito](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=miq) |
| mkd | [Macedonian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mkj) |
| mlt | [Maltese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mls) |
| mly\_arab | Malay (Arabic) |
| mly\_latn | [Malay (Latin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mli) |
| mnw | Mon |
| mor | [Moro](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mor) |
| mos | [Mòoré](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mhm) |
| mri | [Maori](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mbf) |
| mto | [Mixe, Totontepec](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mto) |
| mxi | [Mozarabic](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=moz) |
| mxv | [Mixtec, Metlatónoc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mxv) |
| mya | [Burmese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=bms) |
| mzi | [Mazatec, Ixcatlán](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mao) |
| nav | [Navajo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nav) |
| nba | [Nyemba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nba) |
| nbl | [Ndebele](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nel) |
| ndo | [Ndonga](https://www.ohchr.org/en/human-rights/universal-declaration/translations/oshiwambo-ndonga) |
| nds | [Saxon, Low](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ige) |
| nep | [Nepali](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nep) |
| nhn | [Nahuatl, Central](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nhn) |
| nio | [Nganasan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nio) |
| niu | [Niue](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=niu) |
| niv | [Gilyak](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Nivkh) |
| njo | [Naga, Ao](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=njo) |
| nku | [Kulango, Bouna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kou) |
| nld | [Dutch](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=dut) |
| nno | [Norwegian, Nynorsk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nrn) |
| nob | [Norwegian, Bokmål](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nrr) |
| not | [Nomatsiguenga](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=not) |
| nso | [Sotho, Northern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=srt) |
| nya\_chechewa | [Nyanja (Chechewa)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyj1) |
| nya\_chinyanja | [Nyanja (Chinyanja)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyj) |
| nym | [Nyamwezi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyz) |
| nyn | [Nyankore](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nyn1) |
| nzi | [Nzema](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=nze) |
| oaa | [Orok](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=oaa) |
| oci\_1 | [Occitan (Francoprovençal, Fribourg)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=Fr3) |
| oci\_2 | [Occitan (Francoprovençal, Savoie)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fr2) |
| oci\_3 | [Occitan (Francoprovençal, Vaud)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=fr4) |
| oci\_4 | [Occitan (Francoprovençal, Valais)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frp) |
| ojb | [Ojibwa, Northwestern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ojb) |
| oki | [Okiek](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=oki) |
| orh | [Oroqen](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=orh) |
| oss | [Osetin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ose) |
| ote | [Otomi, Mezquital](https://www.ohchr.org/en/human-rights/universal-declaration/translations/nahnu-otomi) |
| pam | [Pampangan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pmp) |
| pan | [Panjabi, Eastern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pnj1) |
| pap | [Papiamentu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pap) |
| pau | [Palauan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=plu) |
| pbb | [Páez](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pbb) |
| pbu | [Pashto, Northern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pbu) |
| pcd | [Picard](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn2) |
| pcm | [Pidgin, Nigerian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pcm) |
| pes\_1 | [Farsi, Western](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prs) |
| pes\_2 | [Dari](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=prs1) |
| pis | [Pijin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pis) |
| piu | [Pintupi-Luritja](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=piu) |
| plt | [Malagasy, Plateau](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mex) |
| pnb | Panjabi, Western |
| pol | [Polish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pql) |
| pon | [Pohnpeian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pnf) |
| por\_BR | Portuguese (Brazil) |
| por\_PT | [Portuguese (Portugal)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=por) |
| pov | [Crioulo, Upper Guinea](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=gbc) |
| ppl | [Pipil](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ppl) |
| prv | [Occitan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pro) |
| quc | [K'iche', Central](https://www.ohchr.org/en/human-rights/universal-declaration/translations/kiche-quiche) |
| qud | [Quechua (Unified Quichua, old Hispanic orthography)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qud1) |
| qug | [Quichua, Chimborazo Highland](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qug) |
| quy | [Quechua, Ayacucho](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=quy) |
| quz | [Quechua, Cusco](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=quz) |
| qva | [Quechua, Ambo-Pasco](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qeg) |
| qvc | [Quechua, Cajamarca](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qnt) |
| qvh | [Quechua, Huamalíes-Dos de Mayo Huánuco](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qej) |
| qvm | [Quechua, Margos-Yarowilca-Lauricocha](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qei) |
| qvn | [Quechua, North Junín](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qju) |
| qwh | [Quechua, Huaylas Ancash](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qan) |
| qxa | [Quechua, South Bolivian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qec1) |
| qxn | [Quechua, Northern Conchucos Ancash](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qed) |
| qxu | [Quechua, Arequipa-La Unión](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=qar) |
| rar | [Rarotongan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rrt) |
| rmn | [Romani, Balkan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmn) |
| rmn\_1 | [Romani, Balkan (1)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmn1) |
| rmy | [Aromanian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rmy1) |
| roh | Romansch |
| roh\_puter | Romansch (Puter) |
| roh\_rumgr | [Romansch (Grischun)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rhe) |
| roh\_surmiran | Romansch (Surmiran) |
| roh\_sursilv | Romansch (Sursilvan) |
| roh\_sutsilv | Romansch (Sutsilvan) |
| roh\_vallader | Romansch (Vallader) |
| ron\_1953 | [Romanian (1953)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rum) |
| ron\_1993 | Romanian (1993) |
| ron\_2006 | Romanian (2006) |
| run | [Rundi](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rud1) |
| rus | [Russian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=rus) |
| sag | [Sango](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=saj) |
| sah | [Yakut](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sah) |
| san | [Sanskrit](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=skt) |
| sco | [Scots](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sco) |
| sey | [Secoya](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1123) |
| shk | [Shilluk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shk) |
| shn | [Shan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sjn) |
| shp | [Shipibo-Conibo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shp) |
| sin | [Sinhala](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=snh) |
| skr | [Seraiki](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=skr) |
| slk | [Slovak](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=slo) |
| slr | [Salar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=slr) |
| slv | [Slovenian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=slv) |
| sme | [Saami, North](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=lpi) |
| smo | [Samoan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=smy) |
| sna | [Shona](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=shd) |
| snk | [Soninke](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=snn) |
| snn | [Siona](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1121) |
| som | [Somali](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=som) |
| sot | [Sotho, Southern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sso) |
| spa | [Spanish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=spn) |
| src | [Sardinian, Logudorese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=srd) |
| srp\_cyrl | [Serbian (Cyrillic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src5) |
| srp\_latn | [Serbian (Latin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=src3) |
| srr | [Serer-Sine](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ses) |
| ssw | [Swati](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swz1) |
| suk | [Sukuma](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sua) |
| sun | [Sunda](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=suo) |
| sus | [Susu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sus) |
| swb | [Comorian, Maore](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swb) |
| swe | [Swedish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swd) |
| swh | [Swahili](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=swa) |
| tah | [Tahitian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tht) |
| tam | [Tamil](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tcv) |
| tam\_LK | Tamil (Sri Lanka) |
| tat | [Tatar](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ttr) |
| tbz | [Ditammari](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tbz) |
| tca | [Ticuna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tca) |
| tel | [Telugu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tcw) |
| tem | [Themne](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tej) |
| tet | [Tetun](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ttm) |
| tgk | [Tajiki](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pet) |
| tgl | [Tagalog](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tgl) |
| tha | [Thai](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=thj) |
| tha2 | Thai (2) |
| tir | [Tigrigna](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tgn) |
| tiv | [Tiv](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tiv) |
| tly | [Talysh](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tly) |
| tob | [Toba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tob) |
| toi | [Tonga](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=toi) |
| toj | [Tojolabal](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=toj) |
| ton | [Tongan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tov) |
| top | [Totonac, Papantla](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=top) |
| tpi | [Tok Pisin](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=pdg) |
| tsn | [Tswana](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tsw) |
| tso\_MZ | [Tsonga (Mozambique)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tso) |
| tso\_ZW | [Tsonga (Zimbabwe)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tso1) |
| tsz | [Purepecha](https://www.ohchr.org/en/human-rights/universal-declaration/translations/purhepecha) |
| tuk\_cyrl | [Turkmen (Cyrillic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tck) |
| tuk\_latn | Turkmen (Latin) |
| tur | [Turkish](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=trk) |
| tyv | [Tuva](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tyv) |
| tzc | [Tzotzil (Chamula)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzc) |
| tzh | [Tzeltal, Oxchuc](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzc1) |
| tzm | [Tamazight, Central Atlas](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tzm) |
| udu | [Uduk](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=udu) |
| uig\_arab | [Uyghur (Arabic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uig) |
| uig\_latn | Uyghur (Latin) |
| ukr | [Ukrainian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ukr) |
| umb | [Umbundu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=mnf) |
| ura | [Urarina](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ura) |
| urd | [Urdu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=urd) |
| urd\_2 | [Urdu (2)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=urd) |
| uzn\_cyrl | [Uzbek, Northern (Cyrillic)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uzb1) |
| uzn\_latn | [Uzbek, Northern (Latin)](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=uzb) |
| vai | [Vai](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vai) |
| vec | [Venetian](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vec) |
| ven | [Venda](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=tsh) |
| ven2 | [Venda](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ven) |
| vep | [Veps](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vep) |
| vie | [Vietnamese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vie) |
| vmw | [Makhuwa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=vmw) |
| war | [Waray-Waray](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wry) |
| wln | [Walloon](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=frn1) |
| wol | [Wolof](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=wol) |
| wwa | [Waama](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ako) |
| xho | [Xhosa](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=xos) |
| xsm | [Kasem](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=kas) |
| yad | [Yagua](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yad) |
| yao | [Yao](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yao) |
| yap | [Yapese](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yps) |
| ydd | [Yiddish, Eastern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ydd) |
| ykg | [Yukaghir, Northern](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ykg) |
| yor | [Yoruba](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yor) |
| yrk | [Nenets](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yrk) |
| yua | [Maya, Yucatán](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=yua) |
| zam | [Zapotec, Miahuatlán](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zam) |
| zdj | [Comorian, Ngazidja](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zdj) |
| zgh | [Tamazight, Standard Morocan](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ama) |
| zro | [Záparo](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=1124) |
| ztu | [Zapotec, Güilá](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=ztu1) |
| zul | [Zulu](https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=zuu) |

<!--support end-->

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now,
that is Node.js 14+ and 16+.
It also works in Deno and modern browsers.

## Contribute

Yes please!
See [How to Contribute to Open Source][opensource-guide-contribute].

## Security

This package is safe.

## License

[MIT][file-license] © [Titus Wormer][wooorm]

<!-- Definitions -->

[api-min]: #min

[api-top]: #top

[badge-build-image]: https://github.com/wooorm/trigrams/workflows/main/badge.svg

[badge-build-url]: https://github.com/wooorm/trigrams/actions

[badge-coverage-image]: https://img.shields.io/codecov/c/github/wooorm/trigrams.svg

[badge-coverage-url]: https://codecov.io/github/wooorm/trigrams

[badge-downloads-image]: https://img.shields.io/npm/dm/trigrams.svg

[badge-downloads-url]: https://www.npmjs.com/package/trigrams

[esmsh]: https://esm.sh

[file-license]: license

[github-gist-esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[github-wooorm-udhr]: https://github.com/wooorm/udhr

[npmjs-install]: https://docs.npmjs.com/cli/install

[ohchr-udhr]: https://www.ohchr.org/EN/UDHR/Pages/UDHRIndex.aspx

[opensource-guide-contribute]: https://opensource.guide/how-to-contribute/

[typescript]: https://www.typescriptlang.org

[unicode]: https://www.unicode.org/udhr/

[wooorm]: https://wooorm.com
