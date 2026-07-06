// פרטי יצירת קשר — עדכן את המספר האמיתי כאן (מספר לדוגמה בינתיים)
export const PHONE_DISPLAY = '050-000-0000'
export const PHONE_INTL = '972500000000' // פורמט בינלאומי לוואטסאפ

export const WHATSAPP_MESSAGE = 'היי עידן, ראיתי את האתר ואשמח לשמוע פרטים על בניית אתר 😊'

export const whatsappLink = `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
export const telLink = `tel:+${PHONE_INTL}`

export const projects = [
  {
    title: 'חבל הארץ',
    tagline: 'אתר תדמית קהילתי ותיירותי',
    description:
      'אתר תדמית עשיר עם חוויית משתמש עוצרת נשימה, תמונות נוף ומבנה שמזמין את הגולש להישאר ולחקור.',
    tags: ['אתר תדמית', 'עיצוב מותאם', 'חווית משתמש'],
    url: 'https://hevelhaaretz.co.il',
    image: '/projects/hevel-haaretz.png',
  },
  {
    title: 'MM Drive',
    tagline: 'אתר לבית ספר לנהיגה',
    description:
      'אתר אנרגטי וממיר עם קריאה ברורה לפעולה, טופס יצירת קשר חכם והצגת שירותים שמייצרת פניות.',
    tags: ['אתר עסקי', 'לידים', 'רספונסיבי'],
    url: 'https://mm-drive.vercel.app',
    image: '/projects/mm-drive.png',
  },
  {
    title: 'Medical Rights Agency',
    tagline: 'סוכנות למימוש זכויות רפואיות',
    description:
      'אתר מקצועי ואמין שבונה ביטחון אצל הגולש, מסביר את השירות בבהירות ומייצר פניות איכותיות.',
    tags: ['אתר תדמית', 'אמינות', 'המרות'],
    url: 'https://medical-rights-agency.vercel.app',
    image: '/projects/medical-rights.png',
  },
]
