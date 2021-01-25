/*
СОздать объект и встроить в него все эти методы
*/


var data = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}

/*
* Демонстрация названия товара

* (Возврат названия товара)
*/
data.showProductName = function() {
  alert(this.displayedName.displayedName.value[0])
}

/*
* Демонстрация списка магазинов с ненулевым числом товаров

* (получить массив номеров магазинов, в которых есть товары в наличии)
*/
data.getNoneEmptyStores = function() {
  let resultArray = new Array()

  for (var region in this.stock.stocks) {
    alert("\tRegion: " + region)
    for (var store in this.stock.stocks[region]) {
      // alert("Store: "+store + "-" + this.stock.stocks[region][store])

      if (this.stock.stocks[region][store] > 0)
        alert("Store: "+store + "-" + this.stock.stocks[region][store]);
      

      // if (this.stock.stocks[region][])
      // resultArray.push()
    }
  }
}

/*
* Демонстрация "максимального" магазина

* (найти максимальное количество товара в регионе, вернуть это количество и номер магазина)
*/
data.findMaxPackedStore = function(region) {
  alert("\nRegion to find: " + region)

  if (typeof this.stock.stocks[region] != 'undefined')
  alert ("OK")
  else {
    alert ("NOT OK")
    return
  }

  let max = -1
  let maxStoreName = "sample"

  for (var store in this.stock.stocks[region]) {
    // TODO: exception catch
    if (parseInt(this.stock.stocks[region][store]) > max) {
      alert(this.stock.stocks[region][store] + " > " + max)
      max = this.stock.stocks[region][store]
      maxStoreName = store
    
    }
    else
      alert(this.stock.stocks[region][store] + " < " + max)
  }

  if (max == -1)
    alert ("Couldn't find max. Is there any goods in this region?")
  else
    alert ("Max is " + max + " in store " + maxStoreName)
}


data.showProductName()
alert("\n\t- - - - - - - - - - - - - -\n")
data.getNoneEmptyStores()
alert("\n\t- - - - - - - - - - - - - -\n")
data.findMaxPackedStore("34")