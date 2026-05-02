// שינוי כותרת העמוד
let tytle = document.getElementsByTagName('b')[0]
tytle.innerText = 'סל הקניות שלי:'

// שליפת המשתמשים מה-localStorage והמשתמש המחובר
let allUserJson = localStorage.getItem('user')
let allUser = JSON.parse(allUserJson)
let userInformationJson = sessionStorage.getItem('userInformation')
let userInformation = JSON.parse(userInformationJson)

let thisSal
let allPrice = 0
let thisUser

// מציאת המשתמש המחובר והסל שלו
for (let i = 0; i < allUser.length; i++) {
    if (allUser[i].email == userInformation.email && allUser[i].password == userInformation.password) {
        thisUser = allUser[i]
        thisSal = thisUser.sal
    }
}

// יצירת קופסה לכל המוצרים בסל
let cardsproduct = document.createElement('div')
cardsproduct.id = 'cardsproduct'

// מעבר על כל מוצר בסל והצגתו עם תמונה, שם, מחיר וכפתור מחיקה
for (let i = 0; i < thisSal.length; i++) {
    let s = document.createElement('section')

    let picProduct = document.createElement('img')
    picProduct.src = thisSal[i].pic
    s.appendChild(picProduct)

    let priceProduct = document.createElement('p')
    priceProduct.innerText = "₪ " + thisSal[i].price
    s.appendChild(priceProduct)

    allPrice += thisSal[i].price

    let nameProduct = document.createElement('p')
    nameProduct.innerText = thisSal[i].name
    s.appendChild(nameProduct)

    // כפתור מחיקת מוצר מהסל
    let Delete = document.createElement('p')
    Delete.id = 'delete'
    Delete.innerText = '🗑️'
    s.appendChild(Delete)

    Delete.addEventListener('click', function () {
        let sound = new Audio('../audio/tv-shut-down-185446.mp3');
        sound.play();

        allPrice -= thisSal[i].price
        thisSal.splice(i, 1)
        localStorage.setItem('user', JSON.stringify(allUser))

        s.remove()

        sum.innerText = ''
        sum.innerText = '₪ ' + allPrice
    });

    cardsproduct.appendChild(s)
    document.body.appendChild(cardsproduct)
}

// הצגת סך כל המחירים
let sum = document.createElement('p')
sum.id = 'sum'
sum.innerText = "₪ סך הכל לתשלום: " + allPrice
document.body.appendChild(sum)

// יצירת כפתור מעבר לתשלום
let PayButton = document.createElement('nav')
document.body.appendChild(PayButton)
PayButton.innerText = 'מעבר לתשלום'

// בדיקה אם הסל ריק – ואם לא, מעבר לעמוד התשלום
PayButton.addEventListener('click', function () {
    if (allPrice == 0) {
        let errorsound = new Audio('../audio/windows-error-sound-effect-35894.mp3');
        errorsound.play();

        let pop = document.createElement('div');
        pop.id = 'pop';
        pop.innerText = 'נא למלא את הסל קודם!';
        document.body.appendChild(pop);

        setTimeout(() => {
            pop.remove();
        }, 1500);
    } else {
        window.location = 'pay.html'
    }
})
