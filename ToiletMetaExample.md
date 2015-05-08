---
hours: all day
position: 1
acccess: public
where: behind Sign
babytable: true
accessible: false
goods: false

---

# {Toiletname}
## History

|Date|hours|position|acccess|where|babytable|accessible|goods|
|----|--------|--------|-------|----------------|---------|-----------------------|-----------------------|
|1970-01-02-00:00|all day|1|public|behind Sign|true|false|false|
|1970-01-01-13:23 |all day|1|public|behind Sign|false|false|false|

## Datatypes

### hours: 
{all_day|{[mo|tue|wed|thu|fri|sat|sun]hhmm}*}

### position: 
{geo_location}

### acccess 
{free|paid|customer|code|public}

### where: 
[behind|nextTo|insideOf][name]

### babytable: 
[true|false]

### accessible: 
[true|false]

### goods: 
[false|{list,of,goods}]
