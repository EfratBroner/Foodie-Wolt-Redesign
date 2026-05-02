 //הכנסת כל הנתונים
 let restaurant=[
    {
        resName:['קצפת | כנפי נשרים','קצפת | מלחה','קצפת | מחנה יהודה','קצפת | קניון הדר','קצפת | רמת אשכול','קצפת | רחביה','קצפת | קניון מבשרת'],
        likes: 235,
        picFooter:["../תמונות/מפות/קצפת כנפש.png","../תמונות/מפות/קצפת מלחה.png","../תמונות/מפות/קצפת מחנה יהודה.png","../תמונות/מפות/קצפת קניון הדר.png","../תמונות/מפות/קצפת רמת אשכול.png","../תמונות/מפות/קצפת רחביה.png","../תמונות/מפות/קצפת מבשרת.png"] ,
        picStore:'../תמונות/katzefet.png' ,
        dis: 'לונה פארק של טעמים',
        maps:[ "https://www.google.com/maps?q=קצפת+כנפי+נשרים+ירושלים",
               "https://www.google.com/maps?q=קצפת+מלחה+ירושלים",
               "https://www.google.com/maps?q=קצפת+מחנה+יהודה+ירושלים",
               "https://www.google.com/maps?q=Kazefet+Hadar+Mall+Jerusalem",
               "https://www.google.com/maps?q=Kazefet+Ramat+Eshkol+Jerusalem",
               "https://www.google.com/maps?q=Kazefet+Rehavia+Jerusalem",
               "https://www.google.com/maps?q=Kazefet+Mevaseret+Zion"],
        products:[
            {
                productName: 'ופל בלגי',
                price: 42,
                pic: "../תמונות/מוצרים/קצפת/וופל בלגי.png"
            }, {
                productName: 'פרוזן - יורגוט',
                price: 70,
                pic: "../תמונות/מוצרים/קצפת/פרוזן יוגורט.png"
            }, {
                productName: 'קרפ צרפתי',
                price: 30,
                pic: "../תמונות/מוצרים/קצפת/קרפ צרפתי .png"
            }, {
                productName: 'מיילקשייק אוראו',
                price: 40,
                pic: "../תמונות/מוצרים/קצפת/מילקשייק אוראו.png"
            }, {
                productName: 'אמריקן סטייל',
                price: 36,
                pic: "../תמונות/מוצרים/קצפת/אמריקן סטייל.png"
            }, {
                productName:'מיילקשייק אספרסו לוטוס',
                price:40 ,
                pic: "../תמונות/מוצרים/קצפת/מילקשייק אספרסו לוטוס.png"
            }, {
                productName:'שייק פרות' ,
                price: 36,
                pic: "../תמונות/מוצרים/קצפת/שייק פרות.png" 
            }, {
                productName: 'אייס קפה קטן',
                price: 16,
                pic: "../תמונות/מוצרים/קצפת/אייס קפה קטן.png"
            }, {
                productName:'אייס קפה גדול' ,
                price: 22,
                pic: "../תמונות/מוצרים/קצפת/אייס קפה גדול.png"
            } , {
                productName: 'גרטינה פקאן',
                price: 28,
                pic: "../תמונות/מוצרים/קצפת/גרטינה פקאן.png"
            },{
                productName:'גלידה משפחתית' ,
                price: 114,
                pic : "../תמונות/מוצרים/קצפת/גלידה משפחתית.png"
            },{
                productName:'כוס קצפת' ,
                price: 12,
                pic : "../תמונות/מוצרים/קצפת/כוס קצפת.png"
            },
            {
                productName:'מזרק שוקולד' ,
                price: 15,
                pic : "../תמונות/מוצרים/קצפת/מזרק שוקולד.png"
            }

        ]
    }, {
        resName:['מקדונלדס | בית הכרם','מקדונלדס | קניון מבשרת','מקדונלס | בן יהודה'],
        likes: 170,
        picFooter: ["../תמונות/מפות/מקדונלדס בית הכרם.png","../תמונות/מפות/מקדונלדס מבשרת.png","../תמונות/מפות/מקדונלדס בן יהודה.png"],
        picStore: '../תמונות/McDonalds.png',
        dis: 'מק רויאל, ההמבורגר הפופולרי בישראל',

        maps:["https://www.google.com/maps?q=מקדונלדס+בית+הכרם+ירושלים",
              "https://www.google.com/maps?q=מקדונלדס+קניון+מבשרת",
              "https://www.google.com/maps?q=McDonald's+Ben+Yehuda+Jerusalem"],
        products:[
            {
                productName: 'ארוחת מגה מומבאי',
                price: 68,
                pic: "../תמונות/מוצרים/מקדונלדס/מגה מומבאי.png"
            }, {
                productName: 'ארוחת ריב אנטריקוט סמוקי',
                price: 68,
                pic:  "../תמונות/מוצרים/מקדונלדס/אנטריקוט סמוקי.png"
            }, {
                productName: 'ארוחת ילדים המבורגר',
                price: 31,
                pic:  "../תמונות/מוצרים/מקדונלדס/ארוחת ילדים.png"
            }, {
                productName:'סלט ירוק קריספי' ,
                price: 48,
                pic: "../תמונות/מוצרים/מקדונלדס/סלט ירוק קריספי.png"
            }, {
                productName: 'ביג מק',
                price: 22,
                pic: "../תמונות/מוצרים/מקדונלדס/ביג מק.png" 
            }, {
                productName: 'ציפס ענק',
                price:25 ,
                pic: "../תמונות/מוצרים/מקדונלדס/ציפס ענק.png"
            }, {
                productName: 'טבעות בצל',
                price: 18,
                pic:  "../תמונות/מוצרים/מקדונלדס/טבעות בצל.png"
            }, {
                productName: 'סלט ירוק קטן',
                price: 12,
                pic: "../תמונות/מוצרים/מקדונלדס/סלט ירוק קטן.png"
            },{
                productName:'בקבוק מים' ,
                price: 9,
                pic: "../תמונות/מוצרים/מקדונלדס/בקבוק מים.png"
            },{
                productName: 'קוקה קולה',
                price: 15,
                pic: "../תמונות/מוצרים/מקדונלדס/קוקה קולה.png"
            },{
                productName:'פיוז טי' ,
                price: 16,
                pic: "../תמונות/מוצרים/מקדונלדס/פיוזטי.png"
            }

        ]
    }, {
        resName:['פיצה האט | פסגת זאב','פיצה האט | קרית יובל','פיצה האט | תלפיות','פיצה האט | קניון מבשרת','פיצה האט | מלחה'],
        likes: 280,
        picFooter:["../תמונות/מפות/פיצה האט פסגת זאב.png","../תמונות/מפות/פיצה האט קרית יובל.png","../תמונות/מפות/פיצה האט תלפיות.png","../תמונות/מפות/פיצה האט מבשרת.png","../תמונות/מפות/פיצה האט מלחה.png"] ,
        picStore: '../תמונות/hotpizza.png',
        dis: 'פיצה עבה אמיתית',
        maps:[ "https://www.google.com/maps?q=פיצה+האט+פסגת+זאב+ירושלים",
               "https://www.google.com/maps?q=פיצה+האט+קרית+יובל+ירושלים",
               "https://www.google.com/maps?q=פיצה+האט+תלפיות+ירושלים",
               "https://www.google.com/maps?q=Pizza+Hut+Mevaseret+Zion",
               "https://www.google.com/maps?q=Pizza+Hut+Malha+Mall+Jerusalem",
               ],
        products:[
            {
                productName: 'פיצה משפחתית',
                price: 75,
                pic: "../תמונות/מוצרים/פיצה האט/פיצה משפחתית.png"
            },   {
                productName: 'פיצה אישית',
                price: 30,
                pic: "../תמונות/מוצרים/פיצה האט/פיצה אישית.png"
            },   {
                productName: 'משפחתית חלומי דקה',
                price: 85,
                pic: "../תמונות/מוצרים/פיצה האט/משפחתית חלומי דקה.png"
            },  {
                productName: 'לחם שום אישי',
                price: 27,
                pic: "../תמונות/מוצרים/פיצה האט/לחם שום אישי.png"
            },  {
                productName: 'מקלות שום מוצרלה משפחתי',
                price: 40,
                pic: "../תמונות/מוצרים/פיצה האט/שום מוצרלה משפחתי.png"
            },  {
                productName: 'מקלות שוקולד משפחתי',
                price: 33,
                pic: "../תמונות/מוצרים/פיצה האט/מקלות שוקולד משפחתי.png"
            },  {
                productName: 'זיווה שוקולד',
                price: 50,
                pic: "../תמונות/מוצרים/פיצה האט/זיווה שוקולד.png"
            },  {
                productName: 'זיווה גבינות',
                price: 58,
                pic: "../תמונות/מוצרים/פיצה האט/זיווה גבינות.png"
            }, {
                productName: 'מלוואח פיצה',
                price: 75,
                pic: "../תמונות/מוצרים/פיצה האט/מלוואח פיצה.png"
            }, {
                productName: 'סלט יווני',
                price: 43,
                pic: "../תמונות/מוצרים/פיצה האט/סלט יווני.png"
            }, {
                productName: 'לחם שום פטה',
                price: 30,
                pic: "../תמונות/מוצרים/פיצה האט/לחם שום פטה.png"
            },  {
                productName: 'פסטה שמנת פטריות',
                price: 42,
                pic: "../תמונות/מוצרים/פיצה האט/פסטה שמנת פטריות.png"
            },{
                productName: 'ציפס',
                price: 21,
                pic:"../תמונות/מוצרים/פיצה האט/ציפס.png" 
            },  {
                productName: 'טבעות בצל',
                price: 20,
                pic: "../תמונות/מוצרים/פיצה האט/טבעות בצל.png"
            },  {
                productName: 'פחית קוקה קולה',
                price: 10,
                pic: "../תמונות/מוצרים/פיצה האט/פחית קולה.png"
            },  {
                productName: 'מים בטעם קטן',
                price: 10,
                pic: "../תמונות/מוצרים/פיצה האט/מים בטעם.png"
            } ,{
                productName: 'פחית ספרייט קטן',
                price: 10,
                pic: "../תמונות/מוצרים/פיצה האט/פחית ספרייט.png"
            }
        ]
    }, {
        resName:['אצה | ירמיהו' , 'אצה | מבשרת','אצה | פסגת זאב'],
        likes: 170,
        picFooter: ["../תמונות/מפות/אצה ירמיהו.png","../תמונות/מפות/אצה מבשרת.png","../תמונות/מפות/אצה פסגת זאב.png"],
        picStore: '../תמונות/atzasushi.png',
        dis: 'סושי בר',
        maps:["https://www.google.com/maps?q=ירמיהו+9+ירושלים",
              "https://www.google.com/maps?q=שדרות+הראל+8+מבשרת+ציון",
              "https://www.google.com/maps?q=אצה+פסגת+זאב+ירושלים"
        ],
        products:[
           {
                productName: 'אצה רול',
                price: 53,
                pic: "../תמונות/מוצרים/אצה/אצה רול.png"
            },   {
                productName: 'ספייסי טאקי רול',
                price: 55,
                pic: "../תמונות/מוצרים/אצה/ספייסי טאקה רול.png"
            },   {
                productName: 'מאנגה רול',
                price: 67,
                pic: "../תמונות/מוצרים/אצה/מאנגה רול.png"
            },  {
                productName: 'טמפורה',
                price: 48,
                pic: "../תמונות/מוצרים/אצה/טמפורה.png"
            },  {
                productName: 'ספייסי סלומון',
                price: 46,
                pic: "../תמונות/מוצרים/אצה/ספייסי סלומון.png"
            },  {
                productName: 'מיקס',
                price: 127,
                pic: "../תמונות/מוצרים/אצה/מיקס.png"
            },  {
                productName: 'סלומון',
                price: 107,
                pic: "../תמונות/מוצרים/אצה/סלומון.png"
            }, {
                productName: 'סלט אצה',
                price: 51,
                pic: "../תמונות/מוצרים/אצה/סלט אצה.png"
            },  {
                productName: 'סנדוויץ קריספי',
                price: 48,
                pic: "../תמונות/מוצרים/אצה/סנדוויץ קריספי.png"
            },  {
                productName: 'שניצל פנקו',
                price: 54,
                pic: "../תמונות/מוצרים/אצה/שניצל פנקו.png"
            },  {
                productName: 'שרי סלומון',
                price: 79,
                pic: "../תמונות/מוצרים/אצה/שרי סלמון.png"
            },  {
                productName: 'בטטה ציפס רול',
                price: 53,
                pic: "../תמונות/מוצרים/אצה/בטטה ציפס.png"
            },  {
                productName: 'פאי שוקולד',
                price: 44,
                pic: "../תמונות/מוצרים/אצה/פאי שוקולד.png"
            },  {
                productName: 'פאי לימון',
                price: 44,
                pic: "../תמונות/מוצרים/אצה/פאי לימון.png"
            },  {
                productName: 'פאי סניקרס',
                price: 44,
                pic: "../תמונות/מוצרים/אצה/פאי סניקרס.png"
            },  {
                productName: 'בקבוק קוקה קולה',
                price: 13,
                pic: "../תמונות/מוצרים/אצה/קולה.png"
            },  {
                productName: 'קולה זירו',
                price: 13,
                pic: "../תמונות/מוצרים/אצה/קולה זירו.png"
            },  {
                productName: 'סודה',
                price: 11,
                pic: "../תמונות/מוצרים/אצה/סודה.png"
            }
        ]
    },  {
        resName:['מנפיס | גן סאקר','מנפיס | הר חומה','מנפיס | גילה','מנפיס | מחנה יהודה','מנפיס | מבשרת'],
        likes: 350,
        picFooter:["../תמונות/מפות/מנפיס גן סאקר.png","../תמונות/מפות/מנפיס הר חומה.png","../תמונות/מפות/מנפיס מחנה יהודה.png","../תמונות/מפות/מנפיס מבשרת.png","../תמונות/מפות/מנפיס גילה.png"] ,
        picStore:'../תמונות/menfis.png' ,
        dis: 'חויה של טעם בחיים במנפיס',
        maps:[  'https://www.google.com/maps?q=שדרות+בן+צבי+11+ירושלים',
                'https://www.google.com/maps?q=אליהו+קורן+27+ירושלים',
                'https://www.google.com/maps?q=הגננת+216+ירושלים',
                'https://www.google.com/maps?q=מנפיס+מחנה+יהודה+ירושלים',
                'https://www.google.com/maps?q=מנפיס+מבשרת+ציון'
            ],
        products:[
           {
                productName: 'טוסט הבית',
                price: 40,
                pic: "../תמונות/מוצרים/מנפיס/טוסט הבית.png"
            },   {
                productName: 'טוסט אקסטרה',
                price: 50,
                pic: "../תמונות/מוצרים/מנפיס/טוסט אקסטרה.png"
            },   {
                productName: 'פינוק זוגי',
                price: 110,
                pic: "../תמונות/מוצרים/מנפיס/פינוק זוגי.png"
            },  {
                productName: 'טוסט ארבעת המופלאים',
                price: 40,
                pic: "../תמונות/מוצרים/מנפיס/ארבעת המופלאים.png"
            },  {
                productName: 'נקנקית נשנוש',
                price: 12,
                pic: "../תמונות/מוצרים/מנפיס/נקנקיית נשנוש.png"
            },  {
                productName: 'חמוצי הבית',
                price: 20,
                pic: "../תמונות/מוצרים/מנפיס/חמוצי הבית.png"
            }, {
                productName: 'קובה בשר',
                price: 30,
                pic: "../תמונות/מוצרים/מנפיס/קובה בשר.png"
            }, {
                productName: 'פוטטוס',
                price: 22,
                pic: "../תמונות/מוצרים/מנפיס/פוטטוס.png"
            }, {
                productName: 'פסטל במילוי תפוח אדמה',
                price: 22,
                pic: "../תמונות/מוצרים/מנפיס/פסטל במילוי תפוח אדמה.png"
            },  {
                productName: 'צורוס',
                price: 30,
                pic: "../תמונות/מוצרים/מנפיס/צורוס.png"
            }, {
                productName: 'מוס בראוניז אוראו',
                price: 15,
                pic: "../תמונות/מוצרים/מנפיס/מוס בראוניז אוראו.png"
            },  {
                productName: 'שניצלונים וציפס',
                price: 55,
                pic: "../תמונות/מוצרים/מנפיס/שניצלונים וציפס.png"
            },  {
                productName: 'כדורי פירה',
                price: 22,
                pic: "../תמונות/מוצרים/מנפיס/כדורי פירה.png"
            },  {
                productName: 'משה בתיבה',
                price: 22,
                pic: "../תמונות/מוצרים/מנפיס/משה בתיבה.png"
            },  {
                productName: 'סיגרים בשר',
                price: 22,
                pic: "../תמונות/מוצרים/מנפיס/סיגרים בשר.png"
            },  {
                productName: 'מוס סניקרס טבעוני',
                price: 15,
                pic: "../תמונות/מוצרים/מנפיס/מוס סניקרס טבעוני.png"
            }, {
                productName: 'שוקו פאי',
                price: 15,
                pic: "../תמונות/מוצרים/מנפיס/שוקו פאי.png"
            }, {
                productName: 'פריגת ענבים',
                price: 12,
                pic: "../תמונות/מוצרים/מנפיס/פריגת ענבים.png"
            },  {
                productName: 'בירה שחורה',
                price: 12,
                pic: "../תמונות/מוצרים/מנפיס/בירה שחורה.png"
            }
        ]
    },  {
        resName:['BE - FRESH | ממילא','BE - FRESH | שערי צדק', 'BE - FRESH | מלחה'],
        likes: 301,
        picFooter: ["../תמונות/מפות/ביפרש ממילא.png","../תמונות/מפות/ביפרש שערי צדק.png","../תמונות/מפות/ביפרש מלחה.png","../תמונות/מפות/ביפרש מבשרת.png"],
        picStore: '../תמונות/bfresh.png',
        dis: 'משקאות | בריאות | טפיוקה | ביפרש',

        maps:[  'https://www.google.com/maps?q=BE+FRESH+ממילא+ירושלים',
                'https://www.google.com/maps?q=BE+FRESH+שערי+צדק+ירושלים',
                'https://www.google.com/maps?q=BE+FRESH+מלחה+ירושלים',
                'https://www.google.com/maps?q=בי+פרש+מבשרת+ציון'
],
        products:[
           {
                productName: 'B-BUBBLE SUNRISE',
                price: 34,
                pic: "../תמונות/מוצרים/ביי פרש/B-BUBBLE SUNRISE.png"
            },   {
                productName: 'B-PINK BRULEE',
                price: 36,
                pic: "../תמונות/מוצרים/ביי פרש/B-PINK BRULEE.png"
            },   {
                productName: 'B-MATCHA BRULEE',
                price: 36,
                pic: "../תמונות/מוצרים/ביי פרש/B-MATCHA BRULEE.png"
            },  {
                productName: 'B-CREAM CAFE TIRAMISU',
                price:33 ,
                pic: "../תמונות/מוצרים/ביי פרש/B-CREAM CAFE TIRAMISU.png"
            },  {
                productName: 'B-CHILL',
                price:30 ,
                pic: "../תמונות/מוצרים/ביי פרש/B-CHILL.png"
            },  {
                productName: 'B-LIME',
                price: 30,
                pic: "../תמונות/מוצרים/ביי פרש/B-LIME.png"
            },  {
                productName: 'B-ALFA',
                price: 30,
                pic: "../תמונות/מוצרים/ביי פרש/B-ALFA.png"
            },  {
                productName: 'B-RIO',
                price: 30,
                pic: "../תמונות/מוצרים/ביי פרש/B-RIO.png"
            },  {
                productName: 'B-CREAM CHOCOLATE',
                price:33 ,
                pic: "../תמונות/מוצרים/ביי פרש/B-CREAM CAFE CHOCOLATE.png"
            }
        ]
    },  {
        resName:['חומוס אליהו | סנטר 1','חומוס אליהו | קניון רמות','חומוס אליהו | הר חוצבים','חומוס אליהו | מבשרת','חומוס אליהו | תלפיות','חומוס אליהו | יפו','חומוס אליהו | מחנה יהודה'],
        likes: 283,
        picFooter:["../תמונות/מפות/חומוס סנטר1.png","../תמונות/מפות/חומוס קניון רמות.png","../תמונות/מפות/חומוס הר חוצבים.png","../תמונות/מפות/חומוס תלפיות.png","../תמונות/מפות/חומוס יפו.png","../תמונות/מפות/חומוס מחנה יהודה.png"] ,
        picStore: '../תמונות/image (34).png',
        dis: 'חומוס ישראלי חם וטרי שנטחן במקום',

        maps:['https://www.google.com/maps?q=חומוס+אליהו+סנטר+1+ירושלים',
              'https://www.google.com/maps?q=חומוס+אליהו+קניון+רמות+ירושלים',
              'https://www.google.com/maps?q=חומוס+אליהו+הר+חוצבים+ירושלים',
              'https://www.google.com/maps?q=חומוס+אליהו+מבשרת+ציון',
              'https://www.google.com/maps?q=חומוס+אליהו+תלפיות+ירושלים',
              'https://www.google.com/maps?q=חומוס+אליהו+יפו+תל+אביב',
              'https://www.google.com/maps?q=חומוס+אליהו+מחנה+יהודה+ירושלים'],
        products:[
           {
                productName: 'חומוס ביצה',
                price: 40,
                pic: "../תמונות/מוצרים/חומוס אליהו/חומוס ביצה.png"
            },   {
                productName: 'חומוס סביח',
                price: 48,
                pic: "../תמונות/מוצרים/חומוס אליהו/חומוס סביח.png"
            },   {
                productName: 'חומוס פטריות',
                price: 48,
                pic: "../תמונות/מוצרים/חומוס אליהו/חומוס פטריות.png"
            },  {
                productName: 'חומוס משולב | גרגירים וטחינה',
                price: 41,
                pic: "../תמונות/מוצרים/חומוס אליהו/חומוס משולב.png"
            },  {
                productName: 'סלט ישראלי גדול',
                price: 31,
                pic: "../תמונות/מוצרים/חומוס אליהו/סלט ישראלי גדול.png"
            },  {
                productName: 'סלט המלך',
                price: 47,
                pic: "../תמונות/מוצרים/חומוס אליהו/סלט המלך.png"
            },  {
                productName: '5 כדורי פלאפל',
                price: 12,
                pic: "../תמונות/מוצרים/חומוס אליהו/כדורי פלאפל.png"
            },  {
                productName: 'ציפס',
                price: 18,
                pic: "../תמונות/מוצרים/חומוס אליהו/ציפס.png"
            },  {
                productName: 'חומוס',
                price: 21,
                pic: "../תמונות/מוצרים/חומוס אליהו/חומוס.png"
            },  {
                productName: 'טחינה',
                price: 19,
                pic: "../תמונות/מוצרים/חומוס אליהו/טחינה.png"
            },  {
                productName: 'חצילים מטוגנים',
                price: 19,
                pic: "../תמונות/מוצרים/חומוס אליהו/חצילים מטוגנים.png"
            },  {
                productName: 'סלט טורקי',
                price: 21,
                pic: "../תמונות/מוצרים/חומוס אליהו/סלט טורקי.png"
            }, {
                productName: 'חריף של אליהו',
                price: 18,
                pic: "../תמונות/מוצרים/חומוס אליהו/חריף של אליהו.png"
            }, {
                productName: 'פיתה עבודת יד',
                price: 3,
                pic: "../תמונות/מוצרים/חומוס אליהו/פיתה עבודת יד.png"
            }, {
                productName: 'פלפלים חריפים קטן',
                price:21 ,
                pic: "../תמונות/מוצרים/חומוס אליהו/פלפלים חריפים.png"
            }, {
                productName: 'לימונדת הבית',
                price:12 ,
                pic: "../תמונות/מוצרים/חומוס אליהו/לימונדת הבית.png"
            }, {
                productName: 'מלביהו',
                price:18 ,
                pic: "../תמונות/מוצרים/חומוס אליהו/מלביהו.png"
            }, {
                productName: 'פחית פאנטה',
                price:12 ,
                pic: "../תמונות/מוצרים/חומוס אליהו/פחית פאנטה.png"
            }, {
                productName: 'בירה מאלטי',
                price:14 ,
                pic: "../תמונות/מוצרים/חומוס אליהו/בירה מאלטי.png"
            }
        ]
    },
     {
        resName:['גולדה | בית הכרם','גולדה | ממילא','גולדה | מלחה'],
        likes: 235,
        picFooter: ["../תמונות/מפות/גולדה בית הכרם.png","../תמונות/מפות/גולדה ממילא.png","../תמונות/מפות/גולדה מלחה.png"],
        picStore: '../תמונות/golda.png',
        dis: 'גולדה גלידה - בוטיק של טעמים',
        maps:['https://www.google.com/maps?q=גולדה+בית+הכרם+ירושלים',
              'https://www.google.com/maps?q=גולדה+ממילא+ירושלים',
              'https://www.google.com/maps?q=Golda+Malha+Jerusalem'],
        products:[
           {
                productName: 'גיפט בוקס',
                price: 190,
                pic: "../תמונות/מוצרים/גולדה/גיפט בוקס.png"
            },   {
                productName: 'גלידה חצי קילו',
                price: 74,
                pic: "../תמונות/מוצרים/גולדה/גלידה חצי קילו.png"
            },   {
                productName: 'גלידת יוגורט',
                price: 74,
                pic: "../תמונות/מוצרים/גולדה/גלידת יוגורט.png"
            },  {
                productName: 'גלידה קילו',
                price: 120,
                pic: "../תמונות/מוצרים/גולדה/גלידה קילו.png"
            },  {
                productName: 'גלידה גולדה 0.25 קילו',
                price: 47,
                pic: "../תמונות/מוצרים/גולדה/גלידה גולדה רבע קילו.png"
            },  {
                productName: 'יורגוט קילו',
                price: 118,
                pic: "../תמונות/מוצרים/גולדה/יוגורט קילו.png"
            },  {
                productName: 'וופל בלגי + גלידה',
                price: 80,
                pic: "../תמונות/מוצרים/גולדה/וופל בלגי+גלידה.png"
            },  {
                productName: 'קרפ + גלידה',
                price: 79,
                pic: "../תמונות/מוצרים/גולדה/קרפ פלוס גלידה.png"
            },  {
                productName: 'כוס קצפת',
                price: 11,
                pic: "../תמונות/מוצרים/גולדה/כוס קצפת.png"
            },  {
                productName: 'חמש דיסקיות גולדה',
                price: 2,
                pic: "../תמונות/מוצרים/גולדה/דיסקיות גולדה.png"
            }
        ]
    },
     {
        resName:['זלמנס | קניון רמות','זלמנס | רוממה' ,'זלמנס | מלחה','זלמנס | מדרחוב'],
        likes: 235,
        picFooter: ["../תמונות/מפות/זלמנס רמות.png","../תמונות/מפות/זלמנס רוממה.png","../תמונות/מפות/זלמנס מלחה.png","../תמונות/מפות/זלמנס מדרחוב.png"],
        picStore: '../תמונות/zalmens.png',
        dis: 'אוכלים אמריקה',
        maps:['https://www.google.com/maps?q=זלמנס+קניון+רמות+ירושלים',
              'https://www.google.com/maps?q=זלמנס+רוממה+ירושלים',
              'https://www.google.com/maps?q=זלמנס+מלחה+ירושלים',
              'https://www.google.com/maps?q=זלמנס+מדרחוב+ירושלים'
            ],
        products:[
           {
                productName: 'נקנקית בקר פיקנתי',
                price: 38,
                pic: "../תמונות/מוצרים/זלמנס/נקנקיית בקר פיקנטי.png"
            },   {
                productName: 'טוסט הודו',
                price: 40,
                pic: "../תמונות/מוצרים/זלמנס/טוסט הודו.png"
            },   {
                productName: 'טוסטביף',
                price:55 ,
                pic: "../תמונות/מוצרים/זלמנס/טוסטביף.png"
            },  {
                productName: 'שניצל בחלה',
                price: 54,
                pic: "../תמונות/מוצרים/זלמנס/שניצל בחלה.png"
            },  {
                productName: 'טוסט אולסטאר',
                price: 47,
                pic: "../תמונות/מוצרים/זלמנס/טוסט אולסטאר.png"
            },  {
                productName: 'מאימי היט',
                price: 38,
                pic: "../תמונות/מוצרים/זלמנס/כנפיים.png"
            },  {
                productName: 'שניצלונים',
                price: 35,
                pic: "../תמונות/מוצרים/זלמנס/שניצלונים.png"
            },  {
                productName: 'כנפיים',
                price: 32,
                pic: "../תמונות/מוצרים/זלמנס/כנפיים.png"
            },  {
                productName: 'קורנדוג זוגי',
                price: 39,
                pic: "../תמונות/מוצרים/זלמנס/קונדוג זוגי.png"
            },  {
                productName: 'קורנדוג קוריאני',
                price: 23,
                pic: "../תמונות/מוצרים/זלמנס/קורנדוג קוריאני.png"
            },  {
                productName: 'ציפס',
                price: 18,
                pic: "../תמונות/מוצרים/זלמנס/ציפס.png"
            },  {
                productName: 'ארוחת ילדים',
                price: 35,
                pic: "../תמונות/מוצרים/זלמנס/ארוחת ילדים.png"
            },  {
                productName: 'סלט נקנקית השף',
                price: 55,
                pic: "../תמונות/מוצרים/זלמנס/סלט נקנקיית השף.png"
            },  {
                productName: 'סלט עלים אישי',
                price: 15,
                pic: "../תמונות/מוצרים/זלמנס/סלט עלים.png"
            },  {
                productName: 'תות בננה',
                price: 10,
                pic: "../תמונות/מוצרים/זלמנס/תות בננה.png"
            },  {
                productName: 'פיוזטי',
                price: 12,
                pic: "../תמונות/מוצרים/זלמנס/פיוזטי.png"
            },  {
                productName: 'מים בטעם ענבים',
                price: 12,
                pic: "../תמונות/מוצרים/זלמנס/מים בטעם ענבים.png"
            }
        ]
    },
     {
        resName:['דניה | כנפי נשרים','דניה | יפו','דניה | בית הכרם'],
        likes: 289,
        picFooter: ["../תמונות/מפות/דניה כנפש.png","../תמונות/מפות/דניה יפו.png","../תמונות/מפות/דניה בית הכרם.png"],
        picStore: '../תמונות/denya.png',
        dis: 'קפה משובח. מטבח ייחודי',
        maps:[ 'https://www.google.com/maps?q=דניה+כנפי+נשרים+ירושלים',
               'https://www.google.com/maps?q=דניה+יפו+ירושלים',
               'https://www.google.com/maps?q=דניה+בית+הכרם+ירושלים'],
        products:[
           {
                productName: 'סלט דניה',
                price: 72,
                pic: "../תמונות/מוצרים/דניה/סלט דניה.png"
            },   {
                productName: 'סלט ברזל',
                price: 68,
                pic: "../תמונות/מוצרים/דניה/סלט ברזל.png"
            },   {
                productName: 'סלט קפרזה',
                price: 62,
                pic: "../תמונות/מוצרים/דניה/סלט קפרזה.png"
            },   {
                productName: 'שקשוקה צרפתית',
                price: 76,
                pic: "../תמונות/מוצרים/דניה/שקשוקה צרפתית.png"
            },   {
                productName: 'כריך דניה',
                price: 54,
                pic: "../תמונות/מוצרים/דניה/כריך דניה.png"
            },   {
                productName: 'כריך טונה אדומה',
                price: 62,
                pic: "../תמונות/מוצרים/דניה/כריך טונה אדומה.png"
            },   {
                productName: 'בריוש קריספי סלמון 🌶️',
                price: 59,
                pic: "../תמונות/מוצרים/דניה/קריספי סלמון.png"
            },  {
                productName: 'טוסט רועים',
                price: 56,
                pic: "../תמונות/מוצרים/דניה/טוסט רועים.png"
            },  {
                productName: 'פיצה פרסקה',
                price: 66,
                pic: "../תמונות/מוצרים/דניה/פיצה פרסקה.png"
            },  {
                productName: 'הפוקצה של דניה',
                price: 34,
                pic: "../תמונות/מוצרים/דניה/פוקצה דניה.png"
            },  {
                productName: 'פוקצה גלילית',
                price: 56,
                pic: "../תמונות/מוצרים/דניה/פוקצה גלילית.png"
            },  {
                productName: 'פוקצה עגבניות',
                price: 56,
                pic: "../תמונות/מוצרים/דניה/פוקצה עגבניות.png"
            },  {
                productName: 'רביולי סלק',
                price: 72,
                pic: "../תמונות/מוצרים/דניה/רביולי סלק.png"
            },  {
                productName: 'ניוקי ערמונים',
                price: 72,
                pic: "../תמונות/מוצרים/דניה/ניוקי ערמונים.png"
            },  {
                productName: 'אלפרדו פונגי',
                price: 68,
                pic: "../תמונות/מוצרים/דניה/אלפרדו פונגי.png"
            },  {
                productName: 'פיש & ציפס',
                price: 79,
                pic: "../תמונות/מוצרים/דניה/פיש&ציפס.png"
            },  {
                productName: 'סלט עלים גדול',
                price: 42,
                pic: "../תמונות/מוצרים/דניה/סלט עלים גדול.png"
            },  {
                productName: 'מילקשייק דניה',
                price: 32,
                pic: "../תמונות/מוצרים/דניה/מילקשייק דניה.png"
            },  {
                productName: 'אייס דניה',
                price: 25,
                pic: "../תמונות/מוצרים/דניה/אייס דניה.png"
            },  {
                productName: 'נמסיס שוקולד',
                price: 52,
                pic: "../תמונות/מוצרים/דניה/נמסיס שוקולד.png"
            }
        ]
    }]
//  localStorageהכנסת נתונים ל
let restaurantJson = JSON.stringify(restaurant)
localStorage.setItem('restaurants', restaurantJson)



// יצירת סקרול מתחלף למסעדות (עם ספריית Swiper)
let swiper = new Swiper('.swiper-container', {
  speed: 1000,             // מהירות התנועה של הסליידים
  slidesPerView: 2,        // כמה שקפים מוצגים בבת אחת
  spaceBetween: 20,        // רווח בין השקפים
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// מערך של כתובות תמונות שימולאו לתוך הסליידים
let allpic = [
  '../תמונות/wolt3.png', '../תמונות/wolt7.jpg', '../תמונות/wolt8.png',
  '../תמונות/wolt5.png', '../תמונות/wolt2.png', '../תמונות/wolt9.png',
  '../תמונות/wolt11.png', '../תמונות/wolt1.png', '../תמונות/wolt4.png',
  '../תמונות/wolt10.png', '../תמונות/wolt6.png'
]

// שליפת כל השקפים בדף והוספת רקע לכל אחד לפי התמונה במערך
let divpic = document.getElementsByClassName('swiper-slide')
let c = 0
for (let i = 0; i < divpic.length; i++) {
  divpic[i].style.backgroundImage = "url('" + allpic[c] + "')"
  c++
}

// מערך עם תמונות לוגו ושמות מסעדות (לתנועה האופקית)
let allPicsMove = [
  { pic: '../תמונות/לוגו/לוגו אצה.png', nameStor: 'אצה' },
  { pic: '../תמונות/לוגו/לוגו ביפרש.png', nameStor: 'B-FRESH' },
  { pic: '../תמונות/לוגו/לוגו גולדה.jpg', nameStor: 'גולדה' },
  { pic: '../תמונות/לוגו/לוגו דניה.png', nameStor: 'דניה' },
  { pic: '../תמונות/לוגו/לוגו זלמנס.png', nameStor: 'זלמנס' },
  { pic: '../תמונות/לוגו/לוגו חומוס אליהו.jpg', nameStor: 'חומוס אליהו' },
  { pic: '../תמונות/לוגו/לוגו מנפיס.png', nameStor: 'מנפיס' },
  { pic: '../תמונות/לוגו/לוגו מקדונלדס.png', nameStor: 'מקדונלדס' },
  { pic: '../תמונות/לוגו/לוגו קצפת.png', nameStor: 'קצפת' },
  { pic: '../תמונות/לוגו/פיצה-האט לוגו.png', nameStor: 'פיצה האט' }
]

// יצירת פס תנועה של לוגואים במסך (רקורסיה כפולה – כדי שיהיה מעגלי)
let picsMove = document.getElementsByClassName('slide-track')[0]

function addpics(allpicsMove) {
  for (let m = 0; m < allPicsMove.length; m++) {
    let divPicMove = document.createElement('div')
    divPicMove.className = 'slideMove'
    divPicMove.style.backgroundImage = "url('" + allPicsMove[m].pic + "')"
    picsMove.appendChild(divPicMove)
  }
}

// הכפלה כדי ליצור תנועה אינסופית
addpics(allPicsMove)
addpics(allPicsMove)



let picFooter = document.getElementsByTagName('footer')[0]


let imgFooter = document.createElement('img')
imgFooter.src = '../תמונות/פוטר.png'
picFooter.appendChild(imgFooter)

// יצירת קופסת טקסט עם מידע וברכה
let textFooter = document.createElement('div')
textFooter.id = 'textFooter'
let pFooter = document.createElement('p')
pFooter.innerText = 'ברוכים הבאים לוולט — הבית שלך להזמנות אוכל במהירות ובקלות!\n' +
  'כאן תמצאו מגוון רחב של מסעדות טעימות מכל הז’אנרים, עם משלוח מהיר עד הבית.\n' +
  'מחפשים השראה לארוחה? תנו לנו להגריל לכם מסעדה או מנה – ולטעום משהו חדש!\n' +
  'וולט – כי כל יום צריך להיות טעים ומהנה.\n\n' +
  'לתגובות, הערות/הארות נשמח לשמוע...'


let inputFooter = document.createElement('input')
inputFooter.type = 'text'

// יצירת כפתור שליחה
let buttonFooter = document.createElement('input')
buttonFooter.id = 'submit'
buttonFooter.type = 'submit'
buttonFooter.value = 'שלח'

// הרכבת הפוטר
textFooter.appendChild(pFooter)
textFooter.appendChild(inputFooter)
textFooter.appendChild(buttonFooter)
picFooter.appendChild(textFooter)

// פעולה שמתרחשת כשלוחצים על כפתור השליחה
buttonFooter.addEventListener('click', function () {
  if (inputFooter.value != '') {
    // יצירת הודעת פופ-אפ
    let popFooter = document.createElement('div')
    popFooter.id = 'popFooter'
    popFooter.innerText = 'תגובתך נשלחה בהצלחה!👌'
    document.body.appendChild(popFooter)

 
    let sound = new Audio('../audio/success-340660.mp3')
    sound.play()

    // העלמת הפופ-אפ אחרי שנייה וחצי
    setTimeout(() => {
      popFooter.remove()
    }, 1500)
  }

  // איפוס שדה הקלט
  inputFooter.value = ''
})


