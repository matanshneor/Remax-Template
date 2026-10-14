# מייצר את agent-photos.js — עותק מוטמע (base64) של תמונות הסוכנים מתיקיית images/.
# בלי זה, כשפותחים את index.html בלחיצה כפולה (file://), הדפדפן חוסם את יצירת ה-PNG
# ("Tainted canvases may not be exported").
# יש להריץ שוב אחרי הוספה או החלפה של תמונת סוכן:  python3 update_agent_photos.py
import base64, glob, io, json, os
from PIL import Image

os.chdir(os.path.dirname(os.path.abspath(__file__)))
photos = {}
for path in sorted(glob.glob('images/*_image.png')):
    buf = io.BytesIO()
    Image.open(path).save(buf, 'WEBP', quality=90, method=6)  # שומר שקיפות, קטן פי ~7 מ-PNG
    photos[path] = 'data:image/webp;base64,' + base64.b64encode(buf.getvalue()).decode()

with open('agent-photos.js', 'w', encoding='utf-8') as f:
    f.write('// נוצר אוטומטית ע"י update_agent_photos.py — אין לערוך ידנית\n')
    f.write('window.AGENT_PHOTOS = {\n')
    f.write(',\n'.join(f'  {json.dumps(k)}: {json.dumps(v)}' for k, v in photos.items()))
    f.write('\n};\n')
print(f'agent-photos.js: {len(photos)} photos')
