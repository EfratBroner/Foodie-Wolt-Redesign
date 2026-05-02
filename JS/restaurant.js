// שליפת שם החנות מה-session
let nameThisStore = sessionStorage.getItem('name')
let thisStore
let index

// טעינת נתוני המשתמשים והמשתמש המחובר
let allUserJson = localStorage.getItem('user')
allUser = JSON.parse(allUserJson)
userInformationJson = sessionStorage.getItem('userInformation')
if(userInformationJson!='אורח')
userInformation = JSON.parse(userInformationJson)


// מציאת החנות מתוך רשימת כל המסעדות
let allRestaurantJson = localStorage.getItem('restaurants')
let allRestaurant = JSON.parse(allRestaurantJson)

for (let i = 0; i < allRestaurant.length; i++) {
    for (let j = 0; j < allRestaurant[i].resName.length; j++) {
        if (allRestaurant[i].resName[j] == nameThisStore) {
            thisStore = allRestaurant[i]
            index = j
        }
    }
}

// הצגת תמונה, שם ותיאור של החנות
let pic = document.getElementById('picstore')
pic.style.backgroundImage = "url('" + thisStore.picStore + "')"
pic.style.backgroundSize = 'cover'
pic.innerText = thisStore.resName[index]

let dis = document.createElement('p')
dis.innerText = thisStore.dis
pic.appendChild(dis)


// כפתור לייק (לב) – סימון חנות מועדפת
let buttonLove = document.createElement('button')
buttonLove.className = 'toggle-icon'
let boolLike = false
let userr
let indexLike

// בדיקה אם המשתמש מחובר ואם הוא כבר סימן את החנות כאהובה
if (!(userInformationJson == 'אורח')) {
    for (let i = 0; i < allUser.length; i++) {
        if (allUser[i].email == userInformation.email) {
            userr = allUser[i]
            for (let j = 0; j < userr.like.length; j++) {
                if (userr.like[j] == thisStore.resName[index]) {
                    indexLike = j
                    buttonLove.classList.add('-checked')
                    boolLike = true
                }
            }
        }
    }


// לחיצה על הלב – מוסיפה או מסירה את החנות מהמועדפים
buttonLove.addEventListener('click', function () {
    if (boolLike) {
        boolLike = false
        userr.like.splice(indexLike, 1)
    } else {
        let soundLove = new Audio('../audio/ללב.mp3')
        soundLove.play()
        userr.like.push(thisStore.resName[index])
        boolLike = true
    }
    localStorage.setItem('user', JSON.stringify(allUser))
    this.classList.toggle('-checked')
})
}
pic.appendChild(buttonLove)


// יצירת כרטיסים עבור כל מוצר של החנות
for (let i = 0; i < thisStore.products.length; i++) {
    let product = document.createElement('section')
    product.className = 'product'

    // לחיצה על מוצר – מוסיפה אותו לסל ומציגה פופ-אפ
    product.addEventListener('click', function () {
        let popup = document.createElement('div')
        popup.id = 'popup-message'
        popup.innerText = '✔ המוצר נוסף לעגלה!'
        document.body.appendChild(popup)

        let sound = new Audio('../audio/success-340660.mp3')
        sound.play()

        setTimeout(() => {
            popup.remove()
        }, 1500)

        let obj = {
            nameStore: nameThisStore,
            name: thisStore.products[i].productName,
            price: thisStore.products[i].price,
            pic: thisStore.products[i].pic
        }

        //  ושולחים אותו להתחברות אם המשתמש אורח – מציגים הודעת התחברות
        if (userInformationJson == 'אורח') {
            alert('עליך להרשם תחילה')
            window.location='signUp.html'
        } else {
            // מוסיפים את המוצר לסל של המשתמש
            allUserJson = localStorage.getItem('user')
            allUser = JSON.parse(allUserJson)
            for (let i = 0; i < allUser.length; i++) {
                if (allUser[i].email == userInformation.email) {
                    allUser[i].sal.push(obj)
                    thisSal = allUser[i].sal
                }
            }
            localStorage.setItem('user', JSON.stringify(allUser))
            showCart()
        }
    })

    // הוספת תמונה, שם ומחיר של המוצר לתצוגה
    let picProduct = document.createElement('img')
    picProduct.src = thisStore.products[i].pic
    product.appendChild(picProduct)

    let priceProduct = document.createElement('p')
    priceProduct.id = 'price'
    priceProduct.innerText = "₪ " + thisStore.products[i].price
    product.appendChild(priceProduct)

    let nameProduct = document.createElement('p')
    nameProduct.id = 'name'
    nameProduct.innerText = thisStore.products[i].productName
    product.appendChild(nameProduct)

    document.getElementsByTagName('nav')[0].appendChild(product)
}

// הצגת מפה של החנות בפוטר
let footmap = document.getElementsByTagName('footer')[0]
footmap.style.backgroundImage = "url('" + thisStore.picFooter[index] + "')"
document.body.appendChild(footmap)

let buttonMap = document.createElement('div')
buttonMap.id = 'map'
footmap.appendChild(buttonMap)

// בלחיצה על המפה – מעבירים ללינק של מיקום החנות
buttonMap.addEventListener('click', function () {
    window.location = thisStore.maps[index]
})