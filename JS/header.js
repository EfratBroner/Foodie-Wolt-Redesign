// מערך שיכיל את כל המשתמשים
let allUser=[]

function chekName(event){
    let bool=false
    event.preventDefault() 

    // שליפת כל שדות הקלט (input) מהטופס
    let input= document.getElementsByTagName('input')

    // יצירת אובייקט משתמש חדש מתוך הערכים שהוזנו בטופס
    let obj={
        firstName: input[0].value,
        lastName: input[1].value,
        email: input[2].value,
        passWord: input[3].value,
        cityAddress: input[4].value,
        homeAddress: input[5].value,
        sal: [], // רשימת מוצרים ששמורים בעגלה של המשתמש
        like: [] // רשימת חנויות אהובות (אם תתממש)
    }

    // שליפת המשתמשים מה-localStorage אם קיימים
    let allUserJson=localStorage.getItem('user')
    if(allUserJson==null)
        allUser=[]
    else
        allUser= JSON.parse(allUserJson)

    // בדיקה אם המשתמש כבר קיים לפי אימייל
    for(let i=0; i<allUser.length; i++){
         console.log(allUser[i].email);
       if(allUser[i].email==obj.email){
            bool=true
            console.log("נכנסנו ל-if של השם החדש")
            window.location='signIn.html' // אם המשתמש קיים – נעבור למסך התחברות
        }
    }

    // אם המשתמש לא קיים – נוסיף אותו לרשימה
    if(bool==false || allUser.length==0){
        allUser.push(obj)

        // שמירת ראשי התיבות שלו ב-sessionStorage
        let n=obj.firstName.charAt(0)+obj.lastName.charAt(0)
        sessionStorage.setItem('user',n)

        // שמירת מידע התחברות בסיסי
        let userInformation = {email: obj.email, parssword: obj.passWord}
        let userInformationJson=JSON.stringify(userInformation)
        sessionStorage.setItem('userInformation',userInformationJson)

        // שמירת כתובת מגורים
        let address=obj.homeAddress
        sessionStorage.setItem('address',address)

        // שמירת כל המשתמשים ב-localStorage
        allUserJson= JSON.stringify(allUser)
        localStorage.setItem('user', allUserJson)

        console.log("נכנסנו ל-if של השם החדש")
        window.location='index.html' // מעבר לדף הבית
    }
}

function welcomeTo(){
    let namesJson = localStorage.getItem('user')
    let names = JSON.parse(namesJson)

    // אם אין משתמש מחובר – נציג 'אורח'
    if(sessionStorage.getItem('user')==null){
        document.querySelector('h1').innerText= 'אורח'
        sessionStorage.setItem('userInformation','אורח')
    }
    else{
        // הצגת ראשי התיבות של המשתמש
        document.querySelector('h1').innerText= sessionStorage.getItem('user')

        // הסתרת כפתורי הרשמה וכניסה
        document.getElementById('signIn').hidden=true
        document.getElementById('signUp').hidden=true

        // הוספת כתובת לדיב הניווט
        let div=document.getElementsByClassName('nav-buttons')[0]
        let p = document.createElement('p')
        p.innerText=sessionStorage.getItem('address')
        div.appendChild(p)

        // הוספת לוגו סל לדף
        let divSal=document.getElementById('salName')
        let sal=document.createElement('img')
        sal.src='../תמונות/לוגו_סל-removebg-preview.png'
        divSal.appendChild(sal)

        // אם לוחצים על השם – חוזרים לטופס הרשמה
        document.querySelector('h1').addEventListener('click',function(){
            document.querySelector('h1').innerText=''
            window.location='signUp.html'
        })
    }
}

function chekmail(event){
    event.preventDefault()
    // שליפת המשתמשים מה-localStorage
    let allUserJson=localStorage.getItem('user')
    allUser  =JSON.parse(allUserJson)

    // שליפת הערכים מהטופס
    let em=document.getElementById('email')
    let pas= document.getElementById('password')
    let b=false

    // בדיקת התאמה בין פרטי התחברות לבין המשתמשים
    for (let index = 0; index < allUser.length; index++) {
       if(allUser[index].email==em.value && allUser[index].passWord==pas.value){
            b=true
            // שמירת ראשי תיבות ב-sessionStorage
            sessionStorage.setItem('user', allUser[index].firstName.charAt(0)+allUser[index].lastName.charAt(0))
            
            // שמירת פרטי התחברות
            let userInformation = {email: allUser[index].email, parssword: allUser[index].passWord}
            let userInformationJson=JSON.stringify(userInformation)
            sessionStorage.setItem('userInformation',userInformationJson)

            // שמירת כתובת
            sessionStorage.setItem('address',allUser[index].homeAddress)

            console.log("נכנסנו ל-if של השם החדש")
            window.location='index.html'
       }
    }

    // אם אין התאמה – מציגים שגיאה
    if(b==false){
        alert('wrong password')
        pas.value=""
    }
}

// משתנים עיקריים לעגלה
let buttonSal = document.getElementById('salName')
let allUsersJson = localStorage.getItem('user')
let allUsers=JSON.parse(allUsersJson)
let userInformationJson=sessionStorage.getItem('userInformation')
if(userInformationJson!='אורח'){
let userInformation=JSON.parse(userInformationJson)
let thisSal

// שליפת העגלה של המשתמש הנוכחי
for(let i=0; i<allUsers.length; i++){
    if(allUsers[i].email==userInformation.email && allUsers[i].password==userInformation.password)
        thisSal=allUsers[i].sal
}

// יצירת מבנה של עגלה ריקה
let cartElement = document.querySelector('.shopping-cart');
let ul=document.createElement('ul')
ul.className="shopping-cart-items"

// פונקציה להצגת העגלה
function showCart() {
    ul.innerHTML = "";
    cartElement.innerHTML = "";

    if (thisSal.length != 0) {
        cartElement.classList.add('active');

        // לולאה על כל המוצרים בעגלה
        for(let i = 0; i < thisSal.length; i++){
            let li = document.createElement('li')
            li.className="clearfix"

            let img= document.createElement('img')
            img.src=thisSal[i].pic
            li.appendChild(img)

            let nameStore=document.createElement('span')
            nameStore.className="item-name"
            nameStore.innerText=thisSal[i].nameStore
            li.appendChild(nameStore)

            let nameProduct=document.createElement('span')
            nameProduct.className="item-detail"
            nameProduct.innerText=thisSal[i].name
            li.appendChild(nameProduct)

            let price=document.createElement('span')
            price.className="item-price"
            price.innerText=thisSal[i].price + ' ₪'
            li.appendChild(price)

            ul.appendChild(li)
        }

        // הוספת כפתור מעבר לעגלת הקניות
        let footer=document.createElement('div')
        footer.className="footer"
        let footerText=document.createElement('p')
        footerText.innerText='לצפיה בעגלת הקניות'
        footer.appendChild(footerText)

        footer.addEventListener('click',function(){
            window.location='sal.html'
        })

        ul.appendChild(footer)
        cartElement.appendChild(ul)
    }
}

// הסתרת העגלה
function hideCart() {
    cartElement.classList.remove('active');
}

// הפעלת עגלה בעכבר
cartElement.addEventListener('mouseenter', showCart);
cartElement.addEventListener('mouseleave', hideCart)
buttonSal.addEventListener('mouseenter', showCart);
buttonSal.addEventListener('mouseleave', hideCart);}