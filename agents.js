// ════════════════════════════════════════════════════════════
//  רשימת סוכנים — RE/MAX טאבו נכסים
//  ניתן לפתוח ולערוך קובץ זה בכל עורך טקסט (Notepad, TextEdit...)
// ════════════════════════════════════════════════════════════
//
//  להוספת סוכן חדש:
//  1. העתק את הבלוק { ... } של סוכן קיים (כולל הפסיק בסוף)
//  2. שנה את הפרטים: name, role, license, phone
//  3. להוספת תמונה:
//     א. גש לאתר: https://www.base64-image.de/
//     ב. העלה את תמונת הסוכן
//     ג. לחץ "copy image" ועתק את כל הטקסט שמתחיל ב-data:image/...
//     ד. החלף את המילה null בשדה photo ב: "הטקסט שהעתקת"
//        דוגמה:   photo: "data:image/jpeg;base64,/9j/4AAQ..."
//  4. אם אין תמונה — השאר: photo: null
//
// ════════════════════════════════════════════════════════════

const AGENTS = [
  {
    name:    "משה שניאור",
    role:    "זכיין",
    license: "3181402",
    phone:   "052-8110611",
    photo:   "images/Moshe_Shneor_image.png"
  },
  {
    name:    "ליאור ישראלי",
    role:    "סוכן נדל\"ן",
    license: "3224854",
    phone:   "052-3892647",
    photo:   "images/Lior_Israeli_image.png"
  },
  {
    name:    "לימור מרקו",
    role:    "סוכנת נדל\"ן",
    license: "312109174",
    phone:   "053-3453961",
    photo:   "images/Limor_Marco_image.png"
  },
  {
    name:    "מרים שפנגנטל",
    role:    "סוכנת נדל\"ן",
    license: "31034580",
    phone:   "054-8366822",
    photo:   "images/Miriam_Shpangental_image.png"
  },
  {
    name:    "הדס אהרון",
    role:    "סוכנת נדל\"ן",
    license: "3166785",
    phone:   "050-7690054",
    photo:   "images/Hadas_Aharon_image.png"
  },
  {
    name:    "יהודית זקן",
    role:    "סוכנת נדל\"ן",
    license: "311106208",
    phone:   "052-8249515",
    photo:   "images/Yehudit_Zaken_image.png"
  },
  {
    name:    "הדס יחזקאל",
    role:    "סוכנת נדל\"ן",
    license: "3244972",
    phone:   "053-8243590",
    photo:   "images/Hadas_Yechezkel_image.png"
  },
  {
    name:    "אפרת לוי",
    role:    "סוכנת נדל\"ן",
    license: "3151288",
    phone:   "050-4443830",
    photo:   "images/Efrat_Levi_image.png"
  },
  {
    name:    "מאיר מאור אקריש",
    role:    "סוכן נדל\"ן",
    license: "31927075",
    phone:   "050-6999596",
    photo:   "images/Meir_Maor_Akrish_image.png"
  },
  {
    name:    "אברהם קטרי",
    role:    "סוכן נדל\"ן",
    license: "3204910",
    phone:   "058-7551878",
    photo:   "images/Avraham_Katri_image.png"
  },
  {
    name:    "רחל מלכא",
    role:    "סוכנת נדל\"ן",
    license: "31929675",
    phone:   "055-6697474",
    photo:   "images/Rachel_Malka_image.png"
  }
];