// שולפים את רשימת המסעדות מה-localStorage ומפרסים למערך אובייקטים
let d = localStorage.getItem('restaurants')
let products = JSON.parse(d)

// מוצאים את האלמנט שמכיל את רשת המוצרים בדף
let productGrid = document.getElementsByClassName('product-grid')[0];
let allcards = []

// לולאה כפולה שעוברת על כל המסעדות ועל כל השמות שלהן (resName)
for(let i = 0; i < products.length; i++) {
    for(let j = 0; j < products[i].resName.length; j++) {
        // יצירת כרטיס מוצר חדש
        let productCard = document.createElement('div');
        productCard.className = 'product-card';

        // יצירת אלמנט לתמונה והגדרת המקור והטקסט האלטרנטיבי
        let divimg = document.createElement('div')
        divimg.id = 'product-image'
        let img = document.createElement('img')
        img.src = products[i].picStore
        img.alt = products[i].resName[j]
        divimg.appendChild(img)

        // יצירת אלמנט טקסט עם כותרת ותיאור המסעדה
        let divText = document.createElement('div')
        divText.id = 'product'
        let h2 = document.createElement('h2')
        h2.innerText = products[i].resName[j]
        divText.appendChild(h2)
        let p2 = document.createElement('p')
        p2.innerText = products[i].dis
        divText.appendChild(p2)

        // יצירת כפתור "הזמן עכשיו" עם אירוע לחיצה לשמירת שם המסעדה ב-session וניווט לדף פרטים
        let button = document.createElement('button')
        button.id = 'button-buy'
        button.addEventListener('click', function() {
            sessionStorage.setItem('name', products[i].resName[j])
            window.location = 'restaurant.html'
        })
        button.innerText = 'הזמן עכשיו'
        divText.appendChild(button)

        // הרכבת הכרטיס – הוספת התמונה והטקסט לכרטיס עצמו
        productCard.appendChild(divimg)
        productCard.appendChild(divText)

        // שמירת הכרטיס במערך כל הכרטיסים
        allcards.push(productCard)
    }
}

// ערבוב אקראי של כל הכרטיסים לפני ההצגה
allcards.sort(() => 0.5 - Math.random());

// הוספת כל הכרטיסים לאחר הערבוב לתוך הרשת בדף
for (let i = 0; i < allcards.length; i++) {
    productGrid.appendChild(allcards[i]);
}
