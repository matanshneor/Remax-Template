# RE/MAX טאבו נכסים — תבנית מודעות

## מטרת הפרויקט
כלי ליצירת מודעות נדל"ן עבור סוכני **RE/MAX טאבו נכסים**.
הכלי חייב להיות פשוט וידידותי לחלוטין — המשתמשים אינם טכנולוגיים.

## הקובץ הראשי
`index.html` — קובץ HTML יחיד, נפתח בדפדפן ישירות (Chrome/Safari).

### זרימת עבודה
1. לחיצה כפולה על `index.html`
2. בחירת סוכן מהרשימה בצד
3. לחיצה על 4 ריבועי תמונה → בחירת תמונות נכס מהמחשב
4. מילוי שדות: סוג נכס / פרטים / מחיר
5. לחיצה "צור מודעה (PNG)" → PNG מורד אוטומטית

## עיצוב — נעול, אל תשנה ללא אישור
| פרמטר | ערך |
|--------|------|
| צבע NAVY | `#1B3564` |
| צבע RED | `#CC0000` |
| פונט | Arial / Manrope |
| כיוון | RTL (עברית) |
| רוחב מודעה | 520px (מוצג × 2 ב-PNG) |

## קבצים בפרויקט
| קובץ | תפקיד |
|------|--------|
| `index.html` | **הכלי הראשי** |
| `agents.js` | רשימת הסוכנים — ניתן לערוך בעורך טקסט רגיל |
| `images/` | תמונות כל הסוכנים + לוגו |

## סוכנים קיימים (agents.js)
| שם | רישיון | טלפון | קובץ תמונה |
|----|---------|--------|------------|
| משה שניאור | 3181402 | 052-8110611 | Moshe_Shneor_image.png |
| ליאור ישראלי | 3224854 | 052-3892647 | Lior_Israeli_image.png |
| לימור מרקו | 312109174 | 052-8421420 | Limor_Marco_image.png |
| מרים שפנגנטל | 31034580 | 054-8366822 | Miriam_Shpangental_image.png |
| הדס אהרון | 3166785 | 050-7690054 | Hadas_Aharon_image.png |
| יהודית זקן | 311106208 | 052-8249515 | Yehudit_Zaken_image.png |
| הדס יחזקאל | 3244972 | 053-8243590 | Hadas_Yechezkel_image.png |

## הוספת סוכן חדש

### 1. הכנת התמונה
```bash
# הסרת רקע (Python, דורש rembg)
python3 -c "
from rembg import remove
from PIL import Image
import io, numpy as np

with open('original.jpg', 'rb') as f:
    result = remove(f.read())

img = Image.open(io.BytesIO(result)).convert('RGBA')
arr = np.array(img)
alpha = arr[:,:,3]
rows = np.where(alpha.max(axis=1) > 10)[0]
cols = np.where(alpha.max(axis=0) > 10)[0]

# חיתוך צמוד לדמות + שוליים קטנים
pad = 20
crop = img.crop((cols[0]-pad, rows[0]-pad, cols[-1]+pad, rows[-1]+pad))
pw, ph = crop.size
scale = 800 / ph
resized = crop.resize((int(pw*scale), 800), Image.LANCZOS)

canvas = Image.new('RGBA', (800, 800), (0,0,0,0))
canvas.paste(resized, ((800-resized.width)//2, 0))
canvas.save('images/Agent_Name_image.png')
"
```

### 2. עיבוד נוסף אם נדרש
- **הגדלה**: שנה scale ב-`img.resize()`
- **מרכוז**: חשב מרכז הדמות והזז לנקודה (400, 400) בתמונה 800×800
- **כלל הזהב**: הדמות צריכה להיות ממורכזת, לא לחרוג מגבולות 800×800

### 3. עדכון agents.js
```javascript
{
  name:    "שם הסוכן",
  role:    "סוכן/ת נדל\"ן",
  license: "מספר רישיון",
  phone:   "05X-XXXXXXX",
  photo:   "images/Agent_Name_image.png"
}
```

## פרטי תצוגת תמונת הסוכן
- גודל עיגול בתצוגה: **104×104px** (עם border-radius: 50%)
- תמונות מאוחסנות כ-PNG עם רקע שקוף (**RGBA**)
- גודל סטנדרטי: **800×800px**
- CSS: `object-fit: contain; object-position: center bottom`
- לוגו RE/MAX — מאוחסן ב-`images/Remax_Logo.png`
