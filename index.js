/*
* Объект с данными о товаре в магазинах
*/
let data = {
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
                "tset": "test",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}

/*
* Возврат названия товара
*/
data.showProductName = function() {
  return this.displayedName.displayedName.value[0]
}

/*
* Возврат массива номеров всех магазинов с ненулевым количеством товара
*/
data.getNoneEmptyStores = function() {
  let resultArray = new Array()

  for (let region in this.stock.stocks) {
    for (let store in this.stock.stocks[region]) {
      // alert("Region: " + region + " | Store: " + store + "-" + this.stock.stocks[region][store])

      let storeItems = parseInt(this.stock.stocks[region][store])

      alert("Current item quantity: " + storeItems)
      
      if (isNaN(storeItems)) {
        alert("Error while reading data")
        continue
      }

      if (storeItems > 0) resultArray.push(store)
    }
  }

  return resultArray
}

/*
* Возврат массива с двумя символьными значениями:
*   1) Максимальное количество товара в регионе.
*   2) Номер магазина с максимальным количеством товара.
*/
data.findMaxPackedStore = function(region) {
  alert("\nRegion to find: " + region)

  if (typeof this.stock.stocks[region] == 'undefined') {
    alert ("There's no such region in database")
    return []
  }

  let max = -1
  let maxStoreName = "sample"

  for (let store in this.stock.stocks[region]) {
    let storeItems = parseInt(this.stock.stocks[region][store])

    if (isNaN(storeItems)) {
        alert("Error while reading data")
        continue
    }

    if (storeItems > max) {
      alert(this.stock.stocks[region][store] + " > " + max)
      max = this.stock.stocks[region][store]
      maxStoreName = store
    }
    else
      alert(this.stock.stocks[region][store] + " < " + max)
  }

  // TODO: можно через undefined
  if (max == -1)
    alert ("Couldn't find max. Is there any goods in this region?")
  else {
    alert ("Max is " + max + " in store " + maxStoreName)
    return [max, maxStoreName]
  }
}

let name = data.showProductName()
let name1 = data.getNoneEmptyStores()
let name2 = data.findMaxPackedStore("34")

console.log("\n\t - - - - Результаты - - - -\n")
console.log(name)
console.log("\n\t - - - - - - - - -\n")
console.log(name1)
console.log("\n\t - - - - - - - - -\n")
console.log(name2)