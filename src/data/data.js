import { GrInProgress } from "react-icons/gr";
import { BsClipboard2Data } from "react-icons/bs";
import { SiPytest } from "react-icons/si";
import { MdCloudDone } from "react-icons/md";
import sample from "../data/sample.jpg";
import sample2 from "../data/sample2.jpg";
import hefaPdf from "../data/hefa.pdf";
import shoraPdf from "../data/shora.pdf";
import karnamakPdf from "../data/karnamak.pdf";
import proposalPdf from "../data/proposal.pdf";
import karbastPdf from "../data/karbast.pdf";
import nazer1 from "../data/nazer1.pdf";
import nazer2 from "../data/nazer2.pdf";
import nazer3 from "../data/nazer3.pdf";
import shenasname from "../data/shenasname.pdf";
import peyvastFani from "../data/peyvastFani.pdf";
import gharardadMojri from "../data/gharardadMojri.pdf";
import gharardadMojriImg from "../data/gharardadMojri.tif";
import khatemeyaftegi from "../data/khatemeyaftegi.pdf";
import mosavabeshorapayan from "../data/mosavabeshorapayan.pdf";
import mosavabeshoraaghaz from "../data/mosavabeshoraaghaz.pdf";
import gozareshfaz1 from "../data/gozareshfaz1.jpg";
import gozareshfaz2 from "../data/gozareshfaz2.jpg";
import gozareshfaz3 from "../data/gozareshfaz3.pdf";
import gozareshfaz4 from "../data/gozareshfaz4.pdf";
import pishraftfazYek1 from "../data/pishraftfazYek1.pdf";
import pishraftfazYek2 from "../data/pishraftfazYek2.pdf";
import pishraftfazDo from "../data/pishraftfazDo.pdf";
import pishraftfazSe from "../data/pishraftfazSe.pdf";
import pishraftfazChar1 from "../data/pishraftfazChar1.pdf";
import pishraftfazChar2 from "../data/pishraftfazChar2.pdf";

export const earningData = [
  {
    icon: <GrInProgress />,
    amount: "",
    percentage: "۱",
    title: "در حال انجام",
    iconcolor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
    path: "http://localhost:3000/project/2",
  },
  {
    icon: <BsClipboard2Data />,
    amount: "",
    percentage: "۰",
    title: "لغو شده",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "green-600",
    path: "http://localhost:3000/projects",
  },
  {
    icon: <SiPytest />,
    amount: "",
    percentage: "۰",
    title: "بررسی",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",
    pcColor: "green-600",
    path: "http://localhost:3000/projects",
  },
  {
    icon: <MdCloudDone />,
    amount: "",
    percentage: "۱",
    title: "پایان یافته",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
    path: "http://localhost:3000/project/1",
  },
];
export const convertToPersianNumbers = (number) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return String(number).replace(/\d/g, (digit) => persianDigits[digit]);
};
export const projects = [
  {
    id: 1,
    title: "احراز هویت مجازی",
    owner: "د. مهدی پورفتح",
    state: 3,
    progress: 100,
  },
  {
    id: 2,
    title: "احراز هویت غیر حضوری بیومتریک",
    owner: "د. ویسی",
    state: 2,
    progress: 58,
  },
  // {
  //   id: convertToPersianNumbers(3),
  //   title: "استانداردها، کاربردها و نقشه راه ارتباطات رادیویی",
  //   owner: "د. ویسی",
  //   state: "م. علی احمدی",
  //   progress: 87,
  // },
  // {
  //   id: convertToPersianNumbers(4),
  //   title: "استانداردها، کاربردها و نقشه راه ارتباطات رادیویی",
  //   owner: "د. ویسی",
  //   state: "م. علی احمدی",
  //   progress: 23,
  // },
  // {
  //   id: convertToPersianNumbers(5),
  //   title: "استانداردها، کاربردها و نقشه راه ارتباطات رادیویی",
  //   owner: "د. ویسی",
  //   state: "احسان خیام باشی",
  //   progress: 55,
  // },
];
export const project = [
  {
    id: 1,
    state: 3,
    progress: 100,
    columnInfo: [
      { name: "مبلغ قرارداد", value: "13,500,000,000 ریال" },
      { name: "طبقه بندی", value: "عادی" },
      {
        name: "زمان شروع",
        value: "1400/3/24",
      },

      { name: "مدت قرارداد (ماه)", value: "12" },
      { name: "مجری", value: "د. مهدی پورفتح" },
      { name: "روش انتخاب مجری", value: "؟" },
      { name: "مسئول پیگیری", value: "؟" },
      { name: "مدیر پروژه", value: "مهدی زارعی" },
      { name: "ناظر سازمانی", value: "سرهنگ رضا صادقی راشد" },
      { name: "ناظر علمی", value: "د.محمد شهرام معین" },
      { name: "تعداد فازها", value: "4" },
      { name: "یگان بهره بردار", value: "فاوا" },
    ],
    tableInfo: [
      {
        name: "تایید حفا مجری",
        state: true,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        files: [
          {
            name: "استعلام",
            file: hefaPdf,
            isPdf: true,
          },
          // {
          //   name: "تایید",
          //   file: sample2,
          //   isPdf: false,
          // },
        ],
      },
      {
        name: "سطح1: بیانیه نیاز",
        state: false,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      },
      {
        name: "قرارداد ناظر",
        state: true,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        isfile: false,
        files: [
          {
            name: "قرار داد",
            file: nazer1,
            isPdf: true,
          },
          {
            name: "قرار داد",
            file: nazer2,
            isPdf: true,
          },
          {
            name: "قرار داد",
            file: nazer3,
            isPdf: true,
          },
        ],
      },
      {
        name: "مصوبه شورا",
        state: true,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        files: [
          {
            name: " شورا آغاز",
            file: mosavabeshoraaghaz,
            isPdf: true,
          },
          {
            name: "شورا پایان",
            file: mosavabeshorapayan,
            isPdf: true,
          },
        ],
      },
      {
        name: "سامانه جامع",
        state: true,
        comment: "تایید شده توسط سرهنگ زارع",
        file: null,
      },
      {
        name: "کارنامک",
        state: true,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        files: [
          {
            name: "رزومه",
            file: karnamakPdf,
            isPdf: true,
          },
        ],
      },
      {
        name: "شناسنامه",
        state: true,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        files: [
          {
            name: "شناسنامه",
            file: shenasname,
            isPdf: true,
          },
        ],
      },
      {
        name: "پروپزال",
        state: true,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        files: [
          {
            name: "پروپوزال",
            file: proposalPdf,
            isPdf: true,
          },
        ],
      },
      {
        name: "پیوست فنی",
        state: true,
        comment: "??",
        files: [
          {
            name: "پیوست فنی",
            file: peyvastFani,
            isPdf: true,
          },
        ],
      },
      {
        name: "مجوز پژوهشگاه",
        state: false,
        comment: "ندارد",
        file: null,
      },
      {
        name: "قرارداد مجری",
        state: true,
        comment: "??",
        files: [
          {
            name: "قرارداد مجری",
            file: gharardadMojri,
            isPdf: true,
          },
          {
            name: "قرارداد مجری",
            file: gharardadMojriImg,
            isPdf: true,
          },
        ],
      },
      {
        name: "فرم کاربست",
        state: true,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        files: [
          {
            name: "کاربست",
            file: karbastPdf,
            isPdf: true,
          },
        ],
      },
      {
        name: "هماهنگی بهره بردار",
        state: true,
        comment: "بهره بردار فاوا میباشد",
        file: null,
      },
      {
        name: "تایید بهره بردار",
        state: true,
        comment: "بهره بردار فاوا میباشد",
        file: null,
      },
      {
        name: "گالینگور",
        state: true,
        comment: "دارد",
        file: null,
      },
      {
        name: "مقاله",
        state: false,
        comment: "ندارد",
        file: null,
      },
      {
        name: "تسویه حساب",
        state: true,
        comment: "رسید چک ندارد",
        file: null,
      },
      {
        name: "ابلاغ خاتمه یافتگی",
        state: true,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        files: [
          {
            name: "خاتمه یافتگی",
            file: khatemeyaftegi,
            isPdf: true,
          },
        ],
      },
      {
        name: "کمیته کاربست",
        state: false,
        comment: "گفته شده ندارد",
        file: null,
      },
      {
        name: "گواهی اسناد",
        state: true,
        comment: "تحویل داده نشده",
        file: null,
      },
    ],
    reports: [
      {
        name: "فاز اول",
        progress: 15,
        start: 3,
        states: [
          {
            name: "تحلیل نیاز،مطالعه و بررسی روش ها",
            date: "۲۴/۳/۱۴۰۰",
            state: true,
            files: [
              {
                name: " گزارش پیشرفت پروژه فاز اول فایل1",
                file: pishraftfazYek1,
                isPdf: true,
              },
              {
                name: " گزارش پیشرفت پروژه فاز اول فایل2",
                file: pishraftfazYek2,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید ناظر علمی",
            date: "۱۷/۳/1400",
            state: true,
            files: [
              {
                name: "تایید ناظر علمی",
                file: gozareshfaz1,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید ناظر سازمانی",
            date: "20/5/1400",
            state: true,
            files: [
              {
                name: "تایید ناظر سازمانی",
                file: gozareshfaz1,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید مدیر پروژه",
            date: "05/8/1400",
            state: true,
            files: [
              {
                name: "تایید مدیر پروژه",
                file: gozareshfaz1,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید اداره کل مرکز تحقیقات",
            date: "09/2/1401",
            state: true,
            files: [
              {
                name: "تایید اداره کل مرکز تحقیقات",
                file: gozareshfaz1,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید کمیسیون و دستور پرداخت مرکز تحقیقات",
            date: "09/2/1401",
            state: true,
            files: [
              {
                name: "تایید کمیسیون و دستور پرداخت مرکز تحقیقات",
                file: gozareshfaz1,
                isPdf: true,
              },
            ],
          },
          {
            name: "پرداخت و اتمام فاز اول",
            date: "09/2/1401",
            state: true,
            files: [],
          },
        ],
      },
      {
        name: "فاز دوم",
        progress: 30,
        start: 3,
        states: [
          {
            name: "تحلیل نیاز،مطالعه و بررسی روش ها",
            date: "۲۴/۳/۱۴۰۰",
            state: true,
            files: [
              {
                name: " گزارش پیشرفت پروژه فاز دوم فایل1",
                file: pishraftfazDo,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید ناظر علمی",
            date: "۱۷/۳/1400",
            state: true,
            files: [
              {
                name: "تایید ناظر علمی",
                file: gozareshfaz2,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید ناظر سازمانی",
            date: "20/5/1400",
            state: true,
            files: [
              {
                name: "تایید ناظر سازمانی",
                file: gozareshfaz2,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید مدیر پروژه",
            date: "05/8/1400",
            state: true,
            files: [
              {
                name: "تایید مدیر پروژه",
                file: gozareshfaz2,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید اداره کل مرکز تحقیقات",
            date: "09/2/1401",
            state: true,
            files: [
              {
                name: "تایید اداره کل مرکز تحقیقات",
                file: gozareshfaz2,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید کمیسیون و دستور پرداخت مرکز تحقیقات",
            date: "09/2/1401",
            state: true,
            files: [
              {
                name: "تایید کمیسیون و دستور پرداخت مرکز تحقیقات",
                file: gozareshfaz1,
                isPdf: true,
              },
            ],
          },
          {
            name: "پرداخت و اتمام فاز دوم",
            date: "09/2/1401",
            state: true,
            files: [],
          },
        ],
      },
      {
        name: "فاز سوم",
        progress: 35,
        start: 3,
        states: [
          {
            name: "یکپارچه سازی سرویس با سامانه بهره بردار پایلوت",
            date: "۲۴/۳/۱۴۰۰",
            state: true,
            files: [
              {
                name: " گزارش پیشرفت پروژه فاز سوم فایل1",
                file: pishraftfazSe,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید ناظر علمی",
            date: "۱۷/۳/1400",
            state: true,
            files: [
              {
                name: "تایید ناظر علمی",
                file: gozareshfaz3,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید ناظر سازمانی",
            date: "20/5/1400",
            state: true,
            files: [
              {
                name: "تایید ناظر سازمانی",
                file: gozareshfaz3,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید مدیر پروژه",
            date: "05/8/1400",
            state: true,
            files: [
              {
                name: "تایید مدیر پروژه",
                file: gozareshfaz3,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید اداره کل مرکز تحقیقات",
            date: "09/2/1401",
            state: true,
            files: [
              {
                name: "تایید اداره کل مرکز تحقیقات",
                file: gozareshfaz3,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید کمیسیون و دستور پرداخت مرکز تحقیقات",
            date: "09/2/1401",
            state: true,
            files: [
              {
                name: "تایید کمیسیون و دستور پرداخت مرکز تحقیقات",
                file: gozareshfaz3,
                isPdf: true,
              },
            ],
          },
          {
            name: "پرداخت و اتمام فاز سوم",
            date: "09/2/1401",
            state: true,
            files: [],
          },
        ],
      },
      {
        name: "فاز چهارم",
        progress: 20,
        start: 3,
        states: [
          {
            name: "نهایی کردن سرویس و تحویل آن",
            date: "۲۴/۳/۱۴۰۰",
            state: true,
            files: [
              {
                name: " گزارش پیشرفت پروژه فاز چهارم فایل1",
                file: pishraftfazChar1,
                isPdf: true,
              },
              {
                name: " گزارش پیشرفت پروژه فاز چهارم فایل2",
                file: pishraftfazChar2,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید ناظر علمی",
            date: "۱۷/۳/1400",
            state: true,
            files: [
              {
                name: "تایید ناظر علمی",
                file: gozareshfaz4,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید ناظر سازمانی",
            date: "20/5/1400",
            state: true,
            files: [
              {
                name: "تایید ناظر سازمانی",
                file: gozareshfaz4,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید مدیر پروژه",
            date: "05/8/1400",
            state: true,
            files: [
              {
                name: "تایید مدیر پروژه",
                file: gozareshfaz4,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید اداره کل مرکز تحقیقات",
            date: "09/2/1401",
            state: true,
            files: [
              {
                name: "تایید اداره کل مرکز تحقیقات",
                file: gozareshfaz4,
                isPdf: true,
              },
            ],
          },
          {
            name: "تایید کمیسیون و دستور پرداخت مرکز تحقیقات",
            date: "09/2/1401",
            state: true,
            files: [
              {
                name: "تایید کمیسیون و دستور پرداخت مرکز تحقیقات",
                file: gozareshfaz4,
                isPdf: true,
              },
            ],
          },
          {
            name: "پرداخت و اتمام فاز چهارم",
            date: "09/2/1401",
            state: false,
            files: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    state: 2,
    progress: 58,
    columnInfo: [
      { name: "مبلغ قرارداد", value: "13500" },
      { name: "طبقه بندی", value: "عادی" },
      {
        name: "زمان شروع",
        value: "۹۹/۲/۱۰",
      },

      { name: "مدت قرارداد (ماه)", value: "۱۲" },
      { name: "مجری", value: "دکتر ویسی" },
      { name: "روش انتخاب مجری", value: "فراخوان و امتیازدهی" },
      { name: "مسئول پیگیری", value: "حسینی" },
      { name: "مدیر پروژه", value: "مهدی زارعی" },
      { name: "ناظر سازمانی", value: "س صادقی" },
      { name: "ناظر علمی", value: "دکتر معین" },
      { name: "تعداد فازها", value: "4" },
      { name: "یگان بهره بردار", value: "فاوا" },
    ],
    tableInfo: [
      {
        name: "تایید حفا مجری",
        state: true,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
      {
        name: "سطح1: بیانیه نیاز",
        state: false,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
      {
        name: "قرارداد ناظر",
        state: false,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
      {
        name: "مصوبه شورا",
        state: true,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
      {
        name: "سامانه جامع",
        state: false,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
      {
        name: "کارنامک",
        state: true,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
      {
        name: "شناسنامه",
        state: true,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
      {
        name: "پروپزال",
        state: true,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
      {
        name: "پیوست فنی",
        state: true,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
      {
        name: "مجوز پژوهشگاه",
        state: false,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
      {
        name: "قرارداد مجری",
        state: false,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
      {
        name: "فرم کاربست",
        state: false,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
      {
        name: "هماهنگی بهره بردار",
        state: true,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
      {
        name: "تایید بهره بردار",
        state: false,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
      {
        name: "گالینگور",
        state: false,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
      {
        name: "مقاله",
        state: false,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
      {
        name: "تسویه حساب",
        state: false,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
      {
        name: "ابلاغ خاتمه یافتگی",
        state: false,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
      {
        name: "مصوبه کاربست",
        state: false,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
      {
        name: "گواهی اسناد",
        state: false,
        comment:
          "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
        file: sample,
      },
    ],
    reports: [
      {
        name: "فاز اول",
        progress: 25,
        start: 3,
        states: [
          {
            name: "استعلام از ناظر",
            date: "1402/05/21",
            state: true,
            files: [
              {
                name: "استعلام",
                file: sample,
              },
              {
                name: "تایید",
                file: sample2,
              },
            ],
          },
          {
            name: "تایید ناظر علمی",
            date: "۱۷/۳/۱۴۰۲",
            state: false,
            files: [
              {
                name: "استعلام",
                file: sample,
              },
              {
                name: "تایید",
                file: sample2,
              },
            ],
          },
        ],
      },
      {
        name: "فاز دوم",
        progress: 50,
        start: 2,
        states: [
          {
            name: "دریافت pdfاز مجری",
            date: "۱۱/۳/۱۴۰۲",
            state: true,
            files: [
              {
                name: "pdf",
                file: sample,
              },
              {
                name: "تایید",
                file: sample2,
              },
            ],
          },
          {
            name: "  استعلام از اداره ناظر",
            date: "۱۱/۳/۱۴۰۲",
            state: true,
            files: [
              {
                name: "استعلام از اداره ناظر",
                file: sample,
              },
              {
                name: "تایید",
                file: sample2,
              },
            ],
          },
          {
            name: "تاییدیه ناظر علمی",
            date: "۱۱/۳/۱۴۰۲",
            state: true,
            files: [
              {
                name: "تاییدیه",
                file: sample,
              },
              {
                name: "تایید",
                file: sample2,
              },
            ],
          },
          {
            name: "تاییدیه اداره کل",
            date: "۱۱/۳/۱۴۰۲",
            state: true,
            files: [
              {
                name: "تاییدیه",
                file: sample,
              },
              {
                name: "تایید",
                file: sample2,
              },
            ],
          },
          {
            name: " تاییدیه کمیسیون مرکز تحقیقات",
            date: "۱۱/۳/۱۴۰۲",
            state: false,
            files: [
              {
                name: "کمیسیون",
                file: sample,
              },
              {
                name: "کمیسیون ۲",
                file: sample2,
              },
            ],
          },
          {
            name: "پرداخت",
            date: "۱۱/۳/۱۴۰۲",
            state: false,
            files: [
              {
                name: "پرداخت",
                file: sample,
              },
            ],
          },
        ],
      },
      {
        name: "فاز سوم",
        start: "تکمیل شده",
        start: 2,
        progress: 10,
        states: [
          {
            name: "استعلام از ناظر",
            date: "۱۷/۵/۱۴۰۲",
            state: true,
            files: [
              {
                name: "استعلام",
                file: sample,
              },
              {
                name: "تایید",
                file: sample2,
              },
            ],
          },
          {
            name: "تایید ناظر علمی",
            date: "۱۷/۳/۱۴۰۲",
            state: true,
            file: [sample, sample2],
          },
        ],
      },
      {
        name: "فاز چهارم",
        progress: 15,
        start: 1,
        states: [
          {
            name: "استعلام از ناظر",
            date: "۱۷/۵/۱۴۰۲",
            state: true,
            files: [
              {
                name: "استعلام",
                file: sample,
              },
              {
                name: "تایید",
                file: sample2,
              },
            ],
          },
          {
            name: "تایید ناظر علمی",
            date: "۱۷/۳/۱۴۰۲",
            state: true,
            file: [sample, sample2],
          },
          {
            name: "پرداخت",
            date: "۱۱/۳/۱۴۰۲",
            state: true,
            files: [
              {
                name: "پرداخت",
                file: sample,
              },
            ],
          },
        ],
      },
    ],
  },
];
export const loginFields = [
  {
    labelText: "ایمیل",
    labelFor: "email",
    id: "email",
    name: "email",
    type: "text",
    autoComplete: "email",
    isRequired: true,
    placeholder: "ایمیل",
  },
  {
    labelText: "رمز عبور",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "رمز عبور",
  },
];
export const signupFields = [
  {
    labelText: "نام کاربری",
    labelFor: "username",
    id: "username",
    name: "username",
    type: "text",
    autoComplete: "username",
    isRequired: true,
    placeholder: "نام کاربری",
  },
  {
    labelText: "ایمیل",
    labelFor: "email",
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "ایمیل",
  },
  {
    labelText: "رمز عبور",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "رمز عبور",
  },
  {
    labelText: "تکرار رمز عبور",
    labelFor: "confirm-password",
    id: "confirm-password",
    name: "confirm-password",
    type: "password",
    autoComplete: "confirm-password",
    isRequired: true,
    placeholder: "تکرار رمز عبور",
  },
];
