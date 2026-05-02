// כשמשתמש מקליד מספר כרטיס – זה מתעדכן מיידית על גבי התצוגה של הכרטיס
document.querySelector('.card-number-input').oninput = () => {
    document.querySelector('.card-number').innerText = 
        document.querySelector('.card-number-input').value
}

// אותו דבר – עבור שם בעל הכרטיס
document.querySelector('.card-holder-input').oninput = () => {
    document.querySelector('.card-holder-name').innerText = 
        document.querySelector('.card-holder-input').value
}

// הצגת חודש תפוגה של הכרטיס בזמן ההקלדה
document.querySelector('.month-input').oninput = () => {
    document.querySelector('.exp-month').innerText = 
        document.querySelector('.month-input').value
}

// הצגת שנת תפוגה – כאן חותכים את השנתיים האחרונות (למשל: 2025 -> 25)
document.querySelector('.year-input').oninput = () => {
    document.querySelector('.exp-year').innerText = 
        document.querySelector('.year-input').value.slice(2)
}

// כשנכנסים לשדה ה-CVV – הכרטיס "מתהפך" כדי להראות את הגב
document.querySelector('.cvv-input').onmouseenter = () => {
    document.querySelector('.front').style.transform = 
        'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 
        'perspective(1000px) rotateY(0deg)';
}

// כשעוזבים את שדה ה-CVV – הכרטיס חוזר לצד הקדמי
document.querySelector('.cvv-input').onmouseleave = () => {
    document.querySelector('.front').style.transform =
        'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 
        'perspective(1000px) rotateY(180deg)';
}

// בזמן הקלדה בשדה CVV – התצוגה בגב הכרטיס מתעדכנת בזמן אמת
document.querySelector('.cvv-input').oninput = () => {
    document.querySelector('.cvv-box').innerText = 
        document.querySelector('.cvv-input').value
}

// טיפול באירוע של שליחת הטופס
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // איפוס מוחלט של גוף הדף והצגת הודעה שההזמנה בוצעה
    document.body.innerHTML = ''
    document.body.style.backgroundColor = '#2196f3'

    // טקסט הצלחה
    let good = document.createElement('p')
    good.id = 'good'
    good.style.width = '100%'
    good.style.height = '100px'
    document.body.style.fontFamily = '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
    good.innerText = '!הזמנתך בוצעה בהצלחה, המשלוח בדרך אליך'
    document.body.appendChild(good)

    // הוספת תמונה סופית
    let pic = document.createElement('img')
    pic.src = '../תמונות/תמונה סופית.png'
    pic.style.width = '500px'
    pic.style.height = '700px'
    document.body.appendChild(pic)

    document.body.style.textAlign = 'center'

    // ניקוי סל הקניות של המשתמש המחובר
    let userInformationJson = sessionStorage.getItem('userInformation')
    let userInformation = JSON.parse(userInformationJson)
    let allUserJson = localStorage.getItem('user')
    let allUser = JSON.parse(allUserJson)

    // מחפשים את המשתמש לפי האימייל ומנקים את הסל שלו
    for (let i = 0; i < allUser.length; i++) {
        if (allUser[i].email == userInformation.email) {
            allUser[i].sal = []
        }
    }

    // שומרים את המידע המעודכן ב-localStorage
    allUserJson = JSON.stringify(allUser)
    localStorage.setItem('user', allUserJson)

    // לאחר 3 שניות – חזרה לדף הבית
    setTimeout(() => {
        window.location = 'index.html'
    }, 3000)
})
